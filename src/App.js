import './App.scss';
import AddItemMenu from './Components/AddItemMenu/AddItemMenu';
import MenuFilters from './Components/MenuFilters/MenuFilters';
import MenuItems from './Components/MenuItems/MenuItems';

function App() {
  return (
    <div className="App">
      <h1 className="App--Title">MENU</h1>
      <MenuFilters />
      <MenuItems />
      {/* <AddItemMenu /> */}
    </div>
  );
}

export default App;
