import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate
import { FaVideo, FaCalendar, FaCog } from 'react-icons/fa';

// Gradient Text Utility Component
const GradientText = ({ children, gradient }) => (
	<span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>{children}</span>
);

// FeatureCard Component
const FeatureCard = ({ title, description, icon, gradient }) => (
	<div className="p-6 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
		<div className={`text-4xl mb-4 ${gradient}`}>
			{icon}
		</div>
		<h2 className="text-2xl font-semibold mb-2">{title}</h2>
		<p className="text-gray-300">{description}</p>
	</div>
);

// Home Component
const Home = () => {
	const navigate = useNavigate(); // Initialize useNavigate for routing

	const handleGetStarted = () => {
		navigate('/signup'); // Redirects to the Signup page
	};

	return (
		<div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
			{/* Hero Section */}
			<section className="w-full max-w-7xl mx-auto text-center mb-16">
				<h1 className="text-5xl font-extrabold mb-4">
					Welcome to <GradientText gradient="from-yellow-400 via-red-500 to-pink-500">Our Auction Platform</GradientText>
				</h1>
				<p className="text-lg mb-8">
					Discover exciting auctions, place your bids, and manage your items with ease.
				</p>
				<button
					onClick={handleGetStarted}
					className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
				>
					Get Started
				</button>
			</section>

			{/* Features Section */}
			<section className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
				<FeatureCard
					title="Live Auctions"
					description="Participate in live auctions and bid on your favorite items in real-time."
					icon={<FaVideo />}
					gradient="from-yellow-400 via-red-500 to-pink-500"
				/>
				<FeatureCard
					title="Calendar Integration"
					description="Sync your auction schedule with your calendar and never miss a bid."
					icon={<FaCalendar />}
					gradient="from-green-400 via-blue-500 to-purple-600"
				/>
				<FeatureCard
					title="Advanced Settings"
					description="Customize your auction experience with advanced settings and filters."
					icon={<FaCog />}
					gradient="from-indigo-400 via-purple-500 to-pink-600"
				/>
			</section>
		</div>
	);
};

export default Home;
