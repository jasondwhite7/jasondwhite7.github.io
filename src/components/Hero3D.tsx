import { useRef, useEffect } from 'react'

// Icosahedron vertices using golden ratio
const PHI = (1 + Math.sqrt(5)) / 2
const BASE_VERTS: [number, number, number][] = [
  [-1,  PHI, 0], [ 1,  PHI, 0], [-1, -PHI, 0], [ 1, -PHI, 0],
  [0, -1,  PHI], [0,  1,  PHI], [0, -1, -PHI], [0,  1, -PHI],
  [ PHI, 0, -1], [ PHI, 0,  1], [-PHI, 0, -1], [-PHI, 0,  1],
]

// Normalize to unit sphere then scale
const RADIUS = 2
const VERTS = BASE_VERTS.map(([x, y, z]) => {
  const len = Math.sqrt(x * x + y * y + z * z)
  return [x / len * RADIUS, y / len * RADIUS, z / len * RADIUS] as [number, number, number]
})

// Icosahedron edges (vertex index pairs)
const EDGES: [number, number][] = [
  [0,1],[0,5],[0,7],[0,10],[0,11],
  [1,5],[1,7],[1,8],[1,9],
  [2,3],[2,4],[2,6],[2,10],[2,11],
  [3,4],[3,6],[3,8],[3,9],
  [4,5],[4,9],[4,11],
  [5,9],[5,11],
  [6,7],[6,8],[6,10],
  [7,8],[7,10],
  [8,9],
  [10,11],
]

// Orbit ring: generate points on a circle
function makeRing(radius: number, segments: number): [number, number, number][] {
  const pts: [number, number, number][] = []
  for (let i = 0; i <= segments; i++) {
    const a = (i / segments) * Math.PI * 2
    pts.push([Math.cos(a) * radius, 0, Math.sin(a) * radius])
  }
  return pts
}

const RING_PTS = makeRing(2.8, 48)

// Simple 3D rotation and projection
function rotateY(v: [number, number, number], a: number): [number, number, number] {
  const c = Math.cos(a), s = Math.sin(a)
  return [v[0] * c + v[2] * s, v[1], -v[0] * s + v[2] * c]
}

function rotateX(v: [number, number, number], a: number): [number, number, number] {
  const c = Math.cos(a), s = Math.sin(a)
  return [v[0], v[1] * c - v[2] * s, v[1] * s + v[2] * c]
}

function project(v: [number, number, number], w: number, h: number, fov: number, offsetX: number, offsetY: number): [number, number] {
  const d = fov / (fov + v[2])
  return [v[0] * d + w / 2 + offsetX, v[1] * d + h / 2 + offsetY]
}

export function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let isVisible = true

    // Resize handler
    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = parent.clientWidth * dpr
      canvas.height = parent.clientHeight * dpr
      canvas.style.width = parent.clientWidth + 'px'
      canvas.style.height = parent.clientHeight + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    // Pause when offscreen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
      if (isVisible) animId = requestAnimationFrame(draw)
    }, { rootMargin: '100px' })
    observer.observe(canvas)

    const scale = 38 // px per unit
    const fov = 12

    let lastFrame = 0
    const draw = (t: number) => {
      if (!isVisible) return
      // Cap at ~30fps
      if (t - lastFrame < 33) {
        animId = requestAnimationFrame(draw)
        return
      }
      lastFrame = t

      const w = canvas.clientWidth
      const h = canvas.clientHeight
      const offsetX = w * 0.12
      const offsetY = h * 0.05
      const time = t * 0.001

      ctx.clearRect(0, 0, w, h)

      const ry = time * 0.15
      const rx = time * 0.1
      const bobY = Math.sin(time) * 0.2

      // Transform a vertex: rotate then offset
      const xform = (v: [number, number, number]): [number, number, number] => {
        let p = rotateY(v, ry)
        p = rotateX(p, rx)
        return [p[0], p[1] + bobY, p[2]]
      }

      const transformed = VERTS.map(xform)

      // Draw wireframe icosahedron
      ctx.strokeStyle = 'rgba(126, 184, 247, 0.12)'
      ctx.lineWidth = 0.8
      ctx.beginPath()
      for (const [a, b] of EDGES) {
        const pa = project(transformed[a], 0, 0, fov * scale, w / 2 + offsetX, h / 2 + offsetY)
        const pb = project(transformed[b], 0, 0, fov * scale, w / 2 + offsetX, h / 2 + offsetY)
        ctx.moveTo(pa[0], pa[1])
        ctx.lineTo(pb[0], pb[1])
      }
      ctx.stroke()

      // Draw orbit rings
      const ringTilt = Math.PI / 3
      const drawRing = (color: string, extraRotY: number) => {
        ctx.strokeStyle = color
        ctx.lineWidth = 1
        ctx.beginPath()
        let started = false
        for (const pt of RING_PTS) {
          // Tilt around X, then rotate with mesh, then extra rotation
          let p = rotateX(pt, ringTilt)
          p = rotateY(p, ry + extraRotY)
          p = rotateX(p, rx)
          p = [p[0], p[1] + bobY, p[2]]
          const proj = project(p, 0, 0, fov * scale, w / 2 + offsetX, h / 2 + offsetY)
          if (!started) {
            ctx.moveTo(proj[0], proj[1])
            started = true
          } else {
            ctx.lineTo(proj[0], proj[1])
          }
        }
        ctx.stroke()
      }

      drawRing('rgba(56, 189, 248, 0.35)', 0)
      drawRing('rgba(167, 139, 250, 0.35)', Math.PI / 2)

      // Draw subtle core glow
      const center = project(xform([0, 0, 0]), 0, 0, fov * scale, w / 2 + offsetX, h / 2 + offsetY)
      const grad = ctx.createRadialGradient(center[0], center[1], 0, center[0], center[1], 45)
      grad.addColorStop(0, 'rgba(10, 25, 47, 0.6)')
      grad.addColorStop(0.5, 'rgba(10, 25, 47, 0.2)')
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(center[0], center[1], 45, 0, Math.PI * 2)
      ctx.fill()

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: '5%',
        right: '0%',
        width: '45%',
        height: '80%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  )
}
