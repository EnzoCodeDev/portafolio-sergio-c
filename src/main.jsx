import React from 'react'
import ReactDOM from 'react-dom/client'
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { App } from './App'
import { configureAppStore } from "./redux/store";
import './styles/styles.scss';
import { resources } from "./translations/global";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");
i18next.use(LanguageDetector).init({
  resources,
});
const store = configureAppStore();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
)
