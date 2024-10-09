import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'rollup-plugin-dts';

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: 'src/index.js',
			name: 'SequenceDiagram',
			fileName: (format) => `SequenceDiagram.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
			plugins: [dts()],
		},
	},
});
