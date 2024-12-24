import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUnion = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="#ABB6B7"
      fillRule="evenodd"
      d="M1.667.281A.975.975 0 0 0 .279.298a.995.995 0 0 0 .017 1.4L6.696 8l-6.4 6.302a.995.995 0 0 0-.017 1.4.975.975 0 0 0 1.388.017l6.435-6.336 6.231 6.135a.975.975 0 0 0 1.388-.017.995.995 0 0 0-.017-1.399L9.508 8l6.198-6.102a.995.995 0 0 0 .016-1.4.976.976 0 0 0-1.388-.016L8.102 6.617z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUnion);
const Memo = memo(ForwardRef);
export default Memo;
