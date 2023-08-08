import React from 'react'
import ReactPlayer from "react-player";
import styles from './VideoProfile.module.scss'


import videoProfile from "../../../../../../assets/videos/videoprofile.mp4";

function VideoProfile() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center ">
      <h2 className="text-align-center py-20 ">Video</h2>
        <div className={styles.video}>
          <ReactPlayer url={videoProfile} controls={true} />
        </div>
    </div>
  )
}

export default VideoProfile
