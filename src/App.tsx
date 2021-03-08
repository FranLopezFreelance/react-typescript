import { Counter } from './components/Counter';
import { User } from './components/User';
import { Timer } from './components/Timer';
import { CounterRed } from './components/CounterRed';

function App() {
	return (
		<div>
			<h1>Hola React TS!</h1>
			<hr />
			<h3>useState</h3>
			<Counter />
			<User />
			<hr />
			<h3>useEffect (y props)</h3>
			<Timer />
			<hr />
			<h3>useReducer</h3>
			<CounterRed />
			<br />
		</div>
	);
}

export default App;
