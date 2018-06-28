import React, { Component } from 'react';
import './App';


class Nav extends Component {
	render() {
		return(
			<div className="Nav">
           
                <ul >
                    <li>Главная</li>
                    <li>Каталог</li>
                    <li>Услуги</li>
                    <li>Доставка</li>
                    <li>О компании</li>
                    <li>Контакты</li>
                </ul>  
            
			</div>
         

			)
	}
}


export default Nav;