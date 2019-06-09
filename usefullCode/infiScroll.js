/**
 * Requires lodash:
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js" />;
 * or
 * import _ from "lodash";
 *  */

(function() {
  // add full height element to the page
  // to enable lazy loading
  var documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  if (document.body.clientHeight < documentHeight) {
    var placeholder = document.createElement("div");
    var content = `
    <div style="height: 110vh; background: lightblue;">
    <h1>
    Scroll to see lazy loading..
    </h1>
    </div>
    `;
    placeholder.innerHTML = content;
    document.querySelector("body").appendChild(placeholder);
  }
})();
(function() {
  var index = 0;
  var bgColors = ["lightsalmon", "lightcoral", "lightpink", "lightyellow"];
  var colorIndex = 0;
  var loadItems = function(numberOfItemsToLoad) {
    // add your loading logic here VVVVV
    var div = document.createElement("div");
    var content = "";

    var i = numberOfItemsToLoad;
    while (i-- > 0) {
      let item = `
            <div style="background: ${
              bgColors[colorIndex]
            };height: 150px; text-align: center;"><h2>${++index}</h2></div>`;
      content += item;
      colorIndex = ++colorIndex % bgColors.length;
    }
    content =
      `<div style="text-align: center;"><h2>Added ${numberOfItemsToLoad} items</h2></div>` +
      content;
    div.innerHTML = content;
    document.querySelector("body").appendChild(div);
    console.log(`Added ${numberOfItemsToLoad} elements`);
  };

  var handleScroll = function(event) {
    var documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    var offsetFromBottom = 100; // offset from bottom in px when loading starts

    var windowYBottomPosition =
      document.documentElement.clientHeight + window.pageYOffset;

    // chech if we reach bottom of the page
    // to start loading
    if (documentHeight - offsetFromBottom <= windowYBottomPosition) {
      // set number of items to load
      // depending on the page width
      var numberOfItemsToLoad = 0;
      var windowWidth = document.documentElement.clientWidth;
      var desktop = 1024;
      var tablet = 768;
      var phone = 568;

      // desktop
      if (windowWidth > desktop) numberOfItemsToLoad = 10;
      // ipad landscape
      if (windowWidth <= desktop && windowWidth > tablet)
        numberOfItemsToLoad = 8;
      // ipad portrait
      if (windowWidth <= tablet && windowWidth > phone) numberOfItemsToLoad = 4;
      // phone
      if (windowWidth <= phone) numberOfItemsToLoad = 2;
      // Default
      if (!numberOfItemsToLoad) numberOfItemsToLoad = 4;

      loadItems(numberOfItemsToLoad);
    }
  };

  // Throttelling to increase efficiency of event listener
  // Event will fire only once every 100 ms
  // needs lodash library
  var timeLimitMs = 100;
  var throttledHandleScroll = _.throttle(handleScroll, timeLimitMs);

  document.addEventListener("scroll", throttledHandleScroll);
})();
