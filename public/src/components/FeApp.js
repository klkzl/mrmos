import React, { Component } from 'react';

import theme from '../styles/base/Theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import Ilustration from './Ilustration';
import Navigation from './Navigation';

const Containter = styled.div`
	display: flex;
	font-family: ${props => props.theme.fontMain};
	height: 100vh;
`;

class FeApp extends Component {
	state = {
		ilustrationSize: [],
	}

	componentDidMount() {
		this.setState(() => ({ ilustrationSize: [ window.innerWidth - 300, window.innerHeight] }));
	}

	calculateCoverage = (e) => {
		e.preventDefault();
		const { target: { elements } } = e;
		const TXPower = elements.TXPowerSelector.value;
		const radioOption = elements.radioSelector.value;

		console.log(TXPower);
		console.log(radioOption);
	}

	render() {
		const ilustrationSize = this.state.ilustrationSize;

		return (
			<ThemeProvider theme={theme}>
			<Containter>
				<Ilustration ilustrationSize={ilustrationSize} />
				<Navigation calculateCoverage={this.calculateCoverage} />
			</Containter>
		</ThemeProvider>
		);
	}
}

export default FeApp;
