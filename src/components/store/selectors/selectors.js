export const getPostListSelector = () => (state) => {
   const posts = state.posts;
   return posts;
}

export const getAllPagesSelector = () => (state) => {
   return state.pages;
}

export const getCurrentPageSelector = (location) => (state) => {
   const pages = state.pages;
   const currentPath = location.pathname;
   const currentPage = pages.find((page)=>{
      return page.path === currentPath;
   });
   return currentPage
   
}