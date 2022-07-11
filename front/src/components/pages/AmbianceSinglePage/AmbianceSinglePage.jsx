import { Card } from "components/atoms/grouping";
import { PageTemplate } from "components/templates";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import "./AmbianceSinglePage.css";
import { songsdata } from "components/atoms/embedding/Player/audio";
import Player from "components/atoms/embedding/Player/Player";
import { ambiancesList } from "components/pages/AmbiancesPage/ambiancesData";

const AmbianceSinglePage = () => {
  let { ambianceId } = useParams();
  const [element] = useState([...ambiancesList]);
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[ambianceId - 1]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  let theSong;

  Object.values(element).forEach((e) => {
    let x = parseInt(ambianceId);
    if (e.id === x) {
      theSong = e;
    }
  });
  return (
    <PageTemplate>
      <Card>
        <div className="container-single-ambiance">
          <div className="mini-illu">
            <div className="color-area"> </div>

            <div className="content">
              <div>
                <h3>{theSong.title} </h3>
                <p>
                  <strong>Auteur :</strong> {theSong.author}
                </p>
              </div>
            </div>
          </div>
          <div className="description">
            <div>
              <h4> Qu'est-ce que c'est ? </h4>
              <p>{theSong.description} </p>
            </div>
          </div>
          <div className="play-area">
            <div className="play-illustration"> {theSong.illustration} </div>
            <div className="play-zone">
              <audio
                src={currentSong.url}
                ref={audioElem}
                onTimeUpdate={onPlaying}
              />
              <Player
                songs={songs}
                setSongs={setSongs}
                isplaying={isplaying}
                setisplaying={setisplaying}
                audioElem={audioElem}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
              />
            </div>
            <div></div>
          </div>
        </div>
      </Card>
    </PageTemplate>
  );
};

export default AmbianceSinglePage;
