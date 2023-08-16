import { useState, useEffect } from 'react'
import { useWindowScroll } from './hooks/useWindowScroll.js'

// 自定义一个hook函数，实现获取滚动距离Y

function App () {
  const [y] = useWindowScroll()

  useEffect(()=>{
    console.log(y)
  },[y])

  return (
    <div style={{height: '2000px'}}>
      {y}
    </div>
  )
}

export default App
