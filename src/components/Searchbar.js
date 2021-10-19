import { Component } from 'react';
import '../components/styles.css';

import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    // console.log(e.target.value);
    this.setState({ value: e.target.value.toLowerCase() });
    // console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      toast.error('Введите корректное название!');
      return;
    }

    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            // name="value"
            value={this.state.value}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
