import './App.css';
import { RiSearchLine } from 'react-icons/ri';
function App() {
  return (
    <>
    <div className='homepage'>
     <div className='body'>
     <div className='searchbar'>
      <input className='input searchbar' type='text' placeholder = 'Search'></input>
      <RiSearchLine className='icon'></RiSearchLine>
     </div>
     </div>
    </div>
    </>
  );
}

export default App;
