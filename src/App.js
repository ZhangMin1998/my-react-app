import React from 'react'
import PropTypes from 'prop-types'

class Test extends React.Component{
  // 类静态属性声明 推荐
  static defaultProps = {
    pageSize: 10
  }
  render () {
    return (
      <div>
        this is test, pageSize: {this.props.pageSize}
      </div>
    )
  }
}
Test.propTypes = { // 他妈的 这里小写
  list: PropTypes.array
}
// Test.defaultProps = { // 也可以
//   pageSize: 10
// }

class App extends React.Component{
  state = {
    
  }
  render () {
    return (
      <div>
        <Test/>
        {/* <Test pageSize={20} /> */}
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

// 通过 defaultProps 可以给组件的props设置默认值，在未传入props的时候生效
// 推荐使用函数参数默认值
// 使用类静态属性声明默认值，static defaultProps = {}