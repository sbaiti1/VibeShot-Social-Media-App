import { BrowserRouter , Link , Routes , Route } from 'react-router-dom';
import Home from './components/home';
import Layout from './components/layout';
import '../css/app.css'
import SideNav from './components/sideNav';
import Register from './components/Register/register';

export default function App(){
    return(
        <BrowserRouter>
            <SideNav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/explore' element={<Layout title='explore' />} />
                <Route path='/notifications' element={<Layout title='notifications'  />} />
                <Route path='/bookmarks' element={<Layout title='bookmarks' />} />
                <Route path='/settings' element={<Layout title='settings' />} />
                <Route path='/register' element={<Register />} />

            </Routes>
        </BrowserRouter>
    )
}