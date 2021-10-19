import './App.css';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './components/styles.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';

class App extends Component {
  state = {
    value: '',
    showModal: false,
    largeImageURL: '',
  };

  handleSubmitForm = value => {
    this.setState({ value });
  };

  toggleModal = largeImageURL => {
    this.setState(state => ({
      showModal: !state.showModal,
      largeImageURL: largeImageURL,
    }));
    console.log('this.state in App:', this.state);
  };

  render() {
    const { value, showModal, largeImageURL } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmitForm} />
        <ImageGallery value={value} onClose={this.toggleModal} />
        <ToastContainer autoClose={2000} />
        {showModal && (
          <Modal
            value={value}
            onClose={this.toggleModal}
            largeImageURL={largeImageURL}
          />
        )}
      </div>
    );
  }
}

export default App;
