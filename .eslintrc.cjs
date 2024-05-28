/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: [
        'eslint-config-js-ts',
        'plugin:vue/vue3-recommended',
        '@vue/eslint-config-prettier/skip-formatting',
        '@vue/eslint-config-typescript',
        'plugin:prettier/recommended',
    ],
    parser: 'vue-eslint-parser',
    plugins: ['prettier', '@typescript-eslint', 'eslint-plugin-vue'],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        project: ['tsconfig.app.json'],
        ecmaVersion: 'latest',
    },
    overrides: [
        {
            files: ['*.vue'],
            extends: ['plugin:prettier/recommended'],
            rules: {
                // eslint-typescript ["RECOMMENDED"]
                '@typescript-eslint/no-unsafe-return': 'off',
                '@typescript-eslint/no-unsafe-call': 'off',
                // vue-eslint [ESSENTIAL]
                'vue/html-self-closing': ['off'],
                'vue/no-use-computed-property-like-method': ['error'],
                'vue/no-v-for-template-key': 'off',
                'vue/no-v-for-template-key-on-child': 'error',
                // vue-eslint [STRONGLY RECOMMENDED]
                'vue/attribute-hyphenation': ['error', 'never', { ignore: [] }],
                'vue/component-definition-name-casing': ['error', 'PascalCase'],
                'vue/v-on-style': ['error', 'shorthand'],
                'vue/v-slot-style': [
                    'error',
                    {
                        atComponent: 'shorthand',
                        default: 'shorthand',
                        named: 'shorthand',
                    },
                ],
                'vue/v-on-event-hyphenation': [
                    'error',
                    'never',
                    {
                        autofix: false,
                        ignore: [],
                    },
                ],

                // vue-eslint [RECOMMENDED]
                'vue/no-lone-template': ['error'],
                'vue/attributes-order': [
                    'error',
                    {
                        order: [
                            'DEFINITION',
                            'CONDITIONALS',
                            'LIST_RENDERING',
                            'RENDER_MODIFIERS',
                            'GLOBAL',
                            ['UNIQUE', 'SLOT'],
                            'TWO_WAY_BINDING',
                            'OTHER_DIRECTIVES',
                            'OTHER_ATTR',
                            'EVENTS',
                            'CONTENT',
                        ],
                        alphabetical: false,
                    },
                ],
                'vue/this-in-template': ['error', 'never'],

                'vue/order-in-components': [
                    'error',
                    {
                        order: [
                            'el',
                            'name',
                            'key',
                            'parent',
                            'functional',
                            ['delimiters', 'comments'],
                            ['components', 'directives', 'filters'],
                            'extends',
                            'mixins',
                            ['provide', 'inject'],
                            'ROUTER_GUARDS',
                            'layout',
                            'middleware',
                            'validate',
                            'scrollToTop',
                            'transition',
                            'loading',
                            'inheritAttrs',
                            'model',
                            ['props', 'propsData'],
                            'emits',
                            'setup',
                            'asyncData',
                            'data',
                            'fetch',
                            'head',
                            'computed',
                            'watch',
                            'watchQuery',
                            'methods',
                            'LIFECYCLE_HOOKS',
                            ['template', 'render'],
                            'renderError',
                        ],
                    },
                ],

                // indentation vue-eslint - OFF
                'vue/max-attributes-per-line': ['off'],
                'vue/mustache-interpolation-spacing': ['off'],
                'vue/prop-name-casing': ['error', 'camelCase'],
                'vue/singleline-html-element-content-newline': ['off', {}],
                'vue/v-bind-style': ['off'],
            },
        },
    ],
}
