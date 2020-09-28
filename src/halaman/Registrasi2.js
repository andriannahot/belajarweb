import React, {Component} from 'react';
	class Registrasi extends Component {
			constructor(props){
				super(props)
				this.state = {
					valueFirstName:'',
					valueLastName:'',
					valueAlamat:'',
					valueKodePost:''
					
				}

				this.ubahState = this.ubahState.bind(this)
			}

			ubahState(namaValue, e){
				e.preventDefault()
				// console.log(e.target.value)

				// this.setState({[namaValue]: e.target.value})

				


				// this.setState((state,props)=>({
				// 	judul:'Ubah Melalui Input'
				// }))


				

				// perubahan state secara regular
				// this.setState({judul:'Merubah Judul Secara Reguler'})


				// Perubahan Secara asyncronus di Tulis dengan cara arrow function
				// this.setState((state, props) =>({
				// 	judul: 'Merubah Judul Asynchronus secara Arrow'
				// }))




				// Perubahan State Secara Asynchronus di tulis dengan cara arrow function

				// this.setState(function(state, props){
				// 	return{
				// 		judul: state.contohPerubahan
				// 	}
					
				// });




				// perubahan state secara Asynchronus

				var tampungData = e.target.value
				this.setState(function(state, props){
					return{
						[namaValue]:tampungData
					}
				});
				

			}

		render(){
			return(
				<div>
				<h1>{this.state.judul}</h1>
				{ 
					// <button type="button" onClick={this.ubahState}>Klik Untuk Berubah</button>
				}

				<p>Contoh 1</p>
				<p>{this.state.valueFirstName}</p>
				<input value={this.state.valueFirstName} onChange={(e) =>this.ubahState("valueFirstName",e)}/>

				
				<p>========================</p>


				<p>Contoh 2</p>
				<p>{this.state.valueLastName}</p>
				<input value={this.state.valueLastName} onChange={(e) =>this.ubahState("valueLastName",e)}/>


				<p>========================</p>
				<p>Contoh 3</p>
				<p>{this.state.valueAlamat}</p>
				<input value={this.state.valueAlamat} onChange={(e) =>this.ubahState("valueAlamat",e)}/>



				<p>========================</p>
				<p>Contoh 4</p>
				<p>{this.state.valueKodePost}</p>
				<input value={this.state.valueKodePost} onChange={(e) =>this.ubahState("valueKodePost",e)}/>
				</div>
				)
		}
	}
export default Registrasi;