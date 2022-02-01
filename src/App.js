import React from "react";
import './App.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch("https://61f4e42262f1e300173c3f3e.mockapi.io/NFTS")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Fetching data from ColoursNFT-API </h1> {
				items.map((item) => (
				<ol key = { item.id } >
					name: { item.name },
					description: { item.description },
					image: { item.image }
					</ol>
				))
			}
		</div>
	);
}
}

export default App;
