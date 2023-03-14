import './Header.css'
import logoUrl from './assets/logo-no-background.svg'

function Header () {
    return (
        <div className="header ac">
            <img src={logoUrl}></img>
            <div className='buttons'>
                <a>Strona główna</a>
                <a>Aktualności</a>
                <a>Archiwa</a>
            </div>
        </div>
    )
}

export default Header