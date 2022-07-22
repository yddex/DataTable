import { getAllPagesSelector } from '../store/selectors/selectors';
import { useSelector } from 'react-redux'
import { HeaderComponent, TableComponents } from './components';
import { Route, Routes, Link } from 'react-router-dom';
//import { getCurrentPageSelector } from '../store/selectors/selectors';
import './style.scss'




export function Table({currentPage}) {
    //const location = useLocation();
    const pages = useSelector(getAllPagesSelector());
    

    return (
        <>
            <HeaderComponent />
            <Routes>
                {pages.map((page, i) => {

                    return <Route exact path={page.path}
                        element={<TableComponents postList={pages[i].posts} key={i}/>} />
                })}
            </Routes>


            <nav className='nav footer'>
                <Link
                    className={`nav__button nav__button_back`}
                    to={currentPage.prevPath}>
                    Назад
                </Link>

                <Link
                    to={currentPage.nextPath}
                    onClick={()=>console.log(currentPage.nextPath, 'buttton')}
                    className={`nav__button nav__button_next`}>
                    Вперед
                </Link>
            </nav>
        </>
    )
}