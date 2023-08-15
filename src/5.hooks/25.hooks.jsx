// Hooks的本质：一套能够使函数组件更强大，更灵活的“钩子”

// React体系里组件分为 类组件 和 函数组件

// 经过多年的实战，函数组件是一个更加匹配React的设计理念 UI = f(data)，
// 也更有利于逻辑拆分与重用的组件表达形式，而先前的函数组件是不可以有自己的状态的，
// 为了能让函数组件可以拥有自己的状态，所以从react v16.8开始，Hooks应运而生

// 注意点：
// 1. 有了hooks之后，为了兼容老版本，class类组件并没有被移除，俩者都可以使用
// 2. 有了hooks之后，不能在把函数认为无状态组件了，因为hooks为函数组件提供了状态
// 3. hooks只能在 函数组件 中使用

// Hooks的出现解决了俩个问题    
// 1. 组件的状态逻辑复用 
// 在hooks出现之前，react先后尝试了 mixins混入，HOC高阶组件，render-props等模式
// 但是都有各自的问题，比如mixin的数据来源不清晰，高阶组件的嵌套问题等等  

// 2.class组件自身的问题
// class组件就像一个厚重的‘战舰’ 一样，大而全，提供了很多东西，有不可忽视的学习成本，
// 比如各种生命周期，this指向问题等等，而我们更多时候需要的是一个轻快灵活的'快艇' 

// Hooks优势总结
// 1、告别难以理解的Class
// 2、解决业务逻辑难以拆分的问题
// 3、使状态逻辑复用变得简单可行
// 4、函数组件在思想上更加契合React的理念