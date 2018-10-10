import React from 'react';
import styled from 'styled-components';
import Draggable, { DraggableCore } from 'react-draggable';

import unify from '../styles/images/unify2.png';

const Container = styled.div`
  background-image: linear-gradient(${props => props.theme.ilustrationLightGrey}, ${props => props.theme.ilustrationMediumGrey});
  flex-grow: 1;
  position: relative;
`;

const Circle = styled.div`
  background-color: rgba(68, 137, 244, 0.4);
  border-radius: 50%;
  cursor: pointer;
  height: ${props => props.theme.module * 8}px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%,-50%);
  width: ${props => props.theme.module * 8}px;
`;

const Unify = styled.img`
  display: block;
  height: ${props => props.theme.module * 3}px;
  left: 50%;
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  width: ${props => props.theme.module * 3}px;
`;

const UnifyCover = styled.div`
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  height: ${props => props.theme.module * 3}px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%,-50%);
  width: ${props => props.theme.module * 3}px;
`;

const Scale = styled.div`
  border: 1px solid ${props => props.theme.fontGrey};
  border-top: none;
  box-sizing: border-box;
  bottom: ${props => props.theme.module}px;
  color: ${props => props.theme.fontGrey};
  height: ${props => props.theme.module * .5}px;
  padding-bottom: ${props => props.theme.module / 2}px;
  position: absolute;
  right: ${props => props.theme.module}px;
  text-align: center;
  width: 100px;
`;

const Ilustration = () => (
  <Container>
    <Draggable bounds="parent">
      <div style={{width: 240, height: 240}}>
        <Circle />
        <Unify src={unify} />
        <UnifyCover />
      </div>
    </Draggable>
    <Scale>
      100m
    </Scale>
  </Container>
);

export default Ilustration;