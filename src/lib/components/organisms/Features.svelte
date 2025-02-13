<script lang="ts">
	import type { Feature } from '$lib/utils/types';
	import FeatureCard from '$lib/components/molecules/FeatureCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';

	let elemFeatures: HTMLDivElement;
	let autoplayInterval: NodeJS.Timeout;
	export let features: Feature[];

	// Autoplay functionality
	function startAutoplay() {
		autoplayInterval = setInterval(() => {
			scrollRight();
		}, 5000); // Autoplay every 5 seconds
	}

	function stopAutoplay() {
		clearInterval(autoplayInterval);
	}

	function scrollLeft(): void {
		let x = elemFeatures.scrollLeft - elemFeatures.clientWidth;
		if (elemFeatures.scrollLeft !== 0) {
			elemFeatures.scrollTo({ left: x, behavior: 'smooth' });
		}
	}

	function scrollRight(): void {
		let x = elemFeatures.scrollLeft + elemFeatures.clientWidth;
		if (elemFeatures.scrollLeft < elemFeatures.scrollWidth - elemFeatures.clientWidth) {
			elemFeatures.scrollTo({ left: x, behavior: 'smooth' });
		}
	}

	// Start autoplay when component mounts
	import { onMount } from 'svelte';
	onMount(() => {
		startAutoplay();
	});

	// Stop autoplay when the component is destroyed
	import { onDestroy } from 'svelte';
	onDestroy(() => {
		stopAutoplay();
	});
</script>

<ContentSection id="features" title="Projetos da ACM ISCTE-IUL student chapter" description="">
	<div class="carousel-container">
		<!-- Button: Left -->
		<button type="button" class="btn-icon variant-filled" on:click={scrollLeft}>
			<i class="fa-solid fa-arrow-left" />
		</button>

		<!-- Carousel -->
		<div
			bind:this={elemFeatures}
			class="carousel snap-x snap-mandatory scroll-smooth flex gap-4 pb-4 overflow-x-auto"
			on:mouseenter={stopAutoplay}
			on:mouseleave={startAutoplay}
		>
			{#each features as feature}
				<FeatureCard
					name={feature.name}
					description={feature.description}
					image={feature.image}
					tags={feature.tags}
				/>
			{/each}
		</div>

		<!-- Button: Right -->
		<button type="button" class="btn-icon variant-filled" on:click={scrollRight}>
			<i class="fa-solid fa-arrow-right" />
		</button>
	</div>
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.carousel-container {
		display: flex;
		align-items: center;
		width: 100%;
		position: relative;
	}

	/* Button styles for carousel navigation */
	.btn-icon {
		cursor: pointer;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
	}

	.btn-icon:first-child {
		left: 10px;
	}

	.btn-icon:last-child {
		right: 10px;
	}

	/* Carousel container for snapping and scrolling */
	.carousel {
		width: 100%;
		display: flex;
		gap: 20px;
	}

	/* FeatureCard styling */
	.feature-card {
		flex: 0 0 28%;
	}

	/* Optional: Hover brightness */
	.feature-card img:hover {
		brightness: 1.1;
	}

	/* Make sure that the carousel can scroll horizontally */
	.scroll-smooth {
		scroll-behavior: smooth;
	}
</style>
