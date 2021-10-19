import { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class LoaderSpin extends Component {
  render() {
    return (
      <Loader
        type="Circles"
        color="#3f51b5"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}

export default LoaderSpin;
