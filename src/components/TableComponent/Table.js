import { useEffect, useState } from 'react';
import { getAllPages } from '../store/selectors/selectors';
import { useSelector } from 'react-redux'
import { HeaderComponent, TableComponents } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.scss'




export function Table(){
    const pages = useSelector(getAllPages());
    const [coursePage, setCoursePage] = useState(0)
    const [disabledButtons, setDisabledButtons] = useState({back: true, next: false})

    const hundleNextPage = () => {
        setCoursePage(coursePage + 1);
    }

    const hundleBackPage = () => {
        setCoursePage(coursePage - 1);
    }

    useEffect(()=>{

        if(coursePage === 0){
            setDisabledButtons({back: true, next: false});

        }else if(coursePage === pages.length - 1){
            setDisabledButtons({back: false, next: true})

        }else{
            setDisabledButtons({back: false, next: false})
        }



    },[coursePage])

    return (
        <>

        <HeaderComponent/>
        <TableComponents postList={pages[coursePage].posts}/>



        <nav className='nav'>
            <button 
            className={`nav__button nav__button_next ${disabledButtons.back && "disabled"}`}
            onClick={hundleBackPage}>
                Назад
            </button>
            
            <button 
            className={`nav__button nav__button_next ${disabledButtons.next && "disabled"}`}
            onClick={hundleNextPage}>
                Вперед
            </button>
        </nav>
        </>
    )
}