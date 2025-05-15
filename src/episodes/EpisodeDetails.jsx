   // EpisodeDetails.jsx
   import React from 'react';

   function EpisodeDetails({ episode }) {
       if (!episode) {
           return <p>Select an episode to view details.</p>;
       }

       return (
           <div>
               <h3>{episode.title}</h3>
               <p>{episode.description}</p>
               {/* Add more details as needed */}
           </div>
       );
   }

   export default EpisodeDetails;
   
