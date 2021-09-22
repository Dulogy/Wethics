import { FETCH_POSTS } from "./actionTypes";

export function fetchPosts() {
  return (dispatch) => {
    const url =
      " https://renemorozowich.com/wp-json/wp/v2/posts?filter[posts_per_page]=10&page=1&_embed";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: FETCH_POSTS,
    posts,
  };
}
