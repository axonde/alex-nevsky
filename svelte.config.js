import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

const config = {
  kit: {
    adapter: adapter({
      fallback: '200.html'
     }),
    paths: {
      base: dev ? '' : '/alex-nevsky',
    }
  }
};

export default config;

