import Button from "./Button";

const Todoitem = ({id, todoText, todoDate}) => {
  const deleteHandler = () => {
    console.log(`Trying To Delete ${id} ${todoText}`);
  }

    return <div className="container  ">
    <div className="row justify-content-md-center">
  </div>
  <div className="row td-row">
    <div className="col text-truncate">
        {todoText}
    </div>
    <div className="col-md-auto td-row date">
        {todoDate}
    </div>
    <div className="col col-lg-2">
      <Button btnType='danger' btnText='Delete' handler={deleteHandler}/>
    </div>
  </div>
</div>
}

export default Todoitem;