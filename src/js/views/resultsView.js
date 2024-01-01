import View from './view.js';
import previewView from './previewView.js';


class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage =
    'Oops no recipes found for your query. Please try another again!';
    _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();



