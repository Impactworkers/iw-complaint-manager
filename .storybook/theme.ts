import { createTheme } from "@mui/material/styles";
import * as designTokens from "../build-styles/variables";

export const defaultTheme = createTheme({
    palette: {
        mode: "light",
        common: {
            black: designTokens.CommonBlack,
            white: designTokens.CommonWhite
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
        /*
        button: {
            fontSize: designTokens.BodyButtonDefaultFontSize,
            fontWeight: designTokens.BodyButtonDefaultFontWeight,
            lineHeight: designTokens.BodyButtonDefaultLineHeight,
            letterSpacing: designTokens.BodyButtonDefaultLetterSpacing
        },
        */
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
    // Work on adding colors using figma designs
});
