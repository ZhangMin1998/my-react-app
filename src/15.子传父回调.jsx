// 类组件引入React
import React from 'react'

// 函数式的son
// function Son (props) {
//   const { getSonMsg } = props
//   return (
//     <div>
//       我是子组件
//       <button onClick={() => getSonMsg('Son msg')}>click</button>
//     </div>
//   )
// }
function Son (props) {
  // const { getSonMsg } = props
  function getSonMsg () {
    props.getSonMsg('Son msg')
  }
  return (
    <div>
      我是子组件
      <button onClick={getSonMsg}>click</button>
    </div>
  )
}
class SonC extends React.Component{

  render () {
    return (
      <div>
        我是类子组件SonC
      </div>
    )
  }
}

class App extends React.Component{
  state = {
    message:'this is message'
  }
  getSonMsg = (sonMsg) => {
    console.log(sonMsg)
  }
  render () {
    return (
      <div>
        我是父组件App
        <Son getSonMsg={this.getSonMsg} />
        <SonC getSonMsg={this.getSonMsg} />
      </div>
    )
  }
}

export default App

// 子传父实现
// 父组件给子组件传递回调函数，子组件调用

// 1. 父组件提供一个回调函数 - 用于接收数据
// 2. 将函数作为属性的值，传给子组件
// 3. 子组件通过props调用 回调函数
// 4. 将子组件中的数据作为参数传递给回调函数