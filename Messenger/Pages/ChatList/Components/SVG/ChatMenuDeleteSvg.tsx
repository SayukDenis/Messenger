import React from "react";
import Svg, { Path, Line } from "react-native-svg";
import { screenHeight } from "../../Constants/ConstantsForChatlist";

const ChatMenuEyeSvg = () => {
  return (
    <Svg
      width={screenHeight * 0.019}
      height={screenHeight * 0.019}
      viewBox="0 0 9 11"
      fill="none"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 2.07657C0 1.95769 0.0491395 1.86133 0.109756 1.86133L8.89024 1.86133C8.95086 1.86133 9 1.95769 9 2.07657C9 2.19544 8.95086 2.29181 8.89024 2.29181L0.109756 2.29181C0.0491395 2.29181 0 2.19544 0 2.07657Z"
        fill="#CE2500"
      />
      <Path
        d="M2.83301 2.05229C4.35682 0.146493 5.69015 1.25821 6.16634 2.05229"
        stroke="#CE2500"
        stroke-width="0.7"
      />
      <Line
        y1="-0.3"
        x2="8.49131"
        y2="-0.3"
        transform="matrix(0.130853 -0.991402 0.993066 0.117561 7.27734 10.4707)"
        stroke="#CE2500"
        stroke-width="0.6"
      />
      <Line
        y1="-0.3"
        x2="8.49132"
        y2="-0.3"
        transform="matrix(0.130944 0.99139 -0.993056 0.117643 0.611328 2.05273)"
        stroke="#CE2500"
        stroke-width="0.6"
      />
      <Line
        x1="1.72266"
        y1="10.2207"
        x2="7.27821"
        y2="10.2207"
        stroke="#CE2500"
        stroke-width="0.5"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.52432 9.06927C4.40302 9.06985 4.30402 8.94348 4.30319 8.78702L4.2733 3.12107C4.27247 2.96461 4.37013 2.83731 4.49143 2.83673C4.61273 2.83616 4.71173 2.96253 4.71255 3.11899L4.74245 8.78494C4.74328 8.9414 4.64561 9.0687 4.52432 9.06927Z"
        fill="#CE2500"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.01719 9.07134C5.89605 9.06322 5.80731 8.93005 5.81897 8.77389L6.24142 3.11887C6.25309 2.96272 6.36074 2.84271 6.48188 2.85082C6.60302 2.85894 6.69176 2.99212 6.68009 3.14827L6.25765 8.80329C6.24598 8.95945 6.13832 9.07946 6.01719 9.07134Z"
        fill="#CE2500"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.52676 2.85846C2.64789 2.85033 2.75556 2.97034 2.76723 3.1265L3.19001 8.7815C3.20168 8.93765 3.11295 9.07083 2.99181 9.07895C2.87068 9.08708 2.76301 8.96707 2.75134 8.81091L2.32856 3.15592C2.31689 2.99976 2.40562 2.86658 2.52676 2.85846Z"
        fill="#CE2500"
      />
    </Svg>
  );
};

export default ChatMenuEyeSvg;
