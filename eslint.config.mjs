import eslint from "@eslint/js"
import tseslint from "typescript-eslint";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.recommended,
    {
        languageOptions:{

            parserOptions:{
                project:true,
                tsconfigRootDir: ".",
            },
        },
        rules:{
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-floating-promises": "error",
            "@typescript-eslint/await-thenable": "error",
            "@typescript-eslint/no-empty-function": "error",
            "@typescript-eslint/no-namespace": "error",
            '@typescript-eslint/ban-ts-comment': ['error', { minimumDescriptionLength: 10 },],
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "variable",
                    format: ["camelCase"],
                    leadingUnderscore: "allow",
                    trailingUnderscore: "allow",
                },
                {
                    selector: "variable",
                    types: ["boolean"],
                    format: ["PascalCase"],
                    prefix: ["is", "should", "has", "can", "did", "will"],
                },
                {
                    selector: "typeLike",
                    format: ["PascalCase"],
                },
            ],
        },
    }
)
