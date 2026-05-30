import React from 'react'
import s from "./Why.module.sass"

const Why = () => {
  return (
    <div className={s.container}>
        <div className={s.center}>
            <div className={s.line1}>
                <h1>Why Choose Us?</h1>
            </div>
            <div className={s.line2}>
                <div className={s.special}>
                    <img src="src/assets/special.png" alt="" />
                    <h3>Special Financing Offers</h3>
                    <h2>
                        Our stress-free finance department that can
                        find financial solutions to save you money.
                    </h2>
                </div>
                <div className={s.trusted}>
                    <img src="src/assets/trusted.png" alt="" />
                    <h3>Trusted Car Dealership</h3>
                    <h2>
                        Our stress-free finance department that can
                        find financial solutions to save you money.
                    </h2>
                </div>
                <div className={s.transparent}>
                    <img src="src/assets/pricing.png" alt="" />
                    <h3>Transparent Pricing</h3>
                    <h2>
                        Our stress-free finance department that can
                        find financial solutions to save you money.
                    </h2>
                </div>
                <div className={s.expert}>
                    <img src="src/assets/car.png" alt="" />
                    <h3>Expert Car Service</h3>
                    <h2>
                        Our stress-free finance department that can
                        find financial solutions to save you money.
                    </h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Why