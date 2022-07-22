import './style.scss';

export function LoadingComponent(){
    return (
        <div className="loading__component">
            <div className='loading__circle'></div>
            <div className='loading__circle'></div>
            <div className='loading__circle'></div>
        </div>
    )
}