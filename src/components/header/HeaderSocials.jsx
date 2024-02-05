import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'
import { CiYoutube } from 'react-icons/ci'
import { SlSocialSpotify } from "react-icons/sl";



const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/diego-rivera-sprohnle-4829b2198/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/D3R5" target="_blank"><BsGithub/></a>
            <a href="https://www.instagram.com/diegooders/" target="_blank"><BsInstagram/></a>
            <a href="https://www.youtube.com/channel/UC1c6eGpqAl-NSn6INA1VKeg" target="_blank"><CiYoutube/></a>
            <a href="https://open.spotify.com/user/0pzqhq96shga6ykicylf5pn4m?si=cdc152e639f94bf6"target="_blank"><SlSocialSpotify  /></a>
        </div>
    )
}

export default HeaderSocials