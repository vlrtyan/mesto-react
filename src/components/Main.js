function Main(props) {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src="#" alt="Аватар профиля" />
                </div>
                <div className="profile__info">
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile}>
                    </button>
                    <h1 className="profile__name">Имя</h1>
                    <p className="profile__description">Описание</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}>
                </button>
            </section>

            <section className="elements">
            </section>
        </main>
    )
}

export default Main