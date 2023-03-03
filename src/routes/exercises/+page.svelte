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

	import GridLayout from '$lib/ui/presenters/GridLayout/grid-layout.svelte';

	interface DescriptiveMasonaryItems {
		[key: string]: string;
	}

	let items: DescriptiveMasonaryItems[] = [
		{ src: img1, description: 'surreal image' },
		{ src: img2, description: 'surreal image' },
		{ src: img3, description: 'surreal image' },
		{ src: img4, description: 'surreal image' },
		{ src: img5, description: 'surreal image' },
		{ src: img6, description: 'surreal image' },
		{ src: img7, description: 'surreal image' },
		{ src: img8, description: 'surreal image' },
		{ src: img9, description: 'surreal image' },
		{ src: img10, description: 'surreal image' },
		{ src: img11, description: 'surreal image' },
		{ src: img12, description: 'surreal image' }
	];

	let childRoot: any;
</script>

<div class="mx-auto container max-w-[1100px]">
	<h1>sandbox</h1>
	<GridLayout>
		<List
			bind:rootElement={childRoot}
			{items}
			gridlayout={true}
			wrappingEl="div"
			class={`grid relative`}
			let:item
		>
			<div
				role="img"
				aria-label={item.description}
				class={`w-full h-auto absolute inset-0`}
				style={`background-image:url(${item.src})`}
			/>
		</List>
	</GridLayout>
</div>
