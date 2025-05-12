import { useState } from "react";
import { episodeList } from "./data.js";
import EpisodeList from "./components/EpisodeList/EpisodeList";
import EpisodeDetails from "./components/EpisodeDetails/EpisodeDetails";

/** episodeList[Episode]
 * @typedef Episode
 * @property {number} id ID, Episode Number
 * @property {string} title Title of Episode
 * @property {string} description Episode description
 */

export default function App() {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <>
      <h1>Dark Echoes</h1>
      <main>
        <EpisodeList episodes={episodeList} setSelectedEpisode={setSelectedEpisode} />
        <EpisodeDetails selectedEpisode={selectedEpisode}/>
      </main>
    </>
  );
}
