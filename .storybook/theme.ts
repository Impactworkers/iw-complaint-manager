import { createTheme } from "@mui/material/styles";
import * as designTokens from "../build-styles/variables";

export const defaultTheme = createTheme({
    palette: {
        mode: "light",
        common: {
            black: designTokens.CommonBlack,
            white: designTokens.CommonWhite
        },
        primary: {
            50: designTokens.Primary50,
            100: designTokens.Primary100,
            200: designTokens.Primary200,
            300: designTokens.Primary300,
            400: designTokens.Primary400,
            500: designTokens.Primary500,
            600: designTokens.Primary600,
            700: designTokens.Primary700,
            800: designTokens.Primary800,
            900: designTokens.Primary900,
        },
        secondary: {
            50: designTokens.Secondary50,
            100: designTokens.Secondary100,
            200: designTokens.Secondary200,
            300: designTokens.Secondary300,
            400: designTokens.Secondary400,
            500: designTokens.Secondary500,
            600: designTokens.Secondary600,
            700: designTokens.Secondary700,
            800: designTokens.Secondary800,
            900: designTokens.Secondary900,
        },
        error: {
            200: designTokens.UtilityError200,
            300: designTokens.UtilityError300,
            400: designTokens.UtilityError400,
            500: designTokens.UtilityError500,
            600: designTokens.UtilityError600,
            700: designTokens.UtilityError700,
            800: designTokens.UtilityError800,
            900: designTokens.UtilityError900,
        },
        warning: {
            200: designTokens.UtilityWarning200,
            300: designTokens.UtilityWarning300,
            400: designTokens.UtilityWarning400,
            500: designTokens.UtilityWarning500,
            600: designTokens.UtilityWarning600,
            700: designTokens.UtilityWarning700,
            800: designTokens.UtilityWarning800,
            900: designTokens.UtilityWarning900,
        },
        info: {
            200: designTokens.UtilityInformative200,
            300: designTokens.UtilityInformative300,
            400: designTokens.UtilityInformative400,
            500: designTokens.UtilityInformative500,
            600: designTokens.UtilityInformative600,
            700: designTokens.UtilityInformative700,
            800: designTokens.UtilityInformative800,
            900: designTokens.UtilityInformative900,
        },
        success: {
            200: designTokens.UtilitySuccess200,
            300: designTokens.UtilitySuccess300,
            400: designTokens.UtilitySuccess400,
            500: designTokens.UtilitySuccess500,
            600: designTokens.UtilitySuccess600,
            700: designTokens.UtilitySuccess700,
            800: designTokens.UtilitySuccess800,
            900: designTokens.UtilitySuccess900,
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
            secondary: designTokens.TextSecondary
        },
        divider: designTokens.OtherDivider,
        background: {
            paper: designTokens.BackgroundBackground,
            default: designTokens.BackgroundPaper
        },
    },
    typography: {
        h1: {
            fontSize: designTokens.HeaderH1FontSize,
            fontWeight: designTokens.HeaderH1FontWeight,
            lineHeight: designTokens.HeaderH1LineHeight,
            letterSpacing: designTokens.HeaderH1LetterSpacing
        },
        h2: {
            fontSize: designTokens.HeaderH2FontSize,
            fontWeight: designTokens.HeaderH2FontWeight,
            lineHeight: designTokens.HeaderH2LineHeight,
            letterSpacing: designTokens.HeaderH2LetterSpacing
        },
        h3: {
            fontSize: designTokens.HeaderH3FontSize,
            fontWeight: designTokens.HeaderH3FontWeight,
            lineHeight: designTokens.HeaderH3LineHeight,
            letterSpacing: designTokens.HeaderH3LetterSpacing
        },
        h4: {
            fontSize: designTokens.HeaderH4FontSize,
            fontWeight: designTokens.HeaderH4FontWeight,
            lineHeight: designTokens.HeaderH4LineHeight,
            letterSpacing: designTokens.HeaderH4LetterSpacing
        },
        h5: {
            fontSize: designTokens.HeaderH5FontSize,
            fontWeight: designTokens.HeaderH5FontWeight,
            lineHeight: designTokens.HeaderH5LineHeight,
            letterSpacing: designTokens.HeaderH5LetterSpacing
        },
        h6: {
            fontSize: designTokens.HeaderH6FontSize,
            fontWeight: designTokens.HeaderH6FontWeight,
            lineHeight: designTokens.HeaderH6LineHeight,
            letterSpacing: designTokens.HeaderH6LetterSpacing
        },
        body1: {
            fontSize: designTokens.BodyBody1FontSize,
            fontWeight: designTokens.BodyBody1FontWeight,
            lineHeight: designTokens.BodyBody1LineHeight,
            letterSpacing: designTokens.BodyBody1LetterSpacing
        },
        body2: {
            fontSize: designTokens.BodyBody2FontSize,
            fontWeight: designTokens.BodyBody2FontWeight,
            lineHeight: designTokens.BodyBody2LineHeight,
            letterSpacing: designTokens.BodyBody2LetterSpacing
        },
        subtitle1: {
            fontSize: designTokens.BodySubtitle1FontSize,
            fontWeight: designTokens.BodySubtitle1FontWeight,
            lineHeight: designTokens.BodySubtitle1LineHeight,
            letterSpacing: designTokens.BodySubtitle1LetterSpacing
        },
        subtitle2: {
            fontSize: designTokens.BodySubtitle2FontSize,
            fontWeight: designTokens.BodySubtitle2FontWeight,
            lineHeight: designTokens.BodySubtitle2LineHeight,
            letterSpacing: designTokens.BodySubtitle2LetterSpacing
        },
        button: {
            fontSize: designTokens.BodyButtonDefaultFontSize,
            fontWeight: designTokens.BodyButtonDefaultFontWeight,
            lineHeight: designTokens.BodyButtonDefaultLineHeight,
            letterSpacing: designTokens.BodyButtonDefaultLetterSpacing
        },
        caption: {
            fontSize: designTokens.BodyCaptionFontSize,
            fontWeight: designTokens.BodyCaptionFontWeight,
            lineHeight: designTokens.BodyCaptionLineHeight,
            letterSpacing: designTokens.BodyCaptionLetterSpacing
        },
        overline: {
            fontSize: designTokens.BodyOverlineFontSize,
            fontWeight: designTokens.BodyOverlineFontWeight,
            lineHeight: designTokens.BodyOverlineLineHeight,
            letterSpacing: designTokens.BodyOverlineLetterSpacing
        }
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: {
                    fontSize: designTokens.ComponentsAlertTitleFontSize,
                    fontWeight: designTokens.ComponentsAlertTitleFontWeight,
                    lineHeight: designTokens.ComponentsAlertTitleLineHeight,
                    letterSpacing: designTokens.ComponentsAlertTitleLetterSpacing
                }
            }
        },
        MuiAvatar:  {
            styleOverrides: {
                root: {
                    fontSize: designTokens.ComponentsAvatarInitialsFontSize,
                    fontWeight: designTokens.ComponentsAvatarInitialsFontWeight,
                    lineHeight: designTokens.ComponentsAvatarInitialsLineHeight,
                    letterSpacing: designTokens.ComponentsAvatarInitialsLetterSpacing
                }
            }
        },
        MuiBadge: {
            styleOverrides: {
                root: {
                    fontSize: designTokens.ComponentsBadgeLabelFontSize,
                    fontWeight: designTokens.ComponentsBadgeLabelFontWeight,
                    lineHeight: designTokens.ComponentsBadgeLabelLineHeight,
                    letterSpacing: designTokens.ComponentsBadgeLabelLetterSpacing
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: designTokens.ComponentsButtonLargeFontSize,
                    fontWeight: designTokens.ComponentsButtonLargeFontWeight,
                    lineHeight: designTokens.ComponentsButtonLargeLineHeight,
                    letterSpacing: designTokens.ComponentsButtonLargeLetterSpacing
                }
            }
        },
   
    }
});
