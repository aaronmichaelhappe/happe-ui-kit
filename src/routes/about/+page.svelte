<script lang="ts">
	import SlidePage from '$lib/ui/presenters/Pager/Pager.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Temp UI Page</h1>

	<SlidePage data=['a', 'b', ] />
</div>
