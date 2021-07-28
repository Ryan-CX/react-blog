import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../../components/posts/Posts';
import './home.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
	const [posts, setPosts] = useState([]);
	// fetch the data from the backend api/posts
	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get('/posts');
			setPosts(res.data);
		};
		fetchPosts();
	}, []);

	return (
		<>
			<Header />
			<div className='home'>
				{/* pass the fetching posts data to the posts variable  */}
				<Posts posts={posts} />
				<Sidebar />
			</div>
		</>
	);
}
