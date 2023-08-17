import { createContext, useContext } from 'react'

// 创建Context对象
const Context = createContext()

function ComA() {  
  return (
    <div>AAAAA ------ <ComC/></div>
    
  )
}
function ComC() {
  // 底层组件通过useContext函数获取数据  
  const num = useContext(Context)  
  return (
    <div>CCCCCC ----- {num}</div>
  )
}
function App() {  
  return (
    // 顶层组件通过Provider 提供数据    
    <Context.Provider value={99999}>     
        <div>666 ------ <ComA/></div>   
    </Context.Provider> 
  )
}

export default App

// 实现步骤
// 1. 使用createContext 创建Context对象
// 2. 在顶层组件通过Provider 提供数据
// 3. 在底层组件通过useContext函数获取数据