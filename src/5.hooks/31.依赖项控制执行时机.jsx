import { useState, useEffect } from 'react'

// 在修改数据后，把count值放在页面标题中

function App () {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(25) 
  // document.title = `点击了${count}次`

  useEffect(()=>{
    // dom操作
    document.title = `点击了${count}次`
    console.log(111)
  })
  useEffect(()=>{
      console.log('副作用执行一次')
  },[])
  useEffect(()=>{
    console.log('修改了age')
    console.log(count)
  },[age,count])

  return (
    <div>
      count: {count} ----- age:{age}
      <button onClick={() => setCount(count + 1)}>count</button>
      <button onClick={() => setAge(age + 1)}>age</button>
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

// 依赖项控制执行时机
// 1.默认（无依赖）
// 组件首次渲染执行一次，以及不管是哪个状态更改引起组件更新时都会重新执行
// 2.添加空数组,组件只在首次渲染时执行一次
// useEffect(()=>{
//   console.log('副作用执行了')
// },[])
// 3.添加特定依赖项
// 副作用函数在首次渲染时执行，在依赖项发生变化时重新执行
// useEffect(() => {    
//   console.log('副作用执行了')  
// }, [count]) 
// 注意事项
// useEffect 回调函数中用到的数据（比如，count）就是依赖数据，
// 就应该出现在依赖项数组中，如果不添加依赖项就会有bug出现
// useEffect(() => {    
//   console.log('副作用执行了')
//   console.log(age) // age要加在下面一行数组里 否则有bug
// }, [count]) 
// 某种意义上，hook的出现 就是想不用生命周期也可以写业务代码