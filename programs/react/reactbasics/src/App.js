import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Products from './Products';
import { Users } from './Users';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      {/**
      <h1>Welcome to react</h1>
      <h2>Started journey with html,css,js,ajax</h2>
      <Header/>
      <Header></Header>
      <Content/>
      <Products></Products>
      <Users/>
       */}
       <Counter/>
    </div>
      
  );
}

export default App;
