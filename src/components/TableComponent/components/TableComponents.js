
export const TableComponents = ({postList, searchedRow}) => {

return (<>
 

    <section className="table">
    {postList.map((post,i)=>{
        return  <section 
        className={`table__row ${searchedRow.includes(post.id) && 'searched-row'}`}
         key={i}>

         <section 
         className={`table__column table__column_id ${!post ?? "empty"}`}>
            {post.id ?? ""}
         </section>

         <section 
         className={`table__column table__column_title ${!post ?? "empty"}`}>
            {post.title ?? ""}
        </section>
        
         <section 
         className={`table__column table__column_description ${!post ?? "empty"}`}>
            {post.body ?? ""}
        </section>
     </section>
    })}

    </section>
    </>
    )
}