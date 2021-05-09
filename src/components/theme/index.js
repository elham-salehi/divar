import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import tinyColor from "tinycolor2";
const colorPrimary = "#a62626";

const Theme = createMuiTheme({
    palette: {
        primary: {
            main: colorPrimary,
            light:tinyColor(colorPrimary).lighten().toHexString()
        }
    },
    overrides: {
        MuiTypography: {
            root: {
                fontFamily: "shabnam!important",
                fontSize: "1rem!important"
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
    },
            breakpoints: {
                keys: ["xs", "sm", "md", "lg", "xl", "xxl"],
                values: { xs: 0, sm: 568, md: 1210, lg: 1353, xl: 1400, xxl: 1500 }
            },


});
export default Theme;
