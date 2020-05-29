import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';
import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';
import Tabla from './Tabla';

class Usuarios extends Component {
	componentDidMount() {
		this.props.traerTodos();
	}
	ponerContenido = () => {
		if (this.props.cargando) {
			return <Spinner />;
		}
		if (this.props.error) {
			return <Fatal mensaje={this.props.error} />;
		}
		return <Tabla />;
	};

	render() {
		return (
			<div>
				<h1>Usuarios:</h1>
				{this.ponerContenido()}
			</div>
		);
	}
}

const mapStateToProps = (reducers) => {
	return reducers.usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(Usuarios);
