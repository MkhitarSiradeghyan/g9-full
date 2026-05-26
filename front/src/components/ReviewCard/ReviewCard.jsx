import React from "react";
import s from "./ReviewCard.module.sass";

const StarIcon = () => (
    <svg viewBox="0 0 12 12" aria-hidden="true">
        <path
            d="M6 1.2 7.55 4.5l3.65.53-2.64 2.57.62 3.63L6 9.4 3.82 11.23l.62-3.63L1.8 5.03l3.65-.53L6 1.2Z"
            fill="currentColor"
        />
    </svg>
);

const VerifiedIcon = () => (
    <svg viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="8" cy="8" r="8" fill="currentColor" />
        <path
            d="M6.8 10.6 4.6 8.4l-.9.9 3.1 3.1 5.6-5.6-.9-.9-4.7 4.1Z"
            fill="#fff"
        />
    </svg>
);

const ReviewCard = ({ rating = 5, title, text, author, verified = true }) => {
    const stars = Array.from({ length: 5 }, (_, index) => index < rating);

    return (
        <article className={s.card}>
            <div className={s.header}>
                <div className={s.stars} aria-label={`${rating} out of 5 stars`}>
                    {stars.map((filled, index) => (
                        <span
                            key={index}
                            className={filled ? s.star : `${s.star} ${s.starEmpty}`}
                        >
                            <StarIcon />
                        </span>
                    ))}
                </div>

                {verified && (
                    <div className={s.verified}>
                        <VerifiedIcon />
                        <span>Verified</span>
                    </div>
                )}
            </div>

            <h3 className={s.title}>{title}</h3>
            <p className={s.text}>{text}</p>
            <p className={s.author}>{author}</p>
        </article>
    );
};

export default ReviewCard;
