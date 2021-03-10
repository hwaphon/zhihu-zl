<script>
	import Navbar from './components/navbar/index.svelte';

	export let name;
	let a = {
		b: 2
	}

	const handleClick = () => {
		console.log('handleClick');
		a.b = Math.random();
	}
</script>

<main>
	<Navbar title="知乎专栏"></Navbar>
</main>

<style type="text/scss">
  @import "./App.scss";
</style>