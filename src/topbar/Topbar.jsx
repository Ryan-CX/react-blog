import './topbar.css';

export default function Topbar() {
	return (
		<div className='top'>
			<div className='topLeft'>
				<i className='topIcon fab fa-facebook-square'></i>
				<i className='topIcon fab fa-instagram'></i>
				<i className='topIcon fab fa-twitter-square'></i>
			</div>
			<div className='topCenter'>
				<ul className='topList'>
					<li className='topListItem'>Home</li>
					<li className='topListItem'>About</li>
					<li className='topListItem'>Contact</li>
					<li className='topListItem'>Write</li>
					<li className='topListItem'>Log Out</li>
				</ul>
			</div>
			<div className='topRight'>
				<img
					className='topImg'
					src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
					alt='pic'
				/>
				<i className='topSearchIcon fas fa-search'></i>
			</div>
		</div>
	);
}
