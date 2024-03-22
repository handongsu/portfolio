const calcRem = (px: number): string => `${px / 16}rem`;

const size = {
  mobile: "390px",
  Tablet: "768px",
  Desktop: "1024px",
};

const viewSize = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.Tablet})`,
  deskTop: `(min-width: ${size.Desktop})`,
};

const fontSize = {
  fontS: calcRem(12),
  fontM: calcRem(20),
  fontL: calcRem(30),
  fontXL: calcRem(40),
  fontXXL: calcRem(50),
};

const paddingSize = {
  paddingS: calcRem(10),
  paddingM: calcRem(20),
  paddingL: calcRem(30),
  paddingXL: calcRem(40),
  paddingXXL: calcRem(50),
};

const marginSize = {
  marginS: calcRem(10),
  marginM: calcRem(20),
  marginL: calcRem(30),
  marginXL: calcRem(40),
  marginXXL: calcRem(50),
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
