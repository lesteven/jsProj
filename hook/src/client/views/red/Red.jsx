import React, { Component } from 'react';
import { connect } from 'react-redux';
import { data, fetchData, sayHello } from '../../redux/data';



class Red extends Component {
  componentDidMount() {
    this.props.fetchData('hello');
  }
  render() {
    return (
      <div >
        <p> hello red! </p>
        <button onClick= {this.props.sayHello}> Click </button>
      </div>
    )
  }
}

const mapState = ({ data }) => ({
  data
})

const mapDispatch = {
  fetchData,
  sayHello
}

export default connect(mapState, mapDispatch)(Red);
