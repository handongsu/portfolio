const calcRem = (px: number): string => `${px / 16}rem`;

const size = {
  mobile: "390px",
  TabletS: "768px",
  TabletM: "1024px",
  Desktop: "1200px",
};

const viewSize = {
  mobileSmall: `(max-width: ${size.mobile})`,
  tabletSmall: `(min-width: ${size.TabletS})`,
  tabletMedium: `(min-width: ${size.TabletM})`,
  deskTop: `(min-width: ${size.Desktop})`,
};

const fontSize = {
  fontS: calcRem(12),
  fontM: calcRem(20),
  fontL: calcRem(30),
  fontXL: "40px",
  fontXXL: "50px",
};

const paddingSize = {
  paddingS: "10px",
  paddingM: "20px",
  paddingL: "30px",
  paddingXL: "40px",
  paddingXXL: "50px",
};

const marginSize = {
  marginS: "10px",
  marginM: "20px",
  marginL: "30px",
  marginXL: "40px",
  marginXXL: "50px",
};

// eslint-disable-next-line react-refresh/only-export-components
const ColorTools = {
  pointColor: "#f54404",
};

const lightTheme = {
  bgColor: "#F1EFED",
  textColor: "black",
};

const darkTheme = {
  bgColor: "#181818",
  textColor: "white",
};

export const theme = {
  ...viewSize,
  ...fontSize,
  ...paddingSize,
  ...marginSize,
  ...ColorTools,
  lightTheme,
  darkTheme,
};
