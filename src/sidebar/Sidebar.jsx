import './sidebar.css';
export default function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>About Me</span>
				<img
					src='https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg'
					alt='sidebar'
				/>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Necessitatibus nesciunt recusandae dolor, eum voluptatum quae.
				</p>
			</div>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>Categories</span>
				<ul className='sidebarList'>
					<li className='sidebarListItem'>Life</li>
					<li className='sidebarListItem'>Music</li>
					<li className='sidebarListItem'>Sport</li>
					<li className='sidebarListItem'>Style</li>
					<li className='sidebarListItem'>Tech</li>
				</ul>
			</div>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>Follow Us</span>
				<div className='sidebarSocial'>
					<i className='topIcon fab fa-facebook-square'></i>
					<i className='topIcon fab fa-instagram'></i>
					<i className='topIcon fab fa-twitter-square'></i>
				</div>
			</div>
		</div>
	);
}
