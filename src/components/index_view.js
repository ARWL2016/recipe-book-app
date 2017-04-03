import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
import { fetchRecipes } from '../actions/index'; 

class IndexView extends Component {
  componentWillMount() {
    this.props.fetchRecipes(); 
  }
  render() {
    return (
      <div>
        <h1>Index View</h1> 
      </div> 
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRecipes }, dispatch)
}

export default connect(null, mapDispatchToProps)(IndexView); 