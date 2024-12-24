import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMetamask = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      fill="#E17726"
      stroke="#E17726"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.25}
      d="m21.532.96-8.257 6.896 1.535-4.064z"
    />
    <path
      fill="#E27625"
      stroke="#E27625"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.25}
      d="m2.485.96 8.184 6.96-1.462-4.128zM18.56 16.95l-2.198 3.788 4.705 1.462 1.347-5.167zM1.611 17.033l1.34 5.167 4.696-1.462-2.189-3.788z"
    />
    <path
      fill="#E27625"
      stroke="#E27625"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.25}
      d="m7.394 10.55-1.307 2.225 4.656.24-.155-5.655zM16.623 10.55l-3.242-3.255-.106 5.72 4.655-.24zM7.647 20.738l2.818-1.535L8.04 17.07zM13.553 19.203l2.81 1.535-.385-3.668z"
    />
    <path
      fill="#D5BFB2"
      stroke="#D5BFB2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.25}
      d="m16.362 20.738-2.81-1.535.23 2.06-.025.873zM7.647 20.738l2.614 1.398-.016-.873.22-2.06z"
    />
    <path
      fill="#233447"
      stroke="#233447"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.25}
      d="m10.31 15.709-2.336-.773 1.65-.855zM13.708 15.709l.686-1.628 1.658.855z"
    />
    <path
      fill="#CC6228"
      stroke="#CC6228"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.25}
      d="m7.647 20.738.409-3.788-2.598.083zM15.962 16.95l.4 3.788 2.197-3.705zM17.93 12.775l-4.655.24.433 2.694.686-1.628 1.658.855zM7.974 14.936l1.65-.855.686 1.628.433-2.694-4.656-.24z"
    />
    <path
      fill="#E27525"
      stroke="#E27525"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.25}
      d="M6.087 12.775 8.04 17.07l-.065-2.134zM16.052 14.936l-.074 2.134 1.952-4.295zM10.743 13.014l-.433 2.695.547 3.181.123-4.193zM13.275 13.014l-.229 1.674.115 4.202.547-3.181z"
    />
    <path
      fill="#F5841F"
      stroke="#F5841F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.25}
      d="m13.708 15.709-.547 3.181.392.313 2.425-2.133.074-2.134zM7.974 14.936l.065 2.134 2.426 2.133.392-.313-.547-3.181z"
    />
    <path
      fill="#C0AC9D"
      stroke="#C0AC9D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.25}
      d="m13.757 22.136.024-.874-.212-.202h-3.12l-.204.202.016.874-2.614-1.398.915.846 1.854 1.444h3.177l1.863-1.444.906-.846z"
    />
    <path
      fill="#161616"
      stroke="#161616"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.25}
      d="m13.553 19.203-.393-.313h-2.303l-.392.313-.22 2.06.204-.203h3.12l.212.202z"
    />
    <path
      fill="#763E1A"
      stroke="#763E1A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.25}
      d="m21.884 8.307.694-3.807L21.532.96l-7.98 6.666 3.072 2.924 4.337 1.425.955-1.26-.416-.34.661-.68-.506-.441.661-.57zM1.44 4.5l.702 3.807-.449.377.67.57-.507.441.662.68-.416.34.955 1.26 4.337-1.425 3.071-2.924L2.485.96z"
    />
    <path
      fill="#F5841F"
      stroke="#F5841F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.25}
      d="m20.96 11.975-4.336-1.425 1.306 2.225-1.952 4.295 2.581-.037h3.855zM7.394 10.55l-4.337 1.425-1.446 5.058h3.847l2.581.037-1.952-4.295zM13.275 13.015l.277-5.389 1.258-3.834H9.207l1.258 3.834.278 5.389.106 1.691.008 4.184h2.303l.008-4.184z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMetamask);
const Memo = memo(ForwardRef);
export default Memo;
