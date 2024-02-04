import React from "react"
import Svg, { Path } from "react-native-svg"
import { screenHeight,screenWidth } from "../../../../../ChatList/Constants/ConstantsForChatlist"

const DeleteButtonSvg = ()=>{
    return (
        <Svg
          width={screenWidth*0.05}
          height={screenHeight*0.027}
          viewBox="0 0 9 11"
          fill="none"
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 2.136c0-.125.05-.227.11-.227h8.78c.06 0 .11.102.11.227 0 .126-.05.228-.11.228H.11c-.06 0-.11-.102-.11-.228z"
            fill="#CE2500"
          />
          <Path
            d="M2.833 2.111c1.524-2.012 2.857-.838 3.333 0"
            stroke="#CE2500"
            strokeWidth={0.7}
          />
          <Path
            stroke="#CE2500"
            strokeWidth={0.6}
            d="M6.97966 10.9628L8.09077 2.0739"
          />
          <Path
            stroke="#CE2500"
            strokeWidth={0.6}
            d="M0.909008 2.07391L2.02089 10.9627"
          />
          <Path
            stroke="#CE2500"
            strokeWidth={0.5}
            d="M1.72266 10.75L7.27821 10.75"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.524 9.521c-.121 0-.22-.133-.22-.298l-.03-5.983c-.002-.165.096-.3.217-.3.122 0 .22.133.222.298l.03 5.983c0 .165-.097.3-.219.3zM6.017 9.523c-.121-.009-.21-.15-.198-.315l.422-5.97c.012-.166.12-.292.24-.284.122.009.21.15.2.314L6.257 9.24c-.012.164-.12.291-.24.283zM2.527 2.963c.12-.008.229.118.24.283l.423 5.971c.012.165-.077.306-.198.315-.121.008-.229-.119-.24-.283l-.423-5.972c-.012-.164.077-.305.198-.314z"
            fill="#CE2500"
          />
        </Svg>
      )
}

export default DeleteButtonSvg;