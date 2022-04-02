import { reducer } from '../utils/reducers';
import { UPDATE_BOOKS, UPDATE_CURRENT_BOOK } from '../utils/actions';

const initialState = {
  books: [],
  currentBook: {
    _id: '1',
    title: 'Book 1',
    author: 'Author One',
    pages: 123,
    description: 'This is Book 1 for testing purposes'
  }
};

test('UPDATE_BOOKS', () => {
  let newState = reducer(initialState, {
    type: UPDATE_BOOKS,
    books: [{}, {}]
  });

  expect(newState.books.length).toBe(2);
  expect(initialState.books.length).toBe(0);
});

test('UPDATE_CURRENT_BOOK', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CURRENT_BOOK,
    currentBook: { title: 'Book 2' }
  });

  expect(newState.currentBook.title).toBe('Book 2');
  expect(initialState.currentBook.title).toBe('Book 1');
});
