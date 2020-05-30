import { ObfuscateCardNumberPipe } from './obfuscate-card-number.pipe';

describe('ObfuscateCardNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new ObfuscateCardNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
