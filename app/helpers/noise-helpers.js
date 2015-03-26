function sumOctave(iterations, x, y, persistance, scale, low, high) {
  var maxAmp = 0;
  var amp = 1;
  var freq = scale;
  var noise_value = 0;
  for(var i=0; i<iterations; i++) {
    noise_value += window.noise.simplex2(x * freq, y * freq) * amp;
    maxAmp += amp;
    amp *= persistance;
    freq *= 2;
  }
  noise_value /= maxAmp;
  noise_value = noise_value * (high - low) / 2 + (high + low) / 2;
  return noise_value;
}

export {
  sumOctave
};
