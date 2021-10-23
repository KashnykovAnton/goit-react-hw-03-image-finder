import axios from 'axios';

export class FetchApi {
  constructor(base_url, api_key) {
    this.base_url = base_url;
    this.api_key = api_key;
    this._value = '';
    this._page = 1;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    return (this._value = value);
  }
  get page() {
    return this._page;
  }
  set page(value) {
    return (this._page += value);
  }
  incrementPage() {
    return (this._page += 1);
  }
  resetPage() {
    return (this._page = 1);
  }

  async searchImages() {
    let url = `${this.base_url}?q=${this.value}&page=${this.page}&key=${this.api_key}&image_type=photo&orientation=horizontal&per_page=12`;
    try {
      const result = await axios.get(url);
      const data = result.data.hits;
      return data;
    } catch (err) {
      return err.message;
    }
  }
}
