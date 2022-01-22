import Header from './Header';
import Main from './Main';
import Footer from './Footer'

function App() {
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
        <Main />
        <Footer />

        <div className="popup name-popup">
          <div className="name-popup__container">
            <button className="popup__close-button" type="button"></button>
            <h3 className="name-popup__title popup__title">Редактировать профиль</h3>
            <form className="popup__form name-popup__form" name="edit-profile" novalidate>
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
              <button className="name-popup__submit-button popup__submit-button" type="submit">Сохранить</button>
            </form>
          </div>
        </div>

        <div className="popup new-item">
          <div className="new-item__container">
            <button className="popup__close-button" type="button"></button>
            <h3 className="new-item__title popup__title">Новое место</h3>
            <form className="popup__form new-item__form" name="new-item" novalidate>
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
              <button className="new-item__submit-button popup__submit-button" type="submit">Создать</button>
            </form>
          </div>
        </div>

        <div className="popup avatar">
          <div className="avatar__container">
            <button className="popup__close-button" type="button"></button>
            <h3 className="avatar__title popup__title">Обновить аватар</h3>
            <form className="popup__form avatar__form" name="avatar" novalidate>
              <input
                type="url"
                placeholder="Ссылка"
                className="popup__input avatar__input avatar__input_type_link"
                name="link"
                id="avatar-link"
                required />
              <span className="error" id="avatar-link-error"></span>
              <button className="avatar__submit-button popup__submit-button" type="submit">Сохранить</button>
            </form>
          </div>
        </div>

        <div className="popup confirm">
          <div className="confirm__container">
            <button className="popup__close-button" type="button"></button>
            <h3 className="confirm__title popup__title">Вы уверены?</h3>
            <form className="popup__form confirm__form" name="avatar" novalidate>
              <button className="confirm__submit-button popup__submit-button" type="submit">Да</button>
            </form>
          </div>
        </div>

      </div>

      <div className="popup image-popup">
        <div className="image-popup__container">
          <button className="popup__close-button" type="button"></button>
          <img className="image-popup__image" src="/" alt="Описание" />
          <h3 className="image-popup__title">Место</h3>
        </div>
      </div>

      <template className="template" id="templateCard">
        <div className="element">
          <img className="element__image" src="images/elements/pavlovskoe.jpeg" alt="Описание" />
          <button className="element__delete-button" type="button"></button>
          <div className="element__info">
            <h2 className="element__title">Название</h2>
            <div className="element__like-container">
              <button className="element__like-button" type="button"></button>
              <p className="element__like-counter">0</p>
            </div>

          </div>
        </div>
      </template>
    </>
    /* </html> */
  )
}

export default App