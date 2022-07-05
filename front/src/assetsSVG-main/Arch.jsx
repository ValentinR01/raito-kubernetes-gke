import React from "react";


export default function ArchIcone (props) {
    return(
        <>
        <svg width={props.width} height={props.height} viewBox="0 0 192 158" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="45.9498" y1="155.075" x2="45.9498" y2="19.2839" stroke={props.stroke} stroke-width="11"/>
        <line x1="144.95" y1="155.075" x2="144.95" y2="19.2839" stroke={props.stroke} stroke-width="11"/>
        <line x1="174.75" y1="37.5762" x2="17.25" y2="37.5762" stroke={props.stroke} stroke-width="11"/>
        <line x1="98.0502" y1="14.3643" x2="98.0502" y2="36.9961" stroke={props.stroke} stroke-width="5"/>
        <path d="M151.35 13.8721L40.1996 13.8721" stroke={props.stroke} stroke-width="11"/>
        <path d="M150.45 13.872C173.13 13.872 180.3 8.95198 186 6M41.55 13.872C18.87 13.872 11.7 8.95198 6 6" stroke={props.stroke} stroke-width="11" stroke-linecap="round"/>
        <path d="M39.75 143.268H53.25V158.028H39.75V143.268Z" fill={props.fill}/>
        <path d="M138.75 143.268H152.25V158.028H138.75V143.268Z" fill={props.fill}/>
        </svg>
        </>

    )
}