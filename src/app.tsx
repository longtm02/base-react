import {RouterProvider} from 'react-router-dom';
import router from './routers';
import './styles/index.scss';
import configureStore from './store';
import {Provider} from 'react-redux';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
