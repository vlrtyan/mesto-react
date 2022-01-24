function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
      } 

    return (
        <div className="element">
            <img className="element__image" src={`${props.card.link}`} alt={`${props.card.name}`} onClick={handleClick}/>
            <button className="element__delete-button" type="button"></button>
            <div className="element__info">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__like-container">
                    <button className="element__like-button" type="button"></button>
                    <p className="element__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card