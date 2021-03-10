<script>
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
	<h1 on:click={ handleClick }>Hello {name}!</h1>
	<p>{ a.b }</p>
</main>

<style>
main {
  text-align: center;
  padding: 1em;
  max-width: 240px;
  margin: 0 auto;
}

h1 {
  color: #ff3e00;
  text-transform: uppercase;
  font-size: 4em;
  font-weight: 100;
}

@media (min-width: 640px) {
  main {
    max-width: none;
  }
}
</style>