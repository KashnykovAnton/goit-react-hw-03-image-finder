import { Component } from 'react';
import '../components/styles.css';

class Button extends Component {
  render() {
    return (
      <div className="Button-div">
        <button className="Button" type="button" onClick={this.props.onClick}>
          LoadMore
        </button>
      </div>
    );
  }
}

export default Button;
