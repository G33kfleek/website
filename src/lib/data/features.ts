import type { Feature } from "$lib/utils/types";

export default [
  {
    name: 'Reliability',
    description:
      'We are committed to providing dependable and consistent cleaning services. You can count on us to arrive on time and deliver quality results every time.',
    image: 'images/features/reliability.jpg', // Update with an image representing reliability
    tags: [{ label: 'Core Value' }]
  },
  {
    name: 'Quality',
    description:
      'Our top priority is to ensure high-quality cleaning standards. We use the best products and techniques to deliver exceptional results and maintain a spotless environment.',
    image: 'images/features/quality.jpg', // Update with an image representing quality
    tags: [{ label: 'Core Value' }]
  },
  {
    name: 'Customer Satisfaction',
    description:
      'We are dedicated to exceeding customer expectations. Our services are tailored to your needs, and we continuously seek feedback to improve our performance.',
    image: 'images/features/customer-satisfaction.jpg', // Update with an image representing customer satisfaction
  },
  {
    name: 'Attention to Detail',
    description:
      'Our cleaning professionals pay close attention to every detail. We ensure that every corner is cleaned thoroughly and no spot is missed.',
    image: 'images/features/attention-to-detail.jpg', // Update with an image representing attention to detail
    tags: [{ label: 'Core Value' }]
  },
  {
    name: 'Eco-Friendly Practices',
    description:
      'We are committed to using environmentally friendly cleaning products and practices. Our goal is to provide effective cleaning while minimizing our impact on the environment.',
    image: 'images/features/eco-friendly.jpeg', // Update with an image representing eco-friendly practices
  },
  {
    name: 'Affordability',
    description:
      'We offer competitive pricing without compromising on quality. Our services are designed to be affordable, ensuring you get the best value for your money.',
    image: 'images/features/affordability.jpg' // Update with an image representing affordability
  },
] as Feature[];
