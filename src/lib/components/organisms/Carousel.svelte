<script>
	import Carousel from '../molecules/Carousel.section.svelte';

	let slides = [
		{
			src: 'https://www.facilityapps.com/wp-content/uploads/2020/08/shopping-center-cleaning-facilityapps-scaled.jpg',
			title: 'Malls'
		},
		{
			src: 'https://www.bloghutupdate.com/wp-content/uploads/2023/03/image.png',
			title: 'Offices'
		},
		{
			src: 'https://healthtalk.unchealthcare.org/wp-content/uploads/2020/05/GettyImages-1216319432-healthtalk-860x478.jpg',
			title: 'Hospitals'
		},
		{
			src: 'https://cdn-hjgkeb.nitrocdn.com/QehKXCpTeFZJMTvONaphRsSvTQUpvZnV/assets/images/optimized/rev-82b6088/www.jaymincleaningservices.co.ke/wp-content/uploads/2023/01/commercial-cleaning.jpg',
			title: 'Residentials'
		},
		{
			src: 'https://rosangelascleaningservice.com/wp-content/uploads/2024/02/Event-Cleaning-Rosangelas-Cleaning.jpg',
			title: 'Events'
		}
	];
</script>

<div class="carousel-cont">
	<div class="carousel-title">We offer services in</div>
	<Carousel autoplay="2000">
		{#each slides as slide, index (index)}
			<div class="slide">
				<img src={slide.src} alt={slide.title} />
				<p class="title">{slide.title}</p>
			</div>
		{/each}
		<span slot="left-control" class="control left-control">
			<i class="fas fa-chevron-left" />
		</span>
		<span slot="right-control" class="control right-control">
			<i class="fas fa-chevron-right" />
		</span>
	</Carousel>
</div>

<style>
	.carousel-title {
		z-index: 1000;
		margin-bottom: 20px;
	}
	.carousel-cont {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		margin-bottom: 60px;
	}
	.slide {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	img {
		object-fit: cover;
		border-radius: 4%;
	}

	.title {
		margin-top: 0.5rem;
		text-align: center;
		font-size: 0.75rem;
	}

	.control {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		font-size: 1.5rem; /* Adjust as needed */
		color: #333; /* Default color */
		padding: 0.5rem;
		transition: color 0.3s, transform 0.3s;
	}

	.control:hover {
		color: #007bff; /* Hover color */
		transform: scale(1.2); /* Hover effect: slightly larger */
	}

	span {
		display: inline-block;
		margin-top: 6rem;
	}

	/* Default mobile size */
	@media (max-width: 768px) {
		.slide {
			height: 8rem;
			width: 8rem;
		}

		img {
			height: 6rem;
			width: 6rem;
		}
	}

	/* PC size */
	@media (min-width: 769px) {
		.slide {
			height: 15rem;
			width: 15rem;
		}

		img {
			height: 12rem;
			width: 12rem;
		}
	}
</style>
