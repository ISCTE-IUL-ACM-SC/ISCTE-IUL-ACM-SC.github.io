<script lang="ts">
	export let name;
	export let description;
	export let image;
	export let tags;
</script>

<div class="custom-feature-card">
	<img src={image} alt={name} class="feature-image" />
	<div class="feature-content">
		<h3 class="feature-title">{name}</h3>
		<p class="feature-description">{description}</p>
		<div class="feature-tags">
			{#each tags as tag}
				<span class="feature-tag">{tag}</span>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.custom-feature-card {
		display: flex;
		flex-direction: column;
		background: #fff;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;
		width: 280px;
	}

	.custom-feature-card:hover {
		transform: translateY(-5px);
	}

	.feature-image {
		width: 100%;
		height: 180px;
		object-fit: cover;
	}

	.feature-content {
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.feature-title {
		font-size: 1.25rem;
		font-weight: bold;
	}

	.feature-description {
		font-size: 0.875rem;
		color: #555;
	}

	.feature-tags {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
	}

	.feature-tag {
		background: #007bff;
		color: #fff;
		padding: 4px 8px;
		border-radius: 8px;
		font-size: 0.75rem;
	}
</style>
