interface ILoaderProps {
  variant?: 'black' | 'white';
}

const Loader = ({ variant = 'black' }: ILoaderProps) => {
  return <video src={`/loader-${variant}.mp4`} className="w-32" autoPlay loop muted />;
};

export default Loader;
