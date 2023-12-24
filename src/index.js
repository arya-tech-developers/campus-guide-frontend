import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"
import { BrowserRouter as Router, Routes, Route, Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import { Home, Login, Signup, ErrorPage, PyqsLayout, PageUnderConstruction, PrivacyPolicy } from './Components';
import QuestionPapersBtech from './Components/QuestionPapersBtech';
import { store } from './store/store.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<App />} errorElement={<ErrorPage />}>
            <Route path='' element={<Home />} />
            <Route path='question-papers'>
              <Route path='' element={<PyqsLayout />} />
              <Route path='semester-1' element={<PageUnderConstruction />} />
              <Route path='semester-2' element={<PageUnderConstruction />} />
              <Route path='semester-3' element={<PageUnderConstruction />} />
              <Route path='semester-4' element={<PageUnderConstruction />} />
              <Route path='semester-5' element={<PageUnderConstruction />} />
              <Route path='semester-6' element={<PageUnderConstruction />} />
              <Route path='semester-7' element={<PageUnderConstruction />} />
              <Route path='semester-8' element={<PageUnderConstruction />} />
            </Route>
            <Route path="courses" element={<PageUnderConstruction />} />
            <Route path="topics" element={<PageUnderConstruction />} />
            <Route path="privacy-policy" element={<PageUnderConstruction />} />
            <Route path="about-us" element={<PageUnderConstruction />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />

          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);