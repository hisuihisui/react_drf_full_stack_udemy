import React, { useState } from "react";

const Basic1 = () => {
  // const clickHandler = () => {
  //   console.log("clicked");
  // };

  const [product, setProducts] = useState({ name: "", price: ""});

  return (
    <>
      <form>
        {/* inputの変更に合わせてonChangeが動作する */}
        {/* ...product これがないとnameを書き換えた際にpriceの値が消える */}
        <input
          type="text"
          value={product.name}
          onChange={(evt) =>
            setProducts({ ...product, name: evt.target.value })
          }
        />
        <input
          type="text"
          value={product.price}
          onChange={(evt) =>
            setProducts({ ...product, price: evt.target.value })
          }
        />
      </form>
      <h1>Product name is {product.name}</h1>
      <h1>Product price is {product.price}</h1>
      <div>Basic1</div>
      {/* <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Count {count}
      </button> */}
    </>
  );
};

export default Basic1;
