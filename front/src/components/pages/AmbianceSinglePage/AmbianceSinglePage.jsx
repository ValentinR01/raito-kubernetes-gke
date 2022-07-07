import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router';
import { ambiancesList } from '../Ambiances/DataAmbiances';
import { songsdata } from '../Ambiances/Player/audio';
import Player from '../Ambiances/Player/Player';
import "./Ambiance-style.css" ;


const AmbianceSinglePage = () => {
    let { ambianceId } = useParams();
    const [ element , setElement] = useState([...ambiancesList]) ;
    const [songs, setSongs] = useState(songsdata);
    const [isplaying, setisplaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(songsdata[ ambianceId -1 ]);

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


  let theSong ;

  Object.values( element).forEach(e => {
      let x = parseInt(ambianceId)
      if( e.id === x ){
         theSong =  e ;
      } 
  })
    return (
      <div>
        
            <div className="container" >
                <div className="mini-illu"  > 
                    <div className="color-area">   </div>
                   
                   <div className="content">  
                      <p>{theSong.title} </p>
                      <p>Auteur : {theSong.author} </p>

                   </div>
                 
                </div>
                <div className="description" >  
                         Qu'est-ce que c'est ?
                         <p>{theSong.description} </p>
                </div>
                <div className="play-area" >
                    
                          

                    <div className="play-illustration"> {theSong.illustration} </div>
                    <div>
                          <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
                          <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
                    </div>
                <div>
              </div>
          </div>
            </div>
      </div>
    );
  }


export default AmbianceSinglePage ;
