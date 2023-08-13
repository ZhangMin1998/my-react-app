// 类组件引入React
import React from 'react'

// 函数组件
// react事件采用驼峰命名法
function Hello() {
  const clickHandler = () => {
    console.log(66666)
  }
  return <div onClick={clickHandler}>hello</div>
}


// 类组件
class HelloComponent extends React.Component{
  // 事件回调函数 (标准写法 可以避免this指向问题)
  // 回调函数中的this指向是当前的组件实例对象
  clickHandler = () => {
    console.log(this)
  }
  render () {
    return <div onClick={this.clickHandler} style={{fontSize: '30px',color: 'red'}}>这是我第一个类组件</div>
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
