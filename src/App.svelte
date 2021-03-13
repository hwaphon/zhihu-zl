<script>
	import Navbar from "@/components/navbar/index.svelte";
	import Cell from "@/components/news-cell/index.svelte";
	import Menu from "@/components/menu/index.svelte";
	import { getTypeList } from "@/adapter/types";
	import { menuIndex } from "@/store/index";

	export let list = [];
	const title = "新闻速递";

	menuIndex.subscribe((value) => {
		console.log("update", value);
	});

	getTypeList().then((data) => (list = data));
</script>

<style type="text/scss">
	@import "./App.scss";
</style>

¸
<main>
	<Navbar {title} />
	<Menu {list} bind:active={$menuIndex} />
	<Cell />
	<p>{$menuIndex}</p>
</main>
