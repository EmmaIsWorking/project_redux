import React from 'react';
import '../index.css';

const App = () => {
	const ponerFilas = () => [
		<tr>
			<td>Emmanuel</td>
			<td>dimple.pleod@gmail.com</td>
			<td>emadev.com</td>
		</tr>,
		<tr>
			<td>Platzi</td>
			<td>platzi@platzi</td>
			<td>platzi.com</td>
		</tr>,
	];

	return (
		<div className='margen'>
			<table className='tabla'>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Correo</th>
						<th>Enlace</th>
					</tr>
				</thead>
				<tbody>{ponerFilas()}</tbody>
			</table>
		</div>
	);
};

export default App;
