import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementBy,
  incrementReducerAction,
  reset,
} from './store/slices/counter/counterSlice';

function App() {
  // para leer del store
  // const { counter } = useSelector((state) => state.counter);
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className='card'>
        <button onClick={() => dispatch(incrementReducerAction())}>
          Increment
        </button>
        <button onClick={() => dispatch(incrementBy(10))}>incrementBy10</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
      <div className='card'></div>
    </>
  );
}

export default App;
