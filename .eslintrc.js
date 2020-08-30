module.exports = {
    env: {
      commonjs: true,
      es6: true,
      node: true,
      mocha: true
    },
    extends: ['standard', 'prettier'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
    },
    rules: {
      semi: [2, 'always'],
      'no-multi-spaces': [2, { exceptions: { VariableDeclarator: true } }],
      'dot-notation': [2, { allowPattern: '^[a-z]+(_[a-z]+)+$' }],
    },
  };
  