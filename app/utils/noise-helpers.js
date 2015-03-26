function sumOctave(iterations, x, y, persistance, scale, low=0, high=255) {
  var maxAmp = 0;
  var amp = 1;
  var freq = scale;
  var noise = 0;
  for(var i=0; i<iterations; i++) {
    noise += window.noise.simplex2(x * freq, y * freq) * amp;
    maxAmp += amp;
    amp *= persistance;
    freq *= 2;
  }
  noise /= maxAmp;
  noise = noise * (high - low) / 2 + (high + low) / 2;
  return noise
}

export {
  sumOctave
};
