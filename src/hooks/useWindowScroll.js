import { useState, useEffect } from "react"

export function useWindowScroll () {
  const [y, setY] = useState(0)
  // 在滚动发生的时候，不断获取滚动值，然后交给y
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollTop
    setY(h)
  })

  return [y]
}


// import { useState, useEffect } from 'react'
// import { useWindowScroll } from './hooks/useWindowScroll.js'

// // 自定义一个hook函数，实现获取滚动距离Y

// function App () {
//   const [y] = useWindowScroll()

//   useEffect(()=>{
//     console.log(y)
//   },[y])

//   return (
//     <div style={{height: '2000px'}}>
//       {y}
//     </div>
//   )
// }

// export default App
