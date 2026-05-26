import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import s from "./Reviews.module.sass";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("/Reviews.json")
            .then((res) => {
                if (!res.ok) throw new Error("Reviews.json not found");
                return res.json();
            })
            .then((data) => setReviews(data))
            .catch((err) => console.error("Reviews fetch error:", err));
    }, []);

    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                <h2 className={s.sectionTitle}>Customer Reviews</h2>

                <div className={s.list}>
                    {reviews.length === 0 ? (
                        <p className={s.empty}>Reviews are loading...</p>
                    ) : (
                        reviews.map((review) => (
                            <ReviewCard
                                key={review.id}
                                rating={review.rating}
                                title={review.title}
                                text={review.text}
                                author={review.author}
                                verified={review.verified}
                            />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
