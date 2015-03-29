function gradientCSS(colorjson) {
  return window.tinygradient(colorjson).css();
}

function gradientRGB(colorjson, steps=256) {
  return window.tinygradient(colorjson).rgb(steps);
}

export {
  gradientCSS,
  gradientRGB
};
