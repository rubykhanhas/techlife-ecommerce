//#region IMPORT
import useDebounce from "@/hooks/useDebounce";
import { SEARCH_BY_TITLE } from "@/query/product";
import { NetworkStatus, useLazyQuery, useQuery } from "@apollo/client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VscLoading } from "react-icons/vsc";
import React, { ChangeEvent, FocusEvent, FormEvent, useState, useEffect, useRef } from "react";
import "./SearchForm.scss";
import SearchResult from "./SearchResult";
//#endregion
function SearchForm() {
    const [inputText, setInputText] = useState<String>("");
    const [isFocus, setIsFocus] = useState<Boolean>(false);
    const [getProducts, {loading, data }] = useLazyQuery(SEARCH_BY_TITLE);
    const debounceInput = useDebounce(inputText, 500);

    useEffect(() => {
        (async () => {
            if(inputText != "" && inputText.length >= 4) {
                getProducts({
                    variables: {title: inputText, limit: 5}
                })
            }
        })();
    }, [debounceInput]);

    //#region aside event
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };
    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
        setIsFocus(true);
    };
    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
        setIsFocus(false);
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    //#endregion
    
    return (
        <div className="search__search-form">
            <form onSubmit={handleSubmit}>
                <input
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    type="text"
                    placeholder="whats you need ?"
                    onChange={handleChange}
                />
                <button className="primary-btn">
                    {loading ? <VscLoading /> : <FontAwesomeIcon icon={faSearch} />}
                </button>
            </form>
            <SearchResult isFocus={isFocus} results={data && data.getProducts ? data.getProducts : []} />
        </div>
    );
}

export default SearchForm;
