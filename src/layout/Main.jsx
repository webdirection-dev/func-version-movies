import React, {useEffect, useState} from "react";
import Forms from "../components/forms";
import MoviesList from "../components/moviesList";
import Preloader from "../components/preloader/preloader";
import './layout.css';
import MoviesService from "../services/movies-service";

const getData = new MoviesService();

const Main = () => {
    const [loading, setLoading] = useState(true);
    const [moviesList, setMoviesList] = useState(null);
    const [nameForURL, setNameForURL] = useState('all');
    const [typeForURL, setTypeForURL] = useState(null);

    const dataForMovies = (name, type) => {
        getData.getMoviesList(name, type)
            .then(response => {
                setMoviesList(response.Search);
            })
            .catch(error => {
                console.error(error);

                this.setState({
                    loading: false
                })
            });
    }

    const toPutNameToSearch = url => {
        setLoading(true);
        setNameForURL(url);

        dataForMovies(url, typeForURL)

        setLoading(false);
    }

    const toPutTypeToSearch = type => {
        setLoading(true);
        setTypeForURL(type);

        dataForMovies(nameForURL, type)

        setLoading(false);
    }

    const toSearch = () => {
        setLoading(true);

        dataForMovies(nameForURL, typeForURL);

        setLoading(false);
    }

    // componentDidMount
    useEffect(() => {
        dataForMovies(nameForURL, typeForURL);
        setLoading(false)
    }, [nameForURL, typeForURL]);

    return(
        <main className='container content'>
            <div className="main__preloader">
                {loading ? <Preloader/> : null}
            </div>

            <Forms
                toPutNameToSearch={toPutNameToSearch}
                toPutTypeToSearch={toPutTypeToSearch}
                toSearch={toSearch}
            />

            {
                loading ? <Preloader /> : <MoviesList moviesList={moviesList}/>
            }
        </main>
    )
};

export default Main;