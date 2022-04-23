import React from "react";
import styles from "./Slider.module.scss"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";


function Slider() {

    const data = [
        {
            image: "https://static.yakitoriya.ru/media/cache/2c/16/2c162fb6a36c795a7dd19e39e88f683e.jpg",
        },
        {
            image: "https://static.yakitoriya.ru/media/cache/1e/0c/1e0c0b8dca24afb37da9df875ae65aa0.jpg",
        },
        {
            image: "https://static.yakitoriya.ru/media/cache/77/5d/775d350cf458ea57511324fc4a47ee66.jpg",
        },
        {
            image: "https://static.yakitoriya.ru/media/cache/0e/b6/0eb66c35b47afac6d09873ba845ecdc3.jpg",
        },
        {
            image: "https://static.yakitoriya.ru/media/cache/d0/22/d0226c3c7221dd406fb4c9c74d7879ab.jpg",
        }
    ];

    return (
        <Splide className={styles.Slider}
            options={{
                arrows: false,
                pagination: true,
                autoplay: 'playing',
                // direction: 'ttb',
                // height: '60rem',
            }}
        >
            <SplideSlide>
                <img src={data[0].image} alt="Image 1" />
                <div className={styles.background}>
                    <p className={styles.caption}>«Монстры на каникулах»</p>
                    <p className={styles.caption1}>уже в «Якитории»!</p>
                </div>
            </SplideSlide>
            <SplideSlide>
                <img src={data[1].image} alt="Image 2" />
                <div className={styles.background}>
                    <p className={styles.caption}>Spring Travel Menu</p>
                    <p className={styles.caption1}>специальное весеннее предложение</p>
                </div>
            </SplideSlide>
            <SplideSlide>
                <img src={data[2].image} alt="Image 3" />
                <div className={styles.background}>
                    <p className={styles.caption}>Новое постное меню</p>
                    <p className={styles.caption1}>Легкие, яркие и весенние блюда</p>
                </div>
            </SplideSlide>
            <SplideSlide>
                <img src={data[3].image} alt="Image 4" />
                <div className={styles.background}>
                    <p className={styles.caption}>-20% на доставку</p>
                    <p className={styles.caption1}>скидка на первый заказ</p>
                </div>
            </SplideSlide>
            <SplideSlide>
                <img src={data[4].image} alt="Image 5" />
                <div className={styles.background}>
                    <p className={styles.caption}>-20% на самовывоз</p>
                    <p className={styles.caption1}>самовывоз и заказы с собой со скидкой для всех!</p>
                </div>
            </SplideSlide>
        </Splide>
    );
}

export default Slider;
