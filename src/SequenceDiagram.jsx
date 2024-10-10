import React from 'react';
import { dispatch, store } from './main';
import App from './views/App';

const SequenceDiagram = (diagram) => {
	return (
		<App
			state={store.getState()}
			dispatch={dispatch}
			diagram={diagram}
		/>
	);
};

export default SequenceDiagram;
