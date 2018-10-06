import React from 'react';

import theme from '../styles/base/Theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const Containter = styled.div`
	display: flex;
	font-family: 'Arial';
`;

const Ilustration = styled.div`
	background-color: purple;
	flex-grow: 1;
	height: 100vh;
`;
const Navigation = styled.div`
	background-image: linear-gradient(${props => props.theme.nawigationGrey}, black);
	color: white;
	height: 100vh;
	width: ${props => props.theme.module * 10}px;
	padding: ${props => props.theme.module}px ${props => props.theme.module * .5}px;
	font-weight: 600;
`;

const Title = styled.h4`
	margin: 0 0 ${props => props.theme.module / 3}px;
	color: ${props => props.theme.fontGrey};
`;

const Select = styled.select`
	color: white;
	border: 1px solid ${props => props.theme.fontGrey};
	background-color: transparent;
	width: 100%;
	height: ${props => props.theme.module}px;
	padding-left: ${props => props.theme.module / 6}px;
	cursor: pointer;
	margin-bottom: ${props => props.theme.module}px;
	font-weight: 600;

	&:focus {
		outline: none;
	}
`;

const Option = styled.option`
	background-color: ${props => props.theme.nawigationGrey};
`;

const Label = styled.label`
	display: block;
	position: relative;
	cursor: pointer;
	line-height: ${props => props.theme.module}px;
	padding-left: ${props => props.theme.module * 1.2}px;

	&:last-of-type {
		margin-bottom: ${props => props.theme.module * .5}px;
	}
`;

const Input = styled.input`
	position: absolute;
	visibility: hidden;
`;

const Span = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	height: ${props => props.theme.module * .7}px;
	width: ${props => props.theme.module * .7}px;
	// background-color: none;
	border: 1px solid ${props => props.theme.fontGrey};
	border-radius: 50%;

	&:hover {
		background-color: white;
		opacity: .5;
		transition: all .15s linear;
	}
`;

const ButtonsContainer = styled.div`
	text-align: center;
	border-top: 2px solid ${props => props.theme.fontGrey};
`;

const Button = styled.button`
	margin: ${props => props.theme.module * .5}px;
	text-transform: uppercase;
	background-color: transparent;
	border: none;
	color: ${props => props.theme.mediumBlue};
	width: ${props => props.theme.module * 2.5}px;
	height: ${props => props.theme.module * 1.2}px;
	font-weight: 600;
	font-size: ${props => props.theme.module * .5}px;
	border-radius: ${props => props.theme.module / 8}px;
	cursor: pointer;

	&:hover {
		background-color: ${props => props.theme.mediumBlue};
		color: white;
		transition: all .15s linear;
	}
`;

const FeApp = () => (
	<ThemeProvider theme={theme}>
		<Containter>
			<Ilustration>
				some wisedom here
			</Ilustration>
			<Navigation>
				<Title>TX Power</Title>
				<Select>
					<Option>High (4dBm)</Option>
					<Option>Medium(6dBm)</Option>
					<Option>Low (16dBm)</Option>
				</Select>
				<Title>Radio</Title>
				<Label><Input type="radio"/><Span></Span>2.4GHz</Label>
				<Label><Input type="radio"/><Span></Span>5GHz</Label>
				<ButtonsContainer>
					<Button>Save</Button>
					<Button>Cancel</Button>
				</ButtonsContainer>
			</Navigation>
		</Containter>
	</ThemeProvider>
);

export default FeApp;
