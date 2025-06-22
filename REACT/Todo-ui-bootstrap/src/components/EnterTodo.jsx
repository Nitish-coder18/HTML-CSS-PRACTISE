import Button from "./Button";

const EnterTodo = () => {
    const AddHandler = () => {
    console.log(`Trying To Add Item..!!`);
  }

    return <div className="container td-row">
  <div className="row justify-content-md-center ">
  </div>
  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="Enter Todo Here"></input>
    </div>
    <div className="col-md-auto">
       <input type="Date" className="form-control"></input>
    </div>
    <div className="col col-lg-2">
      <Button btnType='success' btnText='add' handler={AddHandler} />
    </div>
  </div>
</div>
}

export default EnterTodo;