import React, { useState } from "react";

//components
import ReviewCard from "../../Components/restaurant/Reviews/reviewCard";
import AddReviewCard from "../../Components/restaurant/Reviews/AddReviewCard";

const Reviews = () => {
    const [reviews, setReviews] = useState(["","",""]);

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