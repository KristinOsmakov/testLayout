import { Ref, SVGProps, forwardRef, memo } from 'react'

const Separator = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    ref={ref}
    {...props}
    width="1"
    height="18"
    viewBox="0 0 1 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M0 0H1V18H0V0Z" fill="#C3C3C3"/>
  </svg>
)

const ForwardRef = forwardRef(Separator)
const Memo = memo(ForwardRef)

export default Memo