import './index.css';
import 'leaflet/dist/leaflet.css';

import { MainLayout } from 'components/Layout';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <MainLayout />
  </Provider>,
);
