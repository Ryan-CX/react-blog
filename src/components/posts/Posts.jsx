import Post from '../post/Post';
import './posts.css';

export default function Posts() {
	return (
		<div className='posts'>
			<Post img='https://images.pexels.com/photos/3217363/pexels-photo-3217363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
			<Post img='https://images.pexels.com/photos/5011944/pexels-photo-5011944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
			<Post img='https://images.pexels.com/photos/2654902/pexels-photo-2654902.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
			<Post img='https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
		</div>
	);
}
