const SoundcloudPlayer = ({ src }: { src: string }) => {
  return <iframe width="100%" height="166" allow="fullscreen" src={src}></iframe>;
};

export default SoundcloudPlayer;
