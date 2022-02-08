import './App.scss';
import MenuFilters from './Components/MenuFilters/MenuFilters';
import MenuItems from './Components/MenuItems/MenuItems';

function App() {
  return (
    <div className="App">
      <h1 className="App--Title">MENU</h1>
      <MenuFilters />
      <MenuItems />
    </div>
  );
}

export default App;
