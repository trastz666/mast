import React, { Component } from 'react';
import Nav from './Nav';
import Title from './Title';

class App extends Component {
  render() {
    return (
     <div className="App-header">
        <div className="Wrap">
            <span className="Imglogo"></span>
            <span className="Logotxt">GRANIT</span>
            <span className="Logotext"> Доставка нерудных материалов</span>
          <div className="Backlink">
            <span className="Conctacttel"> 8 800 342-13-33 </span>
            <span className="Callnull"> Бесплатный звонок по России </span>
            <a href="#" className="Btn">Обратный звонок</a>
          </div>
        </div>
        <Nav/>
        <Title/>
     </div>
     
     
    );
  }
}

export default App;
