import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from './common/Header';

class App extends  React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="card text-left">
          <div className="card-header">
            <Header loading={this.props.loading} />
          </div>
          <div className="card-body">
            <h2 className="card-title">Motor Vehicles</h2>
            {this.props.children}
          </div>
          <div className="card-footer text-center text-muted">
            &copy;Cognizant SoftVision
          </div>
        </div>        
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
