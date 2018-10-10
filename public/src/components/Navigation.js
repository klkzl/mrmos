import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	background-image: linear-gradient(${props => props.theme.nawigationGrey}, black);
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
`;

const Input = styled.input`
	position: absolute;
	visibility: hidden;
`;

const Span = styled.span`
  border: 1px solid ${props => props.theme.fontGrey};
  border-radius: 50%;
  height: ${props => props.theme.module * .7}px;
  left: 0;
	position: absolute;
	top: 0;
	width: ${props => props.theme.module * .7}px;


	&:hover {
		background-color: white;
		opacity: .5;
		transition: all .15s linear;
	}
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
`;

const Navigation = () => (
	<Container>
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
	</Container>
);

export default Navigation;