import StyleDictionary from "style-dictionary";
import { registerTransforms } from "@tokens-studio/sd-transforms";

registerTransforms(StyleDictionary, {
    expand: {
        composition: true,
        typography: true,
        shadow: true
    },
    excludeParentKeys: true,
    "ts/color/modifiers": {
        format: "hex"
    }
});

const sd = StyleDictionary.extend({
    platforms: {
        js: {
            transformGroup: "js",
            buildPath: "build-styles/",
            files: [
                {
                    destination: "variables.js",
                    format: "javascript/es6"
                }
            ]
        }
    },
    source: ["tokens.json"]
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
