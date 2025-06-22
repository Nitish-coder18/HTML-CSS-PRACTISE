import Button from "./Button";

const Todoitem = ({id, todoText, todoDate}) => {
    return <div className="container  ">
    <div className="row justify-content-md-center ">
  </div>
  <div className="row">
    <div className="col text-truncate">
        {todoText}
    </div>
    <div className="col-md-auto">
        {todoDate}
    </div>
    <div className="col col-lg-2">
      <Button />
    </div>
  </div>
</div>
}

export default Todoitem;