<script>
	import Counter from './Counter.svelte';
	import { onMount } from 'svelte';
	onMount(() => {});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>UI Kit</h1>

	<Counter />
</section>
