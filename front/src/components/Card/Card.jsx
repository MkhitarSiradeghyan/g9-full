import React, { useState, useEffect } from "react";
import s from "./Card.module.sass";
import info from "../../assets/info.png";

const Card = () => {
    const [carsinfo, setCarsinfo] = useState([]);
    const [activeTab, setActiveTab] = useState("Recent Cars");

    useEffect(() => {
        fetch("/Cars.json")
            .then(res => {
                if (!res.ok) throw new Error("JSON չի գտնվել (404)");
                return res.json();
            })
            .then(data => setCarsinfo(data))
            .catch(err => console.error("Սխալ fetch-ի ժամանակ:", err));
    }, []);

    const tabs = ["Recent Cars", "Featured Cars", "Popular Cars"];

    return (
        <section className={s.cardSection}>
            <div className={s.cardwrapper}>
                <div className={s.headerBar}>
                    <h1 className={s.cardPageTitle}>Explore All Vehicles</h1>
                    <div className={s.ViewAll}>
                        <button className={s.ViewAllbtn}>View All</button>
                        <img className={s.VievAllImg} src={info} alt="info" />
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
                    {carsinfo.length === 0 ? (
                        <h2 style={{color: "red", gridColumn: "1 / -1", textAlign: "center"}}>
                            Տվյալները չեն բեռնվել։ Ստուգիր Cars.json ֆայլի տեղը և անունը։
                        </h2>
                    ) : (
                        carsinfo.map(car => (
                            <div key={car.id} className={s.card}>
                                <img className={s.cardImg} src={`/${car.img}`} alt={car.name} />

                                <h2 className={s.cardTitle}>{car.name}</h2>
                                <p className={s.cardDescText}>{car.desc}</p>
                                
                                <div className={s.cardDesc}>
                                    {car.descImg?.imgDesc?.map((text, index) => (
                                        <div key={index} className={s.cardDescItem}>
                                            <img
                                                src={`/${car.descImg.img[index]}`}
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
                                        <img className={s.cardInfoImg} src={info} alt="info" />
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                
            </div>
        </section>
    );
};

export default Card;