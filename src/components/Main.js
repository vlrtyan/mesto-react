import React from 'react';
import { Api, api } from '../utils/Api.js';

function Main(props) {
    const [userName, setUserName] = React.useState('имя');
    const [userDescription, setUserDescription] = React.useState('описание');
    const [userAvatar, setUserAvatar] = React.useState('#');

    React.useEffect(() => {
        api.getUserData()
            .then((userData) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
    })

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src = {`${userAvatar}`} alt="Аватар профиля" />
                </div>
                <div className="profile__info">
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile}>
                    </button>
                    <h1 className="profile__name">{userName}</h1>
                    <p className="profile__description">{userDescription}</p>
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