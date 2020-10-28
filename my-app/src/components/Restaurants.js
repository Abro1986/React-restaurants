import React, { Component } from 'react'

import axios from 'axios'

//const url = `https://code-challenge.spectrumtoolbox.com/api/restaurants`
const url = `http://localhost:3001/api/eaterys`

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eaterys: []
    }
  }

  componentDidMount() {
    axios.get(url)
      .then(res => this.setState({eaterys: res.data}))
  }

  render() {
    const restaurants = this.state.eaterys.map(e => (
      <div key={e.id}>
        <h3>{e.name}</h3>
        <p>{e.tags}</p>
      </div>
    ));
    return (
      <div>
        <h1>Restaurants</h1>
        {restaurants}
      </div>
    )
  }
}

export default Restaurants
