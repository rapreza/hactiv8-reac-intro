import React from "react";
import { Button } from "antd";
// const axios = require("axios");
// import axios from 'axios';


/**
 * @todo
 * - Dibuat as Class
 * - Pemprosesan pengurangan dan pertambahan dipindahkan ke Another Component
 * - Ditambahkan perkalian didalamnya (dikalikan state = 5) as default;
 */

class AnotherComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      multiplier: 5,
      value: ''
    };

  }

  handleAddNumber = () => {
    this.setState({ number: this.state.number + 1 } , () => {
      this.props.handleUpdateNumber(this.state.number)
  });

  };

  handleSubtractNumber = () => {
    this.setState({ number: this.state.number - 1 } , () => {
        this.props.handleUpdateNumber(this.state.number)
    });
  };

  handleMultiplyNumber = () => {
    this.setState({ number: this.state.number * this.state.multiplier }, () => {
        this.props.handleUpdateNumber(this.state.number)
    });
  };

  /*
  handleChange = (event) => {
    this.setState({value: event.target.value});
    //console.log('value = ' , this.state.value)
  };

  handleSubmit = (event) => {
    //console.log('A multiplier was submitted: ' + this.state.value);
    this.setState({ multiplier: this.state.value }, () => {
      console.log('current multiplier = ', this.state.multiplier);
    });
    event.preventDefault();
  };
  */

  handleChange = (event) => {
    this.setState({value: event.target.value}, () => {
      this.setState({ multiplier: this.state.value }, () => {
        console.log('current multiplier = ', this.state.multiplier);
      });
    });
    //console.log('value = ' , this.state.value)
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    //console.log("props another component", this.props);
    return (
      <div>
        <Button onClick={this.handleAddNumber}
          className="coba"
        >
          Tambah
        </Button>
        <span> </span>
        <Button
          onClick={this.handleSubtractNumber}
          className="coba"
        >
          Kurang
        </Button>
        <p></p>
        <form onSubmit={this.handleSubmit}>
          <label>
            INSERT MULTIPLIER :<span> &nbsp; </span>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
        <p></p>
        <Button
          onClick={this.handleMultiplyNumber}
          className="coba"
          type="primary"
        >
          multiply by {this.state.multiplier}
        </Button>
      </div>
    );
  }
}

export default AnotherComponent;
