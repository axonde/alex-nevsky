import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : 'alex-nevsky',
    }
  }
};

export default config;

