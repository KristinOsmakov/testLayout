import { useLayoutEffect, useState } from "react"

export const useWidth = () => {
    const [width, setWidth] = useState<number>(0)

    const handleWindowResize = () => {
        if(typeof window !== 'undefined') {
            setWidth(window.innerWidth)
        }
    }
    useLayoutEffect(() => {
        handleWindowResize()
        window.addEventListener('resize', handleWindowResize)

        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])
    return { width }
}