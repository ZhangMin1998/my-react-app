// 跨组件通信Context引入createContext
import React from 'react'

// 渲染表
// function ListItem (props) {
//   const {id, name, price, info, delHandler} = props
//   return (
//     <div>
//       <h3>{name}</h3>
//       <p>{price}</p>
//       <p>{info}</p>
//       <button onClick={() => delHandler(id)}>删除</button>
//     </div>
//   )
// }

class ListItem extends React.Component{
  render () {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.price}</p>
        <p>{this.props.info}</p>
        <button onClick={() => this.props.delHandler(this.props.id)}>删除</button>
      </div>
    )
  }
}

// 数据提供者
class App extends React.Component{
  state = {
    list: [
      { id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业大酬宾，全场8折' },
      { id: 2, name: '超级好吃的大鸡腿', price: 34.2, info: '开业大酬宾，全场8折' },
      { id: 3, name: '超级无敌的冰激凌', price: 14.2, info: '开业大酬宾，全场8折' }
    ]
  }
  delHandler = (id) => {
    console.log(id)
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }
  render () {
    return (
      <>
        {
          this.state.list.map(item => 
            <ListItem
              key={item.id}
              {...item}
              delHandler={this.delHandler}
            />
          )
        }
      </>
    )
  }
}

export default App