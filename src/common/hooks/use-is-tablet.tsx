import { Breakpoints } from "../constants/breakpoints"
import { useWidth } from "./use-width"

export const useIsTablet = () => {
    const { width } = useWidth()
    return width <= Breakpoints.Tablet
}