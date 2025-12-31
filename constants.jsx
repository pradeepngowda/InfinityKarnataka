
import React from 'react';

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Categories', href: '/categories' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const DESTINATIONS = [
  {
    id: '1',
    name: 'Hampi',
    category: 'Heritage',
    location: 'Vijayanagara',
    description: 'The UNESCO World Heritage site featuring ruins of the Vijayanagara Empire.',
    imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
  },
  {
    id: '2',
    name: 'Mysore Palace',
    category: 'Heritage',
    location: 'Mysuru',
    description: 'A historical palace and a royal residence at Mysore in the Indian State of Karnataka.',
    imageUrl: 'https://images.unsplash.com/photo-1600108620139-444855075677?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Coorg',
    category: 'Nature',
    location: 'Kodagu',
    description: 'Known as the Scotland of India, famous for its coffee plantations and lush greenery.',
    imageUrl: 'https://images.unsplash.com/photo-1598218175510-0937a0907e8a?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Gokarna',
    category: 'Beaches',
    location: 'Uttara Kannada',
    description: 'A small temple town on the western coast of India, famous for pristine beaches.',
    imageUrl: 'https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
  },
  {
    id: '5',
    name: 'Badami Caves',
    category: 'Heritage',
    location: 'Bagalkot',
    description: 'Complex of Hindu and Jain cave temples located in Badami, a town in north Karnataka.',
    imageUrl: 'https://images.unsplash.com/photo-1623594000305-64d12c82a5f7?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
  },
  {
    id: '6',
    name: 'Jog Falls',
    category: 'Nature',
    location: 'Shivamogga',
    description: 'One of the highest waterfalls in India, surrounded by dense evergreen forests.',
    imageUrl: 'https://images.unsplash.com/photo-1599839619722-39751411883e?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
  }
];

export const GALLERY_IMAGES = [
  { id: 'g1', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qjGa_LR_BCqNylNaLOcCfLxxqmT7qT6ECw&s', title: 'Narasimha Parvatha Temple', category: 'Temples' },
  { id: 'g2', url: 'https://kudremukhnationalpark.org/wp-content/uploads/2024/11/narasimha-parvatha-trek-1-scaled-e1732274149593.webp', title: 'Narasimha Parvatha Trek', category: 'Landscapes' },
  { id: 'g3', url: 'https://nammatrip.in/uploads/events/145/gallery_img_68eba95f0cbb3.png', title: 'Narasimha Parvatha', category: 'Landscapes' },
  { id: 'g4', url: 'https://images.prismic.io/indiahike/e7b0c445-dea9-4b42-8d6a-a7af88e032b0_Kurinjal+-+Bhajish+-+August+-+Indiahikes+-+Contribution+%288%29.jpg?auto=compress,format', title: 'Kurinjal', category: 'Landscapes' },
  { id: 'g5', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlrg4tgLuUONBycJdovfv2zrEunuJBfzdgsw&s75', title: 'Kurinjal', category: 'Landscapes' },
  { id: 'g6', url: 'https://nomadsofindia.com/wp-content/uploads/2022/10/Bandaje-Falls-View-1024x1024.jpg', title: 'Bandaje', category: 'Landscapes' },
  { id: 'g7', url: 'https://www.adventurush.com/wp-content/uploads/2023/07/Bandaje_Falls_trek_bmc_01.jpg', title: 'Bandaje', category: 'Landscapes' },
  { id: 'g8', url: 'https://s3.ap-south-1.amazonaws.com/bucket.bengalurutrekkers/blog-images/9e39f54f-278a-49a6-b3b6-d04ee879a2cc.jpg', title: 'Gangadikal l', category: 'Forts' },
  { id: 'g9', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0256vZgJdOD0_ApubySJNqR4FIY-7eKIk1Q&s', title: 'Gangadikal ', category: 'Landscapes' },
  { id: 'g10', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iU1hsh7S7p90c0tchieD41RvQtmUhso-UQ&s', title: 'Gangadikal ', category: 'Landscapes' },
  { id: 'g11', url: 'https://res.cloudinary.com/doufbrgld/image/upload/v1767109252/Devaramane_wexsge.jpg', title: 'Gangadikal ', category: 'Landscapes' },
  { id: 'g12', url: 'https://res.cloudinary.com/doufbrgld/image/upload/v1767109252/bandaje_nd9eqo.jpg', title: 'Bandaje ', category: 'Landscapes' },
  { id: 'g13', url: 'https://res.cloudinary.com/doufbrgld/image/upload/v1767109252/om-beach_tsbwlt.jpg', title: 'Gangadikal ', category: 'Landscapes' },
  
  
  
  
];

export const TRAVEL_CATEGORIES = [
  { id: 'c1', title: 'Heritage & Ruins', description: 'Explore the architectural marvels of bygone empires.', imageUrl: 'https://images.unsplash.com/photo-1623594000305-64d12c82a5f7', count: 42 },
  { id: 'c2', title: 'Wild & Green', description: 'Immerse yourself in the western ghats and tiger reserves.', imageUrl: 'https://images.unsplash.com/photo-1598218175510-0937a0907e8a', count: 28 },
  { id: 'c3', title: 'Coastal Bliss', description: 'Pristine beaches and laid-back sunset vibes.', imageUrl: 'https://images.unsplash.com/photo-1582298538104-fe2e74c27f59', count: 15 },
  { id: 'c4', title: 'Spiritual Quest', description: 'Visit ancient temples and divine meditation centers.', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2', count: 56 },
];
