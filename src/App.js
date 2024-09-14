import './App.css';
import React, { useState } from 'react'
import Navbar from './components/navbar'
import News from './components/news'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


 const App =()=>{
 
  const[Progress,setProgress]=useState(0);

   const setprogress=(progress)=>{
      setProgress(progress)
   }
    return (
      <>   
        <div className="App">
          <Router>
            <Navbar/>
            <LoadingBar
                color='#f11946'
                progress={Progress}
                onLoaderFinished={() => setprogress(0)}
                 />

            <Routes>
              <Route path="/" element={<News progress={setprogress} key="politics"category="politics"/>} />
              <Route path="/entertainment" element={<News progress={setprogress} key="entertainment" category="entertainment"/>} />
              <Route path="/technology" element={<News progress={setprogress} key="technology"category="technology"/>} />
              <Route path="/health" element={<News progress={setprogress} key="health"category="health"/>} />
              <Route path="/science" element={<News progress={setprogress} key="science"category="science"/>} />
              <Route path="/business" element={<News progress={setprogress} key="business"category="business"/>} />
              <Route path="/sport" element={<News progress={setprogress} key="sport"category="sport"/>} />

            </Routes>
          </Router>
        </div>
      </>
    )
  
}
export default App;