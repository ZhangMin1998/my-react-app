
const name = '张敏'
const getAge = () => {
  return 25
}
const isTrue = true

function App() {
  return (
    <div className="App">
      <h1>你好，我叫{name}</h1>
      <h2>今年{getAge()}岁</h2>
      <h3>{isTrue ? '真帅' : '666'}</h3>
    </div>
  )
}

export default App;
