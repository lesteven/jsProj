import React, { Component }from 'react';


class LifeCy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {data: []}
    }
  }
  fetchData = async() => {
    const result = await fetch('/data');
    const json = await result.json();
    this.setState({json});
  }
  componentDidMount() {
    this.fetchData(); 
  }
  render() {
    return (
      <div>
        <p> hello LifeCy! </p>
        { this.state.json.data.map(each => 
            <p key = {each}> { each } </p> ) }
      </div>
    )
  }
}

export default LifeCy;
