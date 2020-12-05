import React from 'react'
import { NavLink } from 'react-router-dom';
import './SearchResult.scss';

type SearchResultProp = {
    isFocus: Boolean,
    results: {_id: String, title: String}[],
}

function SearchResult(props: SearchResultProp) {
    return (
        <div className={`search-result ` + (props.isFocus && "active")}>
            {
                props.results.length > 0 ?
                props.results.map(result => <NavLink key={result._id} to={`/product/${result._id}`}>{result.title}</NavLink>) :
                <p>No matches found  -_- </p>
            }
        </div>
    )
}

export default SearchResult;
