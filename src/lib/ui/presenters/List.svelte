<script lang="ts">
	import classNames from 'classnames';

	export let wrapperClass: undefined | string = undefined;
	export let itemClass: undefined | string = undefined;
	export let wrappingEl: 'ul' | 'div' = 'ul';
	export let childEl: 'li' | 'div' = 'li';
	export let masonry = false;
	export let items: any[] = [];
	export let rootElement: HTMLElement;

	if (masonry) wrapperClass = 'masonry';

	$: elementWrapperClass = wrapperClass
		? wrapperClass
		: classNames('flex flex-row flex-auto', $$props.class);

	let elementClass: string | undefined;

	$: {
		elementClass = itemClass ? itemClass : classNames('inline-block mx-4', $$props.class);
		childEl = wrappingEl == 'ul' ? 'li' : 'div';
	}
</script>

<svelte:element this={wrappingEl} bind:this={rootElement} class={elementWrapperClass}>
	{#each items as item, i}
		<svelte:element
			this={childEl}
			on:click
			on:change
			on:keydown
			on:keyup
			on:mouseenter
			on:mouseleave
			class={elementClass}
		>
			<slot {item} />
		</svelte:element>
	{/each}
</svelte:element>
asdf
