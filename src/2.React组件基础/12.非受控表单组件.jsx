// 类组件引入React createRef
import React, { createRef } from 'react'

class InputComponent extends React.Component{
  // 使用createRef产生一个存放dom的对象容器
  msgRef = createRef()

  changeHandler = () => {
    console.log(this.msgRef.current)
    console.log(this.msgRef.current.value)
  }

  render () {
    // 使用状态
    return (
      <div>
        {/* ref绑定 获取真实dom */}
        <input ref={this.msgRef} />
        <button onClick={this.changeHandler}>click</button>
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


// 非受控组件： 
// 通过手动操作dom的方式获取文本框的值
// 文本框的状态不受react组件的state中的状态控制
// 直接通过原生dom获取输入框的值

// 1.导入createRef 函数
// 2.调用createRef函数，创建一个ref对象，存储到名为msgRef的实例属性中
// 3.为input添加ref属性，值为msgRef
// 4.在按钮的事件处理程序中，通过msgRef.current即可拿到input对应的dom元素，
// 而其中msgRef.current.value拿到的就是文本框的值
