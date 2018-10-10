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
	calculateDimensions() {
		console.log('cos sie dzieje');
	}
	render() {
		return (
			<ThemeProvider theme={theme}>
			<Containter>
				<Ilustration calculateDimensions={this.calculateDimensions} />
				<Navigation />
			</Containter>
		</ThemeProvider>
		);
	}
}
export default FeApp;
