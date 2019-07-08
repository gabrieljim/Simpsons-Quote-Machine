import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Joke from './components/Joke'

class App extends React.Component{
	render() {
		return(
			<div>
				<script src='https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'></script>
				<div id="quote-box">
					<Joke />
				</div>
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));

