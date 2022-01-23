function ImagePopup() {
    return (
        <div className="popup image-popup">
            <div className="image-popup__container">
                <button className="popup__close-button" type="button"></button>
                <img className="image-popup__image" src="/" alt="Описание" />
                <h3 className="image-popup__title">Место</h3>
            </div>
        </div>
    )
}

export default ImagePopup 