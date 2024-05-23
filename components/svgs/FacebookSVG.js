import * as React from "react"
import Svg, { Path } from "react-native-svg"
const FacebookSVG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      fill="#3c5a99"
      d="M21.164 5.074c-1.984 0-2.548.88-2.548 2.82v3.202h5.277l-.52 5.187h-4.758V32H12.3V16.282H8.04v-5.187h4.262V7.983C12.302 2.75 14.4 0 20.285 0c1.263 0 2.774.1 3.676.226v4.87"
    />
  </Svg>
)
export default FacebookSVG