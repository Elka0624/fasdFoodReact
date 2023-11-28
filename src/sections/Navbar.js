import './styles/Navbar.css';
import logo from '../images/logo.svg';

function Navbar() {
    return (
        <nav>
            <div className='container nav'>
                <div className='logo'>
                    <a href="#home" style={{display: 'flex', alignItems: 'center'}}><img alt="logo" src={logo} /> <span style={{marginLeft: '10px',}}>Base</span></a>
                </div>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#features">Features</a>
                    </li>
                    <li>
                        <a href="#testimonial"> Testimonial</a>
                    </li>
                    <li>
                        <a href="#price">Pricing</a>
                    </li>
                    <li>
                        <a href="#footer">CTA</a>
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