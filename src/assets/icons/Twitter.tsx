import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTwitter = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 18"
    ref={ref}
    {...props}
  >
    <path
      fill="#ABB6B7"
      d="M21.162 2.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 20.6 1c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.87 11.87 0 0 1-8.62-4.37 4.17 4.17 0 0 0-.566 2.103c0 1.45.738 2.73 1.86 3.48a4.2 4.2 0 0 1-1.894-.522v.052a4.185 4.185 0 0 0 3.355 4.1 4.2 4.2 0 0 1-1.89.073A4.185 4.185 0 0 0 6.97 13.65a8.4 8.4 0 0 1-6.19 1.732 11.83 11.83 0 0 0 6.409 1.88c7.693 0 11.9-6.373 11.9-11.9q0-.271-.013-.54a8.5 8.5 0 0 0 2.087-2.165z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTwitter);
const Memo = memo(ForwardRef);
export default Memo;
