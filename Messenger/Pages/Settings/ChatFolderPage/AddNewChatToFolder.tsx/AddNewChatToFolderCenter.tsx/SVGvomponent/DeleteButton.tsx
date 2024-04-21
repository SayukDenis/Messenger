import React from 'react';
import { Svg, Path, Line } from 'react-native-svg';
import { screenHeight,screenWidth } from '../../../../../ChatList/Constants/ConstantsForChatlist';

const DeleteSvgButton = () => (
  <Svg width={screenWidth*0.1} height={screenHeight*0.035} viewBox="0 0 14 16" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 2.5C0 2.22386 0.0764392 2 0.170732 2L13.8293 2C13.9236 2 14 2.22386 14 2.5C14 2.77614 13.9236 3 13.8293 3L0.170732 3C0.0764392 3 0 2.77614 0 2.5Z"
      fill="#CE2500"
    />
    <Path
      d="M4.40625 2.60493C6.77662 -0.30175 8.85069 1.39381 9.59144 2.60493"
      stroke="#CE2500"
    />
    <Line
      y1="-0.45"
      x2="12.9552"
      y2="-0.45"
      transform="matrix(0.133413 -0.99106 0.993331 0.115296 11.3203 15.4443)"
      stroke="#CE2500"
      strokeWidth="0.9"
    />
    <Line
      y1="-0.45"
      x2="12.9552"
      y2="-0.45"
      transform="matrix(0.133506 0.991048 -0.993322 0.115377 0.951172 2.60498)"
      stroke="#CE2500"
      strokeWidth="0.9"
    />
    <Line x1="2.67969" y1="15.0443" x2="11.3217" y2="15.0443" stroke="#CE2500" strokeWidth="0.8" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.03696 13.308C6.84827 13.3089 6.69427 13.1161 6.69299 12.8775L6.64648 4.23591C6.6452 3.99728 6.79711 3.80312 6.9858 3.80225C7.17449 3.80137 7.32849 3.99411 7.32977 4.23274L7.37628 12.8743C7.37756 13.113 7.22564 13.3071 7.03696 13.308Z"
      fill="#CE2500"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.36072 13.3103C9.17229 13.2979 9.03424 13.0948 9.05239 12.8566L9.70953 4.23169C9.72767 3.99352 9.89514 3.81048 10.0836 3.82287C10.272 3.83525 10.4101 4.03836 10.3919 4.27653L9.73477 12.9014C9.71662 13.1396 9.54916 13.3226 9.36072 13.3103Z"
      fill="#CE2500"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.9303 3.83591C4.11873 3.82352 4.28621 4.00655 4.30437 4.24472L4.96202 12.8696C4.98018 13.1078 4.84215 13.3109 4.65371 13.3233C4.46528 13.3357 4.2978 13.1526 4.27964 12.9145L3.62199 4.28958C3.60383 4.05141 3.74186 3.8483 3.9303 3.83591Z"
      fill="#CE2500"
    />
  </Svg>
);

export default DeleteSvgButton;