<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '../app.css';
	import { onMount } from 'svelte';
	onMount(() => {});
</script>

<div class="app h-screen ">
	<Header />
	<slot />
	<footer class="site-footer">
		<p>
			visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> stick footer -> to learn SvelteKit
		</p>
	</footer>
</div>
