import { useEffect } from "react";

const useKeyDown = (key, cb) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === key) {
        cb()
      }
    }
  
    window.addEventListener('keydown', handleKeyDown)
  
    return () => window.removeEventListener('keydown', handleKeyDown)
  
  })
}

export default useKeyDown;