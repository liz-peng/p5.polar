Polar = {
  center: { 
    x: 0, 
    y: 0 
  },
  setCenter(x, y) {
    this.center.x = x;
    this.center.y = y;
  }
};

Polar.square = function(_angle, _radius, _distance) {
  resetMatrix();
  translate(Polar.center.x, Polar.center.y);
  const _radians = radians(_angle);
  translate(sin(_radians)*_distance, cos(_radians)*_distance);
  rotate(radians(_angle));
  square(-_radius, -_radius, _radius*2);
}

Polar.squares = function(_num, _radius, _distance, callback) {
  const _angle = 360/_num;
  for(let i=1; i<=_num; i++) {
    if(callback) {
      const _result = callback(i, _angle, _radius, _distance);
      Polar.square(i*_result[0], _result[1], _result[2]);
    }
    else Polar.square(i*_angle, _radius, _distance);
  }
}