import React, {useEffect} from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { GET_ALL_POSTS, REMOVE_POST, LOADING_STOP, LOADING } from "../../utils/actions";

const PostsList = () => {

  const [state, dispatch] = useStoreContext();

  const getPosts = async () => {
    dispatch({type: LOADING});
    try {
      const results = await API.getPosts();
      dispatch({type: GET_ALL_POSTS, posts: results.data});
    } catch(error) {
      dispatch({type: LOADING_STOP});
      console.log(error);
    }
  };

  const removePost = async (id) => {
    dispatch({type: LOADING});
    try {
      await API.deletePost(id);
      dispatch({type: REMOVE_POST, _id: id});
    } catch(error) {
      dispatch({type: LOADING_STOP});
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>All Blog Posts</h1>
      <h3 className="mb-5 mt-5">Click on a post to view</h3>
      {/* Replace `[]` with the appropriate arrays */}
      {state.posts.length ? (
        <List>
          {state.posts.map(post => (
            <ListItem key={post._id}>
              <Link to={"/posts/" + post._id}>
                <strong>
                  {post.title} by {post.author}
                </strong>
              </Link>
              <DeleteBtn onClick={() => {removePost(post._id)}} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any posts yet!</h3>
      )}
      <div className="mt-5">
        <Link to="favorites">View favorites</Link>
      </div>
    </div>
  );
};

export default PostsList;
