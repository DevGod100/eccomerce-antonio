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
    sideSelect, 
    onClick,
}: Product & {
    onClick: () => void
}) => {
    const {addItem} = useShoppingCart()
    const productId = `${id}-${size}` //makes addind 2 sepparate sizes of an item possible instead of just incrementing same size chosen firstly
}