// 类组件引入React
import React from 'react'

// 类组件 this有问题的写法

// 1.constructor中通过bind强行绑定this

// class HelloComponent extends React.Component{
//   constructor () {
//     super()
//     // 使用bind强行修改this指向
//     // 相当于在类组件初始化的阶段，就可以把回调函数的this修改到
//     // 永远指向当前组件的实例对象
//     this.clickHandler = this.clickHandler.bind(this)
//   }
//   clickHandler () {
//     console.log(this)
//   }
//   render () {
//     return <div onClick={this.clickHandler} style={{fontSize: '30px',color: 'red'}}>这是我第一个类组件</div>
//   }
// }

// 2.箭头函数写法

// class HelloComponent extends React.Component{
//   clickHandler () {
//     console.log(this)
//   }
//   render () {
//     // render函数的this已经被react做了修改
//     // 这里的this就是指向当前组件实例
//     console.log('父函数中的this指向为：', this)
//     // 通过箭头函数的写法 直接沿用父函数的this指向也ok
//     return <div onClick={() => this.clickHandler()} style={{fontSize: '30px',color: 'red'}}>这是我第一个类组件</div>
//   }
// }


// 3. class field写法  最推荐
class HelloComponent extends React.Component{
  clickHandler = () => {
    console.log(this)
  }
  render () {
    return <div onClick={this.clickHandler} style={{fontSize: '30px',color: 'red'}}>这是我第一个类组件</div>
  }
}

function App () {
  return (
    <div className="App">
      <HelloComponent/>
    </div>
  )
}

export default App
