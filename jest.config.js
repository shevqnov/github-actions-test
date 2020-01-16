module.exports = {
  verbose: true,
  transform: {
    '^.+\\.[t|j]sx?$': 'ts-jest',
  },
  setupFiles: ['./setupTest.js'],
};
