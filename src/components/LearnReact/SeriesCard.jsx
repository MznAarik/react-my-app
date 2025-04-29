import "../components/seriesCard.css"

export const SeriesCard = ({ data }) => {
    // console.log(props);
    // const { data } = props;
    const { image_url, name, rating, description, cast, genre, watch_url } = data;

    const contentColor = {
        color: `${rating >= 8.5 ? "#7dcea0" : "rgb(223, 209, 11)"}`,
    }

    const ratingClass = rating >= 8.5 ? "super-hit" : "average"
    return (
        <li className="card">
            <div>
                <img src={image_url} alt={name} />
            </div>
            <div className="card-content">
                <h2 style={contentColor}>Name: {name}</h2>
                <h3 style={contentColor}>Rating:
                    <span className={`rating ${ratingClass}`}>
                        {rating}
                    </span>
                </h3>
                <p><strong>Description:   </strong>{description}</p>
                <p><strong>Cast:   </strong>{cast.join(', ')}</p>
                <p><strong>Genre:   </strong>{genre.join(', ')}</p>
                <a href={watch_url} target='_blank'>
                    {rating >= 8.5 ? (<button style={contentColor} className="btn-hover">Watch Now!</button>)
                        : (<button style={contentColor} className="btn-hover1">Watch Now!</button>)}

                </a>
            </div>
        </li >
    )
};
