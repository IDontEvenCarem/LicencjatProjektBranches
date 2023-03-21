import './Header.css'
import logoUrl from './assets/logo-no-background.svg'
import { Link } from 'react-router-dom'

function Header () {
    return (
        <div className="header ac">
            <Link to="/">
                <img src={logoUrl}></img>
            </Link>
            <div className='buttons'>
                <Link to='/'>Strona główna</Link>
                <a>Aktualności</a>
                <a>Archiwa</a>
            </div>
        </div>
    )
}

export default Header