module.exports = {
  root: true,
  /* 继承公共配置 */
  extends: [
    'stylelint-config-standard', // 配置 stylelint 拓展插件
    'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
    'stylelint-config-standard-scss', // 配置 stylelint scss 插件
    'stylelint-config-recommended-vue/scss', // 配置 vue 中 scss 样式格式化
    'stylelint-config-recess-order', // 配置 stylelint css 属性书写顺序插件,
    'stylelint-config-prettier' // 配置 stylelint 和 prettier 兼容
  ],
  overrides: [
    // 扫描 .vue/html 文件中的 <style> 标签内的样式
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html'
    }
  ],
  /* 项目个性化的规则 */
  rules: {
    'selector-class-pattern': null, // 设置类名选择器不遵循 kebab-case
    'keyframes-name-pattern': null, // 设置动画名 不遵循kebab-case
    'selector-pseudo-element-no-unknown': null, // deep报错
    'at-rule-no-unknown': null, // 禁止使用未知的 at 规则
    'selector-class-pattern': [
      // 命名规范 -
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected class selector to be kebab-case'
      }
    ],
    'color-hex-length': 'long',
    'alpha-value-notation': 'number',
    'color-function-notation': 'modern',
    'block-opening-brace-space-before': 'always', // 要求在块的开大括号之前必须有一个空格或不能有空白符 "always(大括号前必须始终有一个空格)"|"never(左大括号之前绝不能有空格)"|"always-single-line(在单行块中的左大括号之前必须始终有一个空格)"|"never-single-line(在单行块中的左大括号之前绝不能有空格)"|"always-multi-line(在多行块中，左大括号之前必须始终有一个空格)"|"never-multi-line(多行块中的左大括号之前绝不能有空格)"
    'font-family-no-missing-generic-family-keyword': null, // 禁止在字体族名称列表中缺少通用字体族关键字
    'scss/at-import-partial-extension': null, // 解决不能使用 @import 引入 scss 文件
    'property-no-unknown': null, // 禁止未知的属性
    'no-empty-source': null, // 禁止空源码
    'selector-class-pattern': null, // 强制选择器类名的格式
    'value-keyword-case': null, // 解决在 scss 中使用 v-bind 大写单词报错
    'no-descending-specificity': true // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器。
  }
};
