import { useState, useEffect } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage.js'

// 自定义一个hook函数，实现获取滚动距离Y

function App () {
  const [message, setMessage] = useLocalStorage('hook-key', 1)
  setTimeout(() => {
    setMessage(999)
  }, 3000)
  return (
    <div>
      {message}
    </div>
  )
}

export default App

// 1. message可以通过自定义传入默认初始值
// 2. 每次修改message数据的时候 都会自动往本地同步一份
