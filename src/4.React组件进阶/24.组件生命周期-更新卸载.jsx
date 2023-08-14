// 只有类组件才有生命周期（类组件 实例化  函数组件 不需要实例化）
import React from 'react'

class Test extends React.Component {
  componentWillUnmount () {
    // 执行清理工作（比如：清理定时器等）
    console.log('componentWillUnmount')
  }
  render () {
    return <div>this is Test</div>
  }
}

// 钩子顺序
// constructor -- render -- componentDidMount
// render -- componentDidUpdate
// componentWillUnmount
class App extends React.Component{
  constructor () {
    super()
    console.log('constructor')
  }
  state = {
    count: 0,
    flag: true
  }
  add = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  ddd = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  componentDidMount () {
    console.log('componentDidMount')
    // ajsx 操作dom
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  
  render () {
    console.log('render')
    return (
      <div>
        {this.state.count > 2 ? <Test/> : null}
        
        <button onClick={this.add}>+++</button>
        {this.state.count}
        <button onClick={this.ddd}>---</button>
      </div>
    )
  }
}

export default App

// 钩子函数               触发时机                                           作用

// constructor        创建组件时，最先执行，初始化的时候只执行一次           1. 初始化state  2. 创建 Ref 3. 使用 bind 解决 this 指向问题等
// render             每次组件渲染都会触发                                渲染UI（注意： 不能在里面调用setState() )
// componentDidMount  组件挂载（完成DOM渲染）后执行，初始化的时候执行一次    发送网络请求   2.DOM操作

// render                每次组件渲染都会触发              渲染UI（与 挂载阶段 是同一个render）
// componentDidUpdate    组件更新后（DOM渲染完毕）         DOM操作，可以获取到更新后的DOM内容，不要直接调用setState

// componentWillUnmount  组件卸载（从页面中消失          执行清理工作（比如：清理定时器等）