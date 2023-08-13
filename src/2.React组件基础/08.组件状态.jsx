// 类组件引入React
import React from 'react'

// 组件状态
// 不要直接修改state中的值，必须通过setState方法进行修改 
class TestComponent extends React.Component{
  // 定义组件状态
  state = {
    name: 'zm',
    count: 0
  }
  setCount = () => {
    this.setState({
      count: this.state.count + 1,
      name: 'zzzz'
    })
  }
  render () {
    // 使用状态
    return (
      <div>
        this is TestComponent, name为: {this.state.name}, count: {this.state.count}
        <button onClick={this.setCount}>click++</button>
      </div>
    )
  }
}

function App () {
  return (
    <div className="App">
      <TestComponent/>
    </div>
  )
}

export default App
