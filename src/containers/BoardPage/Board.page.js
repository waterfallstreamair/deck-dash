import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Column from '../../components/Column';
import H3 from '../../components/H3';
import Content from '../../components/Content';
import Item from '../../components/Item';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Remove from '../../components/Remove';
import Search from '../../components/Search';
import Head from '../../components/Head';
import List from '../../components/List';

class BoardPage extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired,
    getComments: PropTypes.func.isRequired,
    removeComments: PropTypes.func.isRequired
  };
  
  constructor(props) {
    super(props);
    this.state = {
      search: null
    };
  }

  componentDidMount() {
    this.props.getPosts();
  }
  
  getComments = (options) => {
    const { post } = options;
    if (!post.comments) {
      this.props.getComments({ post });
    }
  };
  
  removeComments = (options) => {
    const { post } = options;
    this.props.removeComments({ post });
  };
  
  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render = () => {
    const { posts } = this.props;
    const search = this.state.search ? this.state.search.toLowerCase() : null;
    const filtered = search ? posts.filter(e => e.title.toLowerCase().includes(search)) : null;
    return (
      <Content>
        <Column key={'posts'} >
          <Head>
            <H3>Posts</H3>
            <Search placeholder="Search..." onKeyUp={e => this.handleSearch(e) } />
          </Head>
          <List>
            {posts.length ? (filtered || posts).map(e =>
              <Item key={`post-${e.id}`} onClick={event => this.getComments({ post: e }) } >
                <Title>{`${e.title}`}</Title>
                <Text>{`${e.body}`}</Text>
              </Item>
            ) : ''}
          </List>
        </Column>
        {posts.map(e =>
          e.comments && 
            <Column key={`comments-${e.id}`}>
              <Head>
                <H3>{`Post ${e.id} Comments`}</H3>
                <Remove onClick={event => this.removeComments({ post: e }) }>X</Remove>
              </Head>
              <List>
              {e.comments.length ? e.comments.map(c =>
                <Item key={`comment-${c.id}`}>
                  <Title>{`${c.name}`}</Title>
                  <Text>{`${c.body}`}</Text>
                </Item>
              ) : ''}
              </List>
            </Column>
        )}
      </Content>
    );
  };
}

export default BoardPage;
