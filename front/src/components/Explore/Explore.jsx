import React from 'react'
import s from "./Explore.module.sass"

const Explore = () => {
  return (
    <div className={s.container}>
        <div className={s.center}>
            <div className={s.title_line}>
                <div className={s.title}>
                    <h1>Explore Our Premium Brands</h1>
                </div>
                <div className={s.link}>
                    <button> Show All Brands ↗</button>
                </div>
            </div>
            <div className={s.brand_line}>
                <div className={s.audi}>
                    <img src="src/assets/audi.jpg" alt="" />
                    <h3>Audi</h3>
                </div>
                <div className={s.bmw}>
                    <img src="src/assets/bmw.jpg" alt="" />
                    <h3>BMW</h3>
                </div>
                <div className={s.ford}>
                    <img src="src/assets/ford.jpg" alt="" />
                    <h3>Ford</h3>
                </div>
                <div className={s.mercedes}>
                    <img src="src/assets/mercedes.jpg" alt="" />
                    <h3>Mercedes Benz</h3>
                </div>
                <div className={s.peugeot}>
                    <img src="src/assets/peugeot.jpg" alt="" />
                    <h3>Peugeot</h3>
                </div>
                <div className={s.volkswagen}>
                    <img src="src/assets/volkswagen.jpg" alt="" />
                    <h3>Volkswagen</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore