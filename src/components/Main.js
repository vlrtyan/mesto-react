function Main() {
    const handleEditAvatarClick = () => {
        document.querySelector('.avatar').classList.add('popup_opened')
    }
    const handleEditProfileClick = () => {
        document.querySelector('.name-popup').classList.add('popup_opened')
    }
    const handleAddPlaceClick = () => {
        document.querySelector('.new-item').classList.add('popup_opened')
    }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container" onClick={handleEditAvatarClick}>
                    <img className="profile__avatar" src="#" alt="Аватар профиля" />
                </div>
                <div className="profile__info">
                    <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}>
                    </button>
                    <h1 className="profile__name">Имя</h1>
                    <p className="profile__description">Описание</p>
                </div>
                <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}>
                </button>
            </section>

            <section className="elements">
            </section>
        </main>
    )
}

export default Main