import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import BowlingApp from './pages/bowlingApp';
import EYEResarchGroup from './pages/eyeResearchGroup';
import CryptoTracker from './pages/cryptoTracker';
import StudentRecordSystem from './pages/studentRecordSystem';
import HelpAlong from './pages/helpAlong';
import Shottracker from './pages/shottracker';
import Home from './pages/home'
import Test from './pages/test';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route index element={<Home />}/>
      <Route path="bowling-app" element={<BowlingApp />}/>
      <Route path="eye-research-group" element={<EYEResarchGroup />}/>
      <Route path="crypto-tracker" element={<CryptoTracker />}/>
      <Route path="student-record-system" element={<StudentRecordSystem />}/>
      <Route path="helpalong" element={<HelpAlong />}/>
      <Route path="shottracker" element={<Shottracker/>}/>
      <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Route>
  )
)

const App = () => {



  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}


export default App;
