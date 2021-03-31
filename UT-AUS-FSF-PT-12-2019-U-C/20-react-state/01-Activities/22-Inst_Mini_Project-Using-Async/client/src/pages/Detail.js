import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import {useStoreContext} from "../utils/GlobalState";
import API from "../utils/API";
import { GET_CURRENT_POST, ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/actions";

function Detail(props) {

  const [state, dispatch] = useStoreContext();

  const loadCurrentPost = async () => {
    try {
      const result = await API.getPost(props.match.params.id);
      dispatch({type: GET_CURRENT_POST, post: result.data});
    } catch (error) {
      console.log(error);
    }
  }

  const addFavorite = (event) => {
    dispatch({
        type: ADD_FAVORITE,
        post: state.currentPost
    });
  };

  const removeFavorite = (event) => {
    dispatch({
        type: REMOVE_FAVORITE,
        id: state.currentPost._id
    });
  };

  useEffect(() => {
    loadCurrentPost();
  },[]);

  return (
    <>{/* Replace `true` with the state of your application */}{state.currentPost ? (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>{state.currentPost.title}</h1>
              <h1>By: {state.currentPost.author}</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Content:</h1>
              <p>{state.currentPost.body}</p>
            </article>
          </Col>
          {state.favorites.indexOf(state.currentPost) !== -1 ? (
            <button className="btn btn-danger" onClick={removeFavorite}>Remove from Favorites!</button>
          ) : (
            <button className="btn" onClick={addFavorite}>❤️ Add to Favorites</button>
          )}
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Posts</Link>
          </Col>
        </Row>
      </Container>
    ) : (
      <div>loading...</div>
    )}</>
  );
}

export default Detail;
