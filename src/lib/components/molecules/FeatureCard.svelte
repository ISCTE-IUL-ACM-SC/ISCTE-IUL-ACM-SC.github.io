<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import type { TagType } from '$lib/utils/types';
	import Image from '../atoms/Image.svelte';

	export let name: string;
	export let description: string;
	export let image: string;
	export let tags: TagType[] | undefined;
</script>

<Card additionalClass="feature-card">
	<div class="image" slot="image">
		<Image src={image} alt={`Image for the feature ${name}`} />
	</div>
	<div class="content" slot="content">
		<div class="title">
			<span>{name}</span>
		</div>
		<p>{description}</p>
	</div>
	<div class="footer" slot="footer">
		{#if tags && tags.length > 0}
			<div class="tags">
				{#each tags as tag}
					<Tag color={tag.color}>{tag.label}</Tag>
				{/each}
			</div>
		{/if}
	</div>
</Card>

<style lang="scss">
	/* Container styles */
	.feature-card {
		display: flex;
		flex-direction: column;
		background: var(--card-background, #fff);
		border-radius: 8px;
		box-shadow: var(--card-shadow, 0 4px 10px rgba(0, 0, 0, 0.1));
		overflow: hidden;
	}

	/* Image section */
	.image {
		width: 100%;
		height: 200px; /* Optional: you can adjust the height as needed */
	}

	:global(.feature-card .image img) {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	/* Content section styles */
	.content {
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.title {
		font-size: 1.2rem;
		font-family: var(--font--title);
		font-weight: 700;
		color: var(--title-color, #333);
	}

	p {
		color: var(--description-color, #666);
		line-height: 1.5;
	}

	/* Footer (tags) section */
	.footer {
		padding: 16px;
		margin-top: auto;
	}

	.tags {
		display: flex;
		align-items: center;
		gap: 5px;
		flex-wrap: wrap;
	}

	/* Feature Card width and responsiveness */
	.feature-card {
		flex: 1 0 28%;
		max-width: 28%; /* Max width ensures that the card doesn't stretch too wide */
	}

	@media (max-width: 1024px) {
		.feature-card {
			flex: 1 0 45%; /* Adjust for medium-sized screens */
			max-width: 45%;
		}
	}

	@media (max-width: 768px) {
		.feature-card {
			flex: 1 0 100%; /* Full width on smaller screens */
			max-width: 100%;
		}
	}

	/* Hover effect on card */
	.feature-card:hover {
		transform: scale(1.02);
		transition: transform 0.3s ease;
		box-shadow: var(--card-shadow-hover, 0 6px 15px rgba(0, 0, 0, 0.1));
	}

	/* Accessibility improvements */
	.feature-card:focus-within {
		outline: 3px solid var(--focus-outline, #007acc);
	}
</style>
