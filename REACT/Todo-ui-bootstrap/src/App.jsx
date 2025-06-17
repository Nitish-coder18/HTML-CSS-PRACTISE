
import './App.css'
import EnterTodo from './components/EnterTodo'
import TodoName from './components/Title'

function App() {
  

  return (
    <>
      <center>
        <TodoName />
        <EnterTodo />

            <div class="row">
      <div class="col-2 text-truncate">
        This text is quite long, and will be truncated once displayed.
      </div>
    </div>

    <div class="row justify-content-md-center">
  </div>
  <div class="row">
    <div class="col">
      
    </div>
    <div class="col-md-auto">
       
    </div>
    <div class="col col-lg-2">
      <button type="button" class="btn btn-danger">Success</button>
    </div>
  </div>

        
        
    </center>
    </>
  )
}

export default App
