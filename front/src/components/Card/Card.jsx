import React, { useState } from "react";
import s from "./Card.module.sass";

// Ճիշտ ճանապարհը դեպի assets/img
import car1 from '../../assets/img/car1.png';
import car2 from '../../assets/img/car2.png';
import car3 from '../../assets/img/car3.png';
import car4 from '../../assets/img/car4.png';
import car5 from '../../assets/img/car5.png';
import car6 from '../../assets/img/car6.png';
import car7 from '../../assets/img/car7.png';
import car8 from '../../assets/img/car8.png';
import descImg1 from '../../assets/img/descImg1.png';
import descImg2 from '../../assets/img/descImg2.png';
import descImg3 from '../../assets/img/descImg3.png';
import infoIcon from '../../assets/img/info.png';

const tabs = ["Recent Cars", "Popular Cars", "Upcoming Cars"];

const carsInfo = [
    {
        "id": 1,
        "img": car1,
        "name": "Toyota Camry New",
        "desc": "3.5 D5 PowerPluse Momentum 5rd AW...",
        "descImg": {
            "img": [descImg1, descImg2, descImg3],
            "imgDesc": ["20 Miles", "Petrol", "Automatic"],
            "cardFooter": {
                "price": "$ 40,000",
                "info": "View Details",
                "infoImg": infoIcon
            }
        }
    },
    {
        "id": 2,
        "img": car2,
        "name": "T-Cross – 2023",
        "desc": "4.0 D5 PowerPulse Momentum 5dr AW…Geartronic Estate",
        "descImg": {
            "img": [descImg1, descImg2, descImg3],
            "imgDesc": ["15 Miles", "Petrol", "CTV"],
            "cardFooter": {
                "price": "$ 15,000",
                "info": "View Details",
                "infoImg": infoIcon
            }
        }
    },
    {
        "id": 3,
        "img": car3,
        "name": "C-Class – 2023",
        "desc": "4.0 D5 PowerPulse Momentum 5dr AW…Geartronic Estate",
        "descImg": {
            "img": [descImg1, descImg2, descImg3],
            "imgDesc": ["50 Miles", "Petrol", "Automatic"],
            "cardFooter": {
                "price": "$ 150,000",
                "info": "View Details",
                "infoImg": infoIcon
            }
        }
    },
    {
        "id": 4,
        "img": car4,
        "name": "Ford Transit – 2021",
        "desc": "4.0 D5 PowerPulse Momentum 5dr AW…Geartronic Estate",
        "descImg": {
            "img": [descImg1, descImg2, descImg3],
            "imgDesc": ["20 Miles", "Petrol", "Manual"],
            "cardFooter": {
                "price": "$ 22,000",
                "info": "View Details",
                "infoImg": infoIcon
            }
        }
    },
    {
        "id": 5,
        "img": car5,
        "name": "New GLC – 2023",
        "desc": "4.0 D5 PowerPulse Momentum 5dr AW…Geartronic Estate",
        "descImg": {
            "img": [descImg1, descImg2, descImg3],
            "imgDesc": ["20 Miles", "Petrol", "Automatic"],
            "cardFooter": {
                "price": "$ 95,000",
                "info": "View Details",
                "infoImg": infoIcon
            }
        }
    },
    {
        "id": 6,
        "img": car6,
        "name": "Audi A6 3.5 – New",
        "desc": "3.5 D5 PowerPulse Momentum 5dr AW…Geartronic Estate",
        "descImg": {
            "img": [descImg1, descImg2, descImg3],
            "imgDesc": ["100 Miles", "Petrol", "Automatic"],
            "cardFooter": {
                "price": "$ 58,000",
                "info": "View Details",
                "infoImg": infoIcon
            }
        }
    },
    {
        "id": 7,
        "img": car7,
        "name": "Corolla Altis – 2023",
        "desc": "3.5 D5 PowerPulse Momentum 5dr AW…Geartronic Estate",
        "descImg": {
            "img": [descImg1, descImg2, descImg3],
            "imgDesc": ["15000 Miles", "Petrol", "CVT"],
            "cardFooter": {
                "price": "$ 45,000",
                "info": "View Details",
                "infoImg": infoIcon
            }
        }
    },
    {
        "id": 8,
        "img": car8,
        "name": "Volvo XC90 – 2023",
        "desc": "3.5 D5 PowerPulse Momentum 5dr AW…Geartronic Estate",
        "descImg": {
            "img": [descImg1, descImg2, descImg3],
            "imgDesc": ["10 Miles", "Petrol", "Automatic"],
            "cardFooter": {
                "price": "$ 35,000",
                "info": "View Details",
                "infoImg": infoIcon
            }
        }
    }
];

const Card = () => {
    const [activeTab, setActiveTab] = useState("Recent Cars");
    const [savedCarIds, setSavedCarIds] = useState([]);
    const toggleSaveCar = (id) => {
        setSavedCarIds((prevIds) =>
            prevIds.includes(id)
                ? prevIds.filter((carId) => carId !== id) 
                : [...prevIds, id] 
        );
    };

    return (
        <section className={s.cardSection}>
            <div className={s.cardwrapper}>
                <div className={s.headerBar}>
                    <h1 className={s.cardPageTitle}>Explore All Vehicles</h1>
                    <div className={s.ViewAll}>
                        <button className={s.ViewAllbtn}>View All</button>
                        <img className={s.VievAllImg} src={infoIcon} alt="info" />
                    </div>
                </div>

                <div className={s.btnlist}>
                    {tabs.map((tab) => (
                        <button 
                            key={tab}
                            className={activeTab === tab ? `${s.btn} ${s.active}` : s.btn}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className={s.cardList}>
                    {carsInfo.map(car => {
                        const isSaved = savedCarIds.includes(car.id);

                        return (
                            <div key={car.id} className={s.card}>
                                
                                {/* Նկարի բլոկը absolute էլեմենտների համար */}
                                <div className={s.imageContainer}>
                                    <img className={s.cardImg} src={car.img} alt={car.name} />
                                    
                                    {/* Կանաչ Badge */}
                                    <span className={s.badge}>Great Price</span>

                                    {/* Կարզինկայի / Bookmark կոճակը */}
                                    <button 
                                        className={`${s.bookmarkBtn} ${isSaved ? s.activeBookmark : ""}`}
                                        onClick={() => toggleSaveCar(car.id)}
                                    >
                                        <svg width="16" height="20" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path 
                                                d="M12 16L7 13.75L2 16V2H12V16Z" 
                                                stroke={isSaved ? "#FFD700" : "#000000"} 
                                                fill={isSaved ? "#FFD700" : "none"} 
                                                strokeWidth="2" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <h2 className={s.cardTitle}>{car.name}</h2>
                                <p className={s.cardDescText}>{car.desc}</p>
                                
                                <div className={s.cardDesc}>
                                    {car.descImg?.imgDesc?.map((text, index) => (
                                        <div key={index} className={s.cardDescItem}>
                                            <img
                                                src={car.descImg.img[index]}
                                                alt="icon"
                                                className={s.descIcon}
                                            />
                                            <span>{text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className={s.cardContent}>
                                    <span className={s.cardPrice}>{car.descImg?.cardFooter?.price}</span>
                                    <div className={s.cardInfo}>
                                        <button className={s.cardInfoText}>View Details</button>
                                        <img className={s.cardInfoImg} src={car.descImg?.cardFooter?.infoImg} alt="info" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Card;