import { useState } from "react";

export function SearchComponent({setSearchedRow, posts}){
    const [searchValue, setSearchValue] = useState('');

    function changeSearchValue(event) {
        let value = event.target.value;

        if(value === ""){
            setSearchedRow([]);
        }

        setSearchValue(value);
    }

    function searchInPage(value){
        const allPosts = posts;
        let searchedRows = [];

        allPosts.forEach((post)=>{
            if(String(post.id).includes(value)){
                searchedRows.push(post.id)
            }
            else if(post.title.includes(value)){
                searchedRows.push(post.id);

            }else if(post.body.includes(value)){
                searchedRows.push(post.id);
            }
        })


        setSearchedRow(searchedRows)
    }



    function hundleSubmit(event){
        if(searchValue !== ""){
            searchInPage(searchValue);
        }else{
            setSearchedRow([]);
        }
        event.preventDefault();
    }

    
    return (

        <form className="search__form" onSubmit={hundleSubmit}>
            <input type="text"
                    value={searchValue}
                    className="search__input"
                    onChange={changeSearchValue}
                    placeholder="Поиск" />
            <img src="./img/search.svg" alt="search img" className="search__icon" onClick={hundleSubmit}/>
        </form>
    )
}