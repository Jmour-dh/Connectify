import React from 'react'
import styles from "./Gallery.module.scss"

import Img1 from "../../../../../../assets/images/img1.jpg";
import Img2 from "../../../../../../assets/images/img2.jpg";
import Img3 from "../../../../../../assets/images/img3.jpg";
import ImgQsn from "../../../../../../assets/images/qsn.jpg";

function Gallery() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center ">
      <h2 className="text-align-center py-20 ">Gallery</h2>
        <div className={styles.gallery}>
          <div className={styles.imgs}>
            <img src={Img3} alt="img3" />
          </div>
          <div className={styles.imgs}>
            <img src={Img2} alt="img2" />
          </div>

          <div className={styles.imgs}>
            <img src={Img1} alt="img1" />
          </div>
          <div className={styles.imgs}>
            <img src={ImgQsn} alt="imgqsn" />
          </div>
        </div>
    </div>
  )
}

export default Gallery
