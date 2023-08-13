// 类组件引入React
import React from 'react'

class InputComponent extends React.Component{
  state = {
    message: 'zm66666'
  }
  changeHandler = (e) => {
    this.setState({
      message: e.target.value
    })
  }
  render () {
    // 使用状态
    return (
      <div>
        {/* 绑定value 绑定事件 */}
        <input type='text' value={this.state.message} onChange={this.changeHandler} />
      </div>
    )
  }
}

function App () {
  return (
    <div className="App">
      <InputComponent/>
    </div>
  )
}

export default App


// 受控组件：input框自己的状态被React组件状态控制
