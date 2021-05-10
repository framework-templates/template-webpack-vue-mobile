/*
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-05-10 11:14:39
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-10 16:42:54
 */
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "58",
          safari: "11.1",
          firefox: "60",
          ie: "9",
        },
        useBuiltIns: "usage",
        corejs: 3,
        modules: false,
      },
    ],
  ],
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",{
            targets:{
              node:"current"
            }
          }
        ]
      ],
      plugins: ["transform-vue-jsx", "transform-es2015-modules-commonjs", "dynamic-import-node"],
    },
  },
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style:true
      },
      'vant'
    ],
  ],
}
