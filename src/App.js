import React from 'react'
import PropTypes from 'prop-types'

function Test ({list}) {
  return (
    <div>
      {list.map(item => <p key={item}>{item}</p>)}
    </div>
  )
}
Test.propTypes = { // 他妈的 这里小写
  // 定义规则
  list: PropTypes.array.isRequired
}

class App extends React.Component{
  state = {
    
  }
  render () {
    return (
      <div>
        <Test list={[1,2,3,4]} />
      </div>
    )
  }
}

export default App

// props校验
// 1. 安装属性校验包：yarn add prop-types
// 2. 导入prop-types 包
// 3. 使用 组件名.propTypes = {} 给组件添加校验规则

// props常见的规则
// 1. 常见类型：array、bool、func、number、object、string, symbol
// 2. React元素类型：element
// 3. 必填项：isRequired
// 4. 特定的结构对象：shape({})

// // 常见类型
// optionalFunc: PropTypes.func,
// // 必填 只需要在类型后面串联一个isRequired
// requiredFunc: PropTypes.func.isRequired,
// // 特定结构的对象
// optionalObjectWithShape: PropTypes.shape({
// 	color: PropTypes.string,
// 	fontSize: PropTypes.number
// })