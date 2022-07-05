import "./styles.css";

// Composant qui contient un fichier svg , qu'on peut configurer
export default function CloudOne (props) {
  return (
    <div>
      <svg
        width={props.width} 
        height={props.height}
        viewBox="0 0 357 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="14.9999"
          y1="95.0742"
          x2="254.185"
          y2="95.0742"
          stroke={props.stroke}
          stroke-opacity="0.6"
          stroke-width="30"
          stroke-linecap="round"
        />
        <line
          x1="115.518"
          y1="134.259"
          x2="225.222"
          y2="134.259"
          stroke={props.stroke}
          stroke-opacity="0.6"
          stroke-width="30"
          stroke-linecap="round"
        />
        <line
          x1="94.222"
          y1="57.5928"
          x2="186.037"
          y2="57.5928"
          stroke={props.stroke}
          stroke-opacity="0.6"
          stroke-width="30"
          stroke-linecap="round"
        />
        <line
          x1="149.592"
          y1="15"
          x2="341.925"
          y2="15"
          stroke={props.stroke}
          stroke-opacity="0.6"
          stroke-width="30"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
}
