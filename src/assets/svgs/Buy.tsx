import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Buy = (props: any) => (
  <Svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M23.746 18.146c-.357 2.881-2.719 5.243-5.6 5.6a6.433 6.433 0 0 1-4.637-1.191c-.726-.531-.553-1.658.314-1.918a10.277 10.277 0 0 0 6.825-6.825c.26-.855 1.387-1.029 1.917-.314a6.52 6.52 0 0 1 1.181 4.648Z"
      fill="#3385FF"
    />
    <Path
      d="M10.828 2.167c-4.778 0-8.656 3.878-8.656 8.656 0 4.777 3.878 8.655 8.656 8.655 4.777 0 8.655-3.878 8.655-8.655-.01-4.778-3.878-8.656-8.655-8.656ZM9.809 9.609l2.611.91c.943.336 1.398.997 1.398 2.015 0 1.17-.932 2.134-2.07 2.134h-.097v.055a.818.818 0 0 1-.813.812.819.819 0 0 1-.812-.812v-.065c-1.202-.055-2.167-1.062-2.167-2.319 0-.444.369-.812.813-.812.444 0 .812.368.812.812 0 .39.282.704.629.704h1.625c.249 0 .444-.227.444-.509 0-.379-.065-.4-.314-.487l-2.611-.91c-.932-.325-1.398-.986-1.398-2.015 0-1.17.932-2.134 2.07-2.134h.097v-.044c0-.444.368-.812.813-.812.444 0 .812.368.812.812v.065c1.203.054 2.167 1.062 2.167 2.319a.818.818 0 0 1-.813.812.818.818 0 0 1-.812-.812c0-.39-.282-.705-.629-.705H9.94c-.249 0-.444.228-.444.51-.01.368.054.39.314.476Z"
      fill="#161616"
    />
  </Svg>
);

export default Buy;
