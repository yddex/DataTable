
export const HeaderComponent = ({hundleSort, sortedConfig}) => (
  <header className="header">



    <div 
    className={`header__section header__section_id ${sortedConfig.id && 'enable_sort'}`}
    onClick={()=>{hundleSort('id')}}>
      ID <img src="./img/arrow_down.svg" alt="arrow down" className="arrow_down" />
    </div>

    <div 
    className={`header__section header__section_title ${sortedConfig.title && 'enable_sort'}`}
     onClick={()=>{hundleSort('title')}}>
      Заголовок <img src="./img/arrow_down.svg" alt="arrow down" className="arrow_down" />
    </div>

    <div 
    className={`header__section header__section_description ${sortedConfig.description && 'enable_sort'}`}
    onClick={()=>{hundleSort('description')}}>
      Описание <img src="./img/arrow_down.svg" alt="arrow down" className="arrow_down" />
    </div>

  </header>
);
