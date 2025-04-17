import { Ref, SVGProps, forwardRef, memo } from 'react'

const YandexMoney = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    ref={ref}
    {...props}
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M3.77983 9.9307C3.77983 8.94664 3.86303 8.32213 5.91811 6.80087C7.61949 5.54138 13.073 1.23743 13.073 1.23743V8.42209H17.2203V18.7627H5.07518C4.36275 18.7627 3.77963 18.1844 3.77963 17.4778L3.77983 9.93076V9.9307Z" fill="#3E9CDC"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M13.073 8.422V12.585L5.45212 17.7335L15.0874 14.6246V8.422H13.073Z" fill="black" fillOpacity="0.2"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M9.5904 8.20685C10.0361 7.68023 10.687 7.49436 11.0443 7.79173C11.4017 8.08915 11.3303 8.75719 10.8846 9.2838C10.4392 9.81035 9.78811 9.99602 9.43072 9.69859C9.07333 9.40123 9.14497 8.73333 9.5904 8.20678V8.20685Z" fill="#231F20"/>
  </svg>
)

const ForwardRef = forwardRef(YandexMoney)
const Memo = memo(ForwardRef)

export default Memo

