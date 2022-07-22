import { Link } from "react-router-dom"
export function NavFooterComponent({currentPage, pages}){
    return (
        <nav className='nav footer'>
                <Link
                    className={`nav__button nav__button_back`}
                    to={currentPage.prevPath}>
                    Назад
                </Link>
                    <section className='nav__pg'>
                    {pages.map((page, i)=>{
                        return <Link to={page.path} key={i} className="nav__pg_link">{page.number}</Link>
                    })}
                    </section>
                <Link
                    to={currentPage.nextPath}
                    className={`nav__button nav__button_next`}>
                    Вперед
                </Link>
            </nav>
    )
}