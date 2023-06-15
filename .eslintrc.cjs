module.exports = {
    env: { browser: true, es2020: true },
    ignorePatterns: ["./nuxt.config.ts"],
    extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:nuxt/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
    ],
    parser: 'vue-eslint-parser',
    plugins: ["import"],
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
        'vue/multi-word-component-names': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off'
    },
    globals: {
        defineEmits: true,
        defineProps: true,
    },
}
