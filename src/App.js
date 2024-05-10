 
import './App.css'; 

import { Article, Brand, CTA, Feature, Navbar} from "./components" 
import {Blog, Footer, Features, Possibility, Header, WhatGTP3} from "./containers"

const App = () =>  { 
  return (
    <div className="App">
        <div className='gradient__bg'>     
          <Navbar />
          <Header />
        </div>
       <Brand />
         <WhatGTP3 /> 
          <Features /> 
       <Possibility />
                <CTA />
          <Blog />
       <Footer />  
    </div>
  );
}

export default App 
