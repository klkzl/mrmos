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
  // cursor: pointer;
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
  cursor: pointer;
  height: ${props => props.theme.module * 3}px;
  left: 50%;
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  width: ${props => props.theme.module * 3}px;
  border-radius: 50%;
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

  </Container>
);

export default Ilustration;