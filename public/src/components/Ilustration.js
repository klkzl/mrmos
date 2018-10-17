import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

import { CLIENTS } from '../constants/clients';

import unifi from '../styles/images/unifi.png';

const Container = styled.div`
  background-image: linear-gradient(${props => props.theme.ilustrationLightGrey}, ${props => props.theme.ilustrationMediumGrey});
  flex-grow: 1;
  position: relative;
`;

const Coverage = styled.div`
  background-color: rgba(68, 137, 244, 0.4);
  border-radius: 50%;
  cursor: pointer;
  height: 160px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 160px;
`;

const Unifi = styled.img`
  display: block;
  height: ${props => props.theme.module * 2}px;
  left: 50%;
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  width: ${props => props.theme.module * 2}px;
`;

const UnifiCover = styled.div`
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  height: ${props => props.theme.module * 2}px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%,-50%);
  width: ${props => props.theme.module * 2}px;
`;

const Scale = styled.div`
  border: 1px solid ${props => props.theme.fontGrey};
  border-top: none;
  box-sizing: border-box;
  bottom: ${props => props.theme.module}px;
  color: ${props => props.theme.fontGrey};
  height: ${props => props.theme.module * .5}px;
  padding-bottom: ${props => props.theme.module * .6}px;
  position: absolute;
  right: ${props => props.theme.module}px;
  text-align: center;
  width: 100px;
`;

const Client = styled.div`
  background-color: red;
  border-radius: 50%;
  height: ${props => props.theme.module / 3}px;
  position: absolute;
  transform: translate(-50%, -50%);
  width: ${props => props.theme.module / 3}px;
  z-index: 2;
`;

class Ilustration extends Component {
  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== nextState) {
      return false;
    }
 }

  render() {
    const { setStartingLocation, handleStart, handleDrag, handleStop } = this.props;

    return (
      <Container>
      <Fragment>
        {CLIENTS.map(item => (
          <Client
            key={item}
            style={{
              left: Math.floor(Math.random() * (window.innerWidth - 320) + 10),
              top: Math.floor(Math.random() * (window.innerHeight - 20) + 10)
            }}
          />
        ))}
      </Fragment>
      <Draggable
        bounds="parent"
        defaultPosition={{ x: (window.innerWidth - 300) / 2 - 80, y: window.innerHeight / 2 - 80 }}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
      >
        <div
          style={{ width: 160, height: 160 }}
          ref={setStartingLocation}
        >
          <Coverage />
          <Unifi src={unifi} />
          <UnifiCover />
        </div>
      </Draggable>
      <Scale>
        100m
      </Scale>
    </Container>
    );
  }
}

export default Ilustration;