function onMouseMove(event) {
  var path = new Path.Circle({
    center: event.middlePoint,
    //radius: 10
    radius: Math.round(Math.random() * 25) + 5
  })
  path.fillColor = {
    //hue: 0,
    hue: event.count * 3,
    saturation: 1,
    brightness: 1
  }

}