
describe('Client side only test suite', function () {
  it('should be able to access local variables', function () {
    if (someLocalVariable !== 'client') {
      throw new Error('expected someLocalVariable to equal "client"');
    }
  });
});
