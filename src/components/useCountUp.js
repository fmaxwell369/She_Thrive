import { useState, useEffect, useRef } from 'react'

/**
 * Counts up from 0 to `target` once the element enters the viewport.
 * Returns { ref, count } — attach ref to the element you want to observe.
 */
const useCountUp = (target, duration = 1800) => {
  const [count, setCount] = useState(0)
  const ref              = useRef(null)
  const started          = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()

          const tick = (now) => {
            const elapsed  = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease-out cubic
            const eased    = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { ref, count }
}

export default useCountUp
