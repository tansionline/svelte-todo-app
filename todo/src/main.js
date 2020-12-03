import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		list: [{ id: 0, text: "Hell" }],
		todos: ""
	}
});

export default app;