import React from 'react'
import styles from "./MusicProfile.module.scss"
import ReactAudioPlayer from "react-audio-player";

import Imgmusic1 from "../../../../../../assets/images/imgmusic1.jpg";
import Musuc1 from "../../../../../../assets/music/music1.mp3";
import Imgmusic2 from "../../../../../../assets/images/imgmusic2.jpg";
import Musuc2 from "../../../../../../assets/music/music2.mp3";

function MusicProfile() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center ">
      <h2 className="text-align-center py-20 ">Music</h2>
        <div className={`${styles.music}  mb-10`}>
          <div className={styles.imgMusic}>
            <img src={Imgmusic1} alt="Imgmusic1" />
          </div>
          <div className={styles.MusicPlay}>
            <span>Aleksey Chistilin</span>
            <span>Eco Technology</span>
            <ReactAudioPlayer className="m-10" src={Musuc1} controls />
          </div>
        </div>
        <div className={`${styles.music} d-flex`}>
          <div className={styles.imgMusic}>
            <img src={Imgmusic2} alt="Imgmusic1" />
          </div>
          <div className={styles.MusicPlay}>
            <span>SoulProdMusic</span>
            <span>Motivational Epic Music</span>
            <ReactAudioPlayer className="m-10" src={Musuc2} controls />
          </div>
        </div>
    </div>
  )
}

export default MusicProfile
