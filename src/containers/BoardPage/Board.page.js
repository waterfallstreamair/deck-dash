import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    if (!post.comments) {
      this.props.getComments({ post });
    }
  };

  render = () => {
    const { posts } = this.props;
    return (
      <Content>
        <Column key={'posts'} >
          <H3>Posts</H3>
          {posts.length ? posts.map(e =>
            <Post key={`post-${e.id}`} onClick={event => this.getComments({ post: e }) } >
              <Title>{`${e.title}`}</Title>
              <PostBody>{`${e.body}`}</PostBody>
            </Post>
          ) : ''}
        </Column>
        {posts.map(e =>
          e.comments && 
          <Column key={`comments-${e.id}`}>
            <H3>{`Post ${e.id}`}</H3>
            {e.comments.length ? e.comments.map(c =>
              <Post key={`comment-${c.id}`}>
                <Title>{`${c.name}`}</Title>
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
