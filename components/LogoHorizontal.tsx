import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type LogoProps = {
  width?: number;
  height?: number;
};
export function LogoHorizontal({ width = 800, height = 200, ...rest }: LogoProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 800 200" fill="none" {...rest}>
      <Path
        d="M34.103 203H6.828l9.092-41.295v-72.58l9.091 5.007v66.948L34.103 203zM123.505 135.426L56.58 98.824 25.012 81.617l-9.092-5.006L.01 68.165l15.658-8.76L123.505.59 247 68.164l-56.57 30.659-66.925 36.603z"
        fill="#0F84AB"
      />
      <Path
        d="M204.572 149.191l-81.067 39.731-81.068-39.731c0-15.955 3.03-29.72 8.335-40.669l72.733 39.418 72.481-39.418c5.556 10.949 8.587 24.401 8.587 40.669h-.001z"
        fill="#0F84AB"
      />
      <Path
        d="M298.284 140V70.182h48.682v13.704h-31.807v14.319h29.318v13.738h-29.318v14.352h31.807V140h-48.682zm73.432-52.364l8.625 17.25 8.932-17.25h16.807l-14.625 26.182L406.625 140h-16.67l-9.614-17.386L370.966 140h-16.909l15.204-26.182-14.454-26.182h16.909zm56.454 53.25c-3.34 0-6.306-.556-8.897-1.67-2.568-1.136-4.603-2.841-6.103-5.114-1.477-2.295-2.215-5.17-2.215-8.625 0-2.909.511-5.363 1.534-7.363 1.022-2 2.431-3.625 4.227-4.875 1.795-1.25 3.864-2.194 6.204-2.83 2.341-.659 4.841-1.102 7.5-1.329 2.978-.273 5.375-.557 7.194-.853 1.818-.318 3.136-.761 3.954-1.329.841-.591 1.262-1.421 1.262-2.489v-.17c0-1.75-.603-3.103-1.807-4.057-1.205-.955-2.83-1.432-4.875-1.432-2.205 0-3.978.477-5.318 1.432-1.341.954-2.194 2.273-2.557 3.954l-15.375-.545c.454-3.182 1.625-6.023 3.511-8.523 1.909-2.522 4.523-4.5 7.841-5.932 3.341-1.454 7.352-2.181 12.034-2.181 3.341 0 6.421.397 9.239 1.193 2.818.773 5.272 1.909 7.363 3.409 2.091 1.477 3.705 3.295 4.841 5.454 1.159 2.16 1.739 4.625 1.739 7.398V140h-15.682v-7.295h-.409c-.932 1.772-2.125 3.272-3.58 4.5-1.431 1.227-3.125 2.147-5.079 2.761-1.932.614-4.114.92-6.546.92zm5.148-10.909c1.796 0 3.409-.363 4.841-1.091 1.455-.727 2.614-1.727 3.477-3 .864-1.295 1.296-2.795 1.296-4.5v-4.977a9.936 9.936 0 01-1.739.682 29.57 29.57 0 01-2.182.579c-.795.182-1.613.341-2.454.478-.841.136-1.648.261-2.421.375-1.568.25-2.909.636-4.022 1.159-1.091.523-1.932 1.204-2.523 2.045-.568.818-.852 1.796-.852 2.932 0 1.727.613 3.046 1.841 3.955 1.25.909 2.829 1.363 4.738 1.363zM469.659 140V87.636h15.852v9.614h.58c1.091-3.182 2.932-5.693 5.523-7.534 2.591-1.841 5.681-2.761 9.272-2.761 3.637 0 6.75.931 9.341 2.795 2.591 1.864 4.239 4.364 4.943 7.5h.546c.977-3.114 2.886-5.602 5.727-7.466 2.841-1.886 6.193-2.83 10.057-2.83 4.955 0 8.977 1.592 12.068 4.773 3.091 3.16 4.637 7.5 4.637 13.023V140h-16.671v-31.432c0-2.613-.67-4.602-2.011-5.966-1.341-1.386-3.08-2.079-5.216-2.079-2.296 0-4.102.75-5.421 2.25-1.295 1.477-1.943 3.466-1.943 5.966V140H500.92v-31.602c0-2.432-.659-4.353-1.977-5.762-1.318-1.409-3.057-2.113-5.216-2.113-1.454 0-2.738.352-3.852 1.057-1.114.681-1.989 1.659-2.625 2.931-.614 1.273-.92 2.773-.92 4.5V140h-16.671zm109.5 0V70.182H608c5.227 0 9.739 1.022 13.534 3.068 3.818 2.023 6.761 4.852 8.83 8.489 2.068 3.613 3.102 7.818 3.102 12.613 0 4.819-1.057 9.034-3.171 12.648-2.09 3.591-5.079 6.375-8.965 8.352-3.887 1.978-8.5 2.966-13.841 2.966h-17.796v-13.295h14.659c2.546 0 4.671-.443 6.375-1.33 1.728-.886 3.034-2.125 3.921-3.716.886-1.613 1.329-3.488 1.329-5.625 0-2.159-.443-4.023-1.329-5.59-.887-1.591-2.193-2.819-3.921-3.683-1.727-.863-3.852-1.295-6.375-1.295h-8.318V140h-16.875zm62.625 0V87.636h16.193v9.546h.546c.954-3.455 2.511-6.023 4.67-7.705 2.159-1.704 4.671-2.556 7.534-2.556.773 0 1.568.056 2.387.17.818.09 1.579.239 2.284.443v14.489c-.796-.273-1.841-.489-3.137-.648-1.272-.159-2.409-.239-3.409-.239-1.977 0-3.761.444-5.352 1.33a9.55 9.55 0 00-3.716 3.648c-.886 1.545-1.329 3.363-1.329 5.454V140h-16.671zm62.165.989c-5.477 0-10.205-1.08-14.182-3.239-3.954-2.182-7-5.284-9.136-9.307-2.114-4.045-3.171-8.852-3.171-14.42 0-5.409 1.068-10.137 3.205-14.182 2.136-4.068 5.147-7.227 9.034-9.477 3.886-2.273 8.466-3.41 13.739-3.41 3.727 0 7.136.58 10.227 1.74 3.091 1.158 5.761 2.874 8.011 5.147 2.25 2.273 4 5.08 5.25 8.42 1.25 3.319 1.875 7.125 1.875 11.421v4.159H683.29v-9.682h30c-.023-1.773-.443-3.352-1.262-4.739a8.569 8.569 0 00-3.375-3.238c-1.409-.796-3.034-1.193-4.875-1.193-1.863 0-3.534.42-5.011 1.261a9.27 9.27 0 00-3.511 3.375c-.864 1.409-1.318 3.011-1.364 4.807v9.852c0 2.136.421 4.011 1.261 5.625a9.096 9.096 0 003.58 3.716c1.545.886 3.386 1.33 5.523 1.33 1.477 0 2.818-.205 4.022-.614 1.205-.409 2.239-1.011 3.103-1.807.863-.795 1.511-1.773 1.943-2.932l15.307.443c-.637 3.432-2.034 6.421-4.193 8.966-2.137 2.523-4.944 4.489-8.421 5.898-3.477 1.386-7.5 2.08-12.068 2.08zm33.366 18.647v-72h16.5v8.966h.512c.682-1.59 1.647-3.125 2.897-4.602 1.273-1.477 2.887-2.682 4.841-3.614 1.978-.954 4.341-1.431 7.091-1.431 3.637 0 7.034.954 10.193 2.863 3.182 1.91 5.75 4.853 7.705 8.83 1.955 3.977 2.932 9.045 2.932 15.204 0 5.932-.943 10.898-2.83 14.898-1.863 4-4.386 7-7.568 9-3.159 2-6.67 3-10.534 3-2.636 0-4.92-.432-6.852-1.295-1.932-.864-3.557-2-4.875-3.41-1.296-1.409-2.296-2.92-3-4.534h-.341v28.125h-16.671zm16.33-45.818c0 2.818.375 5.273 1.125 7.364.773 2.091 1.875 3.716 3.307 4.875 1.454 1.136 3.193 1.704 5.216 1.704 2.045 0 3.784-.568 5.216-1.704 1.431-1.159 2.511-2.784 3.238-4.875.75-2.091 1.125-4.546 1.125-7.364 0-2.818-.375-5.261-1.125-7.329-.727-2.069-1.807-3.671-3.238-4.807-1.41-1.137-3.148-1.705-5.216-1.705-2.046 0-3.784.557-5.216 1.671-1.432 1.113-2.534 2.704-3.307 4.772-.75 2.069-1.125 4.535-1.125 7.398z"
        fill="#EAB308"
      />
    </Svg>
  );
}