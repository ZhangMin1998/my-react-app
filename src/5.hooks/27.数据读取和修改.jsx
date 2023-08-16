import { useState } from 'react'

function App () {
  const [count, setCount] = useState(0)
  // useState传过来的参数作为count的初始值
  // [count, setCount] 参数名可以自定义
  // count, setCount是绑在一起的
  return (
    <div>
      <button onClick={() => {setCount(count + 1)}}>{count}</button>
    </div>
  )
}

export default App

// useState为函数组件提供状态（state）

// 使用步骤
// 1. 导入 useState 函数
// 2. 调用 useState 函数，并传入状态的初始值
// 3. 从useState函数的返回值中，拿到状态和修改状态的方法
// 4. 在JSX中展示状态
// 5. 调用修改状态的方法更新状态

// 读取状态
// 该方式提供的状态，是函数内部的局部变量，可以在函数内的任意位置使用

// 修改状态
// 1. setCount是一个函数，参数表示最新的状态值
// 2. 调用该函数后，将使用新值替换旧值
// 3. 修改状态后，由于状态发生变化，会引起视图变化