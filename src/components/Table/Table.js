import { useEffect,useState } from 'react';
import { getPostListSelector } from '../store/selectors/selectors';
import { useSelector } from 'react-redux'
import { HeaderComponent, TableComponents } from './components';
import './style.scss'

export function Table(){
    const posts = useSelector(getPostListSelector())
    const [currentPosts, setCurrentPosts] = useState([]); 
    const selectPosts = (posts, from = 0,size = 10)=>{
        let partPosts = [];
        if(posts.length === 0){
            setCurrentPosts(new Array(10))
        }
        if(posts.length < size){
            size = posts.length;
        }
        for(let i = from; i < 10; i++){
            partPosts.push(posts[i]);
        }
        
        setCurrentPosts([...partPosts]);
    }


    useEffect(()=>{
        selectPosts(posts);
    },)

    return (
        <>
        <HeaderComponent/>
        <TableComponents postList={currentPosts}/>
        <nav>
            <button className='button__back'>Назад</button>
            <button className='button__next'>Вперед</button>
        </nav>
        </>
    )
}