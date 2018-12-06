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

class BoardPage extends Component {
  static propTypes = {
    applied: PropTypes.array.isRequired,
    interviewing: PropTypes.array.isRequired,
    hired: PropTypes.array.isRequired,
    getApplied: PropTypes.func.isRequired,
    removeApplied: PropTypes.func.isRequired,
    addApplied: PropTypes.func.isRequired,
    addInterviewing: PropTypes.func.isRequired,
    removeInterviewing: PropTypes.func.isRequired,
    addHired: PropTypes.func.isRequired,
    removeHired: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getApplied();
  }

  appliedToInterviewing = (options) => {
    const { user } = options;
    this.props.addInterviewing({ user });
    this.props.removeApplied({ user });
  };

  interviewingToApplied = (options) => {
    const { user } = options;
    this.props.removeInterviewing({ user });
    this.props.addApplied({ user });
  };

  interviewingToHired = (options) => {
    const { user } = options;
    this.props.removeInterviewing({ user });
    this.props.addHired({ user });
  };

  HiredToInterviewing = (options) => {
    const { user } = options;
    this.props.removeHired({ user });
    this.props.addInterviewing({ user });
  };

  render = () => {
    const { applied, interviewing, hired } = this.props;
    return (
      <Content>
        <Column>
          <H3>Posts</H3>
          {applied.length ? applied.map(e =>
            <User key={e.login.uuid}>
              <Name>{`${e.name.first} ${e.name.last}`}</Name>
              <ButtonRight onClick={event => this.appliedToInterviewing({ user: e })}>{'>'}</ButtonRight>
            </User>
          ) : ''}
        </Column>
        <Column>
          <H3>Comment 1</H3>
          {interviewing.length ? interviewing.map(e =>
            <User key={e.login.uuid}>
              <ButtonLeft onClick={event => this.interviewingToApplied({ user: e })}>{'<'}</ButtonLeft>
              <Name>{`${e.name.first} ${e.name.last}`}</Name>
              <ButtonRight onClick={event => this.interviewingToHired({ user: e })}>{'>'}</ButtonRight>
            </User>
          ) : ''}
        </Column>
      </Content>
    );
  };
}

export default BoardPage;
