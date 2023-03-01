<div class="masonry-wrapper">
	<slot />
</div>

<style>
	:root {
		--min-col-width: 12rem;
		/* --grid-height: 40rem; */
		--grid-gap: 1rem;
	}

	/* // TODO add support for main, etc */
	/* TODO: Check that div's are present */

	.masonry-wrapper :global(.masonry) {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(var(--min-col-width), 1fr));
		grid-gap: var(--grid-gap);
		grid-auto-rows: 10rem;
		/* height: var(--grid-height); */
	}

	.masonry-wrapper :global(.masonry > div) {
		padding: 0.5rem;
		margin: 0;
		background: black;
	}
	.masonry-wrapper :global(.masonry > div:nth-child(2)) {
		background: red;
		grid-column: span 2 / auto;
	}
	.masonry-wrapper :global(.masonry > div:nth-child(2):before) {
		content: ' ';
		display: block;
		width: 100%;
		padding-top: 50%;
	}
	.masonry-wrapper :global(.masonry > div:before) {
		content: ' ';
		display: block;
		width: 100%;
		padding-top: 100%;
	}

	/* @media (min-width: 500px) {
  .card-tall {
    grid-row: span 2 / auto;
  }

  .card-wide {
    grid-column: span 2 / auto;
  }
} */
</style>
