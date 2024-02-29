import React from "react";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%",
      }}
    >
      {products.map((prod) => {
        return (
          <div
            key={prod.title}
            style={{
              width: "30%",
              margin: "10px",
              border: "1px solid",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ padding: "10px" }}>
              <img
                style={{ width: "100%" }}
                alt={prod.title}
                src={prod.thumbnail}
              ></img>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <span>{prod.title}</span>
              <span>{`$${prod.price}`}</span>
            </div>
            {cart.some((item) => item.id === prod.id) ? (
              <button
                style={{
                  backgroundColor: "red",
                  padding: "5px",
                  border: "1px transparent",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  })
                }
              >
                Remove from Cart
              </button>
            ) : (
              <button
                style={{
                  backgroundColor: "green",
                  padding: "5px",
                  border: "1px transparent",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      thumbnail: prod.thumbnail,
                      title: prod.title,
                      price: prod.price,
                      qty: 1,
                      id: prod.id,
                    },
                  })
                }
              >
                Add to Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
