// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemon = require('nodemon');

nodemon({
  script: 'server.js',
  ext: 'js json' // watching extensions
});

nodemon.on('start', () => {
  console.log('App has started');
}).on('quit', () =>  {
  console.log('App has quit');
  process.exit();
}).on('restart', (files) =>  {
  console.log('App restarted due to: ', files);
});