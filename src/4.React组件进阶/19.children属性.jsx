// 跨组件通信Context引入createContext
import React from 'react'

// 渲染表
function ListItem ({children}) {
  // children()
  return (
    <div>
      {/* ListItem, {children} */}
      ListItem, {children.map(item => item)}
    </div>
  )
}

// 数据提供者
class App extends React.Component{
  state = {
    
  }
  render () {
    return (
      <div>
        <ListItem>
          {/* zm666 */}
          {/* <p>zm6666</p> */}
          {/* {() => console.log(666)} */}
          {/* {<div><p>{'this is jsx'}</p></div>} */}
          <div>this is div</div>
          <p>this is p</p>
        </ListItem>
      </div>
    )
  }
}

export default App

// children属性   表示该组件的子节点，只要组件内部有子节点，props中就有该属性
// 1. 普通文本
// 2. 普通标签元素
// 3. 函数 / 对象
// 4. JSX

// 目的：高阶组件