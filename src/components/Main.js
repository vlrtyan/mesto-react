import React from 'react';
import { Api, api } from '../utils/Api.js';
import Card from './Card.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);    
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitialCards()
            .then((res) => {
                setCards(res);
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }} alt="Аватар профиля" onClick={props.onEditAvatar}></div>
                <div className="profile__info">
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile}>
                    </button>
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <p className="profile__description">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}>
                </button>
            </section>

            <section className="elements">
                {cards.map((card) => (
                    <Card
                        card={card}
                        onCardClick={props.onCardClick}
                        key={card._id} />))}
            </section>
        </main>
    )
}

export default Main