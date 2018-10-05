import React from 'react';

import theme from '../styles/base/Theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const Containter = styled.div`
	display: flex;
`;

const Ilustration = styled.div`
	background-color: purple;
	flex-grow: 1;
	height: 100vh;
`;
const Navigation = styled.div`
	background-color: pink;
	height: 100vh;
	width: ${props => props.theme.module * 13}px;
`;

const FeApp = () => (
	<ThemeProvider theme={theme}>
		<Containter>
			<Ilustration>
				some wisedom here
			</Ilustration>
			<Navigation>
				some dummy content
			</Navigation>
		</Containter>
	</ThemeProvider>
);

export default FeApp;
