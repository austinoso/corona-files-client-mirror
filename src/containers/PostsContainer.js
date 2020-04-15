import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard.js';
import Spinner from 'react-bootstrap/Spinner';
import GoogleMapsAutoCompleteForm from '../components/GoogleMapsAutoCompleteForm.js';

const PostsContainer = (props) => {
	const [posts, setPosts] = useState(null);
	const [currentLocation, setCurrentLocation] = useState(null);

	useEffect(() => {
		const fetchPost = () => {
			return fetch(`http://localhost:3000/posts`)
				.then((res) => res.json())
				.then((posts) => {
					if (!posts.error) {
						if (currentLocation) {
							setPosts(filterPosts(posts));
						} else {
							console.log('here');
							setPosts(posts);
						}
					}
				});
		};
		fetchPost();
	}, [currentLocation]);

	function filterPosts(posts) {
		// return posts.filter((post) => {
		// 	return inRange(
		// 		post.location_lat,
		// 		currentLocation.lat - 0.5,
		// 		currentLocation.lat + 0.5
		// 	) &&
		// 		inRange(
		// 			post.location_long,
		// 			currentLocation.long - 0.5,
		// 			currentLocation.long + 0.5
		// 		);
		// });
		return posts.filter((post) => {
			const lats = [currentLocation.lat, post.location_lat];
			const longs = [currentLocation.lng, post.location_long];
			return (
				!!(Math.max(...lats) - Math.min(...lats) < 0.5) &&
				!!(Math.max(...longs) - Math.min(...longs) < 0.5)
			);
		});
	}

	function inRange(x, min, max) {
		return (x - min) * (x - max) <= 0;
	}

	return posts ? (
		<div className="container">
			<GoogleMapsAutoCompleteForm setCurrentLocation={setCurrentLocation} />
			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</div>
	) : (
		<Spinner animation="border" variant="light" />
	);
};

export default PostsContainer;
