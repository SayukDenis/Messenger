import React from "react";
import Svg, { Path } from "react-native-svg";
import { screenHeight, screenWidth } from "../../../../Constants/ConstantsForChatlist";

const ReverseCameraSVG = () => {
  return (
    <Svg width={screenWidth*0.09} height={screenHeight*0.03} viewBox="0 0 25 18" fill="none">
      <Path
        d="M21.6289 12.0833L24.4436 7.0424L18.6707 7.12526L21.6289 12.0833Z"
        fill="#2B1D1D"
      />
      <Path
        d="M6.06122 3.76123C10.2945 1.09732 13.6318 1.08879 16.0905 2.1925C18.5804 3.31025 20.2749 5.61542 21.0974 7.76272L22.0312 7.40504C21.1429 5.08588 19.2957 2.53522 16.5 1.28021C13.6731 0.0111625 9.98116 0.112945 5.52862 2.91486L6.06122 3.76123Z"
        fill="#2B1D1D"
      />
      <Path
        d="M3.53031 5.96002L0.715612 11.0009L6.48852 10.9181L3.53031 5.96002Z"
        fill="#2B1D1D"
      />
      <Path
        d="M19.098 14.2821C14.8647 16.946 11.5273 16.9545 9.06871 15.8508C6.57883 14.7331 4.88428 12.4279 4.06181 10.2806L3.12797 10.6383C4.01626 12.9575 5.86351 15.5081 8.65917 16.7631C11.4861 18.0322 15.178 17.9304 19.6306 15.1285L19.098 14.2821Z"
        fill="#2B1D1D"
      />
    </Svg>
  );
};

export default ReverseCameraSVG;
