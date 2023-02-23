<script lang="ts">
	import { onMount } from 'svelte';
	import { Pager, type SlidePage } from './pager';

	// let slidePage: SlidePage = Pager();
	interface PagerData {
		bgColor: string;
		description: string;
		element: HTMLElement | null;
		hl: string;
		name: string;
	}

	let jobs: PagerData[] = [
		{
			name: `bzees`,
			element: null,
			hl: `Bzees LP Coming soon`,
			description: `Coming Soon ... ...`,
			bgColor: 'bg-myBlue-400'
		},
		{
			name: `agency`,
			element: null,
			hl: `Agency Challenge`,
			description: `Coming soon...`,
			bgColor: 'bg-myGray-400'
		},
		{
			name: `priordesign`,
			element: null,
			hl: `Coming Soon :)`,
			description: `Past portfolio design... coming soon... `,
			bgColor: 'bg-myGray-700'
		},
		{
			name: `spa`,
			element: null,
			hl: `TBD :)`,
			description: `A project coming soon.`,
			bgColor: 'bg-myGreen-400'
		}
	];

	onMount(() => {});
</script>

<style lang="postcss">
</style>
