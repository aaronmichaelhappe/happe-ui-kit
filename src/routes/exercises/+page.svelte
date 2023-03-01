<script lang="ts">
	import List from '$lib/ui/presenters/List.svelte';
	import img1 from '$lib/images/dalle-surreal/surreal-1.png';
	import img2 from '$lib/images/dalle-surreal/surreal-2.png';
	import img3 from '$lib/images/dalle-surreal/surreal-3.png';
	import img4 from '$lib/images/dalle-surreal/surreal-4.png';
	import img5 from '$lib/images/dalle-surreal/surreal-5.png';
	import img6 from '$lib/images/dalle-surreal/surreal-6.png';
	import img7 from '$lib/images/dalle-surreal/surreal-7.png';
	import img8 from '$lib/images/dalle-surreal/surreal-8.png';
	import img9 from '$lib/images/dalle-surreal/surreal-9.png';
	import img10 from '$lib/images/dalle-surreal/surreal-10.png';
	import img11 from '$lib/images/dalle-surreal/surreal-11.png';
	import img12 from '$lib/images/dalle-surreal/surreal-12.png';

	import Masonry from '$lib/ui/presenters/Masonry/Masonry.svelte';
	import type { MasonaryItems } from '$lib/ui/presenters/Masonry/masonry';
	import { MasonryInteractiveOverlay } from '$lib/ui/presenters/Masonry/masonry';
	import { onMount } from 'svelte';

	interface DescriptiveMasonaryItems extends MasonaryItems {
		description: string;
	}

	let items: DescriptiveMasonaryItems[] = [
		{ src: img1, index: 0, description: 'surreal image' },
		{ src: img2, index: 1, description: 'surreal image' },
		{ src: img3, index: 2, description: 'surreal image' },
		{ src: img4, index: 3, description: 'surreal image' },
		{ src: img5, index: 4, description: 'surreal image' },
		{ src: img6, index: 5, description: 'surreal image' },
		{ src: img7, index: 6, description: 'surreal image' },
		{ src: img8, index: 7, description: 'surreal image' },
		{ src: img9, index: 8, description: 'surreal image' },
		{ src: img10, index: 9, description: 'surreal image' },
		{ src: img11, index: 10, description: 'surreal image' },
		{ src: img12, index: 11, description: 'surreal image' }
	];

	let masonary: any;
	let childRoot: any;

	let sizeOpts = new Map();
	sizeOpts.set('3n', ['wide', 'tall']);

	$: {
		console.log(childRoot);
		if (childRoot !== undefined) masonary.create(childRoot, items, sizeOpts);
	}

	onMount(() => {
		masonary = MasonryInteractiveOverlay();
		// MasonryInteractiveOverlay().create(listEl, items, sizeOpts);
	});
</script>

<div class="mx-auto container max-w-[1100px]">
	<h1>sandbox</h1>
	<Masonry>
		<List
			bind:rootElement={childRoot}
			{items}
			masonry={true}
			wrappingEl="div"
			class="grid "
			let:item
		>
			<div class="card" role="img" aria-label={item.description} />
		</List>
	</Masonry>
</div>
