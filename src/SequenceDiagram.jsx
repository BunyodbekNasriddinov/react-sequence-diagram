import { dispatch, store } from './main';
import App from './views/App';

const SequenceDiagram = () => {
	return (
		<div
			className={this.props.className}
			ref={(div) => {
				this.div = div;
			}}
		>
			<App
				state={store.getState()}
				dispatch={dispatch}
			/>
		</div>
	);
};

export { SequenceDiagram, store };
