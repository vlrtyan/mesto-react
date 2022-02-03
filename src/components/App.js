import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import { api } from '../utils/Api.js';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState();
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState();
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState();
  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState('');

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  }
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }
  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  React.useEffect(() => {
    api.getUserData()
      .then(userData => setCurrentUser(userData))
      .catch(err => console.log(err))
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <div className="page">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <Footer />

          {/* попап редактирования профиля */}
          <PopupWithForm
            name={'edit-profile'}
            title={'Редактировать профиль'}
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}>
            <input
              type="text"
              placeholder="Жак-Ив Кусто"
              className="popup__input name-popup__input name-popup__input_type_name"
              name="fullname"
              id="fullname"
              required
              minLength="2"
              maxLength="40" />
            <span className="error" id="fullname-error"></span>
            <input
              type="text"
              placeholder="Исследователь океана"
              className="popup__input name-popup__input name-popup__input_type_description"
              name="description"
              id="description"
              required
              minLength="2"
              maxLength="200" />
            <span className="error" id="description-error"></span>
          </PopupWithForm>

          {/* попап редактирования аватара */}
          <PopupWithForm
            name={'edit-avatar'}
            title={'Обновить аватар'}
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}>
            <input
              type="url"
              placeholder="Ссылка"
              className="popup__input avatar__input avatar__input_type_link"
              name="link"
              id="avatar-link"
              required />
            <span className="error" id="avatar-link-error"></span>
          </PopupWithForm>

          {/* попап добавления карточки */}
          <PopupWithForm
            name={'add-place'}
            title={'Новое место'}
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}>
            <input
              type="text"
              placeholder="Название"
              className="popup__input new-item__input new-item__input_type_name"
              name="name"
              id="place-name"
              required
              minLength="2"
              maxLength="30" />
            <span className="error" id="place-name-error"></span>
            <input
              type="url"
              placeholder="Ссылка на картинку"
              className="popup__input new-item__input new-item__input_type_link"
              name="link"
              id="place-link"
              required />
            <span className="error" id="place-link-error"></span>
          </PopupWithForm>
        </div>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </>
    </CurrentUserContext.Provider>
  )
}

export default App