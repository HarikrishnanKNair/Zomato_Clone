import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//components
import ReviewCard from "../../Components/restaurant/Reviews/reviewCard";
import AddReviewCard from "../../Components/restaurant/Reviews/AddReviewCard";

//redux actions
import { getReviews } from "../../Redux/Reducer/Reviews/review.action";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );

    const dispatch = useDispatch();

    useEffect(() => {
        if (reduxState) {
            dispatch(getReviews(reduxState?._id)).then((data) => 
                setReviews(data.payload.reviews)
            );
        }
    }, []);

    return (
        <>
            <div className="w-full flex flex-col md:flex-row relative">
                <div className="flex w-full md:w-8/12 flex-col gap-3">
                    <div className="md:hidden">
                        <AddReviewCard />
                    </div>
                    {reviews.map((review) => (
                        <ReviewCard {...review} /> 
                    ))}
                </div>
                <aside
                    style={{ height: "fit-content" }}
                    className="hidden items-start md:flex md:w-4/12 sticky top-2 bg-white p-3 rounded-xl shadow-md flex flex-col gap-3"
                >
                    <AddReviewCard />
                </aside>
            </div>
        </>
    );
};

export default Reviews;