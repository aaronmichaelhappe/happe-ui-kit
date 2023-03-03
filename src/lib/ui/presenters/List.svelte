<script lang="ts">
	import classNames from 'classnames';
	export let customWrapperClass: undefined | string = undefined;
	export let customItemClasses: undefined | string = undefined;
	export let wrappingEl: 'ul' | 'div' = 'ul';
	export let itemEl: 'li' | 'div' = 'li';
	export let gridlayout = false;
	export let items: any[] = [];
	export let rootElement: HTMLElement;

	let wrapperClasses: undefined | string;
	if (gridlayout) wrapperClasses = 'gridlayout';
	if (customWrapperClass) wrapperClasses = customWrapperClass;

	$: elementWrapperClass = wrapperClasses
		? wrapperClasses
		: classNames(
				`${wrappingEl == 'ul' ? 'list' : 'items-wrapper'} flex flex-row flex-auto`,
				$$props.class
		  );

	let itemClass: string | undefined;

	$: {
		itemClass = customItemClasses
			? customItemClasses
			: classNames('item inline-block mx-4', $$props.class);
		itemEl = wrappingEl == 'ul' ? 'li' : 'div';
	}
</script>

<svelte:element this={wrappingEl} class={elementWrapperClass}>
	{#each items as item, i}
		<svelte:element
			this={itemEl}
			bind:this={rootElement}
			on:click
			on:change
			on:keydown
			on:keyup
			on:mouseenter
			on:mouseleave
			class={`${itemClass} ${item.type ? item.type : ''}`}
		>
			<slot {item} />
		</svelte:element>
	{/each}
</svelte:element>
