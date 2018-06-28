import React, { Component } from 'react';
import './App';

class Title extends Component {
    render () {
        return(

            <div className = "Title ">
                <div className="Texttitle">
                    <h1>быстрая доставка</h1>
                    <p>бетона, щебня, песка</p>
                    <p>и других нерудных материалов</p>
                    <p>по Москве и Московской области</p>
                    <a href="#" className = "Yellowbtn"> Подробнее о даставке</a>
                    <span className="Joj">или</span>
                    <a href="#" className ="Catalog"> перейти в коталог </a>
                </div>
            </div>

        )
    }
}









export default Title;