// 类组件引入React
import React from 'react'

// 类组件 this有问题的写法
class HelloComponent extends React.Component{
  constructor () {
    super()
    // 使用bind强行修改this指向
    // 相当于在类组件初始化的阶段，就可以把回调函数的this修改到
    // 永远指向当前组件的实例对象
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler () {
    console.log(this)
  }
  render () {
    return <div onClick={this.clickHandler} style={{fontSize: '30px',color: 'red'}}>这是我第一个类组件</div>
  }
}

function App () {
  return (
    <div className="App">
      <HelloComponent/>
    </div>
  )
}

export default App
