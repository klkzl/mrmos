import React, { Component } from 'react';

import theme from '../styles/base/Theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import Ilustration from './Ilustration';
import Navigation from './Navigation';

const Containter = styled.div`
	display: flex;
	font-family: 'Arial';
	height: 100vh;
`;

class FeApp extends Component {
	state = {
		position: [0, 0],
	}

	render() {
		const { position } = this.state;
		return (
			<ThemeProvider theme={theme}>
			<Containter>
					<Ilustration position={position} />
				<Navigation />
			</Containter>
		</ThemeProvider>
		);
	}
}
export default FeApp;
