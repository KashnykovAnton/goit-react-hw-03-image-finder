import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';

class ImageGallery extends Component {
  render() {
    const { arr, onClose, handleClick } = this.props;
    return (
      <>
        <ul className="ImageGallery">
          {arr.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onClose={onClose}
            />
          ))}
        </ul>
        {arr.length % 12 === 0 && <Button onClick={handleClick} />}
      </>
    );
  }
}

export default ImageGallery;
