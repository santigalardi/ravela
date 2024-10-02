import withSvgr from 'next-svgr';

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default withSvgr(nextConfig);
