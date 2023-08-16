import { useState, useEffect } from "react"

export function useLocalStorage (key, defaultValue) {
  const [message, setMessage] = useState(defaultValue)
  // 每次只要message变化 就会自动同步到本地ls
  useEffect(() => {
    window.localStorage.setItem(key, message)
  }, [key, message])
  return [message, setMessage]
}

// import { useLocalStorage } from './hooks/useLocalStorage.js'

// // 自定义一个hook函数，实现获取滚动距离Y

// function App () {
//   const [message, setMessage] = useLocalStorage('hook-key', 1)
//   setTimeout(() => {
//     setMessage(999)
//   }, 3000)
//   return (
//     <div>
//       {message}
//     </div>
//   )
// }

// export default App



// const [message, setMessage] = useLocalStorage(key，defaultValue)
// 1. message可以通过自定义传入默认初始值
// 2. 每次修改message数据的时候 都会自动往本地同步一份