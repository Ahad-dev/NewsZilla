
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import './component/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {


  const [progress, setProgress] = useState(0)
  const pageSize = 5;



  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />
        <Routes>
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" category="business" pageSize={pageSize} />} />
          <Route exact path="/" element={<News setProgress={setProgress} key="/" category="" pageSize={pageSize} />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" category="entertainment" pageSize={pageSize} />} />
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" category="general" pageSize={pageSize} />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" category="health" pageSize={pageSize} />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" category="science" pageSize={pageSize} />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" category="sports" pageSize={pageSize} />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" category="technology" pageSize={pageSize} />} />

        </Routes>
      </Router>
    </>
  )
}
export default App;

// c1ced80daad1479396c1033da1fc06d4 API Key



