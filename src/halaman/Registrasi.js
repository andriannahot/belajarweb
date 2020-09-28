import React, {Component} from 'react';
	class Registrasi extends Component {
			constructor(props){
				super(props)
				this.state = {
					judul : 'Contoh Judul'
				}

				this.ubahState = this.ubahState.bind(this)
			}

			ubahState(e){
				this.setState({judul:'Merubah Judul'})
			}

		render(){
			return(
				<div>
				<h1>{this.state.judul}</h1>
				<button>Klik Untuk Berubah</button>
				</div>
				)
		}
	}
export default Registrasi;