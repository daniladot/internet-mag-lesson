import React from 'react';
import styles from './Slider.module.scss'
import { Carousel } from 'react-carousel-minimal';


function Slider() {

    const data = [
        {
            image: "https://static.yakitoriya.ru/media/cache/2c/16/2c162fb6a36c795a7dd19e39e88f683e.jpg",
            caption: "<h2>«Монстры на каникулах»</h2> <br/> уже в «Якитории»!"
        },
        {
            image: "https://static.yakitoriya.ru/media/cache/1e/0c/1e0c0b8dca24afb37da9df875ae65aa0.jpg",
            caption: "<h2>Spring Travel Menu</h2> <br/> специальное весеннее предложение"
        },
        {
            image: "https://static.yakitoriya.ru/media/cache/77/5d/775d350cf458ea57511324fc4a47ee66.jpg",
            caption: "<h2>Новое постное меню</h2> <br/> Легкие, яркие и весенние блюда"
        },
        {
            image: "https://static.yakitoriya.ru/media/cache/0e/b6/0eb66c35b47afac6d09873ba845ecdc3.jpg",
            caption: "<h2>-20% на доставку</h2> <br/> скидка на первый заказ"
        },
        {
            image: "https://static.yakitoriya.ru/media/cache/d0/22/d0226c3c7221dd406fb4c9c74d7879ab.jpg",
            caption: "<h2>-20% на самовывоз</h2> <br/> самовывоз и заказы с собой со скидкой для всех! "
        }
    ];

    const captionStyle = {
        fontSize: '20px',
        fontfamily: 'Helvetica',
        fontstyle: 'normal',
        transform: 'rotate(90deg)',
    }

    return (
        <div className={styles.carousel}>
            <Carousel
                data={data}
                time={2500}
                width="700px"
                height="700px"
                captionStyle={captionStyle}
                captionPosition="center"
                automatic={true}
                dots={true}
                slideImageFit="cover"
                style={{
                    textAlign: "center",
                    maxWidth: "700px",
                    maxHeight: "700px",
                    margin: "40px auto",
                }}
            />
        </div>
    );
}

export default Slider;
