import { Component } from 'react';
import '../components/styles.css';
import { FetchApi } from '../services/api';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';
import LoaderSpin from '../components/Loader';

const base_url = `https://pixabay.com/api/`;
const api_key = `23089683-10e6383e94187ff47334541d4`;
const newFetchApi = new FetchApi(base_url, api_key);

class ImageGallery extends Component {
  state = {
    arr: [],
    status: 'idle',
  };

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ status: 'pending' });
      newFetchApi.resetPage();
      newFetchApi.value = this.props.value;
      newFetchApi
        .searchImages()
        .then(data => {
          this.setState({ arr: data, status: 'resolved' });
        })
        .catch(err => {
          console.log(err);
          this.setState({ status: 'error' });
        });
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  handleClick = () => {
    newFetchApi.page = 1;
    newFetchApi
      .searchImages()
      .then(arr => {
        this.setState(prev => ({
          arr: [...prev.arr, ...arr],
          status: 'resolved',
        }));
      })
      .catch(err => {
        console.log(err);
        this.setState({ status: 'error' });
      });
  };

  render() {
    const { status, arr } = this.state;

    if (status === 'idle') {
      return <p>Начните поиск изображений</p>;
    }

    if (arr.length === 0) {
      return <p>Изображений с таким названием, к сожалению, нет</p>;
    }

    if (status === 'pending') {
      return (
        <div className="Loader">
          <LoaderSpin />
        </div>
      );
    }

    if (status === 'error') {
      return <h1>Error!</h1>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className="ImageGallery">
            {arr.map(({ id, webformatURL, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                onClose={this.props.onClose}
              />
            ))}
          </ul>
          <Button onClick={this.handleClick} />
        </>
      );
    }
  }
}

export default ImageGallery;
