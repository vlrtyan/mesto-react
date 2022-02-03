import React from 'react';
import { Api, api } from '../utils/Api.js';
import Card from './Card.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [cards, setCards] = React.useState([]);

    function handleCardLike(card) {
        const isLiked = card.likes.some(like => like._id === currentUser._id);
        // отправить запрос в API и обновить данные карточки
        api.changeLikeCardStatus(card, isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch(err => console.log(err));
    }

    function handleCardDelete(card) {
        api.deleteCard(card)
            .then(() => {
                setCards((state) => state.filter((c) => c._id != card._id));
            })
            .catch(err => console.log(err));
    }

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
                        key={card._id}
                        onCardClick={props.onCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />))}
            </section>
        </main>
    )
}

export default Main