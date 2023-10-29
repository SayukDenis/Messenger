import React from "react";
import { View } from "react-native";
import Svg, { Path, Line } from "react-native-svg";

interface SvgProps {
  width: number;
  height: number;
  color: string;
}

const DeleteForSwipeableSvg: React.FC<SvgProps> = ({ width, height, color = "#FF0000" }) => {
  return (
    <View>
      <Svg width={height} height={height} viewBox="0 0 18 21" fill="none">
        <Path  clipRule="evenodd" d="M0 3.2729C0 3.02187 0.098279 2.81836 0.219512 2.81836L17.7805 2.81836C17.9017 2.81836 18 3.02187 18 3.2729C18 3.52394 17.9017 3.72745 17.7805 3.72745L0.219512 3.72745C0.098279 3.72745 0 3.52394 0 3.2729Z" fill="white" />
        <Path d="M5.66797 3.22222C8.71559 -0.802437 11.3823 1.54528 12.3346 3.22222" stroke="white" strokeWidth="1.2" />
        <Line x1="13.9593" y1="20.9256" x2="16.1815" y2="3.1478" stroke="white" strokeWidth="1.2" />
        <Line x1="1.81802" y1="3.14745" x2="4.04179" y2="20.925" stroke="white" strokeWidth="1.2" />
        <Line x1="3.44531" y1="20.4" x2="14.5564" y2="20.4" stroke="white" strokeWidth="1.2" />
        <Path   d="M12.028 18.3007C11.786 18.2798 11.6088 17.9956 11.6321 17.6658L12.4772 5.72356C12.5005 5.39379 12.7156 5.14333 12.9576 5.16416C13.1996 5.18499 13.3769 5.46921 13.3536 5.79899L12.5085 17.7413C12.4852 18.0710 12.2701 18.3215 12.028 18.3007Z" fill="white" />
        <Path   d="M9.04863 18.2502C8.80604 18.2515 8.60804 17.9846 8.60639 17.6542L8.54659 5.68882C8.54494 5.35841 8.74026 5.08957 8.98286 5.08836C9.22545 5.08715 9.42346 5.35402 9.42511 5.68443L9.48490 17.6498C9.48655 17.9802 9.29123 18.2490 9.04863 18.2502Z" fill="white" />
        <Path   d="M5.05352 5.13628C5.29579 5.11913 5.51112 5.37256 5.53447 5.70234L6.38002 17.6446C6.40337 17.9743 6.22590 18.2556 5.98363 18.2727C5.74135 18.2899 5.52603 18.0365 5.50268 17.7067L4.65712 5.76446C4.63377 5.43468 4.81124 5.15344 5.05352 5.13628Z" fill="white" />
      </Svg>
    </View>
  );
};

export default DeleteForSwipeableSvg;
