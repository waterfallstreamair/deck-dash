import { connect } from 'react-redux';

import BoardPage from './Board.page';
import * as postActions from '../../actions/postActions';

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  getPosts: options => dispatch(postActions.getPosts(options)),
  getComments: options => dispatch(postActions.getComments(options))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardPage);
