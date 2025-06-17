
import './App.css'
import TodoName from './components/Title'

function App() {
  

  return (
    <>
      <center>
        <TodoName />
       
        
        <div class="container text-center">
  <div class="row justify-content-md-center">
  </div>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Todo Here"></input>
    </div>
    <div class="col-md-auto">
       <input type="Date" class="form-control"></input>
    </div>
    <div class="col col-lg-2">
      <button type="button" class="btn btn-success">Success</button>
    </div>
  </div>
</div>
    </center>
    </>
  )
}

export default App
