import React from 'react';

// 
class Footer extends React.Component {
	render() {
		return(
			<div>
			<h2>====Batas====</h2>
			<h3>{this.props.judul}</h3>
			<p>{this.props.ket}</p>
		</div>	
		)
	}
}

// class Footer extends Component {
// 	render(){
// 		return(
// 		<h2>Membuat class dengan compononent</h2>)
// 	}
// }

export default Footer;