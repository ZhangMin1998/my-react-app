// 类组件引入React
import React from 'react'

// 函数组件

// 创建
// 组件的名称必须首字母大写
// 函数组件必须有返回值 如果不需要渲染任何内容，则返回 null
// 渲染 <Hello/> <Hello></Hello>
function Hello() {
  return <div>hello</div>
}


// 类组件
// 使用 ES6 的 class 创建的组件，叫做类（class）组件
// 类名称也必须以大写字母开头
// 类组件应该继承 React.Component 父类，从而使用父类中提供的方法或属性
// 类组件必须提供 render 方法render 方法必须有返回值，表示该组件的 UI 结构
class HelloComponent extends React.Component{
  render () {
    return <div style={{fontSize: '30px',color: 'red'}}>这是我第一个类组件</div>
  }
}

function App () {
  return (
    <div className="App">
      <Hello/>
      <Hello></Hello>
      <HelloComponent/>
      <HelloComponent></HelloComponent>
    </div>
  )
}

export default App
