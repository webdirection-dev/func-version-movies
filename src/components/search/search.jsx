import React, {useEffect, useState} from "react";
import './search.css';

const focusRef = React.createRef();

const Search = (props) => {
    const {toPutNameToSearch, toSearch} = props;

    const [search, setSearch] = useState('');

    const onSearch = (event) => {
        // получаем данные из импута
        const {value} = event.target;

        setSearch(value);

        let type = value;
        if (value === '') type = 'all';

        toPutNameToSearch(type)
    }

    const onPushEnter = (event) => {
        // получить код нажатой клавиши
        const {code} = event;
        const buttonClick = event.target.nodeName;

        if (code === 'Enter' || buttonClick === 'BUTTON') toSearch();
    }

    // componentDidMount
    useEffect(() => {
        // фокус в строке поиска при отрисовке компонента
        focusRef.current.focus();
    });

    return(
        <View
            search={search}
            onSearch={onSearch}
            onPushEnter={onPushEnter}
            focusRef={focusRef}
        />
    )
}

export default Search;

const View = ({search, onSearch, onPushEnter, focusRef}) => {
    return(
        <div className="row movie__search">
            <div className="input-field">
                <input
                    className="validate"
                    placeholder='search'
                    type="search"
                    value={search}
                    onChange={onSearch}
                    onKeyDown={onPushEnter}
                    ref={focusRef}
                />

                <button
                    className='btn search__btn'
                    onClick={onPushEnter}
                >Search</button>
            </div>
        </div>
    )
}