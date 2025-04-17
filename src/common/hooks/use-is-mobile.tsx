import { Breakpoints } from "../constants/breakpoints"
import { useWidth } from "./use-width"

export const useIsMobile = () => {
    const { width } = useWidth()
    return width <= Breakpoints.Mobile
}