import { useState } from 'react'

function Counter(props) {
  const [count, setCount] = useState(() => {
    return props.count
  })
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

function App () {
  
  return (
    <>
      <Counter count={10} />
      <Counter count={20} />
    </>
  )
}

export default App


// 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。
// 如果初始 state 需要通过计算才能获得，则可以传入一个函数，
// 在函数中计算并返回初始的 state，此函数只在初始渲染时被调用

// 语法规则
// 1. 回调函数return出去的值将作为 name 的初始值
// 2. 回调函数中的逻辑只会在组件初始化的时候执行一次

// 语法选择
// 1. 如果就是初始化一个普通的数据 直接使用 useState(普通数据) 即可
// 2. 如果要初始化的数据无法直接得到需要通过计算才能获取到，
// 使用useState(()=>{})