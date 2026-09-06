import React, { useRef, useEffect } from 'react'

// Latitudes (in degrees) to draw parallels
const LATS = [-60, -45, -30, -15, 0, 15, 30, 45, 60]
// Longitudes (in degrees) to draw meridians (every 30 degrees)
const LONS = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]

// 3 Satellites in distinct orbital planes
interface SatelliteConfig {
  id: string
  orbitRadiusFactor: number // multiplier of globe radius
  speed: number             // orbital velocity
  inclination: number       // orbital tilt (radians)
  raan: number              // longitude of ascending node (radians)
  color: string             // beacon color
  size: number              // beacon radius (px)
  initialPhase: number      // starting position along orbit
}

const SATELLITES: SatelliteConfig[] = [
  {
    id: 'sat-1',
    orbitRadiusFactor: 1.25, // Low inclined orbit
    speed: 0.9,
    inclination: 0.5,
    raan: 0.4,
    color: '#7eb8f7',
    size: 2.2,
    initialPhase: 0.8,
  },
  {
    id: 'sat-2',
    orbitRadiusFactor: 1.45, // Polar / Earth observation orbit
    speed: 0.65,
    inclination: 1.4,
    raan: 2.2,
    color: '#38bdf8',
    size: 2.5,
    initialPhase: 2.5,
  },
  {
    id: 'sat-3',
    orbitRadiusFactor: 1.65, // Higher inclined orbit
    speed: 0.45,
    inclination: 0.85,
    raan: 4.5,
    color: '#a78bfa',
    size: 2.0,
    initialPhase: 4.2,
  },
]

export function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let isVisible = true

    // Synchronize internal canvas resolution with its CSS bounding box
    const updateSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      const w = Math.round(rect.width) || 260
      const h = Math.round(rect.height) || 260

      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr
        canvas.height = h * dpr
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      }
      return { w, h, dpr }
    }

    updateSize()
    window.addEventListener('resize', updateSize)

    // ResizeObserver ensures canvas resolution updates instantly when CSS width/height changes
    const resizeObserver = new ResizeObserver(() => {
      updateSize()
    })
    resizeObserver.observe(canvas)

    // Pause when offscreen to preserve memory & CPU
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        if (isVisible) {
          animId = requestAnimationFrame(draw)
        }
      },
      { rootMargin: '100px' }
    )
    observer.observe(canvas)

    let lastTime = 0
    const tiltX = 0.38 // ~22 degrees axial tilt
    const tiltZ = -0.15 // slight aesthetic roll
    const camDist = 600 // Camera distance for perspective projection

    const draw = (t: number) => {
      if (!isVisible) return

      if (t - lastTime < 24) {
        animId = requestAnimationFrame(draw)
        return
      }
      lastTime = t

      // Ensure canvas resolution stays in sync with CSS box
      const { w, h } = updateSize()
      const cx = w / 2
      const cy = h / 2

      // Globe radius sized so satellites orbit comfortably inside the canvas box without clipping
      const radius = Math.min(w, h) * 0.28

      ctx.clearRect(0, 0, w, h)

      const time = t * 0.001
      const rotY = time * 0.35 // rotation around polar axis
      const bobY = Math.sin(time * 0.8) * 3 // gentle floating bob

      // 3D Point projection for surface points
      const projectPoint = (latDeg: number, lonDeg: number): { x: number; y: number; z: number } => {
        const lat = (latDeg * Math.PI) / 180
        const lon = (lonDeg * Math.PI) / 180

        const x0 = radius * Math.cos(lat) * Math.sin(lon)
        const y0 = radius * Math.sin(lat)
        const z0 = radius * Math.cos(lat) * Math.cos(lon)

        // Rotate around Y axis
        const x1 = x0 * Math.cos(rotY) + z0 * Math.sin(rotY)
        const y1 = y0
        const z1 = -x0 * Math.sin(rotY) + z0 * Math.cos(rotY)

        // Axial tilt
        const x2 = x1 * Math.cos(tiltZ) - y1 * Math.sin(tiltZ)
        const y2_temp = x1 * Math.sin(tiltZ) + y1 * Math.cos(tiltZ)

        const y2 = y2_temp * Math.cos(tiltX) - z1 * Math.sin(tiltX)
        const z2 = y2_temp * Math.sin(tiltX) + z1 * Math.cos(tiltX)

        const d = camDist / (camDist - z2)
        return {
          x: cx + x2 * d,
          y: cy - (y2 + bobY) * d,
          z: z2,
        }
      }

      // 3D Point projection for arbitrary coordinates (used for satellites)
      const projectCoord = (x: number, y: number, z: number): { x: number; y: number; z: number } => {
        const x2 = x * Math.cos(tiltZ) - y * Math.sin(tiltZ)
        const y2_temp = x * Math.sin(tiltZ) + y * Math.cos(tiltZ)

        const y2 = y2_temp * Math.cos(tiltX) - z * Math.sin(tiltX)
        const z2 = y2_temp * Math.sin(tiltX) + z * Math.cos(tiltX)

        const d = camDist / (camDist - z2)
        return {
          x: cx + x2 * d,
          y: cy - (y2 + bobY) * d,
          z: z2,
        }
      }

      // Calculate satellite 3D coordinates
      const satPositions = SATELLITES.map((sat) => {
        const orbitR = radius * sat.orbitRadiusFactor
        const angle = time * sat.speed + sat.initialPhase

        // Point on orbital circle
        const ox = orbitR * Math.cos(angle)
        const oz = orbitR * Math.sin(angle)
        const oy = 0

        // Incline orbit
        const ox1 = ox
        const oy1 = -oz * Math.sin(sat.inclination)
        const oz1 = oz * Math.cos(sat.inclination)

        // Rotate longitude of ascending node (raan)
        const ox2 = ox1 * Math.cos(sat.raan) + oz1 * Math.sin(sat.raan)
        const oy2 = oy1
        const oz2 = -ox1 * Math.sin(sat.raan) + oz1 * Math.cos(sat.raan)

        const proj = projectCoord(ox2, oy2, oz2)

        // Check if satellite is occulted behind the solid globe
        const distFromCenter = Math.hypot(proj.x - cx, proj.y - (cy - bobY))
        const isBehindGlobe = proj.z < 0 && distFromCenter < radius * 0.98

        return { sat, proj, isBehindGlobe }
      })

      // Helper to draw orbital trajectory paths
      const drawOrbitTrack = (sat: SatelliteConfig, drawFront: boolean) => {
        const orbitR = radius * sat.orbitRadiusFactor
        ctx.beginPath()
        let started = false

        for (let a = 0; a <= 360; a += 5) {
          const rad = (a * Math.PI) / 180
          const ox = orbitR * Math.cos(rad)
          const oz = orbitR * Math.sin(rad)

          const ox1 = ox
          const oy1 = -oz * Math.sin(sat.inclination)
          const oz1 = oz * Math.cos(sat.inclination)

          const ox2 = ox1 * Math.cos(sat.raan) + oz1 * Math.sin(sat.raan)
          const oy2 = oy1
          const oz2 = -ox1 * Math.sin(sat.raan) + oz1 * Math.cos(sat.raan)

          const p = projectCoord(ox2, oy2, oz2)

          const isSegmentFront = p.z > 0
          if (isSegmentFront === drawFront) {
            if (!started) {
              ctx.moveTo(p.x, p.y)
              started = true
            } else {
              ctx.lineTo(p.x, p.y)
            }
          } else {
            started = false
          }
        }
        ctx.stroke()
      }

      // Helper to draw a satellite beacon
      const drawSatBeacon = (s: typeof satPositions[0], opacity: number) => {
        const { sat, proj } = s
        ctx.save()
        ctx.globalAlpha = opacity

        // Small soft beacon halo
        const halo = ctx.createRadialGradient(proj.x, proj.y, 0, proj.x, proj.y, sat.size * 3.5)
        halo.addColorStop(0, sat.color)
        halo.addColorStop(1, 'transparent')
        ctx.fillStyle = halo
        ctx.beginPath()
        ctx.arc(proj.x, proj.y, sat.size * 3.5, 0, Math.PI * 2)
        ctx.fill()

        // Satellite core dot
        ctx.fillStyle = '#ffffff'
        ctx.beginPath()
        ctx.arc(proj.x, proj.y, sat.size * 0.75, 0, Math.PI * 2)
        ctx.fill()

        // Solar panel wings
        ctx.strokeStyle = sat.color
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(proj.x - sat.size * 2, proj.y)
        ctx.lineTo(proj.x + sat.size * 2, proj.y)
        ctx.stroke()

        ctx.restore()
      }

      // --- 1. BACK ORBIT TRACKS ---
      ctx.strokeStyle = 'rgba(126, 184, 247, 0.08)'
      ctx.lineWidth = 0.7
      for (const sat of SATELLITES) {
        drawOrbitTrack(sat, false)
      }

      // --- 2. BACK SATELLITES (z < 0) ---
      for (const s of satPositions) {
        if (s.proj.z < 0 && !s.isBehindGlobe) {
          drawSatBeacon(s, 0.45)
        }
      }

      // --- 3. BACK GLOBE LINES (z <= 0) ---
      ctx.strokeStyle = 'rgba(126, 184, 247, 0.1)'
      ctx.lineWidth = 0.8

      for (const lat of LATS) {
        ctx.beginPath()
        let started = false
        for (let l = 0; l <= 360; l += 6) {
          const pt = projectPoint(lat, l)
          if (pt.z <= 0) {
            if (!started) {
              ctx.moveTo(pt.x, pt.y)
              started = true
            } else {
              ctx.lineTo(pt.x, pt.y)
            }
          } else {
            started = false
          }
        }
        ctx.stroke()
      }

      for (const lon of LONS) {
        ctx.beginPath()
        let started = false
        for (let l = -90; l <= 90; l += 5) {
          const pt = projectPoint(l, lon)
          if (pt.z <= 0) {
            if (!started) {
              ctx.moveTo(pt.x, pt.y)
              started = true
            } else {
              ctx.lineTo(pt.x, pt.y)
            }
          } else {
            started = false
          }
        }
        ctx.stroke()
      }

      // --- 4. CELESTIAL BODY DEPTH MASK ---
      const coreGrad = ctx.createRadialGradient(cx, cy - bobY, 0, cx, cy - bobY, radius)
      coreGrad.addColorStop(0, 'rgba(8, 16, 36, 0.75)')
      coreGrad.addColorStop(0.7, 'rgba(4, 10, 24, 0.65)')
      coreGrad.addColorStop(1, 'rgba(126, 184, 247, 0.05)')
      ctx.fillStyle = coreGrad
      ctx.beginPath()
      ctx.arc(cx, cy - bobY, radius * 0.98, 0, Math.PI * 2)
      ctx.fill()

      // --- 5. FRONT GLOBE LINES (z > 0) ---
      for (const lat of LATS) {
        const isEquator = lat === 0
        ctx.strokeStyle = isEquator ? 'rgba(126, 184, 247, 0.45)' : 'rgba(126, 184, 247, 0.28)'
        ctx.lineWidth = isEquator ? 1.2 : 0.9
        ctx.beginPath()
        let started = false
        for (let l = 0; l <= 360; l += 5) {
          const pt = projectPoint(lat, l)
          if (pt.z > 0) {
            if (!started) {
              ctx.moveTo(pt.x, pt.y)
              started = true
            } else {
              ctx.lineTo(pt.x, pt.y)
            }
          } else {
            started = false
          }
        }
        ctx.stroke()
      }

      ctx.strokeStyle = 'rgba(126, 184, 247, 0.28)'
      ctx.lineWidth = 0.9
      for (const lon of LONS) {
        ctx.beginPath()
        let started = false
        for (let l = -90; l <= 90; l += 4) {
          const pt = projectPoint(l, lon)
          if (pt.z > 0) {
            if (!started) {
              ctx.moveTo(pt.x, pt.y)
              started = true
            } else {
              ctx.lineTo(pt.x, pt.y)
            }
          } else {
            started = false
          }
        }
        ctx.stroke()
      }

      // Outer rim outline
      ctx.strokeStyle = 'rgba(126, 184, 247, 0.35)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(cx, cy - bobY, radius, 0, Math.PI * 2)
      ctx.stroke()

      // --- 6. FRONT ORBIT TRACKS ---
      ctx.strokeStyle = 'rgba(126, 184, 247, 0.2)'
      ctx.lineWidth = 0.8
      for (const sat of SATELLITES) {
        drawOrbitTrack(sat, true)
      }

      // --- 7. FRONT SATELLITES (z >= 0) ---
      for (const s of satPositions) {
        if (s.proj.z >= 0) {
          drawSatBeacon(s, 0.95)
        }
      }

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', updateSize)
      resizeObserver.disconnect()
      observer.disconnect()
    }
  }, [])

  return (
    <div className="hero-globe-wrap">
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  )
}
