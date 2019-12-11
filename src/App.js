import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Onezero from './components/categories/Onezero';
import ArticleDetail from './components/categories/ArticleDetail';
import Bookmarks from './components/categories/Bookmarks';
import Profile from './components/categories/Profile';
import{BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/bookmarks">
            <Bookmarks/>
          </Route>
          <Route path="/categories">
            <Onezero/>
          </Route>
          <Route path="/article_detail">
            <ArticleDetail/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
