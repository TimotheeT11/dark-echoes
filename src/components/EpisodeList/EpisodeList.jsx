export default function EpisodeList({ episodes, setSelectedEpisode }) {
  // console.log(episodes[0]);
  
  return (
    <div>
      <h2>Episode List</h2>
      <ul>
        {episodes.map((episode) => {
        return <li // Add className
          key={episode.id}
          onClick={() => {setSelectedEpisode(episode)}}
        >{episode.title}</li>
      })}
      </ul>
    </div>
  );
}