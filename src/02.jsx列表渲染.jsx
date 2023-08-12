// JSX列表渲染
// 使用数组的map 方法
// 注意点：需要为遍历项添加 key 属性

const songs = [
  {
    id:1,
    name: '红尘客栈'
  },
  {
    id:2,
    name: '明明就'
  },
  {
    id:3,
    name: '七里香'
  }
]

function App() {
  return (
    <div className="App">
      <ul>
        {
          songs.map(item => <li key={item.id}>{item.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
