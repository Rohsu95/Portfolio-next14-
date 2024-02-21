const colors = {
  main: "#ECF2FF",
  font: "#576CBC",
  font_hover: "#ACBCFF",
};
const sizes = {
  desktop: "1440px",
  laptop: "1280px",
  tablet: "1024px",
  mobile: "768px",
  height: "600px",
  phone: "480px",
  small: "360px",
};

const media = {
  desktop: `screen and (max-width: ${sizes.desktop})`,
  laptop: `screen and (max-width : ${sizes.laptop})`,
  tablet: `screen and (max-width : ${sizes.tablet})`,
  mobile: `screen and (max-width : ${sizes.mobile})`,
  height: `screen and (max-width : ${sizes.height})`,
  phone: `screen and (max-width : ${sizes.phone})`,
  small: `screen and (max-width : ${sizes.small})`,
};
const theme = {
  colors,
  media,
};

export default theme;
