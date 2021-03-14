<script>
	import Navbar from "@/components/navbar/index.svelte";
	import Cell from "@/components/news-cell/index.svelte";
	import Menu from "@/components/menu/index.svelte";
	import Loading from "@/components/loading/index.svelte";
	import { getTypeList } from "@/adapter/types";
	import { getArticleList } from "@/adapter/list";
	import { menuIndex } from "@/store/index";

	const title = "新闻速递";
	let typeList = [];
	let loading = false;

	const fetchArticleList = (id) => {
		loading = getArticleList(id).then((data) => {
			console.log("data", data);
			return data;
		});
	};

	menuIndex.subscribe((value) => {
		if (!typeList || !typeList[value]) return;

		fetchArticleList(typeList[value].id);
	});

	getTypeList().then((data) => {
		typeList = data;
		fetchArticleList(data[0].id);
	});
</script>

<style type="text/scss">
	@import "./App.scss";
</style>

<main>
	<Navbar {title} />
	<Menu list={typeList} bind:active={$menuIndex} />
	{#if typeList.length > 0}
		{#await loading}
			<Loading />
		{:then newsList}
			<section class="news-list">
				{#each newsList as news (news.title)}
					<Cell info={news} />
				{/each}
			</section>
		{/await}
	{/if}
</main>
