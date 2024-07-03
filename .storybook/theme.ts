"use client"
import { createTheme } from "@mui/material/styles";
import * as designTokens from "../build-styles/variables";
import { BorderRight } from "@mui/icons-material";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        common: {
            black: designTokens.CommonBlack,
            white: designTokens.CommonWhite
        },
        primary: {
            main: designTokens.Primary500,
            light: designTokens.Primary100,
            dark: designTokens.Primary700,
            contrastText: designTokens.Neutral900
        },
        secondary: {
            main: designTokens.Secondary500,
            light: designTokens.Secondary100,
            dark: designTokens.Secondary700,
            contrastText: designTokens.Neutral900
        },
        error: {
            main: designTokens.UtilityError500,
            light: designTokens.UtilityError200,
            dark: designTokens.UtilityError900,
            contrastText: designTokens.Neutral900
        },
        warning: {
            main: designTokens.UtilityWarning500,
            light: designTokens.UtilityWarning200,
            dark: designTokens.UtilityWarning900,
            contrastText: designTokens.Neutral900
        },
        info: {
            main: designTokens.UtilityInformative500,
            light: designTokens.UtilityInformative200,
            dark: designTokens.UtilityInformative900,
            contrastText: designTokens.Neutral900
        },
        success: {
            main: designTokens.UtilitySuccess500,
            light: designTokens.UtilitySuccess200,
            dark: designTokens.UtilitySuccess900,
            contrastText: designTokens.Neutral900
        },
        grey: {
            50: designTokens.Neutral50,
            100: designTokens.Neutral100,
            200: designTokens.Neutral200,
            300: designTokens.Neutral300,
            400: designTokens.Neutral400,
            500: designTokens.Neutral500,
            600: designTokens.Neutral600,
            700: designTokens.Neutral700,
            800: designTokens.Neutral800,
            900: designTokens.Neutral900,
        },
        text: {
            primary: designTokens.TextPrimary,
            secondary: designTokens.TextSecondary,
            disabled: designTokens.Neutral400,
        },
        divider: designTokens.OtherDivider,
        background: {
            paper: designTokens.BackgroundPaper,
            default: designTokens.BackgroundBackground
        },
    },
    typography: {
        h1: {
            fontSize: designTokens.HeaderH1FontSize,
            fontWeight: designTokens.HeaderH1FontWeight,
            letterSpacing: designTokens.HeaderH1LetterSpacing
        },
        h2: {
            fontSize: designTokens.HeaderH2FontSize,
            fontWeight: designTokens.HeaderH2FontWeight,
            letterSpacing: designTokens.HeaderH2LetterSpacing
        },
        h3: {
            fontSize: designTokens.HeaderH3FontSize,
            fontWeight: designTokens.HeaderH3FontWeight,
            letterSpacing: designTokens.HeaderH3LetterSpacing
        },
        h4: {
            fontSize: designTokens.HeaderH4FontSize,
            fontWeight: designTokens.HeaderH4FontWeight,
            letterSpacing: designTokens.HeaderH4LetterSpacing
        },
        h5: {
            fontSize: designTokens.HeaderH5FontSize,
            fontWeight: designTokens.HeaderH5FontWeight,
            letterSpacing: designTokens.HeaderH5LetterSpacing
        },
        h6: {
            fontSize: designTokens.HeaderH6FontSize,
            fontWeight: designTokens.HeaderH6FontWeight,
            letterSpacing: designTokens.HeaderH6LetterSpacing
        },
        body1: {
            fontSize: designTokens.BodyBody1FontSize,
            fontWeight: designTokens.BodyBody1FontWeight,
            letterSpacing: designTokens.BodyBody1LetterSpacing
        },
        body2: {
            fontSize: designTokens.BodyBody2FontSize,
            fontWeight: designTokens.BodyBody2FontWeight,
            letterSpacing: designTokens.BodyBody2LetterSpacing
        },
        subtitle1: {
            fontSize: designTokens.BodySubtitle1FontSize,
            fontWeight: designTokens.BodySubtitle1FontWeight,
            letterSpacing: designTokens.BodySubtitle1LetterSpacing
        },
        subtitle2: {
            fontSize: designTokens.BodySubtitle2FontSize,
            fontWeight: designTokens.BodySubtitle2FontWeight,
            letterSpacing: designTokens.BodySubtitle2LetterSpacing
        },
        caption: {
            fontSize: designTokens.BodyCaptionFontSize,
            fontWeight: designTokens.BodyCaptionFontWeight,
            letterSpacing: designTokens.BodyCaptionLetterSpacing
        },
        overline: {
            fontSize: designTokens.BodyOverlineFontSize,
            fontWeight: designTokens.BodyOverlineFontWeight,
            letterSpacing: designTokens.BodyOverlineLetterSpacing
        }
    },
    components: {
        MuiListItem: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: designTokens.Primary50,
                        color: designTokens.Primary500,
                        borderRightWidth: "4px",
                        borderRightColor: designTokens.Primary500,
                        borderRightStyle: "solid",
                        "& .MuiListItemIcon-root": {
                            color: designTokens.Primary500
                        }
                    }
                }
            }
        },
            MuiAppBar:{
                styleOverrides:{
                    root:{
                        backgroundColor: designTokens.Neutral10,
                        borderBottom: `1px solid ${designTokens.OtherDivider}`
                    }
                }
            }
    
    }
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        common: {
            black: designTokens.CommonBlack,
            white: designTokens.CommonWhite
        },
        primary: {
            main: designTokens.Primary500,
            light: designTokens.Primary100,
            dark: designTokens.Primary700,
            contrastText: designTokens.Neutral10
        },
        secondary: {
            main: designTokens.Secondary500,
            light: designTokens.Secondary100,
            dark: designTokens.Secondary700,
            contrastText: designTokens.Neutral10
        },
        error: {
            main: designTokens.UtilityError500,
            light: designTokens.UtilityError200,
            dark: designTokens.UtilityError900,
            contrastText: designTokens.Neutral10
        },
        warning: {
            main: designTokens.UtilityWarning500,
            light: designTokens.UtilityWarning200,
            dark: designTokens.UtilityWarning900,
            contrastText: designTokens.Neutral10
        },
        info: {
            main: designTokens.UtilityInformative500,
            light: designTokens.UtilityInformative200,
            dark: designTokens.UtilityInformative900,
            contrastText: designTokens.Neutral10
        },
        success: {
            main: designTokens.UtilitySuccess500,
            light: designTokens.UtilitySuccess200,
            dark: designTokens.UtilitySuccess900,
            contrastText: designTokens.Neutral10
        },
        grey: {
            50: designTokens.Neutral50,
            100: designTokens.Neutral100,
            200: designTokens.Neutral200,
            300: designTokens.Neutral300,
            400: designTokens.Neutral400,
            500: designTokens.Neutral500,
            600: designTokens.Neutral600,
            700: designTokens.Neutral700,
            800: designTokens.Neutral800,
            900: designTokens.Neutral900,
        },
        divider: designTokens.OtherDivider,
    },
    typography: {
        h1: {
            fontSize: designTokens.HeaderH1FontSize,
            fontWeight: designTokens.HeaderH1FontWeight,
            letterSpacing: designTokens.HeaderH1LetterSpacing
        },
        h2: {
            fontSize: designTokens.HeaderH2FontSize,
            fontWeight: designTokens.HeaderH2FontWeight,
            letterSpacing: designTokens.HeaderH2LetterSpacing
        },
        h3: {
            fontSize: designTokens.HeaderH3FontSize,
            fontWeight: designTokens.HeaderH3FontWeight,
            letterSpacing: designTokens.HeaderH3LetterSpacing
        },
        h4: {
            fontSize: designTokens.HeaderH4FontSize,
            fontWeight: designTokens.HeaderH4FontWeight,
            letterSpacing: designTokens.HeaderH4LetterSpacing
        },
        h5: {
            fontSize: designTokens.HeaderH5FontSize,
            fontWeight: designTokens.HeaderH5FontWeight,
            letterSpacing: designTokens.HeaderH5LetterSpacing
        },
        h6: {
            fontSize: designTokens.HeaderH6FontSize,
            fontWeight: designTokens.HeaderH6FontWeight,
            letterSpacing: designTokens.HeaderH6LetterSpacing
        },
        body1: {
            fontSize: designTokens.BodyBody1FontSize,
            fontWeight: designTokens.BodyBody1FontWeight,
            letterSpacing: designTokens.BodyBody1LetterSpacing
        },
        body2: {
            fontSize: designTokens.BodyBody2FontSize,
            fontWeight: designTokens.BodyBody2FontWeight,
            letterSpacing: designTokens.BodyBody2LetterSpacing
        },
        subtitle1: {
            fontSize: designTokens.BodySubtitle1FontSize,
            fontWeight: designTokens.BodySubtitle1FontWeight,
            letterSpacing: designTokens.BodySubtitle1LetterSpacing
        },
        subtitle2: {
            fontSize: designTokens.BodySubtitle2FontSize,
            fontWeight: designTokens.BodySubtitle2FontWeight,
            letterSpacing: designTokens.BodySubtitle2LetterSpacing
        },
        caption: {
            fontSize: designTokens.BodyCaptionFontSize,
            fontWeight: designTokens.BodyCaptionFontWeight,
            letterSpacing: designTokens.BodyCaptionLetterSpacing
        },
        overline: {
            fontSize: designTokens.BodyOverlineFontSize,
            fontWeight: designTokens.BodyOverlineFontWeight,
            letterSpacing: designTokens.BodyOverlineLetterSpacing
        }
    },
    components: {
        MuiListItem: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: designTokens.Primary50,
                        color: designTokens.Primary700,
                        "& .MuiListItemIcon-root": {
                            color: designTokens.Primary700
                        }
                    }
                }
            }
        }
    
    }
});
