import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import card_1 from "../../../../public/images/vision.png";
import card_2 from "../../../../public/images/mission.png";
import card_3 from "../../../../public/images/values.png";


const Cards = () => {
    return (
        <div className={styles.container}>
            <h1>OUR FUNDAMENTALS</h1>
            <div className={styles.card}>
                <div className={styles.cards}>
                    <Image className='ms-4' style={{ height: "225px", width: "315px", objectFit: "contain" }} src={card_1} />
                    <div className={styles.cardheading1}>
                    <h2>Vision</h2>
                    </div>
                    <div className={styles.cardtxt1}>
                    <p>To be a world-class Saas Player for healthcare</p>
                    </div>
                </div>
                <div className={styles.cards}>
                    <Image className='ms-4' style={{ height: "225px", width: "315px", objectFit: "contain" }} src={card_2} />
                    <div className={styles.cardheading2}>
                    <h2>Mission</h2>
                    </div>
                    <div className={styles.cardtxt2}>
                    <p>To meet your healthcare needs at an affordable cost</p>
                    </div>
                </div>
                <div className={styles.cards}>
                    <Image className='ms-4' style={{ height: "225px", width: "315px", objectFit: "contain" }} src={card_3} />
                    <div className={styles.cardheading3}>
                    <h2>Values</h2>
                    </div>
                    <div className={styles.cardtxt3}>
                    <p>We value your Time, Convenience and Simplicity</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cards