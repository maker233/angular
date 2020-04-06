module.exports = {
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    jsxBracketSameLine: false,
    arrowParens: 'always',
    proseWrap: 'never',
    htmlWhitespaceSensitivity: 'strict',
    overrides: [
        {
            files: '*.ts',
            options: { parser: 'typescript' },
        },
    ],
};
