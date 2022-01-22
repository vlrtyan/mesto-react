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
      <div class="page">
        <header class="header">
          <img class="header__logo" src="<%=require('./images/header-logo.svg')%>" alt="Назание сайта: Mesto Russia" />
        </header>

        <main class="content">
          <section class="profile">
            <div class="profile__avatar-container">
              <img class="profile__avatar" src="#" alt="Аватар профиля" />
            </div>
            <div class="profile__info">
              <button class="profile__edit-button" type="button">
              </button>
              <h1 class="profile__name">Имя</h1>
              <p class="profile__description">Описание</p>
            </div>
            <button class="profile__add-button" type="button">
            </button>
          </section>

          <section class="elements">
          </section>
        </main>

        <footer class="footer">
          <p class="footer__copyright">&copy; 2021 Mesto Russia</p>
        </footer>

        <div class="popup name-popup">
          <div class="name-popup__container">
            <button class="popup__close-button" type="button"></button>
            <h3 class="name-popup__title popup__title">Редактировать профиль</h3>
            <form class="popup__form name-popup__form" name="edit-profile" novalidate>
              <input
                type="text"
                placeholder="Жак-Ив Кусто"
                class="popup__input name-popup__input name-popup__input_type_name"
                name="fullname"
                id="fullname"
                required
                minlength="2"
                maxlength="40" />
              <span class="error" id="fullname-error"></span>
              <input
                type="text"
                placeholder="Исследователь океана"
                class="popup__input name-popup__input name-popup__input_type_description"
                name="description"
                id="description"
                required
                minlength="2"
                maxlength="200" />
              <span class="error" id="description-error"></span>
              <button class="name-popup__submit-button popup__submit-button" type="submit">Сохранить</button>
            </form>
          </div>
        </div>

        <div class="popup new-item">
          <div class="new-item__container">
            <button class="popup__close-button" type="button"></button>
            <h3 class="new-item__title popup__title">Новое место</h3>
            <form class="popup__form new-item__form" name="new-item" novalidate>
              <input
                type="text"
                placeholder="Название"
                class="popup__input new-item__input new-item__input_type_name"
                name="name"
                id="place-name"
                required
                minlength="2"
                maxlength="30" />
              <span class="error" id="place-name-error"></span>
              <input
                type="url"
                placeholder="Ссылка на картинку"
                class="popup__input new-item__input new-item__input_type_link"
                name="link"
                id="place-link"
                required />
              <span class="error" id="place-link-error"></span>
              <button class="new-item__submit-button popup__submit-button" type="submit">Создать</button>
            </form>
          </div>
        </div>

        <div class="popup avatar">
          <div class="avatar__container">
            <button class="popup__close-button" type="button"></button>
            <h3 class="avatar__title popup__title">Обновить аватар</h3>
            <form class="popup__form avatar__form" name="avatar" novalidate>
              <input
                type="url"
                placeholder="Ссылка"
                class="popup__input avatar__input avatar__input_type_link"
                name="link"
                id="avatar-link"
                required />
              <span class="error" id="avatar-link-error"></span>
              <button class="avatar__submit-button popup__submit-button" type="submit">Сохранить</button>
            </form>
          </div>
        </div>

        <div class="popup confirm">
          <div class="confirm__container">
            <button class="popup__close-button" type="button"></button>
            <h3 class="confirm__title popup__title">Вы уверены?</h3>
            <form class="popup__form confirm__form" name="avatar" novalidate>
              <button class="confirm__submit-button popup__submit-button" type="submit">Да</button>
            </form>
          </div>
        </div>

      </div>

      <div class="popup image-popup">
        <div class="image-popup__container">
          <button class="popup__close-button" type="button"></button>
          <img class="image-popup__image" src="/" alt="Описание" />
          <h3 class="image-popup__title">Место</h3>
        </div>
      </div>

      <template class="template" id="templateCard">
        <div class="element">
          <img class="element__image" src="images/elements/pavlovskoe.jpeg" alt="Описание" />
          <button class="element__delete-button" type="button"></button>
          <div class="element__info">
            <h2 class="element__title">Название</h2>
            <div class="element__like-container">
              <button class="element__like-button" type="button"></button>
              <p class="element__like-counter">0</p>
            </div>

          </div>
        </div>
      </template>
    </>
    /* </html> */
  )
}

export default App