import { Link } from 'react-router-dom';
import '../App.css'

function Layout({children}) {
    return (
        <div className='main-page'>
            <header className='header'>
                <nav className='navigation-btns'>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                </nav>
            </header>
            <main className='main'>{children}</main>
            <footer className='footer'>Footer</footer>
        </div>
    );
}

export default Layout;
