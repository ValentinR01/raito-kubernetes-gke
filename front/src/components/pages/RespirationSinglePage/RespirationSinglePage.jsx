import { Card } from "components/atoms/grouping";
import { PageTemplate } from "components/templates";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import "./RespirationSinglePage.css";
import { exercisesData } from "components/atoms/embedding/Player/audio";
import { respirationsList } from "components/pages/RespirationPage/respirationsData";
import Player from "components/atoms/embedding/Player/Player";

const RespirationSinglePage = () => {
  let { respirationId } = useParams();
  const [element] = useState([...respirationsList]);
  const [songs, setSongs] = useState(exercisesData);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(
    exercisesData[respirationId - 1]
  );

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
    let x = parseInt(respirationId);
    if (e.id === x) {
      theSong = e;
    }
  });
  return (
    <PageTemplate>
      <Card transparent>
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

export default RespirationSinglePage;
