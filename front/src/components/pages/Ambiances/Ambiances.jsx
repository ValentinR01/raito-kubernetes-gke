import PageContentTemplate from 'components/templates/PageContentTemplate/PageContentTemplate';
import React, { Fragment, useEffect, useRef, useState } from 'react'
import AmbiancesStyle from './Ambiances.style';
import Player from "components/pages/Ambiances/Player/Player";
import { songsdata } from '/Users/paolacyp/Desktop/RAITO-2022/raito/front/src/components/pages/Ambiances/Player/audio.js';
import { AmbiancesList } from './DataAmbiances';

const Ambiances = () => {



  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();


  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isplaying])

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })


  }



  const ShowAllAmbianceData =  AmbiancesList.map((element) => {

    return (

          
            <div  className="card-body" key={element.id}>
                <div className="card-illustration">
                {element.illustration}

                </div>
                <div className="text-and-icon">
                   <div class="card-text-area">
                       <h5  className="card-title">{element.title}</h5>              
                       <p  className="card-text">{element.author}</p>
                    </div>
                    <div className="card-icon"> {element.icon}  </div>
                </div>
            </div>
         
    )
  })

  return (
    <Fragment>
      <AmbiancesStyle>
        <h1>Ambiances</h1>
      <PageContentTemplate>
          <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />

      <div className="all-cards" >
      {ShowAllAmbianceData}
      </div>





                

      </PageContentTemplate>

      </AmbiancesStyle>
    
    </Fragment>
  )
}

export default Ambiances ;