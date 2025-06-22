import Button from "./Button";

const EnterTodo = () => {
    return <div class="container td-row">
  <div class="row justify-content-md-center ">
  </div>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Todo Here"></input>
    </div>
    <div class="col-md-auto">
       <input type="Date" class="form-control"></input>
    </div>
    <div class="col col-lg-2">
      <Button btnType='success' btnText='add' />
    </div>
  </div>
</div>
}

export default EnterTodo;