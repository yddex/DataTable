import { useState } from 'react';
import { getAllPagesSelector } from '../store/selectors/selectors';
import { useSelector,  } from 'react-redux'
import { HeaderComponent, TableComponents, NavFooterComponent } from './components';
import { Route, Routes } from 'react-router-dom';
import './style.scss'




export function Table({ currentPage }) {
    const pages = useSelector(getAllPagesSelector());
    const [sortedConfig, setSortedConfig] = useState({id: false, title: false, description: false});

    const hundleSort = (key)=>{
        switch(key){
            case 'id':
                setSortedConfig({id: !sortedConfig.id, title: false, description: false});
                break;
            
            case 'title':
                setSortedConfig({id: false, title: !sortedConfig.title, description: false});
                break;

            case 'description':
                setSortedConfig({id: false, title: false, description: !sortedConfig.description});
                break;

            default: setSortedConfig({id: false, title: false, description: false})
        }
    }
    


    return (
        <div className='wrapper'>
            <div className='wrapper-up'>

                <HeaderComponent hundleSort={hundleSort} sortedConfig={sortedConfig}/>
                <Routes>
                    {pages.map((page, i) => {

                        return <Route key={i} exact path={page.path}
                            element={<TableComponents sortedConfig={sortedConfig} postList={pages[i].posts}  />} />
                    })}
                </Routes>
            </div>

            <NavFooterComponent currentPage={currentPage} pages={pages} />

        </div>
    )
}