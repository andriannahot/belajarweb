import React from 'react';

// const Header = (props) =>{
// 	return(
// 		<h2>Membuat function</h2>
// 	)
// }

// function Header(){
// 	return(
// 		<h2> membuat function</h2>
// 	)
// }

function Header (props){
	return(
		<div>
		<h2>{props.judul}</h2>
		<p>{props.ket}</p>
		</div>
		)
}



export default Header;