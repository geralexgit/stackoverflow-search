import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export const randomElement = array => {
  return array[Math.floor(Math.random() * array.length)];
};
