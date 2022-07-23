import { Route, Routes } from 'react-router-dom';
import { useSelector, } from 'react-redux'
import { getAllPagesSelector, getPostListSelector } from '../store/selectors/selectors';
import { useState } from 'react';
import { HeaderComponent, TableComponents, NavFooterComponent, SearchComponent } from './components';
import './style.scss'




export function Table({ currentPage }) {
    const pages = useSelector(getAllPagesSelector());
    const posts = useSelector(getPostListSelector());
   
    const [searchedRow, setSearchedRow] = useState([]);


    return (
        <div className='wrapper'>
            <div className='wrapper-up'>
                

                <SearchComponent 
                setSearchedRow={setSearchedRow}
                posts={posts}
                />
                
                <HeaderComponent />
                <Routes>
                    {pages.map((page, i) => {

                        return <Route key={i} exact path={page.path}
                            element={<TableComponents postList={pages[i].posts} searchedRow={searchedRow}/>} />
                    })}
                </Routes>
            </div>

            <NavFooterComponent currentPage={currentPage} pages={pages} />

        </div>
    )
}