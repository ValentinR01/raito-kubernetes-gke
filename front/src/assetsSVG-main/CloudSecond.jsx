import "./styles.css";

// Composant qui contient un fichier svg , qu'on peut configurer
export default function CloudSecond (props) {

    return (
        <div>
            <svg width={props.width} height={props.height} viewBox="0 0 257 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="68.5054" y1="15" x2="242" y2="15" stroke={props.stroke} stroke-opacity="0.6" stroke-width="30" stroke-linecap="round"/>
                <line x1="112.362" y1="54.1855" x2="226.212" y2="54.1855" stroke={props.stroke} stroke-opacity="0.6" stroke-width="30" stroke-linecap="round"/>
                <line x1="15" y1="15" x2="24.471" y2="15" stroke={props.stroke} stroke-opacity="0.6" stroke-width="30" stroke-linecap="round"/>
            </svg>
        </div>
    )


}