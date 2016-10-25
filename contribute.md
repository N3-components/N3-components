贡献提交方式
---------

[Guide指引](https://guides.github.com/activities/contributing-to-open-source/)

commit 提交规范
---------

#### commit 编写标准

命名统一为：`<type>(<scope>): <subject>`

```
  1. type — 提交 commit 的类型
      ○ feat: 新功能
      ○ fix: 修复问题
      ○ docs: 修改文档
      ○ style: 修改代码格式，不影响代码逻辑
      ○ refactor: 重构代码，理论上不影响现有功能
      ○ perf: 提升性能
      ○ test: 增加修改测试用例
      ○ chore: 修改工具相关（包括但不限于文档、代码生成等）
      ○ deps: 升级依赖
  2.  scope — 修改文件的范围，可选，包括但不限于 doc / plugins 等。
  3. subject — 用一句话清楚的描述这次提交做了什么。
```

#### javascript 项目 commit 提交规范提醒工具

```bash
npm install ghooks --save-dev
npm install validate-commit-msg --save-dev
```

package.json 中添加

```json
"config": {
    "ghooks": {
        "commit-msg": "validate-commit-msg"
    }
}
```
 