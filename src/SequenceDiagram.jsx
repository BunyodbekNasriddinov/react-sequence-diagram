import React from 'react';
import { dispatch, store } from './main';
import App from './views/App';

const SequenceDiagram = () => {
	return (
		<App
			state={store.getState()}
			dispatch={dispatch}
		/>
	);
};

export default SequenceDiagram;
