import React, { Component } from 'react';

import { DragDropContext } from 'react-beautiful-dnd';

import theme from '../styles/base/Theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import Ilustration from './Ilustration';
import Navigation from './Navigation';

const Containter = styled.div`
	display: flex;
	font-family: 'Arial';
`;

class FeApp extends Component {

	onDragEnd = result => {

	}

	render() {
		return (
			<ThemeProvider theme={theme}>
			<Containter>
				<DragDropContext onDragEnd={this.onDragEnd}>
					<Ilustration />
				</DragDropContext>
				<Navigation />
			</Containter>
		</ThemeProvider>
		);
	}
}
export default FeApp;
