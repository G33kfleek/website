<script>
	import { MapLibre, Marker } from 'svelte-maplibre';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';

	// Coordinates for your location
	const latitude = -1.2959493391342332;
	const longitude = 36.898368525330405;
	const zoom = 17.5; // Zoom level

	// Map style URL (e.g., Carto Positron)
	const mapStyle = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json';
</script>

<ContentSection
	id="features"
	title="Our location"
	description=" find us Opposite KIPS college in Donholm Nairobi"
>
	<MapLibre center={[longitude, latitude]} {zoom} class="map" standardControls style={mapStyle}>
		<Marker
			coordinates={[longitude, latitude]}
			color="#FF0000"
			popup="We are located at Donholm Savannah Road Opposite KIPS College"
		/>
	</MapLibre>
	<div class="location-info">
		<i class="fas fa-map-marker-alt" />
		We are located at Donholm Savannah Road Opposite KIPS College
	</div>
</ContentSection>

<style>
	:global(.map) {
		height: 500px; /* Set height for the map */
		width: 100%; /* Ensure the map fills the container's width */
		border: 1px solid #ccc; /* Optional: Add a border around the map */
		border-radius: 8px; /* Optional: Add rounded corners */
	}
	.location-info {
		margin-top: 10px;
		margin-left: 10px; /* Space between the map and the location info */
		font-size: 0.6rem; /* Font size for the location text */
		color: #333; /* Text color */
		text-align: center; /* Center align the text */
		padding: 8px 16px; /* Padding around the text */
		background-color: rgba(255, 255, 255, 0.9); /* Background color to enhance readability */
		border-radius: 4px; /* Rounded corners */
		max-width: 90%; /* Limit the width of the text container */
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Slight shadow for better readability */
	}
	.location-info i {
		color: #ff1919; /* Color of the location icon */
		font-size: 1.2rem; /* Size of the location icon */
	}
</style>
