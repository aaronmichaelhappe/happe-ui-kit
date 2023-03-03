<script>
</script>

<div class="gridlayout-wrapper">
	<slot />
</div>

<style>
	:root {
		--min-col-width: 12rem;
		--grid-gap: 1rem;
		--space-around-artwork: 0.5rem;
	}

	.gridlayout-wrapper :global(.gridlayout) {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(var(--min-col-width), 1fr));
		grid-gap: var(--grid-gap);
	}

	.gridlayout-wrapper :global(.gridlayout > div) {
		padding: var(--space-around-artwork);
		margin: 0;
		background: black;
	}

	.gridlayout-wrapper :global(.gridlayout > div:before) {
		content: ' ';
		display: block;
		width: 100%;
		padding-top: 100%;
	}

	/* @media (min-width: 500px) {
} */
</style>
