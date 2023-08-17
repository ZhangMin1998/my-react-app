import { useState, useEffect } from 'react'


function App () {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const timeId = setInterval(() => {
      setCount(count + 1)
      console.log('副作用执行了')
    }, 2000)
    return () => {
      console.log('清理函数副作用')
      clearInterval(timeId)
    }
  }, [count])

  return (
    <div>
      {count}
    </div>
  )
}

export default App


// 注意执行时机为：
// 1. 组件卸载时自动执行
// 2. 组件更新时，下一个useEffect副作用函数执行之前自动执行

// useEffect(()=>{
//   console.log('副作用执行了')
//   return () => {
//     console.log('清理函数副作用')
//   }
// })
