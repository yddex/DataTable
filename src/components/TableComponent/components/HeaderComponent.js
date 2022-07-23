import { useDispatch } from "react-redux";
import { setSortThunk } from "../../store/thunks/thunks";
import { useState } from "react";

export const HeaderComponent = () => {
  const [sortedConfig, setSortedConfig] = useState({id: false, title: false, body: false});
  const dispatch = useDispatch();



  const hundleSort = (key)=>{
    switch(key){
        case 'id':
            dispatch(setSortThunk(!sortedConfig.id, key))
            setSortedConfig({id: !sortedConfig.id, title: false, body: false});
            
            break;
        
        case 'title':
            dispatch(setSortThunk(!sortedConfig.title, key))
            setSortedConfig({id: false, title: !sortedConfig.title, body: false});
            
            break;

        case 'body':
            dispatch(setSortThunk(!sortedConfig.body, key))
            setSortedConfig({id: false, title: false, body: !sortedConfig.body});
            
            break;

        default: setSortedConfig({id: false, title: false, body: false})
    }
}


return (
  <header className="header">
    <div 
    className={`header__section header__section_id ${sortedConfig.id && 'enable_sort'}`}
    onClick={()=>{
      hundleSort('id');
      }}>
      ID <img src="./img/arrow_down.svg" alt="arrow down" className="arrow_down" />
    </div>

    <div 
    className={`header__section header__section_title ${sortedConfig.title && 'enable_sort'}`}
     onClick={()=>{
      hundleSort('title');
      }}>
      Заголовок <img src="./img/arrow_down.svg" alt="arrow down" className="arrow_down" />
    </div>

    <div 
    className={`header__section header__section_description ${sortedConfig.body && 'enable_sort'}`}
    onClick={()=>{
      hundleSort('body');
      }}>
      Описание <img src="./img/arrow_down.svg" alt="arrow down" className="arrow_down" />
    </div>

  </header>
)
}
