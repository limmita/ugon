import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Setting from './Setting';



ReactDOM.render(
	<Router >
             <div>
                 <div>
                     <Link to="/">Карта</Link>
                     <Link to="/setting">Настройки</Link>
                 </div>
                 <Route exact path="/" component={App} />
                 <Route path="/setting" component={Setting}/>
             </div>
         </Router>,
	 document.getElementById('root')
	 );

