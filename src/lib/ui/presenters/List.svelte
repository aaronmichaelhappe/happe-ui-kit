<script lang="ts">
	import classNames from 'classnames';
	export let customWrapperClass: undefined | string = undefined;
	export let customItemClass: undefined | string = undefined;
	export let wrappingEl: 'ul' | 'div' = 'ul';
	export let itemEl: 'li' | 'div' = 'li';
	export let masonry = false;
	export let items: any[] = [];
	export let rootElement: HTMLElement;

	// override wrapper class if pass in spec class

	let wrapperClass: undefined | string;
	if (masonry) wrapperClass = 'masonry';
	if (customWrapperClass) wrapperClass = customWrapperClass;

	$: elementWrapperClass = wrapperClass
		? wrapperClass
		: classNames(
				`${wrappingEl == 'ul' ? 'list' : 'items-wrapper'} flex flex-row flex-auto`,
				$$props.class
		  );

	let itemClass: string | undefined;

	$: {
		itemClass = customItemClass
			? customItemClass
			: classNames('item inline-block mx-4', $$props.class);
		itemEl = wrappingEl == 'ul' ? 'li' : 'div';
	}
</script>

bind:this={rootElement}
<svelte:element this={wrappingEl} class={elementWrapperClass}>
	{#each items as item, i}
		<svelte:element
			this={itemEl}
			on:click
			on:change
			on:keydown
			on:keyup
			on:mouseenter
			on:mouseleave
			class={itemClass}
		>
			<slot {item} />
		</svelte:element>
	{/each}
</svelte:element>
