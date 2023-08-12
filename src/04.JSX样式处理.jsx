// JSX样式处理
// 行内样式 - style
// 类名 - className（推荐）
import './app.css'

const obj = {
  color: 'blue',
  fontSize: '26px',
}
const showTitle = true

function App() {
  return (
    <div className="App">
      <div style={{ color: 'red', fontSize: '30px' }}> this is zhangmin</div>
      <div style={obj}> I'm 25 years old</div>
      <div className={showTitle ? 'title' : ''}>我是中国人</div>
    </div>
  )
}

export default App
