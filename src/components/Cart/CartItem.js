import "./CartItem.scss";

const CartItem = (props) => {
  return (
    <li>
      <div className="CartItem">
        <div>
          <h2>{props.name}</h2>
          <div className="details">
            <span className="price">{props.price}</span>
            <span className="amount">x {props.amount}</span>
          </div>
        </div>
        <div className="totalAmount">{props.price * props.amount}</div>
        <div className="buttons">
          <button onClick={props.onRemove}>− Reduce </button>
          <button onClick={props.onAdd}>+ Add</button>
        </div>
      </div>
      <hr />
    </li>
  );
};

export default CartItem;
