module.exports = {
    "parserOptions": {
        "ecmaVersion": 5
    },
    "env": {
        "browser": true
    },
    "extends": ["eslint:recommended"],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-console": [
            "warn"
        ],
        "no-undef": [
            "off"
        ]
    }
}