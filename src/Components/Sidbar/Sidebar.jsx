import './sidebar.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import img12 from '../img/7.jpg'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img className='sidebarImg' src={img12}/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci molestiae eveniet asperiores </p>
      </div>
      <div className='sidebarItem'>
      <span className='sidebarTitle'>CATEGORIES</span>
      <ul className='sidebarList'>
        <li className='sidebarListItem'>LIFE</li>
        <li className='sidebarListItem'>MUSIC</li>
        <li className='sidebarListItem'>STYLE</li>
        <li className='sidebarListItem'>SPORT</li>
        <li className='sidebarListItem'>TECH </li>
        <li className='sidebarListItem'>CINEMA</li>
      </ul>
      </div>
      <div className='sidebarItem'>
      <span className='sidebarTitle'>FOLLOW US</span>
      <div className='socialContainer'>
      <FacebookIcon className= 'sidebarIcon' />
      <TwitterIcon className='sidebarIcon'/>
      <PinterestIcon className= 'sidebarIcon' />
      <InstagramIcon className='sidebarIcon' />
      </div>
      </div>
    </div>
  )
}
