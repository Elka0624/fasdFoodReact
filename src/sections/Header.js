import './styles/Header.css';
import img from '../images/header-img.png';

export default function Header() {
    
    return (
        <div style={{background: '#002547'}}>
            <header className='container'>
            <div className='header__left'>
                <p>Lorem ipsum dolor</p>
                <h1>
                    Always the <span className='blueSpan'>real</span> <br /> thing, always <span className='blueSpan' style={{textDecorationLine: 'none'}}>Saas</span>
                </h1>
                <p>
                    And that number is growing every day. <br /> That means <span style={{color: 'white', textDecorationLine: 'underline'}}>e-commerce</span> is thriving.
                </p>
                <button> Try for free</button>
                <button> Try for free</button>
            </div>
            <div className='header__right'>
                <img src={img} alt="" className='header__right__img' />
            </div>
        </header>
        </div>
    )
}