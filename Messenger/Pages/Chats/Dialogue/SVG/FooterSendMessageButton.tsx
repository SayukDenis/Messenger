import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";
import { screenHeight } from "../../../ChatList/Constants/ConstantsForChatlist";

function FooterSendMessageButton() {
  return (
    <Svg
      width={screenHeight*0.032}
      height={screenHeight*0.032}
      viewBox="0 0 16 18"
      fill="none"
    >
      <Path fill="url(#pattern0)" d="M0 0H16V18H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_2810_18983"
            transform="matrix(.00712 0 0 .00633 -.01 0)"
          />
        </Pattern>
        <Image
          id="image0_2810_18983"
          width={143}
          height={158}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAACeEAYAAABbeYXuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuN2JhZmNmMCwgMjAyMS8xMC8xMy0wMDo0MToyOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjUgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNi0yMFQyMDoxNjo1NiswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wNi0yMFQyMDoxNjo1NiswMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDYtMjBUMjA6MTY6NTYrMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY2YjA3YmNkLTNlZTYtNWI0NC05OTk4LTE0MWRhNjE3OWViOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NmIwN2JjZC0zZWU2LTVi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"
        />
      </Defs>
    </Svg>
  );
}

export default FooterSendMessageButton;
