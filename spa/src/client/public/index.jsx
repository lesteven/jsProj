import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MappedRoutes from '../comp/MappedRoutes';
import NavBar from '../comp/NavBar';
import routes from '../routes';
import { BrowserRouter } from 'react-router-dom';

class Index extends Component{
	render(){
		return(
			<div>
        <BrowserRouter>
          <NavBar />
          <MappedRoutes routes = { routes } />
        </BrowserRouter>
			</div>
		)
	}
}

ReactDOM.render(<Index />,document.getElementById('index'));
