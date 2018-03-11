module.exports = {
  dir: 'coverage',
  reporters: [
    {type: 'lcovonly', subdir: '.'},
    {type: 'json', subdir: '.', file: 'coverage.json'},
    {type: 'html'},
  ],
};
