export default function EpisodeDetails({ selectedEpisode }) {
  // console.log(selectedEpisode);

  if (!selectedEpisode) {
    return (
      <div>
      <h2>Episode Details</h2>
      <p>Select an episode.</p>
    </div>
    );
  }
  
  return (
    <div>
      <h2>Episode Details</h2>
      <p>Episode Number #{selectedEpisode.id}</p>
      <p>{selectedEpisode.title}</p>
      <p>{selectedEpisode.description}</p>
    </div>
  );
}
