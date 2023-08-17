import React, { useEffect, useRef } from 'react'

// 在函数组件中获取真实的dom元素对象或者是组件对象

// 使用步骤
// 1. 导入 useRef 函数
// 2. 执行 useRef 函数并传入null，返回值为一个对象 内部有一个current属性存放拿到的dom对象（组件实例）
// 3. 通过ref 绑定 要获取的元素或者组件

// 获取dom  标签
function App() {  
  const h1Ref = useRef(null)
  const fooRef = useRef(null)
  useEffect(() => {    
      console.log(h1Ref)
      console.log(fooRef) 
  },[])
  // useEffect 回调 是在dom渲染完成后！！！！
  return (    
      <div>
        <Foo ref={fooRef}/> 
        <h1 ref={ h1Ref }>this is h1</h1>    
      </div>  
  )
}
export default App


// 获取组件实例    函数组件由于没有实例，不能使用ref获取，如果想获取组件实例，必须是类组件

class Foo extends React.Component {
  sayHi = () => {    
    console.log('say hi')  
  }  
  render(){    
    return <div>Foo</div>  
  }
}