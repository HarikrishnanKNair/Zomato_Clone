import React from "react";
import { BsShieldLockFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Razorpay from "razorpay";

//components
import FoodItem from "../Components/Cart/FoodItem";
import AddressList from "../Components/Checkout/AddressList";

//redux actions
import { createOrder } from "../Redux/Reducer/Order/order.action";

const Checkout = () => {
    const reduxStateCart = useSelector((global) => global.cart.cart);
    const reduxStateUser = useSelector((global) => global.user.user.user);
    const dispatch = useDispatch();
    const address = [
        {
            name: "Home 1",
            address: "Mumbai",
        },
        {
            name: "Home 2",
            address: "Bangalore"
        },
        {
            name: "Office",
            address: "Mumbai",
        },
    ];

    const payNow = () => {
        let options = {
            key: "rzp_test_NNY1Qyvvt7d202",
            amount: reduxStateCart.reduce((acc, curVal) => acc + curVal.totalPrice, 0) * 100,
            currency: "INR",
            name: "Zomato",
            description: "Food Payment",
            image: "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",
            
            handler: () => {
                alert("Payment Done");
            },
            prefill: {
                name: reduxStateUser.fullname,
                email: reduxStateUser.email,
            },
            theme: { color: "#e23744" },
        };
      
        let razorPay = new window.Razorpay(options);
        razorPay.open();
    };

    return (
        <div className="my-3 flex flex-col gap-3 items-center">
            <h1 className="text-xl text-center md:text-2xl font-bold">Checkout</h1>
            <div className="w-full md:w-3/5 rounded-lg shadow-lg py-3 bg-white flex flex-col items-center">
                <h3 className="text-lg font-semibold">Summary</h3>
                <div className="w-full flex flex-col gap-2 items-center">
                    <h5 className="text-base tracking-wider">ORDER FROM</h5>
                    <div className="w-full flex flex-col items-center text-gray-400">
                        <h4>Domino's Pizza</h4>
                        <small>GT World Mall, Magadi Road, Bangalore</small>
                    </div>
                    <div className="my-4 px-4 flex flex-col gap-2 w-full md:w-3/5">
                        {reduxStateCart.map((food) => (
                            <FoodItem key={food._id} {...food} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-3 py-6 w-full md:w-3/5">
                        <h4 className="text-lg font-semibold text-center">Choose Your Address</h4>
                        <AddressList address={address} />
                    </div>
                </div>
                <button onClick={payNow} className="flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 px-0 h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg">
                    Pay Securely <BsShieldLockFill />
                </button>
            </div>
        </div>
    );
};

export default Checkout;