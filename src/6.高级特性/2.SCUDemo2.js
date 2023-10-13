import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }
    render() {
        return <div>
            <input value={this.state.title} onChange={this.onTitleChange}/>
            <button onClick={this.onSubmit}>提交</button>
        </div>
    }
    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    onSubmit = () => {
        const { submitTitle } = this.props
        submitTitle(this.state.title)

        this.setState({
            title: ''
        })
    }
}
// props 类型检查
Input.propTypes = {
    submitTitle: PropTypes.func.isRequired
}

class List extends React.Component {
  constructor(props) {
      super(props)
  }
  render() {
    const { list } = this.props

    return <ul>{list.map((item, index) => {
        return <li key={item.id}>
            <span>{item.title}</span>
        </li>
    })}</ul>
  }
  componentDidUpdate() {
    console.log('List did update')
  }

  // 增加 shouldComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps.list, this.props.list)
      // _.isEqual 做对象或者数组的深度比较（一次性递归到底）
      if (_.isEqual(nextProps.list, this.props.list)) {
          // 相等，则不重复渲染
          return false
      }
      return true // 不相等，则渲染
  }
}
// props 类型检查
List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

class TodoListDemo extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          list: [
              {
                  id: 'id-1',
                  title: '标题1'
              },
              {
                  id: 'id-2',
                  title: '标题2'
              },
              {
                  id: 'id-3',
                  title: '标题3'
              }
          ]
      }
  }
  render() {
      return <div>
          <Input submitTitle={this.onSubmitTitle}/>
          <List list={this.state.list}/>
      </div>
  }
  onSubmitTitle = (title) => {
      // 正确的用法
      this.setState({
          list: this.state.list.concat({
              id: `id-${Date.now()}`,
              title
          })
      })

      // // 为了演示 SCU ，故意写的错误用法   SCU要配合不可变值
      // this.state.list.push({      // 已经改了 再setState都一样了 nextProps === this.props了  SCU返回false就不更新了
      //     id: `id-${Date.now()}`,
      //     title
      // })
      // this.setState({
      //     list: this.state.list
      // })
  }
}

export default TodoListDemo
