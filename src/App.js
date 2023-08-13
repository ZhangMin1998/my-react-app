// 类组件引入React
import React from 'react'

// 函数组件
// 传递自定义参数
function Hello() {
  const clickHandler = (e, msg) => {
    // e.preventDefault() // 阻止事件的默认行为
    console.log(66666, e, msg)
  }
  return (
    <div onClick={(e) => clickHandler(e, '张敏我爱你')}>
      {/* <a href='https://www.baidu.com'>百度</a> */}
      这是函数组件
    </div>
  )
}


// 类组件
class HelloComponent extends React.Component{
  // 事件回调函数 (标准写法 可以避免this指向问题)
  // 回调函数中的this指向是当前的组件实例对象
  clickHandler = (e, num) => {
    console.log(this, e, num)
  }
  render () {
    return (
      <>
        <button onClick={(e) => this.clickHandler(e, '123')}>click me</button>
        {/* <div onClick={this.clickHandler} style={{fontSize: '30px',color: 'red'}}>这是我第一个类组件</div> */}
      </>
    )
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
