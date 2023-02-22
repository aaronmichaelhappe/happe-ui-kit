<script lang="ts">
  import { onMount } from "svelte";
  import { Pager, type SlidePage } from "./pager";

  let slidePage: SlidePage;
  let sliderEls: HTMLElement[] = [];
  let wrapperEl: HTMLElement;
  //TODO: pass this in
  const tabWidthProportion = 30;

  export let datas: any;

  type PagerData = {
    name: string;
    element: HTMLElement | null;
    hl: string;
    description: string;
    link?: string[];
  };

  let shortestSlideWidth = 0;
  let wrapperElOffsetWidth = 0;

  $: {
    shortestSlideWidth =
      wrapperElOffsetWidth - (datas.length + 1) * tabWidthProportion;

    datas = datas;
  }

  const operatePager = (event: Event, index: number) => {
    let target = event.target as Element;

    target.classList.contains("closed")
      ? slidePage("all-right", index)
      : slidePage("all-left", index);
  };

  onMount(() => {
    sliderEls = datas.map((data: PagerData) => {
      return data.element;
    });

    slidePage = Pager(sliderEls);

    wrapperElOffsetWidth = wrapperEl.offsetWidth;
  });
</script>

<div bind:this={wrapperEl}>
  {#each datas as data, i}
    <div
      id={data.name}
      on:click|preventDefault={(e) => operatePager(e, i)}
      on:keydown|preventDefault={(e) => operatePager(e, i)}
      class={`closed page-slide slide-${i} absolute inset-0 flex flex-nowrap gap-4 p-4 h-full ${data.bgColor} drop-shadow-md`}
      style={`width: ${
        shortestSlideWidth + tabWidthProportion * (i + 1)
      }px; z-index: ${datas.length - i + 10};`}
    >
      <div
        class="flex flex-col flex-start w-full mr-8 sm:w-2/3 md:w-1/2 overflow-y-auto"
      >
        <h3 class="text-myBlack">{data.hl}</h3>

        <p class="text-myBlack">{data.description}</p>

        {#if data.link}
          <p><a href={data.link[0]}>{data.link[1]}</a></p>
        {/if}

        <div>
          <!-- slots coll footer -->
        </div>
      </div>

      <p
        class={`rotate-90 absolute -right-6 top-10 w-20 text-myBlack ${data.bgColor} uppercase whitespace-nowrap `}
      >
        <span class="text-sm">
          {data.hl}
        </span>
      </p>
      <div class="absolute top-0 right-0 bottom-0 w-12 h-full cursor-pointer">
        <span
          class={`absolute bottom-0 -right-4 flex justify-center items-center w-10 h-10 ${data.bgColor} font-bold hue-rotate-15 rounded-md drop-shadow-sm hover:hue-rotate-15 hover:brightness-110 hover:translate-y-0.5 transition-all duration-150`}
        >
          {i + 1}
        </span>
      </div>
    </div>
  {/each}
</div>
<svelte:window
  on:resize={() => (wrapperElOffsetWidth = wrapperEl.offsetWidth)}
/>

<!-- // TODO: Make this dynamic -->
<style lang="postcss">
  .page-slide {
    transition: all 0.3s ease-in-out;
  }
  .page-slide.closed {
    transform: translate(-92%, 0%);
  }
  .page-slide.slide-1.closed {
    transform: translate(calc(-92% + 30px), 0%);
  }
  .page-slide.slide-2.closed {
    transform: translate(calc(-92% + 60px), 0%);
  }
  .page-slide.slide-3.closed {
    transform: translate(calc(-92% + 90px), 0%);
  }
</style>
