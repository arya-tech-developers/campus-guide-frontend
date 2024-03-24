import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"
import { BrowserRouter as Router, Routes, Route, Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import { Home, Login, Signup, Layout, EmailVerificationPage, ErrorPage, PyqsLayout, PageUnderConstruction, DirectoryStructre, PrivacyPolicy } from './Components';
import { store } from './store/store.js';

import { courseData, branchData, subjectData, semesterData } from './store/index.js';
import AboutUs from './Components/AboutUs.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='' element={<Layout />} > 
               <Route path='' element={<Home/>}/>
               <Route path="courses" element={<PageUnderConstruction />} />
               <Route path="user" element={< PageUnderConstruction />} />
               <Route path="topics" element={<PageUnderConstruction />} />
               <Route path="privacy-policy" element={<PageUnderConstruction />} />
               <Route path="about-us" element={<AboutUs />} />
               <Route path='question-papers'>
              <Route path='' element={< DirectoryStructre directoryStructredata={courseData} />} />
              <Route path='b.tech' >
                <Route path='' element={< DirectoryStructre directoryStructredata={semesterData} />} />
                <Route path='sem-3'>
                  <Route path='' element={< DirectoryStructre directoryStructredata={branchData} />} />
                  <Route path='cse' element={<DirectoryStructre directoryStructredata={subjectData} />} />
                </Route>
              </Route>
              <Route path='Polytechnic' element={<PageUnderConstruction />} />
               </Route>
               <Route path='signup-email-verification' element={<EmailVerificationPage/>}/>
            </Route>


            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);