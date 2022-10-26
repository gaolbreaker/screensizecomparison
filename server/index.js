function areaFromHypotenuse(h, l = 16, w = 9) {
  const result = l * w * ((h * h) / (l * l + w * w));
  console.log(`Size: ${h} inches, ${l}:${w} aspect ratio, Viewing area: ${Math.floor(result)} sq in in single, ${Math.floor(result * 2)} sq in in double`)
}

areaFromHypotenuse(50)
areaFromHypotenuse(43)
areaFromHypotenuse(32)
areaFromHypotenuse(27)
areaFromHypotenuse(49, 32, 9)
areaFromHypotenuse(32, 21, 9)
areaFromHypotenuse(34, 21, 9)

function pixelsFromMonitors(w, h, num) {
  console.log(`${w}x${h}x${1} monitors = ${w*h} pixels, ${w}x${h}x${2} monitors = ${w*h * 2} pixels, ${w}x${h}x${3} monitors = ${w*h * 3} pixels`);
}

pixelsFromMonitors(1920, 1080)
pixelsFromMonitors(2560, 1440)
pixelsFromMonitors(3440, 1440)
pixelsFromMonitors(3840, 2160)