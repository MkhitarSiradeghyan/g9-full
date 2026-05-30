import React from "react";
import s from "./BrowseByType.module.sass";
import browseImg1 from '../../assets/img/browseIcon1.png';
import browseImg2 from '../../assets/img/browseIcon2.png';
import browseImg3 from '../../assets/img/browseIcon3.png';
import browseImg4 from '../../assets/img/browseIcon4.png';
import browseImg5 from '../../assets/img/browseIcon5.png';
import browseImg6 from '../../assets/img/browseIcon6.png';
import browseImg7 from '../../assets/img/browseIcon7.png';


const carTypes = [
    { id: 1, name: "SUV", icon: browseImg1 },
    { id: 2, name: "Sedan", icon: browseImg2 },
    { id: 3, name: "Hatchback", icon: browseImg3 },
    { id: 4, name: "Coupe", icon: browseImg4 },
    { id: 5, name: "Hybrid", icon: browseImg5 },
    { id: 6, name: "Convertible", icon: browseImg6 },
];

const BrowseByType = () => {
    return (
        <section className={s.browseSection}>
            <div className={s.container}>
                
                <div className={s.header}>
                    <h2 className={s.title}>Browse by Type</h2>
                    <button className={s.viewAllBtn}>
                        View All 
                        <img src={browseImg7} alt="arrow" />
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