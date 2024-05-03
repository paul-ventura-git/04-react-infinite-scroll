import './style.css'
import loader from './loader.svg'
import script from './script.js'

function App() {
  return (
    <div className="main-row">
      <div className='column-1'>
        
      </div>
      <div className='column-2'>
        <h1>Unsplash API - Infinite Scroll</h1>

        <div className="loader" id="loader">
            <img src={loader} alt="Loading"></img>
        </div>

        <div className="image-container" id="image-container">

        </div>
      </div>
      <div className='column-3'>
        
      </div>


      <script src={script}></script>
    </div>
  );
}

export default App;
