<script>
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';

	// Define team members with their details
	const teamMembers = [
		{
			name: 'Richard Ongocho',
			title: 'CEO',
			image: 'images/team/richie.jpg' // Update with the path to Richard's image
		},
		{
			name: 'Emmanuel Ade',
			title: 'Director',
			image: 'images/team/ade.jpg' // Update with the path to Emmanuel's image
		}
	];
</script>

<ContentSection id="About" title="About Us" description="Our team">
	<section class="team-section">
		{#each teamMembers as { name, title, image }}
			<div class="team-member">
				<img src={image} alt={name} class="profile-image" />
				<p>{title}</p>
				<h3>{name}</h3>
			</div>
		{/each}
	</section>
</ContentSection>

<style>
	.team-section {
		display: flex;
		justify-content: center;
		gap: 9rem; /* Increased space between team members */
		padding: 4rem;
		background-color: #F9F9F917; /* Light background color */
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for better appearance */
		flex-wrap: wrap; /* Allows wrapping on smaller screens */
	}

	.team-member {
		display: flex;
		width: 30%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		gap: 1rem; /* Increased gap between profile image and text */
		max-width: 250px; /* Increase max-width for larger display on PCs */
		flex: 1 1 auto; /* Allows the team members to grow and shrink as needed */
	}

	.profile-image {
		width: 120px; /* Larger width for PC */
		height: 120px; /* Larger height for PC */
		border-radius: 50%; /* Makes the image circular */
		object-fit: cover; /* Ensures the image covers the circle */
		border: 3px solid #ddd; /* Optional: Add a border around the image */
		margin-bottom: 1rem;
	}

	h3 {
		margin: 0;
		font-size: 1.1rem; /* Larger font size for names on PC */
	}

	p {
		margin: 0;

		font-size: 1rem; /* Larger font size for titles on PC */
	}

	/* Media query for larger screens (PC) */
	@media (min-width: 768px) {
		.team-section {
			padding: 4rem; /* Increase padding for PC */
		}
	}

	/* Media query for extra-large screens (large desktops) */
	@media (min-width: 1200px) {
		.team-section {
			padding: 6rem; /* Even more padding for larger screens */
		}

		.team-member {
			max-width: 300px; /* Further increase max-width for very large screens */
		}

		.profile-image {
			width: 150px; /* Larger width for very large screens */
			height: 150px; /* Larger height for very large screens */
		}

		h3 {
			font-size: 1.1rem; /* Larger font size for names on very large screens */
		}

		p {
			font-size: 1rem; /* Larger font size for titles on very large screens */
		}
	}
</style>
