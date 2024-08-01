<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import About from '$lib/components/organisms/About.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import Features from '$lib/components/organisms/Features.svelte';
	import Carousel from '$lib/components/organisms/Carousel.svelte';
	import type { Feature, BlogPost } from '$lib/utils/types';
	import Team from '$lib/components/organisms/TeamSection.svelte';
	import Map from '$lib/components/molecules/Map.svelte';

	export let data: {
		features: Feature[];
		posts: BlogPost[];
	};

	let { features, posts } = data;
</script>

<svelte:head>
	<title>Lerove Cleaning</title>
</svelte:head>
<div class="container">
	<Hero />
	<Carousel />
	<About />
	<Team />
	<Features {features} />

	{#if posts && posts.length > 0}
		<RecentPosts {posts} />
	{/if}
	<Map />
</div>
