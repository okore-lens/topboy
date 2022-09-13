import React, { useContext, useEffect, useState } from "react";
import merchList from "../../../../assets/arrays/merchArray";
import CartContext from "../../../../context/cartContext";
import MerchCard from "../../../cards/merchCard/MerchCard";
import Cart from "../../../Cart/Cart";
import CartIcon from "../../../Cart/CartIcon";

import "./Merch.scss";

function Merch() {
  const [clicked, setClicked] = useState(false);

  // Cart Context
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const clickHandler = () => {
    // console.log("clicked");
    setClicked(true);
    // console.log(item);
  };
  const modalHandler = () => {
    setClicked(false);
  };

  let totalAmount;

  return (
    <div className="Merch">
      <div className="wrapper">
        <h2>MERCHANDISE</h2>
        <button onClick={clickHandler} className="cart">
          <span className="icon">
            <CartIcon />
          </span>
          <span>Cart</span>
          <span className="badge">{numberOfCartItems}</span>
        </button>
        <div className="content">
          <div className="merch-row">
            <div className="wrapper">
              {merchList.map((merch) => (
                <MerchCard
                  key={merch.id}
                  id={merch.id}
                  title={merch.title}
                  imgSrc={merch.imgSrc}
                  price={merch.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {clicked && (
        <div>
          <div onClick={modalHandler} className="blur"></div>
          <div className="check-out">
            <Cart></Cart>
          </div>
        </div>
      )}
    </div>
  );
}

export default Merch;
// import React, { useContext, useEffect, useState } from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
// import merchList from "../../../../assets/arrays/merchArray";
// import CartContext from "../../../../context/cartContext";
// import CartProvider from "../../../../context/cartProvider";
// import CheckOutCard from "../../../cards/checkOutCard/CheckOutCard";
// import MerchCard from "../../../cards/merchCard/MerchCard";
// import CartIcon from "../../../Cart/CartIcon";

// import "./Merch.scss";

// function Merch() {
//   const [item, setItem] = useState(null);
//   const [clicked, setClicked] = useState(false);
//   const [add, setAdd] = useState(false);
//   const [status, setStatus] = useState("");
//   const [checkOutForm, setCheckOutForm] = useState({
//     number: 0,
//     price: 0,
//     title: "",
//     image: null,
//     id: 0,
//   });
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [proceed, setProceed] = useState(false);
//   const [itemToDelete, setItemToDelete] = useState(null);
//   const [elements, setElements] = useState([]);
//   const [approvedItem, setApprovedItem] = useState({});
//   const [approvedItems, setApprovedItems] = useState([]);

//   // Cart Context
//   const cartCtx = useContext(CartContext);

//   const totalAmnt = `$${cartCtx.totalAmount.toFixed(2)}`;

//   const hasItems = cartCtx.items.length > 0;

//   const cartItemRemoveHandler = (id) => {
//     cartCtx.removeItem(id);
//   };

//   const cartItemAddHandler = (item) => {
//     cartCtx.addItem({ ...item, amount: 1 });
//   };

//   const clickHandler = () => {
//     // console.log("clicked");
//     setClicked(true);
//     // console.log(item);
//   };
//   const modalHandler = () => {
//     setClicked(false);
//   };

//   let totalAmount;

//   const totalAmountHandler = (number, price, title) => {
//     setStatus(`${number}  ${title}(s) have been added to the cart `);
//     setTimeout(function () {
//       setAdd(false);
//     }, 3000);
//   };

//   const checkOutHandler = (number, price, title, image, id) => {
//     setCheckOutForm({
//       number,
//       price,
//       title,
//       image,
//       id,
//     });
//   };

//   const removeItemHandler = () => {
//     const index = selectedItems.findIndex((obj) => {
//       return obj.id === itemToDelete;
//     });
//     selectedItems.splice(index, 1);
//   };

//   const proceedHandler = () => {
//     console.log(approvedItems);
//     setProceed(true);
//   };

//   useEffect(() => {
//     if (approvedItem.title === "") return;
//     setApprovedItems([...approvedItems, approvedItem]);
//   }, [approvedItem]);

//   useEffect(() => {
//     removeItemHandler();
//   }, [itemToDelete]);

//   useEffect(() => {
//     setSelectedItems([...selectedItems, checkOutForm]);
//   }, [checkOutForm]);

//   useEffect(() => {
//     setElements([...elements, item]);
//   }, [item]);

//   // console.log(prev, item);

//   return (
//     <CartProvider>
//       <div className="Merch">
//         <div className="wrapper">
//           <h2>MERCHANDISE</h2>
//           <button onClick={clickHandler} className="cart">
//             <span className="icon">
//               <CartIcon />
//             </span>
//             <span>Cart</span>
//             <span className="badge">{selectedItems.length - 1}</span>
//           </button>
//           <div className="content">
//             {add && <div className="status">{status}</div>}
//             <div className="merch-row">
//               <div className="wrapper">
//                 {merchList.map((merch) => (
//                   <MerchCard
//                     key={merch.id}
//                     item={setItem}
//                     totalAmount={totalAmountHandler}
//                     clicked={setAdd}
//                     checkOut={checkOutHandler}
//                     id={merch.id}
//                     title={merch.title}
//                     imgSrc={merch.imgSrc}
//                     price={merch.price}
//                     elements={elements}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         {clicked && (
//           <div>
//             <div onClick={modalHandler} className="check-out">
//               Form Goes Here
//             </div>
//             <div className="form">
//               <h2>Check Out Form</h2>
//               <table>
//                 <thead>
//                   <tr className="table-heading">
//                     <td>Image</td>
//                     <td>Name</td>
//                     <td>Description and Amount</td>
//                     <td>Total</td>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {selectedItems.map((item) => {
//                     if (item.image === null) return;
//                     return (
//                       <CheckOutCard
//                         setItemToDelete={setItemToDelete}
//                         checkOutForm={item}
//                         approvedItems={setApprovedItem}
//                       />
//                     );
//                   })}
//                 </tbody>
//               </table>
//               <button onClick={proceedHandler}>Proceed To Order</button>
//               <div className="approval">
//                 <p>The following will be sent to TopBoy Whatsapp Number:</p>
//                 {proceed &&
//                   approvedItems.map((item) => {
//                     if (Object.keys(item).length === 0) return;
//                     return (
//                       <li key={item.id}>
//                         <span>{item.number}</span>
//                         <span>{item.title}</span>
//                         <span>{item.size}</span>
//                         <span>{item.color}</span>
//                       </li>
//                     );
//                   })}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </CartProvider>
//   );
// }

// export default Merch;
