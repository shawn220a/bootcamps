import React, {useRef} from "react";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import {LOADING,ADD_POST,LOADING_STOP} from "../../utils/actions";

const CreatePostForm = () => {

  const [state, dispatch] = useStoreContext();

  const titleRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = {
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: authorRef.current.value,
      date: new Date()
    };
    
    dispatch({ type: LOADING });
    try {
      const result = await API.savePost(formData);
      dispatch({type: ADD_POST, "post": result.data});
    } catch(error) {
      dispatch({ type: LOADING_STOP });
      console.log(error);
    }

    titleRef.current.value="";
    bodyRef.current.value="";
    authorRef.current.value="";
  };

  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
      <h1>Create a blog post</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required placeholder="Title" ref={titleRef} />
        <textarea className="form-control mb-5" required placeholder="Body" ref={bodyRef} />
        <input className="form-control mb-5" placeholder="Screen name" ref={authorRef} />
        <button className="btn btn-success mt-3 mb-5" type="submit" disabled={state.loading}>
          Save Post {state.loading.toString()}
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;
