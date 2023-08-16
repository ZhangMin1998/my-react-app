import { useState } from 'react'

function App () {
  const [count, setCount] = useState(0)
  // useState传过来的参数作为count的初始值
  // [count, setCount] 参数名可以自定义
  // count, setCount是绑在一起的
  console.log(count)
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
// 注意：修改状态的时候，一定要使用新的状态替换旧的状态，不能直接修改旧的状态，尤其是引用类型

// 组件的更新过程: 函数组件使用 useState hook 后的执行过程，以及状态值的变化
// 组件第一次渲染 
// a. 从头开始执行该组件中的代码逻辑
// b. 调用 useState(0) 将传入的参数作为状态初始值，即：0
// c. 渲染组件，此时，获取到的状态 count 值为： 0
// 组件第二次渲染 
// 组件重新渲染时，会再次执行该组件中的代码逻辑
// 再次调用 useState(0)，此时 React 内部会拿到最新的状态值而非初始值 用新值渲染
// 注意：useState 的初始值(参数)只会在组件第一次渲染时生效。