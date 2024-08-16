import Header from '../../Components/Header/Header'
import Posts from '../../Components/Posts/Posts'
import Sidebar from '../../Components/Sidbar/Sidebar'
import SinglePost from '../../Components/singlePost/SinglePost'
import './Home.css'

export default function Home() {
  return (
    <>
    <Header />
    <div className='home'>
    <Posts />
    {/* <SinglePost/> */}

    <Sidebar />
    
      
    </div>
    </>
  )
}
