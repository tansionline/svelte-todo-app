import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		list: [{ id: 0, text: "Hell" }, {id: 1, text: "Buy Breed"}],
		todos: ""
	}
});

export default app;