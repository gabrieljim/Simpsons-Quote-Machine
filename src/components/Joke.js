import React from 'react';

export default class Joke extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quote:"",
			character:"",
			img:"",
		}
	}

	makeRequest() {
		this.setState({quote:"Fetching..."});
		fetch('https://thesimpsonsquoteapi.glitch.me/quotes', {
			method:'GET',
		})
			.then(res => res.json())
			.then(data => {
				data=data[0];
				console.log(data)
				this.setState({
					quote:data.quote,
					character:data.character,
					img:data.image,
				})
			})
	}

	componentWillMount(){
		this.makeRequest();
	}

	render() {
		const shareLink="https://twitter.com/intent/tweet/?text=" + this.state.quote + " -" + this.state.character;
		return(
			<div>
				<button id="new-quote" onClick={() => this.makeRequest()}>Get Quote</button>
				<h3 className="fade" id="text"><em>{this.state.quote}</em></h3>
				<p className="fade" id="author">{"-"+this.state.character}</p>
				<img className="fade" src={this.state.img} alt=""/>
				<a className="fade" id="tweet-quote" href={shareLink}><button>Tweet</button></a>
			</div>
		)
	}
}
