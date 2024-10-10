import React, { act } from 'react';
import { dispatch, store } from './main';
import App from './views/App';

const SequenceDiagram = (diagram) => {
	const actions = store.getState();

	return (
		<App
			state={
				diagram
					? { ...actions, core: { ...actions.core, present: { ...diagram } } }
					: actions
			}
			dispatch={dispatch}
		/>
	);
};

export default SequenceDiagram;
