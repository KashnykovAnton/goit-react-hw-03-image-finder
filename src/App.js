import './App.css';
import './components/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { FetchApi } from './services/api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import LoaderSpin from './components/Loader';

const base_url = `https://pixabay.com/api/`;
const api_key = `23089683-10e6383e94187ff47334541d4`;
const newFetchApi = new FetchApi(base_url, api_key);

class App extends Component {
  state = {
    value: '',
    arr: [],
    status: 'idle',
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevState, prevProps) {
    if (prevProps.value !== this.state.value) {
      this.setState({ status: 'pending' });
      newFetchApi.resetPage();
      newFetchApi.value = this.state.value;
      newFetchApi
        .searchImages()
        .then(data => {
          this.setState({ arr: data });
          this.checkLengthArr();
        })
        .catch(err => {
          console.log(err);
          this.setState({ status: 'error' });
        });
    }
  }

  windowScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  checkLengthArr = () => {
    if (this.state.arr.length !== 0) {
      this.setState({ status: 'resolved' });
      return;
    }
    toast.warn('Изображений с таким названием, к сожалению, нет');
    this.setState({ status: 'idle' });
  };

  handleSubmitForm = value => {
    this.setState({ value });
  };

  toggleModal = largeImageURL => {
    this.setState(state => ({
      showModal: !state.showModal,
      largeImageURL: largeImageURL,
    }));
  };

  clearRender = () => {
    this.setState({ status: 'idle' });
  };

  handleClick = () => {
    newFetchApi.incrementPage();
    newFetchApi
      .searchImages()
      .then(data => {
        this.setState(prev => ({
          arr: [...prev.arr, ...data],
          status: 'resolved',
        }));
      })
      .catch(err => {
        console.log(err);
        this.setState({ status: 'error' });
      })
      .finally(() => {
        this.windowScroll();
      });
  };

  render() {
    const { arr, status, value, showModal, largeImageURL } = this.state;
    const { handleSubmitForm, clearRender, handleClick, toggleModal } = this;

    return (
      <div>
        <Searchbar onSubmit={handleSubmitForm} clearRender={clearRender} />
        <ToastContainer theme="colored" autoClose={2000} />

        {status === 'idle' && <p>Начните поиск изображений</p>}

        {status === 'pending' && (
          <div className="Loader">
            <LoaderSpin />
          </div>
        )}

        {status === 'resolved' && (
          <ImageGallery
            arr={arr}
            handleClick={handleClick}
            onClose={toggleModal}
          />
        )}

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
