import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState();
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState();
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState();

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  }
  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  return (
    // <!DOCTYPE html>
    // <html lang="ru">
    // <head>
    //   <meta charset="UTF-8">
    //   <meta name="viewport" content="width=device-width, initial-scale=1">
    //   <title>Место</title>
    // </head>
    <>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
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
            minlength="2"
            maxlength="40" />
          <span className="error" id="fullname-error"></span>
          <input
            type="text"
            placeholder="Исследователь океана"
            className="popup__input name-popup__input name-popup__input_type_description"
            name="description"
            id="description"
            required
            minlength="2"
            maxlength="200" />
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
            minlength="2"
            maxlength="30" />
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

        {/* попап подтверждения удаления
        <PopupWithForm
          name={'confirm'}
          title={'Вы уверены?'}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>
          <button className="confirm__submit-button popup__submit-button" type="submit">Да</button>
        </PopupWithForm> */}
      </div>

      <ImagePopup />
    </>
    /* </html> */
  )
}

export default App