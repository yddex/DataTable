import { Route, Routes } from 'react-router-dom';
import { useSelector,  } from 'react-redux'
import { getAllPagesSelector } from '../store/selectors/selectors';

import { HeaderComponent, TableComponents, NavFooterComponent } from './components';
import './style.scss'




export function Table({ currentPage }) {
    const pages = useSelector(getAllPagesSelector());
    

    return (
        <div className='wrapper'>
            <div className='wrapper-up'>

               <HeaderComponent />
                <Routes>
                    {pages.map((page, i) => {

                        return <Route key={i} exact path={page.path}
                            element={<TableComponents postList={pages[i].posts}  />} />
                    })}
                </Routes>
            </div>

            <NavFooterComponent currentPage={currentPage} pages={pages} />

        </div>
    )
}