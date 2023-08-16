import { useState } from 'react'

function App () {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(true)
  const [name, setName] = useState('cp')
  const [list, setList] = useState([])

  function test () {
    setCount(count + 1)
    setFlag(false)
    setName('zz')
    setList([1,2,3])
  }

  return (
    <div>
      <p>count: {count}</p>
      <p>flag: {flag ? 'true' : 'false'}</p>
      <p>name: {name}</p>
      <p>list: {list.join('-')}</p>
      <button onClick={test}>click</button>
    </div>
  )
}

export default App

// useState 函数可以执行多次，每次执行互相独立，每调用一次为函数组件提供一个状态 
// useState只能出现在函数组件或者其他hook函数中 
// 不能嵌套在if/for/其它函数中（react按照hooks的调用顺序识别每一个hook） 只能在最外层