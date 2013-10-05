module.exports = function (imagePaths, callback) {
  var images = {};
  var allLoaded = false;
  var toLoad = imagePaths.length;
  for (var i=0; i < imagePaths.length; i++) {
    var img = new Image();
    images[imagePaths[i]] = img;
    img.addEventListener('load', function() {
      toLoad -= 1;
      allLoaded = toLoad == 0;
      if (allLoaded) {
        callback(images);
      }
    }, false);
    img.src = imagePaths[i];
  }
};