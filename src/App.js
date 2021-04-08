import logo from './logo.svg';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Estore from '../src/containers/Estore/Estore';
function App() {
  return (
    <div >
        <Layout>
        <Switch>
            <Route path="/" exact component={Estore}/>
         </Switch>
        </Layout>
    </div>
  );
}

export default App;
