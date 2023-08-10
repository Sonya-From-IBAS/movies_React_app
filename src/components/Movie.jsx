function Movie (props) {
    const {Title : title, Year : year, imdbID : id, Type : type, Poster : poster} = props;
    return (
        <div id={id} className="card movie">
            <div classNameName="card-image waves-effect waves-block waves-light">
                {
                    poster === 'N/A' ? <img className="activator" src={`https://placehold.co/288x432?text=${title}`} alt='imggg'/> : <img className="activator" src={poster} alt='img'/>
                }
            </div>
            <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}</span>
            <p>{year} <span className="right">{type}</span></p>
            </div>
        </div>
    );
}

export {Movie}