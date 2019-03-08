{
    "extends": ["tslint:recommended", "tslint-react"],
    "rules": {
      "no-console": [false, "log", "error"],
      "jsx-no-multiline-js": false,
      "whitespace": false,
      "no-empty-interface": false,
      "space-before-function-paren": false,
      "no-namespace": false,
      "label-position": false,
      "quotemark": [true, "single", "jsx-double"],
      "member-access": false,
      "semicolon": [true, "always", "ignore-bound-class-methods"],
      "no-unused-expression": [true, "allow-fast-null-checks"],
      "member-ordering": false,
      "trailing-comma": false,
      "arrow-parens": false,
      "jsx-self-close": false,
      "max-line-length": false,
      "interface-name": false,
      "no-empty": false,
      "comment-format": false,
      "ordered-imports": false,
      "object-literal-sort-keys": false,
      "eofline": false,
      "jsx-no-lambda": false,
      "no-trailing-whitespace": false,
      "jsx-alignment": false,
      "jsx-wrap-multilines": false,
      "no-shadowed-variable": [
        false,
        {
          "class": true,
          "enum": true,
          "function": false,
          "interface": false,
          "namespace": true,
          "typeAlias": false,
          "typeParameter": false
        }
      ]
    },
    "linterOptions": {
      "exclude": [
        "config/**/*.js",
        "node_modules/**/*.ts",
        "coverage/lcov-report/*.js"
      ]
    }
  }