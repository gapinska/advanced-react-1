import './App.css'
import Movie from './components/Movie'
import User from './components/User'

function App() {
	return (
		<div className="App">
			<Movie className="red" />
			<User render={(isLoggedIn) => (isLoggedIn ? 'user' : 'guest')} />
		</div>
	)
}

export default App
