import { useState, useEffect } from 'react'

// 在修改数据后，把count值放在页面标题中

function App () {
  const [count, setCount] = useState(0)
  // document.title = `点击了${count}次`

  useEffect(()=>{
    // dom操作
    document.title = `点击了${count}次`
  })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
}

export default App


// let count = 0
// function getNum (a, b) {
//   count++ // 副作用
//   return a + b
// }

// React 组件: 主作用就是根据数据(state/props)渲染 UI,除此之外都是副作用（比如，手动修改 DOM）

// 常见的副作用
// 1. 数据请求 ajax发送
// 2. 手动修改dom
// 3. localstorage操作

// useEffect函数的作用就是为react函数组件提供副作用处理的！

// 使用步骤
// 1. 导入 useEffect 函数
// 2. 调用 useEffect 函数，并传入回调函数
// 3. 在回调函数中编写副作用处理（dom操作）
// 4. 修改数据状态
// 5. 检测副作用是否生效