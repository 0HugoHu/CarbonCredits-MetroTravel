module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/prop-name-casing": ["error", "snake_case"],
    "no-unused-vars": "warn"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
