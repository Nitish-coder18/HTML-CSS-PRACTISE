import Button from "./Button";

const Todoitem = ({id, todoText, todoDate}) => {
    return <div className="container  ">
    <div className="row justify-content-md-center">
  </div>
  <div className="row td-row">
    <div className="col text-truncate">
        {todoText}
    </div>
    <div className="col-md-auto td-row">
        {todoDate}
    </div>
    <div className="col col-lg-2">
      <Button btnType='danger' btnText='Delete'/>
    </div>
  </div>
</div>
}

export default Todoitem;