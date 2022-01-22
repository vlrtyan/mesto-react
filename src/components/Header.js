import logo from '../images/header-logo.svg'

function Header(){
    return(
        <header class="header">
          <img class="header__logo" src={logo} alt="Назание сайта: Mesto Russia" />
        </header>
    )
}

export default Header