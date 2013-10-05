image-batch-loader
==================

Load a set of images in the browser, get an event when they're all loaded.
The callback event will have the loaded images as an argument.

This module is designed for use in the browser - use browserify or some other means to get it running in the browser.

## Usage

```javascript
var loadImages = require('image-batch-loader');

loadImages(['images/cat.png', 'images/mouse.png'], function (images) {
  var catImage = images['images/cat.png'],
      mouseImage = images['images/mouse.png'];

  // do something with cat and mouse image
});

```
