import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"
import { BrowserRouter as Router, Routes, Route, Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import { Home, Login, Signup, ErrorPage, UserDashboard ,PyqsLayout, PageUnderConstruction, DirectoryStructre, PrivacyPolicy } from './Components';
import { store } from './store/store.js';
import QuestionPapersBtech from './Components/QuestionPapersBtech.jsx';
import QuestionPaperBranchWise from './Components/QuestionPaperBranch.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<App />} errorElement={<ErrorPage />}>
            <Route path='' element={<Home />} />
            <Route path='test' element={<DirectoryStructre/>}/>
            <Route path='question-papers'>
              <Route path='' element={< PyqsLayout/>} />
              <Route path='b.tech' >
                <Route path='' element={<QuestionPaperBranchWise/>}/>
                <Route path='cse' >
                  <Route path='' element={<QuestionPapersBtech/>}/>
                  <Route path='semester-1'/>
                  <Route path='semester-2'/>
                  <Route path='semester-3'/>
                  <Route path='semester-4'/>
                  <Route path='semester-5'/>
                  <Route path='semester-6'/>
                  <Route path='semester-7'/>
                  <Route path='semester-8'/>
                </Route>
              </Route>
              <Route path='Polytechnic' element={<PageUnderConstruction/>}/>
            </Route>
            <Route path="courses" element={<PageUnderConstruction />} />
            <Route path="user" element={<UserDashboard />} />
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