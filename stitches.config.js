import { createCss } from '@stitches/react';

export const stitchesConfig = createCss({
    theme: {
        colors: {
            primary: '#fef',
            secondary: '#010',
            tertiary: '#a1a1a1'  
        },
        media: {
            dark: "(prefers-color-scheme: dark)",
          },
    }
});

export const darkTheme = stitchesConfig.theme({
    colors: {
      primary: "#010",
      secondary: "#fef",
      tertiary: "#898989",
    },
  });

  export const globalStyles = stitchesConfig.global({
    "@dark": { // notice the `media` definition on the stitches.config.ts file
      ":root:not(.light)": {
        ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
          const currentColor = darkTheme.colors[currentColorKey];
          const currentColorValue =
            currentColor.value.substring(0, 1) === "$"
              ? `$colors${currentColor.value}`
              : currentColor.value;
  
          return {
            [currentColor.variable]: currentColorValue,
            ...varSet,
          };
        }, {}),
      },
    },
  });
  
  globalStyles();