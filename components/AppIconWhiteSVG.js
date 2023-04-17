import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AppIconWhiteSVGComponent(props) {
  return (
    <Svg
      width={1500}
      height={1500}
      viewBox="0 0 208 208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M32 32h16v129c0 8.284-6.716 15-15 15h-1V32zM128 0h80v32h-80V0z"
        fill="#fff"
      />
      <Path fill="#fff" d="M160 32H208V208H160z" />
      <Path fill="#fff" d="M144 48H160V208H144z" />
      <Path fill="#fff" d="M128 176H144V208H128z" />
      <Path
        d="M64 32h36c6.627 0 12 5.373 12 12v4H64V32zM64 159h48v8.5a8.5 8.5 0 01-8.5 8.5H64v-17z"
        fill="#fff"
      />
      <Path d="M96 48h16v112H96V48z" fill="#fff" />
      <Path fill="#fff" d="M64 48H80V208H64z" />
      <Path d="M0 32h16v144h-1c-8.284 0-15-6.716-15-15V32z" fill="#fff" />
      <Path fill="#fff" d="M13 160H35V176H13z" />
    </Svg>
  )
}

export default AppIconWhiteSVGComponent
