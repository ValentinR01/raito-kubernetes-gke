import React from 'react'
import LoginButtonsStyleLeft from "./LoginButtonsLeft.style"
import LoginButtonsStyleRight from "./LoginButtonsRight.style"
import Separator from "./Separator.style"

const LoginButtons = () => {
  return (
    <div>
      <LoginButtonsStyleLeft>
        <svg width="21" height="21" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.4696 25.7246C30.0793 26.8335 26.4315 26.8831 23.0123 25.8666C19.5931 24.8501 16.5648 22.8159 14.3309 20.0349C12.0969 17.2539 10.7634 13.8583 10.5081 10.3003C10.2527 6.74237 11.0875 3.19107 12.9014 0.119562C10.2024 1.0014 7.75763 2.52484 5.77681 4.55919C3.796 6.59354 2.33828 9.07806 1.52871 11.7996C0.719145 14.5212 0.581903 17.3985 1.12876 20.1847C1.67562 22.971 2.89025 25.583 4.66844 27.7966C6.44664 30.0102 8.73532 31.7595 11.3381 32.8942C13.9409 34.0289 16.7802 34.5153 19.6123 34.3115C22.4443 34.1078 25.1847 33.22 27.5983 31.7244C30.0119 30.2288 32.0266 28.1699 33.4696 25.7246Z" fill="#F3EDD7"/>
        </svg>
      </LoginButtonsStyleLeft>
      <Separator>
        <svg width="15" height="25" viewBox="0 0 3 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="4" height="54" fill="#F3EDD7"/>
        </svg>
      </Separator>
      
      <LoginButtonsStyleRight>
        <svg width="21" height="21" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6882 5.02441C31.3848 7.14999 36.8816 14.0101 36.8816 22.1259C36.8816 31.9809 28.6855 40.0002 18.4907 40.0002C8.29582 40.0002 0 31.9809 0 22.1259C0 14.0101 5.59729 7.15013 13.2931 5.02441V10.1452C8.3955 12.0777 4.99729 16.7152 4.99729 22.1259C4.99729 29.3724 10.9943 35.1695 18.4907 35.1695C25.8872 35.1695 31.984 29.3724 31.984 22.1259C31.984 16.7152 28.4857 12.0774 23.6882 10.1452V5.02441Z" fill="#F3EDD7"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4912 0C20.0902 0 21.4895 1.35272 21.4895 2.89843V19.1306C21.4895 20.7732 20.0902 22.029 18.4912 22.029C16.7919 22.029 15.3926 20.7729 15.3926 19.1306V2.89843C15.3926 1.35264 16.7919 0 18.4912 0V0Z" fill="#F3EDD7"/>
        </svg>
      </LoginButtonsStyleRight>
    </div>
  )
}

export default LoginButtons