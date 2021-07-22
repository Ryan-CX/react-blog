import './header.css';
import headerPic from '../assets/headerimg.jpg';
export default function Header() {
	return (
		<div className='header'>
			<div className='headerTitles'>
				<span className='headerTitleLg'>My Blog</span>
			</div>
			<img className='headerImg' src={headerPic} alt='headerImg' />
		</div>
	);
}
