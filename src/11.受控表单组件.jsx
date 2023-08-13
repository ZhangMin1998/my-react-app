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

// 1. 在组件的state中声明一个组件的状态数据
// 2. 将状态数据设置为input标签元素的value属性的值
// 3. 为input添加change事件，在事件处理程序中，通过事件对象e获取到当前文本框的值（即用户当前输入的值）
// 4. 调用setState方法，将文本框的值作为state状态的最新值
