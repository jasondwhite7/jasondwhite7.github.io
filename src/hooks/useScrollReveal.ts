import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    
    // We add a slight delay based on the index to create a staggered effect
    let intersectionCount = 0
    let intersectionTimeout: number | undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply a staggered delay for batch intersections
            const delay = intersectionCount * 60
            intersectionCount++
            
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, delay)
            
            observer.unobserve(entry.target)
          }
        })

        // Reset intersection count after the current batch is processed
        clearTimeout(intersectionTimeout)
        intersectionTimeout = setTimeout(() => {
          intersectionCount = 0
        }, 100) as unknown as number
      },
      { threshold: 0.1 }
    )

    reveals.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      clearTimeout(intersectionTimeout)
    }
  }, []) // Empty dependency array, meaning this runs once on mount. If content is highly dynamic, this might need to depend on data.
}
