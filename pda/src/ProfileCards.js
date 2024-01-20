function ProfileCards({title, handle, image, description}){
    const alt = "PDA Image"
    return (        
        <div>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src = {image} alt={alt}></img>
                    </figure>
                </div>
                <div class = "card-content">
                    <div className="media">
                        <figure className="image is-48x48">
                            <img src = {image} alt={alt}></img>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{handle}</p>
                    </div>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
        </div>
        )
}

export default ProfileCards;