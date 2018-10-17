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
		APLocation: [],
	}

	componentDidMount() {
		this.setStartingLocation();
	}

	calculateCoverage = (e) => {
		e.preventDefault();
		const { target: { elements } } = e;
		const TXPower = elements.TXPowerSelector.value;
		const radioOption = elements.radioSelector.value;

		console.log(TXPower);
		console.log(radioOption);
	}

	handleStart = (data) => {
		console.log(this.state.APLocation);
	}

	handleDrag = (e, data) => {
		this.setState(() => ({ APLocation: [data.x, data.y ]}));
		console.log(this.state.APLocation);
	}

	handleStop = (data) => {
		console.log('dragging finished');
	}

	setStartingLocation = (el) => {
		if (el) {
			this.setState(() => ({ APLocation: [ el.getBoundingClientRect().x, el.getBoundingClientRect().y ]}));
			console.log(el);
		}
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
			<Containter>
				<Ilustration
					setStartingLocation={this.setStartingLocation}
					handleStart={this.handleStart}
					handleDrag={this.handleDrag}
					handleStop={this.handleStop}
				/>
				<Navigation
					calculateCoverage={this.calculateCoverage}
				/>
			</Containter>
		</ThemeProvider>
		);
	}
}

export default FeApp;