import countStore from './store/countStore'
import StoreExample from './StoreExample'


function App() {
  
  const {count, 메시지, increaseCount,decreaseCount,initializeCount, addCount} = countStore();

  return (
    <div>
      <div>count: {count}</div>
      <div>메시지: {메시지}</div>
      <button onClick={increaseCount}>1씩증가</button>
      <button onClick={decreaseCount}>1씩감소</button>  
      <button onClick={initializeCount}>초기화</button>
      <button onClick={()=>addCount(10)}>10씩증가</button>
      <div>------</div>
      <StoreExample />      
    </div>
  );
}

export default App;
