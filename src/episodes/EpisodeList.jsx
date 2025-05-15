   // EpisodeList.jsx
   import React from 'react';

   function EpisodeList({ episodes, onEpisodeSelect }) { // Receive the callback
       return (
           <ul>
               {episodes.map((episode) => (
                   <li key={episode.id} onClick={() => onEpisodeSelect(episode)}> {/* Call the callback on click */}
                       {episode.title}
                   </li>
               ))}
           </ul>
       );
   }

   export default EpisodeList;
   
import "./episodes.css";

/** A list of episode names that allows the user to select an episode */
export default function EpisodeList({
  name,
  episodes,
  selectedEpisode,
  setSelectedEpisode,
}) {
  return (
    <section className="episodes">
      <h2>{name}</h2>
      <ol>
        {episodes.map((episode) => (
          <li
            key={episode.number}
            onClick={() => setSelectedEpisode(episode)}
            className={episode === selectedEpisode ? "selected" : ""}
          >
            {episode.title}
          </li>
        ))}
      </ol>
    </section>
  );
}
