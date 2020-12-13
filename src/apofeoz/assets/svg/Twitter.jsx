import React from 'react';
import Icon from 'react-icon-base';

const Twitter = (props) => (
  <Icon viewBox="0 0 42 34" {...props}>
    <g id="icomoon-ignore">
      <path
        d="M27.4126 0.118902C27.2851 0.134686 26.8871 0.198654 26.5366 0.270095C23.2402 0.906863 20.549 3.47886 19.7369 6.74328C19.5217 7.59521 19.474 8.00144 19.4823 8.98879C19.4823 9.46647 19.4586 9.8565 19.4266 9.8565C19.3946 9.8565 19.0046 9.80084 18.5506 9.73688C13.7177 9.05234 9.28278 6.79146 5.87505 3.27989C5.41316 2.80222 4.92759 2.28466 4.79217 2.13346C4.33817 1.59223 3.98801 1.46471 3.53401 1.66367C3.31095 1.7671 2.88893 2.51561 2.56245 3.37543C1.90159 5.13495 1.87791 7.476 2.51468 9.29907C2.68208 9.76886 3.21542 10.8438 3.49413 11.2659C3.67731 11.5604 3.60545 11.5924 3.2312 11.4013C2.91261 11.2339 2.41125 11.2978 2.1803 11.5288C2.02911 11.68 2.01291 11.7755 2.02122 12.6275C2.04489 14.9286 3.22331 17.3569 5.05469 18.8855C5.55646 19.2996 5.62001 19.3789 5.46882 19.3951C5.1901 19.4429 4.94337 19.634 4.83994 19.889C4.56123 20.5657 5.81939 22.8826 7.149 24.1329C8.08069 25.0006 9.34675 25.7732 10.3735 26.0997C10.5488 26.1553 10.7237 26.2272 10.7636 26.2588C10.867 26.3543 8.99617 27.2382 8.00094 27.5647C6.11389 28.1936 3.98801 28.4723 2.14874 28.3369C1.05796 28.2492 0.755573 28.3211 0.532517 28.6713C0.365122 28.95 0.373429 29.2607 0.580285 29.571C0.699913 29.7541 1.9099 30.4864 2.98488 31.0281C5.3496 32.2065 8.09647 33.0186 10.8911 33.3608C12.0139 33.4962 15.2384 33.4962 16.345 33.3529C21.8308 32.6842 26.4248 30.4948 30.0797 26.8241C34.4033 22.4764 36.9192 16.6404 37.1423 10.4779L37.1901 9.15618L37.5963 8.84548C38.6235 8.065 40.5741 5.88346 41.0281 5.00785C41.1394 4.7769 41.1478 4.68926 41.0759 4.43463C40.9089 3.86931 40.4071 3.74179 39.6188 4.05249C39.3878 4.14803 39.0613 4.26724 38.8865 4.3312L38.5841 4.44252L38.7751 4.17959C39.3562 3.39911 40.0333 1.94239 40.0333 1.46471C40.0333 1.24166 39.9776 1.10624 39.8024 0.931372C39.4439 0.581213 39.1573 0.620672 38.0906 1.17021C37.1431 1.65578 36.2355 2.01425 35.1128 2.34073L34.4519 2.5318L33.799 2.00636C33.0189 1.38538 31.514 0.621087 30.5981 0.390139C29.5464 0.118899 28.2724 0.00758007 27.4126 0.118902ZM29.7453 1.86264C31.043 2.12557 32.1898 2.73036 33.2964 3.7177C33.7342 4.09984 33.9016 4.20327 34.1084 4.20327C34.4669 4.20327 35.5336 3.94034 36.513 3.61427C36.9591 3.46307 37.3251 3.36754 37.3251 3.39911C37.3251 3.51873 36.1624 4.62529 35.7167 4.92768C35.1514 5.31772 34.9367 5.58854 34.9367 5.92292C34.9367 6.24151 35.2474 6.63944 35.5498 6.6951C35.7408 6.72708 37.0547 6.5439 37.7234 6.3844C37.8746 6.35241 37.7791 6.47993 37.3255 6.90195C36.999 7.21265 36.5292 7.61847 36.2825 7.80165C35.5419 8.36698 35.534 8.38276 35.5182 9.65671C35.4945 11.3286 35.4305 12.1327 35.2158 13.4229C34.5549 17.3004 32.8831 20.979 30.3269 24.1478C29.7295 24.8885 28.1133 26.5047 27.3731 27.102C24.0846 29.7612 20.2154 31.3218 15.8681 31.7517C14.6498 31.8713 12.1576 31.8551 11.0111 31.7197C9.02857 31.4809 6.95835 30.9554 5.35791 30.2945L4.56164 29.9602L5.03932 29.8966C8.18453 29.4746 10.8039 28.4474 13.1208 26.7356C13.7896 26.2339 13.9885 25.8995 13.8374 25.5173C13.6862 25.1194 13.4153 24.9761 12.6747 24.9042C11.775 24.8166 11.3451 24.7211 10.5646 24.4187C9.31476 23.9331 8.04081 22.9217 7.29231 21.7989L6.89438 21.2016L7.47549 21.1459C8.23978 21.0662 9.33055 20.8593 9.56149 20.7559C9.78455 20.6525 10.0155 20.294 10.0155 20.0473C10.0155 19.7208 9.64914 19.2589 9.37873 19.251C9.09212 19.2431 7.66697 18.6857 7.15731 18.3833C6.03456 17.7224 4.94379 16.576 4.39425 15.501C4.15541 15.0312 3.72549 13.7573 3.72549 13.5263C3.72549 13.3751 3.74128 13.3751 4.03619 13.4707C4.54586 13.6538 5.58097 13.8449 6.13009 13.8528C6.71909 13.8607 6.99781 13.7253 7.14942 13.3593C7.30851 12.9693 7.13364 12.6187 6.52844 12.1332C5.14316 11.0266 4.31491 9.76845 3.86921 8.12024C3.57471 7.01327 3.65447 5.11045 4.0445 4.09153L4.12425 3.86848L5.14358 4.84793C7.91329 7.54786 11.0186 9.40292 14.6336 10.5174C16.4887 11.0906 18.9174 11.5284 20.2707 11.5284C20.7326 11.5284 20.7961 11.5047 21.0192 11.2816L21.2659 11.0428L21.1944 10.3898C21.0748 9.24341 21.1226 7.82616 21.3141 7.10964C21.776 5.35012 22.986 3.72559 24.5627 2.73825C25.0645 2.42755 26.1469 2.00553 26.7762 1.87053C27.5239 1.70355 28.981 1.70355 29.7453 1.86264Z"
        fill="currentColor"
      />
    </g>
  </Icon>
);

export default Twitter;