import { useState, useEffect } from 'react'

// 在useEffect中发送网络请求，并且封装同步 async await操作

function App () {

  useEffect(()=>{
    // async function fetchData () {
    //   const res = await fetch('http://geek.itheima.net/v1_0/channels')
    //   console.log(res)
    // }
    function fetchData () {
      fetch('http://geek.itheima.net/v1_0/channels').then(
        response => response.json()
      ).then(data => console.log(data))
    }
    fetchData()
  }, [])

  return (
    <div>
      6666
    </div>
  )
}

export default App

// 不可以直接在useEffect的回调函数外层直接包裹 await ，因为异步会导致清理函数无法立即返回

// 在内部单独定义一个函数，然后把这个函数包装成同步