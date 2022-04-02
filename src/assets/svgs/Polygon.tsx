import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Polygon = (props: any) => (
  <Svg
    width={8}
    height={6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="m4 0 3.464 6H.536L4 0Z" fill="#13EF00" />
  </Svg>
);

export default Polygon;
