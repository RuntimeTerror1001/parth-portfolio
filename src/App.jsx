import {Route, HashRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home, About, Work_Experience, Tech, Projects, Contact} from './pages';
import ProjectDetailPage from './pages/ProjectDetailPage';

const App = () => {
  return (
   <main className= "bg-raisin-500 text-cornmilk-500 min-h-screen">
    <Router basename='/'> 
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            {/* <Route path="/work_ex" element={<Work_Experience/>} /> */}
            <Route path="/tech" element={<Tech/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/project/:projectSlug" element={<ProjectDetailPage/>} />
        </Routes>
    </Router>
   </main>
  )
}

export default App