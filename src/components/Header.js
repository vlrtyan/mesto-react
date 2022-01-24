import logo from '../images/header-logo.svg'

function Header(){
    return(
        <header className="header">
          <img className="header__logo" src={logo} alt="Назание сайта: Mesto Russia" />
        </header>
    )
}

export default Header