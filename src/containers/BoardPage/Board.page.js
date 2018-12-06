import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from '../../components/User';
import Image from '../../components/Image';
import Name from '../../components/Name';
import ButtonRight from '../../components/ButtonRight';
import ButtonLeft from '../../components/ButtonLeft';
import Column from '../../components/Column';
import H3 from '../../components/H3';
import Content from '../../components/Content';
import Post from '../../components/Post';
import Title from '../../components/Title';
import PostBody from '../../components/PostBody';

class BoardPage extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired,
    getComments: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getPosts();
  }
  
  getComments = (options) => {
    const { post } = options;
    this.props.getComments({ post });
  };

  render = () => {
    const { posts } = this.props;
    return (
      <Content>
        <Column key={'posts'} >
          <H3>Posts</H3>
          {posts.length ? posts.map(e =>
            <Post key={`key-${e.id}`} onClick={event => this.getComments({ post: e }) } >
              <Title>{`${e.title}`}</Title>
              <PostBody>{`${e.body}`}</PostBody>
            </Post>
          ) : ''}
        </Column>
        {posts.map(e =>
          e.comments && 
          <Column key={`post-${e.id}`}>
            <Title>{`Post ${e.id}`}</Title>
            {e.comments.length ? e.comments.map(c =>
              <Post key={`key-${c.id}`}>
                <Title>{`${c.title}`}</Title>
                <PostBody>{`${c.body}`}</PostBody>
              </Post>
            ) : ''}
          </Column>
        )}
      </Content>
    );
  };
}

export default BoardPage;
