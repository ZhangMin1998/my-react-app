// 类组件引入React
import React from 'react'

// 函数式的son
function Son (props) {
  // 函数式组件直接通过参数获取props对象
  return (
    <div>我是子组件, {props.msg}</div>
  )
}
class SonC extends React.Component{

  render () {
    return (
      // 类组件使用this.props获取props对象
      <div>
        我是类子组件SonC, {this.props.msg}
      </div>
    )
  }
}

class App extends React.Component{
  state = {
    message:'this is message'
  }
  render () {
    return (
      <div>
        我是父组件App
        <SonC msg={this.state.message} />
        <Son  msg={this.state.message} />
      </div>
    )
  }
}

export default App

// 父传子实现
// 1. 父组件提供要传递的数据  -  state 
// 2.  给子组件标签添加属性值为 state中的数据 
// 3.  子组件中通过 props 接收父组件中传过来的数据 
//   a. 类组件使用this.props获取props对象
//   b. 函数式组件直接通过参数获取props对象