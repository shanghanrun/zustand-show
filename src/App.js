import calcStore from './store/calcStore'

function App() {
  const {count, increaseCount, decreaseCount, addCount, initializeCount} = calcStore();

  function increaseTen(){
    addCount(10);
  }

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={increaseCount}>1씩증가</button>
      <button onClick={decreaseCount}>1씩감소</button>
      <button onClick={increaseTen}>10씩증가</button>
      <button onClick={initializeCount}>초기화</button>
    </div>
  );
}

export default App;
