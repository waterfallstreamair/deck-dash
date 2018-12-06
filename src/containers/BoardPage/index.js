import { connect } from 'react-redux';

import BoardPage from './Board.page';
import * as appliedActions from '../../actions/appliedActions';
import * as interviewingActions from '../../actions/interviewingActions';
import * as hiredActions from '../../actions/hiredActions';

const mapStateToProps = state => ({
  applied: state.applied,
  interviewing: state.interviewing,
  hired: state.hired
});

const mapDispatchToProps = dispatch => ({
  getApplied: options => dispatch(appliedActions.getApplied(options)),
  removeApplied: options => dispatch(appliedActions.removeApplied(options)),
  addApplied: options => dispatch(appliedActions.addApplied(options)),
  addInterviewing: options => dispatch(interviewingActions.addInterviewing(options)),
  removeInterviewing: options => dispatch(interviewingActions.removeInterviewing(options)),
  addHired: options => dispatch(hiredActions.addHired(options)),
  removeHired: options => dispatch(hiredActions.removeHired(options))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardPage);
