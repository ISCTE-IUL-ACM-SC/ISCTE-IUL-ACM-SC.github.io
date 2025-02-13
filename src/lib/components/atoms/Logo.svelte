<script>
	export let animated = true;
</script>

<div class="logo" class:animated>
	<img
		alt="Chapter Logo"
		src="https://iscte.acm.org/wp-content/uploads/2015/04/cropped-LOGOv1-4.png"
	/>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.logo {
		width: 20%;
		height: 300%;

		display: flex;
		gap: 16px;
		align-items: center;

		@include for-phone-only {
			gap: 8px;
		}

		#logo-text {
			width: auto;
			height: 100%;
			max-height: 28px;

			#text {
				transition: all 0.2s ease-in-out;
				fill: var(--color--text);
			}
		}

		&:hover {
			#logo-text {
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}

	@media screen and (prefers-reduced-motion: no-preference) {
		.animated {
			#icon {
				> path {
					--text-color: var(--color--text-shade);
					stroke-width: 2;
					animation: svg-text-stroke 3s;
				}

				#darker {
					> path {
						--text-color: var(--color--text);
						stroke-width: 2;
						animation: svg-text-stroke 3s;
					}
				}
			}

			#text {
				animation: svg-text-stroke 3s;
				stroke-width: 2;
				--text-color: var(--color--text);
			}
		}
	}
</style>
