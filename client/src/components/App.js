import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import PointCloudView from './PointCloudView';


class App extends React.Component {
  componentWillMount() {
    this.props.getData();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        {this.props.cloudLoading ? <div>Spinner</div>: <PointCloudView/>}
      </div>
    );
  }
};

var mapStateToProps = function(state) {
  return {
    pointCloud: state.pointCloud,
    cloudLoading: state.cloudLoading
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    getData: function() {
        dispatch({type: 'loadingCloud'});
        dispatch({type: 'receiveCloud'});
        dispatch({type: 'loadedCloud'});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
