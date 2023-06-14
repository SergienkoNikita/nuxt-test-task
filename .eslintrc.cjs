module.exports = {
    env: { browser: true, es2020: true },
    ignorePatterns: ["./nuxt.config.ts"],
    extends: [
        'airbnb',
        'airbnb-typescript',
    ],
    parser: 'vue-eslint-parser',
    plugins: ["@typescript-eslint", "import"],
    parserOptions: {
        parser: {
            '<template>': 'espree',
            js: '@typescript-eslint/parser',
            ts: '@typescript-eslint/parser',
        },
        project: ['./tsconfig.eslint.json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
    },
    settings: {
        react: {
            version: 'detect'
        }
    },

    rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off'
    }
}
