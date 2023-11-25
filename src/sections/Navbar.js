import './styles/Navbar.css';
import logo from '../images/logo.svg';

function Navbar() {
    return (
        <nav>
            <div className='container nav'>
                <div className='logo'>
                    <img alt="logo" src={logo} /> <span>Base</span>
                </div>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Features
                    </li>
                    <li>
                        Testimonial
                    </li>
                    <li>
                        Pricing
                    </li>
                    <li>
                        CTA
                    </li>
                </ul>
                <div>
                    <button className='navbar__btn'>Try demo</button>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;