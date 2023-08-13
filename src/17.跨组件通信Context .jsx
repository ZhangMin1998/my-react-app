// 跨组件通信Context引入createContext
import React, { createContext }  from 'react'

// App传数据给组件C  App -- A -- C

// 1. 创建Context对象 
const { Provider, Consumer } = createContext()

function SonA () {
  return (
    <div>
      我是组件SonA
      <SonC />
    </div>
  )
}

// function SonC () {
//   return (
//     <div>
//       我是组件SonC
//       <Consumer >
//           {value => <div>我是{value.name}， 今年{value.age}</div>}
//       </Consumer>
//     </div>
//   )
// }
class SonC extends React.Component{

  render () {
    return (
      <div>
        我是类子组件SonC
        <Consumer>
          {value => <div>我是{value.name}， 今年{value.age}</div>}
        </Consumer>
      </div>
    )
  }
}

class App extends React.Component{
  state = {
    message:'this is message 666',
    obj: {
      name: 'zm',
      age: 25
    }
  }
  render () {
    return (
      <div>
        我是组件App
        <Provider value={this.state.obj}>
          <SonA />
        </Provider>
      </div>
    )
  }
}

export default App

// 跨组件通信Context  例如 父传孙
// Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法

// 1- 创建Context对象 导出 Provider 和 Consumer对象 
//    const { Provider, Consumer } = createContext()
// 2- 使用Provider包裹上层组件提供数据 
//    <Provider value={this.state.message}>
//       {/* 根组件 */}
//    </Provider>
// 3- 需要用到数据的组件使用Consumer包裹获取数据
//    <Consumer >
//      {value => /* 基于 context 值进行渲染*/}
//    </Consumer>