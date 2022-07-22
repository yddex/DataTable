export const getPostListSelector = (from = 0,size = 10) => (state)=>{
   const posts = state.posts;
   return posts;
}

export const getAllPages = ()=> (state) => {
   return state.pages;
}