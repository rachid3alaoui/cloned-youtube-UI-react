import './App.css'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import RecommendedVideos from './components/RecommendedVideo/RecommendedVideos'

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app__page'>
        <SideBar />
        <RecommendedVideos />
      </div>
    </div>
  )
}

export default App
