export const Breakpoints = {
  tablet: "768px",
  desktop: "1024px",
  desktopLarge: "1200px"
};

// in mobile first, default is mobile and use queries for scale
export const MediaQueries = {
  tablet: `@media (min-width: ${Breakpoints.tablet})`,
  desktop: `@media (min-width: ${Breakpoints.desktop})`,
  desktopLarge: `@media (min-width: ${Breakpoints.desktopLarge})`,
  // lessThanTablet: `@media (max-width: ${Breakpoints.tablet})`,
  // lessThanDesktop: `@media (max-width: ${Breakpoints.desktop})`,
  // lessThanDesktopLarge: `@media (max-width: ${Breakpoints.desktopLarge})`
};

