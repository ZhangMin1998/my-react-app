// jsx条件渲染
// 实现：可以使用 三元运算符  或   逻辑与(&&)运算符
const flag = true
function App() {
  return (
    <div className="App">
      { flag ? <span>this is span</span> : 6666 }
      { flag && <span>张敏爱妞妞</span>}
    </div>
  )
}

export default App;
