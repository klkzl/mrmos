import React from 'react';
import styled from 'styled-components';

import { Droppable, Draggable } from 'react-beautiful-dnd';

import unify from '../styles/images/unify2.png';

const Container = styled.div`
  background-image: linear-gradient(${props => props.theme.ilustrationLightGrey}, ${props => props.theme.ilustrationMediumGrey});
  flex-grow: 1;
  height: 100vh;
  position: relative;
`;

const Circle = styled.div`
  background-color: rgba(68, 137, 244, 0.4);
  border-radius: 50%;
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

const Ilustration = () => (
  <Droppable droppableId="1">
  {provided => (
    <Container
      innerRef={provided.innerRef}
      {...provided.droppableProps}
    >
      {/*<Circle />*/}
      <Draggable draggableId="1" index="1">
        {provided => (
          <Unify
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
            src={unify}
          />
        )}
      </Draggable>
      {provided.placeholder}
    </Container>
  )}
  </Droppable>
);

export default Ilustration;