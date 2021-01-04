import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {Route,Switch,Link} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory'
import Review from './components/Review/Review';
import PorductDetail from './components/ProductDetail/PorductDetail';

const App=()=>{
  return (
    <div>  
      <Header></Header>
      <Switch>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/review'> 
            <Review></Review>
          </Route>
          <Route path='/inventory'> 
            <Inventory></Inventory>
          </Route>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/product/:productKey'>
              <PorductDetail></PorductDetail>
          </Route>
          {/* path='*' sob niche dite hobe na hole kaj korbe na */}
          <Route path='*'>
              <NotFound></NotFound>
          </Route>
      </Switch>

      {/* <h1>Hi, I am md sohidul islam. I am from Bangladesh</h1> */}
    </div>
  )
}

export default App;