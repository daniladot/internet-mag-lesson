import React from 'react'
import styles from './Footer.module.scss'
// import gp from '../../gp.png'
// import AppS from '../../AppS.png'

function Footer() {
  return (
    <div className={styles.footer_main}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <p>
              <a href="#!">
                <img
                  className={styles.logo_main}
                  src="https://static.yakitoriya.ru/static/build/img/svg/yaki_logo.svg"
                  alt="Якитория - доставка суши"
                />
              </a>
            </p>
            <p>
              Доставка суши — онлайн сервис заказа суши и других блюд в Москве.
            </p>
            <p>ООО "ВОЙСТЕЛ" ОГРН 1177746857551</p>
            <p>
              Прием заказов: c 10:00 до 4:45 <br /> Телефон: +7 495 234-24-24;
            </p>
            <p className={styles.footer_main__title}>Мобильное приложение</p>
          </div>

          <div className={styles.col}>
            <p className={styles.footer_main__title}>Якитория</p>
            <nav className={styles.nav_list}>
              <ul className={styles.nav_list__layout}>
                <li className={styles.nav_list__item}>
                  <a href="#!" className={styles.nav_list__li}>
                    О нас
                  </a>
                </li>
                <li className={styles.nav_list__item}>
                  <a href="#!" className={styles.nav_list__li}>
                    Новости и акции
                  </a>
                </li>
                <li className={styles.nav_list__item}>
                  <a href="#!" className={styles.nav_list__li}>
                    Меню ресторанов
                  </a>
                </li>
                <li className={styles.nav_list__item}>
                  <a href="#!" className={styles.nav_list__li}>
                    Детям
                  </a>
                </li>
                <li className={styles.nav_list__item}>
                  <a href="#!" className={styles.nav_list__li}>
                    Франчайзинг
                  </a>
                </li>
                <li className={styles.nav_list__item}>
                  <a href="#!" className={styles.nav_list__li}>
                    Сотрудничество
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles.col}>
            <p className={styles.footer_main__title}>Доставка</p>
            <nav className={styles.nav_list}>
              <ul className={styles.nav_list__layout}>
                <li className={styles.nav_list__item}>
                  <a href="#!" className={styles.nav_list__li}>
                    Условия доставки
                  </a>
                </li>
                <li className={styles.nav_list__item}>
                  <a href="#!" className={styles.nav_list__li}>
                    Адреса ресторанов
                  </a>
                </li>
              </ul>
            </nav>
            <p className={styles.footer_main__title1}>
              <a href="#!">Программа лояльности GoodFoodClub</a>
            </p>
            <button className={styles.mobile_btn} type="button">
              Мобильная версия
            </button>
          </div>

          <div className={styles.col}>
            <p className={styles.footer_main__title}>Юридическая информация</p>
            <nav className={styles.nav_list}>
              <ul className={styles.nav_list__layout}>
                <li className={styles.nav_list__item}>
                  <a href="#!" className={styles.nav_list__link}>
                    Политика конфиденциальности
                  </a>
                </li>
                <li className={styles.nav_list__item}>
                  <a href="#!" className={styles.nav_list__link}>
                    Пользовательское соглашение
                  </a>
                </li>
                <li className={styles.nav_list__item}>
                  <a href="#!" className={styles.nav_listt__link}>
                    Положение по обработке персональных данных
                  </a>
                </li>
                <li className={styles.nav_list__item}>
                  <a href="#!" className={styles.nav_list__link}>
                    Пользовательское соглашение по программе лояльности
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className={styles.footer_main__bottom}>
        <div className={styles.container}>
          <div className={styles.col}>
            <span className={styles.company}>&copy; 2022 «Якитория»</span>
          </div>
          <div className={styles.col}></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
