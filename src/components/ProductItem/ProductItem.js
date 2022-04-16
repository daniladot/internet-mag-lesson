import React from 'react'
import styles from './ProductItem.module.scss'

function ProductItem(props) {
  return (
    <div className={styles.catalog}>
      <div className={styles.item}>
        <a class={styles.pic}  href="###">
          <img
            src={props.url}
            alt="Маринара"
          ></img>
        </a>
        <p className={styles.title}>
          <a href="###">{props.name}Наименование</a>
        </p>
        <div className={styles.desc}>
          {props.desc}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          laudantium?
        </div>
        <div className={styles.bottom}>
          <div className={styles.price}>
            {props.price}888
            <span className={styles.rub}>{props.rub}&#8381;</span>
          </div>
          <div className={styles.skin}>
            <div className={styles.num}>
              <span className={styles.minus}></span>
              <input type="text" className={styles.in} value="0" readonly="" />
              <span className={styles.plus}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
