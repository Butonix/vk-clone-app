export const middle = store => next => action => {
   return store.WallAddPost.posts.filter(item => item.text.includes(store.WallAddPost.searchText))
  }