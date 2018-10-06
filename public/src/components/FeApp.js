import React from 'react';

import theme from '../styles/base/Theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import Ilustration from './Ilustration';
import Navigation from './Navigation';

const Containter = styled.div`
	display: flex;
	font-family: 'Arial';
`;

const FeApp = () => (
	<ThemeProvider theme={theme}>
		<Containter>
      <Ilustration />
			<Navigation />
		</Containter>
	</ThemeProvider>
);

export default FeApp;
