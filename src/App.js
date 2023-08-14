// 只有类组件才有生命周期（类组件 实例化  函数组件 不需要实例化）
import React from 'react'

// 钩子顺序  constructor -- render -- componentDidMount
class App extends React.Component{
  constructor () {
    super()
    console.log('constructor')
  }
  componentDidMount () {
    console.log('componentDidMount')
    // ajsx 操作dom
  }
  render () {
    console.log('render')
    return (
      <div>
        666
      </div>
    )
  }
}

export default App

// 钩子函数               触发时机                                        作用
// constructor        创建组件时，最先执行，初始化的时候只执行一次         1. 初始化state  2. 创建 Ref 3. 使用 bind 解决 this 指向问题等
// render             每次组件渲染都会触发                              渲染UI（注意： 不能在里面调用setState() )
// componentDidMount  组件挂载（完成DOM渲染）后执行，初始化的时候执行一次   发送网络请求   2.DOM操作