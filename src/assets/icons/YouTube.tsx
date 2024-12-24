import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgYouTube = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 16"
    ref={ref}
    {...props}
  >
    <path
      fill="#ABB6B7"
      d="M19.543 2.498C20 4.28 20 8 20 8s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C15.896 16 10 16 10 16s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C0 11.72 0 8 0 8s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C4.107 0 10 0 10 0s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022M8 11.5 14 8 8 4.5z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgYouTube);
const Memo = memo(ForwardRef);
export default Memo;
