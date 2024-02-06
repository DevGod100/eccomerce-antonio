"use client"
import { useShoppingCart } from "use-shopping-cart";
import { Product } from "use-shopping-cart/core";
import toast from "react-hot-toast";

const addToCart = ({
    currency,
    name,
    image, 
    price, 
    id, 
    size,
    sizeSelect, 
    onClick,
}: Product & {
    onClick?: () => void
}) => {
    const {addItem} = useShoppingCart()
    const productId = `${id}-${size}` //makes addind 2 sepparate sizes of an item possible instead of just incrementing same size chosen firstly
    const product = {
        currency: currency,
        name: name,
        image: image,
        price: price,
        id: productId,
        size: size,
    };

      return (
    <button
      onClick={() => {
        if (!sizeSelect && onClick) {
          onClick();
        } else {
          addItem(product as any);
          toast.success(`${name} has been added to cart`);
        }
      }}
    >
      Add To Cart
    </button>
  );
};


export default addToCart