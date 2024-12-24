import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.scss'
import {store} from "./app/store";
import {Layout} from "./feature/layout/Layout";

import '@fontsource/manrope/400.css';
import '@fontsource/manrope/700.css';

import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import {Provider} from "react-redux";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <Layout />
      </Provider>
  </StrictMode>,
)
