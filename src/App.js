import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import HeaderNav from './Components/Navbar/HeaderNav';
import Login from './Components/Login/Login';
import OrderPage from './Components/Orderpage/Orderpage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyOrders from './Components/MyOrders/MyOrders';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import AddANewService from './Components/AddANewService/AddANewService';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <HeaderNav />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/orderPage/:_id">
              <OrderPage></OrderPage>
            </PrivateRoute>
            {/* <PrivateRoute exact path="/orderPage">
              <OrderPage></OrderPage>
            </PrivateRoute> */}
            <PrivateRoute exact path="/manage-all-orders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/add-a-new-service">
              <AddANewService></AddANewService>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            {/* <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute exact path="/Services/:id">
            <SingleService></SingleService>
          </PrivateRoute>
          <PrivateRoute exact path="/apointment">
            <Apontment></Apontment>
          </PrivateRoute>
          <PrivateRoute exact path="/privacypolicy">
            <PrivacyPolicy></PrivacyPolicy>
          </PrivateRoute> */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
