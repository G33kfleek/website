<script>
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';

	// Placeholder image paths
	const mapImage = 'images/map-to-lcs.png';
	const streetViewImage = 'images/street-view.png';
</script>

<ContentSection
	id="features"
	title="Our location"
	description="Find us opposite KIPS College in Donholm, Nairobi"
>
	<!-- Placeholder image for the map -->
	<div class="image-container">
		<img src={mapImage} alt="Map view of our location" class="placeholder-image" />
	</div>

	<!-- Placeholder image for the street view -->
	<div class="image-container">
		<img src={streetViewImage} alt="Street view of our location" class="placeholder-image" />
	</div>

	<div class="location-info">
		<i class="fas fa-map-marker-alt" />
		We are located at Donholm Savannah Road Opposite KIPS College
	</div>
</ContentSection>

<style>
	.image-container {
		margin: 10px 0;
		text-align: center;
	}

	.placeholder-image {
		width: 100%;
		max-width: 600px; /* Optional: Limit the max width */
		height: auto; /* Maintain aspect ratio */
		border: 1px solid #ccc; /* Optional: Border around the image */
		border-radius: 8px; /* Optional: Rounded corners */
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a slight shadow */
	}

	.location-info {
		margin-top: 10px;
		font-size: 0.9rem; /* Adjusted font size */
		color: #333;
		text-align: center;
		padding: 8px 16px;
		background-color: rgba(255, 255, 255, 0.9);
		border-radius: 4px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.location-info i {
		color: #ff1919;
		font-size: 1.2rem;
		margin-right: 8px;
	}
</style>
