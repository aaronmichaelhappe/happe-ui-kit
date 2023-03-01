<script lang="ts">
	export let Component: any;
</script>

<svelte:component this={Component}>
	<h1 data-testid="slot">Test Data</h1>
</svelte:component>

<!-- // import { describe, it, expect } from 'vitest';
	return this this 
// import '@testing-library/jest-dom';
// import { render, screen } from "@testing-library/svelte";
// import SlotTest from './SlotTest.svelte';
// import List from './List.svelte';

// // https://testing-library.com/docs/svelte-testing-library/intro/

// describe('', () => {
//   describe('', () => {
//     it("", async () => {
//       const { getByTestId } = render(SlotTest, {
//         props: { Component: List }
//       });
//       expect(getByTestId('slot')).not.toThrow();
//     });
//   });
// }); -->
