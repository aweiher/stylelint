import { testRule } from "../../../testUtils"
import rules from "../../../rules"
import { ruleName, messages } from ".."

const rule = rules[ruleName]

testRule(rule, {
  ruleName,
  config: [true],

  accept: [ {
    code: "@import 'x.css';",
  }, {
    code: ".foo { color: red }",
  }, {
    code: ".foo { color: red; }",
  }, {
    code: ".foo { color: red; display: block; }",
  }, {
    code: ".foo { color: red; display: block }",
  }, {
    code: "@media screen { a { color: red; } }",
  }, {
    code: "/* comment */",
  }, {
    code: "/* comment; */",
  }, {
    code: "/* ;;comment;; words;; */",
  }, {
    code: "a { content: ''; }",
  }, {
    code: "a { content: ';'; }",
  }, {
    code: "a { content: ';;'; }",
  }, {
    code: "a { content: ';\t; ;'; }",
  } ],

  reject: [ {
    code: ";",
    message: messages.rejected,
    line: 1,
    column: 1,
  }, {
    code: " ;",
    message: messages.rejected,
    line: 1,
    column: 2,
  }, {
    code: "  ;",
    message: messages.rejected,
    line: 1,
    column: 3,
  }, {
    code: "\n;",
    message: messages.rejected,
    line: 2,
    column: 1,
  }, {
    code: "\n\n;",
    message: messages.rejected,
    line: 3,
    column: 1,
  }, {
    code: "\r\n;",
    message: messages.rejected,
    line: 2,
    column: 1,
  }, {
    code: "\r\n\r\n;",
    message: messages.rejected,
    line: 3,
    column: 1,
  }, {
    code: "\r;",
    message: messages.rejected,
    line: 1,
    column: 2,
  }, {
    code: "\r\r;",
    message: messages.rejected,
    line: 1,
    column: 3,
  }, {
    code: "\t;",
    message: messages.rejected,
    line: 1,
    column: 2,
  },{
    code: "\t\t;",
    message: messages.rejected,
    line: 1,
    column: 3,
  }, {
    code: "a {;}",
    message: messages.rejected,
    line: 1,
    column: 4,
  }, {
    code: "a { ;}",
    message: messages.rejected,
    line: 1,
    column: 5,
  }, {
    code: "a {; }",
    message: messages.rejected,
    line: 1,
    column: 4,
  }, {
    code: "a { ; }",
    message: messages.rejected,
    line: 1,
    column: 5,
  }, {
    code: "a {  ;}",
    message: messages.rejected,
    line: 1,
    column: 6,
  }, {
    code: "a {;  }",
    message: messages.rejected,
    line: 1,
    column: 4,
  }, {
    code: "a {  ;  }",
    message: messages.rejected,
    line: 1,
    column: 6,
  }, {
    code: "a {   ;   }",
    message: messages.rejected,
    line: 1,
    column: 7,
  }, {
    code: "a {\n;}",
    message: messages.rejected,
    line: 2,
    column: 1,
  }, {
    code: "a {;\n}",
    message: messages.rejected,
    line: 1,
    column: 4,
  }, {
    code: "a {\n;\n}",
    message: messages.rejected,
    line: 2,
    column: 1,
  }, {
    code: "a {\r\n;}",
    message: messages.rejected,
    line: 2,
    column: 1,
  }, {
    code: "a {;\r\n}",
    message: messages.rejected,
    line: 1,
    column: 4,
  }, {
    code: "a {\r\n;\r\n}",
    message: messages.rejected,
    line: 2,
    column: 1,
  }, {
    code: "a {\t;}",
    message: messages.rejected,
    line: 1,
    column: 5,
  }, {
    code: "a {;\t}",
    message: messages.rejected,
    line: 1,
    column: 4,
  }, {
    code: "a {\t;\t}",
    message: messages.rejected,
    line: 1,
    column: 5,
  }, {
    code: "a { color: red; };",
    message: messages.rejected,
    line: 1,
    column: 18,
  }, {
    code: "a { color: red; } ;",
    message: messages.rejected,
    line: 1,
    column: 19,
  }, {
    code: "a { color: red; }\n;",
    message: messages.rejected,
    line: 2,
    column: 1,
  }, {
    code: "a { color: red; }\n\n;",
    message: messages.rejected,
    line: 3,
    column: 1,
  }, {
    code: "a { color: red; }\r\n;",
    message: messages.rejected,
    line: 2,
    column: 1,
  }, {
    code: "a { color: red; }\r\n\r\n;",
    message: messages.rejected,
    line: 3,
    column: 1,
  }, {
    code: "a { color: red; }\r;",
    message: messages.rejected,
    line: 1,
    column: 19,
  }, {
    code: "a { color: red; }\r\r;",
    message: messages.rejected,
    line: 1,
    column: 20,
  }, {
    code: "a { color: red; }\t;",
    message: messages.rejected,
    line: 1,
    column: 19,
  }, {
    code: "a { color: red; }\t\t;",
    message: messages.rejected,
    line: 1,
    column: 20,
  }, {
    code: ";a { color: red; }",
    message: messages.rejected,
    line: 1,
    column: 1,
  }, {
    code: "; a { color: red; }",
    message: messages.rejected,
    line: 1,
    column: 1,
  }, {
    code: ";  a { color: red; }",
    message: messages.rejected,
    line: 1,
    column: 1,
  }, {
    code: ";\na { color: red; }",
    message: messages.rejected,
    line: 1,
    column: 1,
  }, {
    code: ";\n\na { color: red; }",
    message: messages.rejected,
    line: 1,
    column: 1,
  }, {
    code: ";\r\na { color: red; }",
    message: messages.rejected,
    line: 1,
    column: 1,
  }, {
    code: ";\r\n\r\na { color: red; }",
    message: messages.rejected,
    line: 1,
    column: 1,
  }, {
    code: ";\ta { color: red; }",
    message: messages.rejected,
    line: 1,
    column: 1,
  }, {
    code: ";\t\ta { color: red; }",
    message: messages.rejected,
    line: 1,
    column: 1,
  }, {
    code: "@media screen { ; }",
    message: messages.rejected,
    line: 1,
    column: 17,
  }, {
    code: "@media screen { ;a { color: red; } }",
    message: messages.rejected,
    line: 1,
    column: 17,
  }, {
    code: "@media screen { a { color: red; }; }",
    message: messages.rejected,
    line: 1,
    column: 34,
  }, {
    code: "@media screen { };",
    message: messages.rejected,
    line: 1,
    column: 18,
  }, {
    code: ";@media screen { }",
    message: messages.rejected,
    line: 1,
    column: 1,
  }, {
    code: ";/* comment */",
    message: messages.rejected,
    line: 1,
    column: 1,
  }, {
    code: "/* comment */;",
    message: messages.rejected,
    line: 1,
    column: 14,
  }, {
    code: "/* comment */ ; /*comment */",
    message: messages.rejected,
    line: 1,
    column: 15,
  }, {
    code: "/* comment */\n;\n/* comment */",
    message: messages.rejected,
    line: 2,
    column: 1,
  }, {
    code: "/* comment */\r\n;\r\n/* comment */",
    message: messages.rejected,
    line: 2,
    column: 1,
  }, {
    code: "/* comment */\t;\t/* comment */",
    message: messages.rejected,
    line: 1,
    column: 15,
  }, {
    code: "a { color: red;; }",
    message: messages.rejected,
    line: 1,
    column: 16,
  }, {
    code: "a { color: red; ; }",
    message: messages.rejected,
    line: 1,
    column: 17,
  }, {
    code: "a { color: red;  ; }",
    message: messages.rejected,
    line: 1,
    column: 18,
  }, {
    code: "a { color: red;\n; }",
    message: messages.rejected,
    line: 2,
    column: 1,
  }, {
    code: "a { color: red;\n\n; }",
    message: messages.rejected,
    line: 3,
    column: 1,
  }, {
    code: "a { color: red;\r\n; }",
    message: messages.rejected,
    line: 2,
    column: 1,
  }, {
    code: "a { color: red;\r\n\r\n; }",
    message: messages.rejected,
    line: 3,
    column: 1,
  }, {
    code: "a { color: red;\t; }",
    message: messages.rejected,
    line: 1,
    column: 17,
  }, {
    code: "a { color: red;\t\t; }",
    message: messages.rejected,
    line: 1,
    column: 18,
  }, {
    code: "a { color: red ;; }",
    message: messages.rejected,
    line: 1,
    column: 17,
  }, {
    code: "a { color: red  ;; }",
    message: messages.rejected,
    line: 1,
    column: 18,
  }, {
    code: "a { color: red   ;; }",
    message: messages.rejected,
    line: 1,
    column: 19,
  }, {
    code: "a { color: red\n;; }",
    message: messages.rejected,
    line: 2,
    column: 2,
  }, {
    code: "a { color: red\n\n;; }",
    message: messages.rejected,
    line: 3,
    column: 2,
  }, {
    code: "a { color: red\r\n;; }",
    message: messages.rejected,
    line: 2,
    column: 2,
  }, {
    code: "a { color: red\r\n\r\n;; }",
    message: messages.rejected,
    line: 3,
    column: 2,
  }, {
    code: "a { color: red\t;; }",
    message: messages.rejected,
    line: 1,
    column: 17,
  }, {
    code: "a { color: red;\t\t; }",
    message: messages.rejected,
    line: 1,
    column: 18,
  }, {
    code: "@import 'x.css';;",
    message: messages.rejected,
    line: 1,
    column: 17,
  }, {
    code: "@import 'x.css'; ;",
    message: messages.rejected,
    line: 1,
    column: 18,
  }, {
    code: "@import 'x.css';  ;",
    message: messages.rejected,
    line: 1,
    column: 19,
  }, {
    code: "@import 'x.css';\n;",
    message: messages.rejected,
    line: 2,
    column: 1,
  }, {
    code: "@import 'x.css';\n\n;",
    message: messages.rejected,
    line: 3,
    column: 1,
  }, {
    code: "@import 'x.css';\r\n;",
    message: messages.rejected,
    line: 2,
    column: 1,
  }, {
    code: "@import 'x.css';\r\n\r\n;",
    message: messages.rejected,
    line: 3,
    column: 1,
  }, {
    code: "@import 'x.css';\t;",
    message: messages.rejected,
    line: 1,
    column: 18,
  } ],
})
