import { createTheme, ThemeOptions, Theme } from "@mui/material"

export const defaultThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#3448c5",
      light: "#1d3c90",
      dark: "#4c64d7",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#d1d6e0",
    },
    error: {
      main: "#CE190D",
      dark: "#bf160a",
    },
    warning: {
      main: "#ff620c",
      dark: "#E06F00",
    },
    // info: {},
    success: {
      main: "#22AA00",
      dark: "#1f8719",
    },
    // grey: {
    //   overlayLight: 'rgb(249, 250, 251)',
    //   overlayLight2: 'rgba(249, 250, 251, 0.8)',
    //   overlayLight3: 'rgba(249, 250, 251, 0.5)',
    //   overlayDark3: 'rgba(10, 12, 15, 0.5)',
    //   overlayDark2: 'rgba(10, 12, 15, 0.8)',
    //   overlayDark: 'rgb(10, 12, 15)',
    // },
    text: {
      primary: "#0a0c0f",
      secondary: "#333b4c",
      disabled: "rgba(10, 12, 15, 0.5)",
    },
    background: {
      paper: "#ffffff",
      default: "#f3f4f7",
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    fontSize: 16,
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "2.2rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.7rem",
    },
  },
  spacing: 16,
  shape: {
    borderRadius: 4,
  },
  // components: {
  //   MuiButtonBase: {
  //     disableRipple: true,
  //   },
  //   MuiTooltip: {
  //     arrow: true,
  //   },
  // },
}

export const defaultTheme: Theme = createTheme()

export const themeConfig: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiAccordion: {
      defaultProps: {
        square: true,
        TransitionProps: {
          unmountOnExit: true,
        },
      },
      styleOverrides: {
        root: {
          border: "1px solid rgba(255, 255, 255, .125)",
          boxShadow: "none",
          transition: defaultTheme.transitions.create("margin-left"),
          "&:not(:last-child)": {
            borderBottom: 0,
          },
          "&:before": {
            display: "none",
          },
          "&.Mui-expanded": {
            margin: "auto",
          },
          "&.Mui-disabled": {
            marginLeft: 32,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(255, 255, 255, .125)",
          minHeight: 56,
          "&.Mui-expanded": {
            minHeight: 56,
          },
        },
        content: {
          alignItems: "center",
          justifyContent: "space-between",
          "&.Mui-expanded": {
            margin: "12px 0",
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: "#212121",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        docked: {
          "& .MuiPaper-root": {
            position: "static",
          },
        },
        paper: {},
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: "#121212",
        },
      },
    },
  },
}

export default createTheme(themeConfig)
