import React from "react";
import { Button } from "antd";
import MaskedInput from "react-text-mask";
// import createNumberMask from 'text-mask-addons/dist/createNumberMask'

// const angkaMask = createNumberMask({
//   prefix:'',
//   suffix:''
// });

class AnotherComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      multiplier: 5,
      value: 5
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

  handleChange = (event) => {
    //console.log('handleChange target.value = ',event.target.value)
    //if (event.target.value === '') event.target.value = 0;
    this.setState({value: event.target.value}, () => {
      this.setState({ multiplier: this.state.value }, () => {
        console.log('current multiplier = ', this.state.multiplier);
      });
    });
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
            {/* <input type="number" value={this.state.value} onChange={this.handleChange} /> */}
            <MaskedInput
              mask={s => Array.from(s).map(() => /[0-9]/i)}
              placeholderChar={'\u2000'}
              value={this.state.value}
              onChange={this.handleChange}
            />
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
