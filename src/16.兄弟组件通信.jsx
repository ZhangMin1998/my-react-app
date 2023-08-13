// 类组件引入React
import React from 'react'

// 目标： 把B组件数据传给A组件

function SonA (props) {
  const { msg } = props
  return (
    <div>
      我是子组件SonA, msg: {msg}
    </div>
  )
}

function SonB (props) {
  // const { changeMsg } = props
  const changeMsg = () => {
    props.changeMsg('newMsg')
  }
  return (
    <div>
      我是子组件SonB
      <button onClick={changeMsg}>发送数据</button>
    </div>
  )
}
// class SonB extends React.Component{

//   changeMsg = () => {
//     this.props.changeMsg('newMsg')
//   }
//   render () {
//     return (
//       <div>
//         我是类子组件SonB
//         <button onClick={this.changeMsg}>发送数据</button>
//       </div>
//     )
//   }
// }

class App extends React.Component{
  state = {
    message:'this is message'
  }
  changeMsg = (msg) => {
    console.log(msg)
    this.setState({
      message: msg
    })
  }
  render () {
    return (
      <div>
        我是父组件App
        <SonA msg={this.state.message}/>
        <SonB changeMsg={this.changeMsg} />
      </div>
    )
  }
}

export default App

// 兄弟组件通信

// 1. 将共享状态提升到最近的公共父组件中，由公共父组件管理这个状态 
//     - 提供共享状态
//     - 提供操作共享状态的方法
// 2. 要接收数据状态的子组件通过 props 接收数据
// 3. 要传递数据状态的子组件通过props接收方法，调用方法传递数据