import React, {useState} from "react";
import './radio.css'

const Radio = (props) => {
    const {toPutTypeToSearch} = props;
    const [genre, setGenre] = useState('');

    const onChangeRadio = (event) => {
        const {value} = event.target;
        let valueToState = value;

        setGenre(valueToState);

        let type = value;
        if (value === 'all') type = null;

        toPutTypeToSearch(type);
    };

    return(
        <View
            genre={genre}
            onChangeRadio={onChangeRadio}
        />
    )
}

export default Radio;

const View = ({genre, onChangeRadio}) => {
    return(
        <form className='movie__radio'>
            <p>
                <label>
                    <input
                        name="genre"
                        type="radio"
                        checked={genre === '' || genre === 'all'}
                        value='all'
                        className='with-gap'
                        onChange={onChangeRadio}
                    />
                    <span>All</span>
                </label>
            </p>
            <p>
                <label>
                    <input
                        name="genre"
                        type="radio"
                        checked={genre === 'movie'}
                        value='movie'
                        className='with-gap'
                        onChange={onChangeRadio}
                    />
                    <span>Movie</span>
                </label>
            </p>
            <p>
                <label>
                    <input
                        name="genre"
                        type="radio"
                        checked={genre === 'series'}
                        value='series'
                        className='with-gap'
                        onChange={onChangeRadio}
                    />
                    <span>Series</span>
                </label>
            </p>
        </form>
    )
}