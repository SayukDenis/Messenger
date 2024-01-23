import React from 'react';
import { Svg, Rect, Path } from 'react-native-svg';

interface DownArrowForListOfSelectedMembersSVGProps{
    width:number
}
const DownArrowForListOfSelectedMembersSVG:React.FC<DownArrowForListOfSelectedMembersSVGProps> = ({width}) => {

  return (
    <Svg width={width} height={width} viewBox="0 0 8 4" fill="none">
      <Rect width="0.561805" height="5.14522" rx="0.280902" transform="matrix(-0.820898 -0.570868 0.725355 -0.688563 4.06104 3.96338)" fill="#2B1D1D" />
      <Path d="M4.16738 3.42016C4.27773 3.52898 4.26266 3.68693 4.13371 3.77297V3.77297C4.00476 3.859 3.81078 3.84053 3.70043 3.73172L0.436733 0.513356C0.326385 0.404541 0.341462 0.246584 0.470409 0.160549V0.160549C0.599355 0.0745144 0.793342 0.0929816 0.90369 0.201797L4.16738 3.42016Z" fill="#2B1D1D" />
    </Svg>
  );
};

export default DownArrowForListOfSelectedMembersSVG;
