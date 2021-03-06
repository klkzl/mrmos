import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	background-image: linear-gradient(${props => props.theme.nawigationGrey}, black);
  box-sizing: border-box;
	color: white;
  font-weight: 600;
	padding: ${props => props.theme.module}px ${props => props.theme.module * .5}px;
	width: ${props => props.theme.module * 10}px;
`;

const Title = styled.h4`
  color: ${props => props.theme.fontGrey};
	margin: 0 0 ${props => props.theme.module / 3}px;
`;

const Select = styled.select`
  background-color: transparent;
	border: 1px solid ${props => props.theme.fontGrey};
  color: white;
  cursor: pointer;
  font-weight: 600;
  height: ${props => props.theme.module}px;
  margin-bottom: ${props => props.theme.module}px;
	padding-left: ${props => props.theme.module / 6}px;
  width: 100%;

	&:focus {
		outline: none;
	}
`;

const Option = styled.option`
	background-color: ${props => props.theme.nawigationGrey};
`;

const Label = styled.label`
  cursor: pointer;
  display: block;
  line-height: ${props => props.theme.module}px;
  padding-left: ${props => props.theme.module * 1.2}px;
  position: relative;

	&:last-of-type {
		margin-bottom: ${props => props.theme.module * .5}px;
	}

	&:hover input ~ span {
		background-color: white;
	}
`;

const Input = styled.input`
	display: none;

	&:checked ~ span {
		background-color: white;
		border: ${props => props.theme.module / 4.5}px solid ${props => props.theme.mediumBlue};
		box-sizing: border-box;
	}

	&:checked ~ span:after {
		display: block;
	}
`;

const Span = styled.span`
  border: 1px solid ${props => props.theme.fontGrey};
  border-radius: 50%;
  height: ${props => props.theme.module * .7}px;
  left: 0;
	position: absolute;
	top: ${props => props.theme.module / 10}px;
	width: ${props => props.theme.module * .7}px;
`;

const ButtonsContainer = styled.div`
  border-top: 2px solid ${props => props.theme.fontGrey};
	text-align: center;
`;

const Button = styled.button`
  background-color: transparent;
  border-radius: ${props => props.theme.module / 8}px;
  border: none;
  color: ${props => props.theme.mediumBlue};
  cursor: pointer;
  font-size: ${props => props.theme.module * .5}px;
  font-weight: 600;
  height: ${props => props.theme.module * 1.2}px;
	margin: ${props => props.theme.module * .5}px;
  text-transform: uppercase;
  width: ${props => props.theme.module * 2.5}px;

	&:hover {
		background-color: ${props => props.theme.mediumBlue};
		color: white;
		transition: all .15s linear;
	}

	&:focus {
		outline: none;
		transition: all .15s linear;
	}
`;

const Navigation = ( props ) => (
	<Container>
		<form onSubmit={props.calculateCoverage}>

			<Title>TX Power</Title>
			<Select name="TXPowerSelector">
				<Option value={4}>High (4dBm)</Option>
				<Option value={6}>Medium (6dBm)</Option>
				<Option value={16}>Low (16dBm)</Option>
			</Select>

			<Title>Radio</Title>
			<Label>
				<Input
					type="radio"
					name="radioSelector"
					value={2.4}
					defaultChecked
				/>
				<Span></Span>
				2.4 GHz
			</Label>
			<Label>
				<Input
				type="radio"
				name="radioSelector"
				value={5}
			/>
				<Span></Span>
				5 GHz
			</Label>

			<ButtonsContainer>
				<Button>Save</Button>
				<Button>Cancel</Button>
			</ButtonsContainer>

		</form>
	</Container>
);

export default Navigation;