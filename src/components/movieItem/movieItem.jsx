import React, {useEffect, useState} from "react";
import MoviesService from "../../services/movies-service";
import Preloader from "../preloader/preloader";
import './movieItem.css'

const getData = new MoviesService();

const MovieItem = () => {
    const [moviesList, setMoviesList] = useState(null);

    // componentDidMount
    useEffect(() => {
        getData.getMoviesList('matrix')
            .then(response => {
                setMoviesList(response.Search);
            })
            .catch(error => console.error(error));
    }, []);

    if (!moviesList) return <Preloader/>;

    return(
        View(moviesList)
    )

};

export default MovieItem;

const View = (moviesList) => {
    return(
        moviesList.map(item => {
            const {
                Title: title,
                Year: year,
                imdbID: id,
                Type: type,
                Poster: poster
            } = item;

            return (
                <div key={id} id={id} className="card movieItem">
                    <div className="card-image waves-effect waves-block waves-light">
                        {
                            poster === 'N/A' ?
                                <img className="activator" src={`https://via.placeholder.com/300x400?text=${title}`} alt={title} />
                                :
                                <img className="activator" src={poster} alt={title} />
                        }
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{title}</span>
                        <p>
                            {year}
                            <span className='right'>{type}</span>
                        </p>
                    </div>
                </div>
            )
        })
    )
};