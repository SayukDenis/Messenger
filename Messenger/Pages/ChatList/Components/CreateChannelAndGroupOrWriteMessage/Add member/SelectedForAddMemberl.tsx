import React from "react";
import Svg, { Path } from "react-native-svg";

interface SelectedForAddMemberProps {
  radius: number;
}
const SelectedForAddMember: React.FC<SelectedForAddMemberProps> = ({
  radius,
}) => {
    const kef=0.66;
  return (
    <Svg
      width={radius * kef}
      height={radius * kef}
      viewBox="0 0 9 7"
      fill="none"
    >
      <Path
        d="M0.973462 2.20459C0.787398 2.00055 0.471151 1.98597 0.267105 2.17203C0.063059 2.3581 0.0484819 2.67435 0.234546 2.87839L0.973462 2.20459ZM0.234546 2.87839L3.21091 6.1424L3.94983 5.46861L0.973462 2.20459L0.234546 2.87839Z"
        fill="#5F453A"
      />
      <Path
        d="M8.03562 1.44464C8.23429 1.25285 8.23986 0.936316 8.04807 0.737647C7.85627 0.538978 7.53974 0.533404 7.34107 0.725199L8.03562 1.44464ZM3.22203 6.09166L8.03562 1.44464L7.34107 0.725199L2.52748 5.37222L3.22203 6.09166Z"
        fill="#5F453A"
      />
    </Svg>
  );
};

export default SelectedForAddMember;
