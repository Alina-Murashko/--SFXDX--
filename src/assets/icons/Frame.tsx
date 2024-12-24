import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFrame = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#frame_svg__a)">
      <path
        fill="#ABB6B7"
        d="m11.771 9.885-.942-.942L11.77 8a2.665 2.665 0 0 0-2.906-4.35c-.323.135-.617.331-.865.579l-.943.942-.942-.942.942-.943a4 4 0 0 1 5.657 5.657zm-1.886 1.886-.942.943a4 4 0 1 1-5.657-5.657l.943-.942.942.942L4.23 8A2.667 2.667 0 1 0 8 11.771l.943-.942zm0-6.6.944.944-4.714 4.713-.944-.943 4.714-4.713M3.85 1.53l1.288-.346.69 2.577-1.287.345zm6.322 10.712 1.287-.346.691 2.576-1.288.346zM1.529 3.85l2.576.69-.346 1.288-2.576-.69zm10.712 6.322 2.576.69-.346 1.288-2.576-.69z"
      />
    </g>
    <defs>
      <clipPath id="frame_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgFrame);
const Memo = memo(ForwardRef);
export default Memo;
