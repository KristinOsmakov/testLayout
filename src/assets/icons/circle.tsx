import { Ref, SVGProps, forwardRef, memo } from 'react'

const Circle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    ref={ref}
    {...props}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle 
      cx="50" 
      cy="50" 
      r="47.5" 
      fill="#3E9CDC" 
      stroke="#286690" 
      strokeWidth="5"
    />
  </svg>
)

const ForwardRef = forwardRef(Circle)
const Memo = memo(ForwardRef)

export default Memo