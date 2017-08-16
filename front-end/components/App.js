import React, { Component }  from 'react';

export default class App extends Component {
	render() {
		return(
			<div>
				<h1>Hello,  Server-rendering!</h1>
				<form action="/send" method="post">
					<button type="submit">Send</button>
				</form>
			</div>
		)
	}
}