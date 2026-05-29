import React from "react";
import s from "./BrowseByType.module.sass";

const carTypes = [
    { id: 1, name: "SUV", icon: "public/SVG (1).png" },
    { id: 2, name: "Sedan", icon: "public/SVG (2).png" },
    { id: 3, name: "Hatchback", icon: "public/SVG (3).png" },
    { id: 4, name: "Coupe", icon: "public/SVG (4).png" },
    { id: 5, name: "Hybrid", icon: "public/SVG (5).png" },
    { id: 6, name: "Convertible", icon: "public/SVG (6).png" }
];

const BrowseByType = () => {
    return (
        <section className={s.browseSection}>
            <div className={s.container}>
                
                <div className={s.header}>
                    <h2 className={s.title}>Browse by Type</h2>
                    <button className={s.viewAllBtn}>
                        View All 
                        <img src="public/SVG (7).png" alt="arrow" className={s.arrowIcon} />
                    </button>
                </div>

                <div className={s.grid}>
                    {carTypes.map((type) => (
                        <div key={type.id} className={s.card}>
                            <div className={s.iconWrapper}>
                                <img src={type.icon} alt={type.name} className={s.icon} />
                            </div>
                            <span className={s.cardName}>{type.name}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BrowseByType;