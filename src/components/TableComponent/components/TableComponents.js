


export const TableComponents = ({postList}) => (
    <main className="table">
    {postList.map((post)=>{
        return  <section className='table__row' key={post.id ?? ""}>
         <section 
         className={`table__column table__column_id ${!post ?? "empty"}`}>{
         post.id ?? ""}
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
    </main>
)