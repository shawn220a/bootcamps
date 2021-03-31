module.exports = {
    "ignorePatterns": ["models/index.js", "node_modules", "config"],
    "env": {
        "browser": true,
        "commonjs": true,
        "node": true,
        "es6": true
    },
    "parserOptions": { "ecmaVersion": 8 },
    "extends": "prettier",
    "plugins": ["prettier"],
    "rules": {
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-extra-semi": "error",
        "no-func-assign": "error",
        "no-irregular-whitespace": "error",
        "no-unreachable": "error",
        "curly": "error",
        "dot-notation": "error",
        "eqeqeq": "error",
        "no-empty-function": "error",
        "no-multi-spaces": "error",
        "no-unused-vars": "error",
        "camelcase": "error",
        "indent": ["error", 2],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "prettier/prettier": "error"
    }    
};