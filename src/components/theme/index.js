import {createTheme} from "@material-ui/core/styles";
import tinyColor from "tinycolor2";

const colorPrimary = "#a62626";

const Theme = createTheme({
    palette: {
        primary: {
            main: colorPrimary,
            light: tinyColor(colorPrimary).lighten().toHexString()
        }
    },
    overrides: {
        MuiButton: {
            root: {
                fontFamily: "IRANSans!important",
            },
            startIcon: {
                marginLeft: "4px",
                marginRight: "-8px"
            },
            containedPrimary: {
                backgroundColor: colorPrimary,
                color: '#fff',
                "&:hover": {
                    backgroundColor: tinyColor(colorPrimary).lighten().toHexString()
                },
                "&:focus": {
                    backgroundColor: tinyColor(colorPrimary).lighten().toHexString()
                },
                "&:active": {
                    backgroundColor: tinyColor(colorPrimary).darken().toHexString()
                },

            }
        },
        MuiTypography: {
            root: {
                fontFamily: "IRANSans!important",
                fontSize: "1rem!important",
                backgroundColor: "#fff"
            },
        },
        MuiSelect: {
            select: {
                '&:focus': {
                    backgroundColor: 'transparent'
                }
            }
        },

        MuiTab: {
            textColorPrimary: {
                color: "rgb(0 0 0 / 32%)"
            }

        },
        MuiLink: {
            underlineHover: {
                '&:hover': {
                    textDecoration: 'none'
                }
            }
        }
    },
    breakpoints: {
        keys: ["xs", "sm", "md", "lg", "xl", "xxl"],
        values: {xs: 0, sm: 568, md: 1100, lg: 1353, xl: 1400, xxl: 1500}
    },

});
export default Theme;
