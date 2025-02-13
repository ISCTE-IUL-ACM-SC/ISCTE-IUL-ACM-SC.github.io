<script lang="ts">
	export let id: string | undefined = undefined;
	export let title: string | undefined = undefined;
	export let description: string | undefined = undefined;

	export let align: 'left' | 'top' | 'right' = 'top';
</script>

<section {id} class="content-section {align}">
	<div class="title-area">
		{#if title || description}
			<div class="text">
				{#if title}
					<h2>{title}</h2>
				{/if}
				{#if description}
					<p>{description}</p>
				{/if}
			</div>
		{/if}
		{#if $$slots['button']}
			<div class="button">
				<slot name="button" />
			</div>
		{/if}
	</div>
	<div class="content-area">
		<slot />
	</div>
</section>

<style lang="scss">
	@import '../../scss/breakpoints.scss';

	.content-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 50px 0;
		margin: 10px;

		.title-area {
			text-align: center;
			gap: 15px;
			.text {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 5px;
			}
		}

		.content-area {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		@include for-tablet-landscape-up {
			flex-direction: row;
			.title-area {
				flex: 2;
			}
			.content-area {
				flex: 5;
			}

			&.left {
				.title-area {
					order: 1;
				}
				.content-area {
					order: 2;
				}
			}

			&.right {
				.title-area {
					order: 2;
				}
				.content-area {
					order: 1;
				}
			}

			&.top {
				flex-direction: column;
				.title-area {
					max-width: 600px;
				}
				.content-area {
					width: 100%;
				}
			}
		}

		@include for-tablet-portrait-down {
			flex-direction: column;
		}
	}
</style>
