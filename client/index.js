function areaFromHypotenuse(h, l = 16, w = 9) {
  const result = l * w * ((h * h) / (l * l + w * w));
  console.log(`Size: ${h} inches, ${l}:${w} aspect ratio, Viewing area: ${result} in^2`)
}

areaFromHypotenuse(50)
areaFromHypotenuse(43)
areaFromHypotenuse(32)
areaFromHypotenuse(27)
areaFromHypotenuse(49, 32, 9)
areaFromHypotenuse(32, 21, 9)
areaFromHypotenuse(34, 21, 9)