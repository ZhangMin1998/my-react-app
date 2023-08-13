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

// 模板精简原则

// const getHtag = (type) => {
//   if (type === 1) {
//     return <h1>this is h1</h1>
//   } else if (type === 2) {
//     return <h2>this is h2</h2>
//   } else if (type === 3) {
//     return <h3>this is h3</h3>
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       {getHtag(1)}
//       {getHtag(2)}
//       {getHtag(3)}
//     </div>
//   )
// }

// export default App;

