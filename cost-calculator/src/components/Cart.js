import React, { useEffect, useState } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  let { total, setTotal } = useState(0);

  //   useEffect(() => {
  //     setTotal(
  //       cart.reduce((acc, item) => acc + Number(item.price) * item.qty, 0)
  //     );
  //   }, [cart]);

  const changeQty = (id, qty) =>
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id: id,
        qty: qty,
      },
    });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        backgroundColor: "#ececec",
        padding: 10,
        width: "20%",
      }}
    >
      <h1
        style={{ fontSize: "25px", fontWeight: "bold", marginBottom: "10px" }}
      >
        CART
      </h1>
      <span
        style={{ fontWeight: "bold", display: "block", marginBottom: "20px" }}
      >
        Sub Total: ${total || 0}
      </span>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <div
              key={item.title}
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <img
                style={{ width: "100px", marginBottom: "5px" }}
                src={item.thumbnail}
                alt={item.title}
              ></img>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>{item.title}</span>
                <span>{`$${item.price}`}</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
                onClick={() => changeQty(item.id, item.qty - 1)}
              >
                -
              </button>
              <span style={{ margin: "5px" }}>{item.qty}</span>
              <button
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
                onClick={() => changeQty(item.id, item.qty + 1)}
              >
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <span>Cart is empty</span>
      )}
    </div>
  );
};

export default Cart;
