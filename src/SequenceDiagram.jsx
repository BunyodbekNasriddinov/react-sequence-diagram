import React from 'react';
import { dispatch, store } from './main';
import App from './views/App';

const SequenceDiagram = (state) => {
	return (
		<App
			state={state || store.getState()}
			dispatch={dispatch}
		/>
	);
};

export default SequenceDiagram;
