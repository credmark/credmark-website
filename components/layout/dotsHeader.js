import * as React from "react";
import { useRef, useEffect } from "react";
import "../../styles/figma";
import Nav from "../layout/nav";

// reads data in figma.js (could pull this from figma API but I'm too lazy to try that so i just have the results of a single pull saved in a file)
function getData(dataObj) {
  let data = {
    x: dataObj.nodes["750:7640"].document.children[0].absoluteBoundingBox.x,
    y: dataObj.nodes["750:7640"].document.children[0].absoluteBoundingBox.y,
    children: dataObj.nodes["750:7640"].document.children[0].children,
    dots: {
      40: [],
      60: [],
      100: [],
    },
  };

  let research = {
    x: dataObj.nodes["750:7640"].document.children[3].absoluteBoundingBox.x,
    y: dataObj.nodes["750:7640"].document.children[3].absoluteBoundingBox.y,
    children: dataObj.nodes["750:7640"].document.children[3].children,
    dots: {
      40: [],
      60: [],
      100: [],
    },
  };

  let models = {
    x: dataObj.nodes["750:7640"].document.children[4].absoluteBoundingBox.x,
    y: dataObj.nodes["750:7640"].document.children[4].absoluteBoundingBox.y,
    children: dataObj.nodes["750:7640"].document.children[4].children,
    dots: {
      40: [],
      60: [],
      100: [],
    },
  };

  data.children.forEach((point) => {
    let opacity = point.name.split("_")[0];
    let index = point.name.split("_")[1];
    let x = point.absoluteBoundingBox.x - data.x;
    let y = point.absoluteBoundingBox.y - data.y;

    data.dots[opacity].unshift({
      x: Math.floor(x),
      y: Math.floor(y),
      name: index,
    });
  });

  research.children.forEach((point) => {
    let opacity = point.name.split("_")[0];
    let index = point.name.split("_")[1];
    let x = point.absoluteBoundingBox.x - research.x;
    let y = point.absoluteBoundingBox.y - research.y;

    research.dots[opacity].unshift({
      x: Math.floor(x),
      y: Math.floor(y),
      name: index,
    });
  });

  models.children.forEach((point) => {
    let opacity = point.name.split("_")[0];
    let index = point.name.split("_")[1];
    let x = point.absoluteBoundingBox.x - models.x;
    let y = point.absoluteBoundingBox.y - models.y;

    models.dots[opacity].unshift({
      x: Math.floor(x),
      y: Math.floor(y),
      name: index,
    });
  });

  return {
    data: data,
    research: research,
    models: models,
  };
}

// get number between min and max
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function easing(t, alpha) {
  var sqr = Math.pow(t, alpha);
  var sqrminus = Math.pow(1 - t, alpha);
  return sqr / (sqr + sqrminus) / 0.5;
}

function DotAnimation() {
  // Accounts for the difference in the size of the dot in figma and the actual image size
  const X_OFFSET = -30;
  const Y_OFFSET = -40;

  // for lining up the location of the background gradient dot
  const BACKGROUND_DOT_OFFSET = 400;
  const BACKGROUND_DOT_CENTER_X = 1085;
  const BACKGROUND_DOT_CENTER_Y = 440;

  // for locating background dots
  const BACKGROUND_DOT_SIZE_HALVED = 653;

  // variables for displaying lines
  const LINE_OPACITY_40 = 0.25;
  const LINE_OPACITY_60 = 0.35;
  const LINE_OPACITY_100 = 0.5;

  const LINE_DENSITY_60_RESEARCH = 3;
  const LINE_DENSITY_100_RESEARCH = 4;

  const NUM_CLUSTERS = 7;
  const NUM_VERTICES_PER_CLUSTER = 4;

  const LINE_ANIMATION_RATE = 2;

  // varables for the random drifting
  const DRIFT_FLOOR = 1;
  const DRIFT_AMP = 7;
  const DRIFT_VAR_M = 3;
  const DRIFT_VAR_N = 5;
  const DRIFT_VAR_O = 7;

  // Size of the drawing in Figma
  const FIGMA_WIDTH = 1512;
  const FIGMA_HEIGHT = 800;

  const NUM_PHASES = 6;

  // Frames per phase
  const DRIFT_FRAMES = 340;
  const MOBILE_DRIFT_FRAMES = 200;
  const TRANSITION_FRAMES = 80;

  // strings for phases
  const DATA_STRING = "Reliable Data";
  const RESEARCH_STRING = "Crowdsourced Insights";
  const MODELS_STRING = "Battle-Tested Models";

  // number of frames between letters removed when string is animating
  const STRING_ADD_RATE = 4;
  const STRING_REMOVE_RATE = 3;

  // ALPHA changes the intensity of the easing animation function
  const ALPHA = 1;

  // check for mobile
  var isMobile = false;
  //   if (
  //     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  //       navigator.userAgent
  //     )
  //   ) {
  //     isMobile = true;
  //   }

  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);
  const textRef = useRef(null);

  // I think this is a bad way of defining the variables I'll use but idk
  var context;
  var canvasWidth;
  var canvasHeight;
  var widthRatio;
  var heightRatio;
  var waitFrames;
  var frames;
  var currentFrame;
  var imgMultiplier;
  var phase;
  var currentString = DATA_STRING;
  var fimgaData;
  var data;
  var research;
  var models;
  var numDotsPerGroup;
  var dots;
  var numDots;
  var clusterModulo;
  var verticesPerClusterModulo;
  var backgroundDot;
  var largeDot;
  var medDot;
  var smallDot;
  var largeDotOffset;
  var medDotOffset;
  var smallDotOffset;
  var imgsLen;

  var resizing = false;
  var resizeTimer;

  var firstLoad = true;

  // fills out our dot array and calculates the positions at each phase
  function createDots() {
    dots = [];
    widthRatio = canvasWidth / FIGMA_WIDTH;
    heightRatio = canvasHeight / FIGMA_HEIGHT;
    if (isMobile) imgMultiplier = widthRatio;

    var research_X_OFFSET =
      BACKGROUND_DOT_OFFSET / widthRatio - BACKGROUND_DOT_OFFSET;

    for (let i = 0; i < numDotsPerGroup; i++) {
      var dot = {
        p: [
          {},
          {
            x: data.dots["40"][i].x * widthRatio + X_OFFSET,
            y: data.dots["40"][i].y * heightRatio + Y_OFFSET,
          },
          {},
          {
            x: research.dots["40"][i].x * widthRatio + X_OFFSET,
            y: research.dots["40"][i].y * heightRatio + Y_OFFSET,
          },
          {},
          {
            x: models.dots["40"][i].x * widthRatio + X_OFFSET,
            y: models.dots["40"][i].y * heightRatio + Y_OFFSET,
          },
        ],
        size: 40,
        v: [{}, {}, {}, {}, {}, {}],
        c: {},
        m: getRandomArbitrary(1, DRIFT_VAR_M),
        n: getRandomArbitrary(1, DRIFT_VAR_N),
        o: getRandomArbitrary(1, DRIFT_VAR_O),
        s: getRandomArbitrary(DRIFT_FLOOR, DRIFT_AMP - 3),
        q: getRandomArbitrary(0, 2),
      };
      dots.push(dot);
    }

    for (let i = 0; i < numDotsPerGroup; i++) {
      var dot = {
        p: [
          {},
          {
            x: data.dots["60"][i].x * widthRatio + X_OFFSET,
            y: data.dots["60"][i].y * heightRatio + Y_OFFSET,
          },
          {},
          {
            x: research.dots["60"][i].x * widthRatio + X_OFFSET,
            y: research.dots["60"][i].y * heightRatio + Y_OFFSET,
          },
          {},
          {
            x: models.dots["60"][i].x * widthRatio + X_OFFSET,
            y: models.dots["60"][i].y * heightRatio + Y_OFFSET,
          },
        ],
        size: 60,
        v: [{}, {}, {}, {}, {}, {}],
        c: {},
        m: getRandomArbitrary(1, DRIFT_VAR_M),
        n: getRandomArbitrary(1, DRIFT_VAR_N),
        o: getRandomArbitrary(1, DRIFT_VAR_O),
        s: getRandomArbitrary(DRIFT_FLOOR, DRIFT_AMP),
        q: getRandomArbitrary(0, 2),
      };
      dots.push(dot);
    }

    for (let i = 0; i < numDotsPerGroup; i++) {
      var dot = {
        i: i,
        p: [
          {},
          {
            x: data.dots["100"][i].x * widthRatio + X_OFFSET,
            y: data.dots["100"][i].y * heightRatio + Y_OFFSET,
          },
          {},
          {
            x: research.dots["100"][i].x * widthRatio + X_OFFSET,
            y: research.dots["100"][i].y * heightRatio + Y_OFFSET,
          },
          {},
          {
            x: models.dots["100"][i].x * widthRatio + X_OFFSET,
            y: models.dots["100"][i].y * heightRatio + Y_OFFSET,
          },
        ],
        size: 100,
        v: [{}, {}, {}, {}, {}, {}],
        c: {},
        m: getRandomArbitrary(1, DRIFT_VAR_M),
        n: getRandomArbitrary(1, DRIFT_VAR_N),
        o: getRandomArbitrary(1, DRIFT_VAR_O),
        s: getRandomArbitrary(DRIFT_FLOOR, DRIFT_AMP + 3),
        q: getRandomArbitrary(0, 2),
      };
      dots.push(dot);
    }
  }

  // calculate the change in position necesary at each frame to move between points at a set rate
  // we could probably do the easing here and then have the change in position be an array of changes?
  function setPositionAndVelocities(dot) {
    //set position
    dot.c = { x: dot.p[1].x, y: dot.p[1].y };

    //set velocity by phase
    dot.v[1] = {
      x: (dot.p[3].x - dot.p[1].x) / TRANSITION_FRAMES,
      y: (dot.p[3].y - dot.p[1].y) / TRANSITION_FRAMES,
    };
    dot.v[3] = {
      x: (dot.p[5].x - dot.p[3].x) / TRANSITION_FRAMES,
      y: (dot.p[5].y - dot.p[3].y) / TRANSITION_FRAMES,
    };
    dot.v[5] = {
      x: (dot.p[1].x - dot.p[5].x) / TRANSITION_FRAMES,
      y: (dot.p[1].y - dot.p[5].y) / TRANSITION_FRAMES,
    };
  }

  function drawDot(dot, x, y) {
    var img = largeDot;
    var size = largeDot.width * imgMultiplier;

    // change image based off size of dot
    if (dot.size == 40) {
      img = smallDot;
      size = smallDot.width * imgMultiplier;
    } else if (dot.size == 60) {
      img = medDot;
      size = medDot.width * imgMultiplier;
    }

    // if coordinates provided, use, if not use dots current location
    // this is because the drifing animation is based off a single point and does not change the "current location"
    context.drawImage(img, x || dot.c.x, y || dot.c.y, size, size);
  }

  // draw large background dots
  function drawBackground() {
    var backgroundXOffset =
      BACKGROUND_DOT_OFFSET / widthRatio - BACKGROUND_DOT_OFFSET;
    // context.drawImage(
    //   backgroundDot,
    //   -BACKGROUND_DOT_SIZE_HALVED,
    //   -BACKGROUND_DOT_SIZE_HALVED
    // );
    context.drawImage(
      backgroundDot,
      BACKGROUND_DOT_CENTER_X +
        X_OFFSET -
        backgroundXOffset -
        BACKGROUND_DOT_SIZE_HALVED,
      BACKGROUND_DOT_CENTER_Y + Y_OFFSET - BACKGROUND_DOT_SIZE_HALVED
    );
  }

  // function for the drifting
  // gives random orbits shaped like circles or clovers, or stars with n points based off input variables
  function dotDriftPosition(dot) {
    if (!isMobile) {
      var theta = (1 * Math.PI * currentFrame) / waitFrames;

      // change direction of orbit (looks weird when they all go clockwise)
      if (!dot.q) {
        theta = 1 * Math.PI - theta;
      }

      var r =
        dot.s *
        (Math.sin(dot.m * theta) + (1 / dot.n) * Math.sin(theta / dot.o));

      // convert to cartesian coordinates
      var x = r * Math.cos(theta) + dot.c.x;
      var y = r * Math.sin(theta) + dot.c.y;

      return {
        x: x,
        y: y,
      };
    } else {
      return {
        x: dot.c.x,
        y: dot.c.y,
      };
    }
  }

  // set up animation
  function startAnimation() {
    phase = 0;
    currentFrame = 0;
    frames = waitFrames;
    currentString = DATA_STRING;

    // draw large background dots
    drawBackground();

    //for each dot, we calculate the current position, and the velocities for the animation stages and draw
    for (let i = 0; i < numDots; i++) {
      setPositionAndVelocities(dots[i]);
      drawDot(dots[i]);
    }

    //next frame
    // window.requestAnimationFrame(moveDot);

    requestIdRef.current = requestAnimationFrame(moveDot);
  }

  // For the research phase
  function drawLinesFromSinglePoint(opacity, dotsAreAlreadyConnected) {
    // getting the min here lets us animate the line in by connecting a new dot every LINE_ANIMATION_RATE frames
    let min = Math.min(numDotsPerGroup, currentFrame / LINE_ANIMATION_RATE);
    if (dotsAreAlreadyConnected == true) min = numDotsPerGroup;

    var research_X_OFFSET =
      BACKGROUND_DOT_OFFSET / widthRatio - BACKGROUND_DOT_OFFSET;
    var center_x = BACKGROUND_DOT_CENTER_X + X_OFFSET - research_X_OFFSET;
    var center_y = BACKGROUND_DOT_CENTER_Y + Y_OFFSET;

    // lines for the foreground dots only.  Opacity is lower because it was distracting otherwise
    context.strokeStyle =
      "rgba(0, 195, 137, " + LINE_OPACITY_60 * opacity + ")";
    for (let i = 0; i < min; i++) {
      if (i % LINE_DENSITY_100_RESEARCH == 0) {
        context.beginPath();
        context.moveTo(center_x, center_y);
        var position = dotDriftPosition(dots[(2 * numDots) / 3 + i]);
        context.lineTo(
          position.x + largeDotOffset,
          position.y + largeDotOffset
        );
        context.stroke();
      }
    }
    context.stroke();
  }

  // connects the dots in clusters of 5, with a central dot connected to the other 4
  function connectTheDotsInClusters(opacity, dotsAreAlreadyConnected) {
    // getting the min here lets us animate the line in by connecting a new dot every LINE_ANIMATION_RATE frames
    let min = Math.min(numDotsPerGroup, currentFrame / LINE_ANIMATION_RATE);
    if (dotsAreAlreadyConnected == true) min = numDotsPerGroup;

    // lines for the foreground dots only
    context.strokeStyle =
      "rgba(0, 195, 137, " + LINE_OPACITY_100 * opacity + ")";
    var center = {};
    context.beginPath();
    for (let i = 0; i < min; i++) {
      var position = dotDriftPosition(dots[2 * numDotsPerGroup + i]);
      if (i % clusterModulo == 0) {
        center = {
          x: position.x + largeDotOffset,
          y: position.y + largeDotOffset,
        };
      } else if ((i % clusterModulo) % verticesPerClusterModulo == 1) {
        context.moveTo(center.x, center.y);
        context.lineTo(
          position.x + largeDotOffset,
          position.y + largeDotOffset
        );
      }
    }
    context.stroke();
  }

  // connects a new dot each frame for each group, creating a line graph
  function connectDotsInSingleLine(opacity, dotsAreAlreadyConnected) {
    if (!opacity) opacity = 0;

    // getting the min here lets us animate the line in by connecting a new dot every frame
    let min = Math.min(numDotsPerGroup, currentFrame);
    if (dotsAreAlreadyConnected == true) min = numDotsPerGroup;

    // lines for background dots
    context.strokeStyle =
      "rgba(0, 195, 137, " + LINE_OPACITY_40 * opacity + ")";
    context.beginPath();
    for (let i = 0; i < min; i++) {
      var position = dotDriftPosition(dots[numDotsPerGroup - i - 1]);
      context.lineTo(position.x + smallDotOffset, position.y + smallDotOffset);
    }
    context.stroke();

    // lines for midground dots
    context.strokeStyle =
      "rgba(0, 195, 137, " + LINE_OPACITY_60 * opacity + ")";
    context.beginPath();
    for (let i = 0; i < min; i++) {
      var position = dotDriftPosition(dots[2 * numDotsPerGroup - i - 1]);
      context.lineTo(position.x + medDotOffset, position.y + medDotOffset);
    }
    context.stroke();

    // lines for foreground dots
    context.strokeStyle =
      "rgba(0, 195, 137, " + LINE_OPACITY_100 * opacity + ")";
    context.beginPath();
    for (let i = 0; i < min; i++) {
      var position = dotDriftPosition(dots[3 * numDotsPerGroup - i - 1]);
      context.lineTo(position.x + largeDotOffset, position.y + largeDotOffset);
    }
    context.stroke();
  }

  // moveDot draws the next frame of the animation
  function moveDot() {
    canvasWidth = canvasRef.current.offsetWidth;
    canvasHeight = canvasRef.current.offsetHeight;

    context.canvas.width = canvasWidth;
    context.canvas.height = canvasHeight;

    if (canvasWidth < 1100) {
      isMobile = true;
    } else {
      isMobile = false;
    }

    //For resizing dot position
    widthRatio = canvasWidth / FIGMA_WIDTH;
    heightRatio = canvasHeight / FIGMA_HEIGHT;

    // Clear the canvas so we can draw on it again.
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    if (!resizing) {
      drawBackground();

      // first we draw lines so they are behind the dots
      if (phase % NUM_PHASES == 2) {
        // in the second phase we connect the dots in clusters to represetn "research"
        connectTheDotsInClusters(1, false);
        // drawLinesFromSinglePoint(1, false);
      } else if (phase % NUM_PHASES == 3) {
        // in the third phase we phade out connected dots
        connectTheDotsInClusters(
          (TRANSITION_FRAMES - currentFrame) / TRANSITION_FRAMES,
          true
        );
        // drawLinesFromSinglePoint((TRANSITION_FRAMES - currentFrame) / TRANSITION_FRAMES, true);
      } else if (phase % NUM_PHASES == 4) {
        // in the fourth phase we animate in the line graph
        connectDotsInSingleLine(1, false);
      } else if (phase % NUM_PHASES == 5) {
        // in phase 5 we fade out the remaining lines
        connectDotsInSingleLine(
          (TRANSITION_FRAMES - currentFrame) / TRANSITION_FRAMES,
          true
        );
      }

      // now we draw each dot
      // if we are in an animation phase we calcualte the easing variable and multiply it by the "velocity"
      // theres probably a more efficient way of calculating these positions at the start and not having to do it each cycle
      if (
        phase % NUM_PHASES == 1 ||
        phase % NUM_PHASES == 3 ||
        phase % NUM_PHASES == 5
      ) {
        var time = currentFrame / frames;
        var e = easing(time, ALPHA);
        // fixes weird error when e == 0
        if (e < 0.005) e = 0.005;
        // for each dot we add the "velocity" or change in position, then draw the dot
        for (let i = 0; i < numDots; i++) {
          dots[i].c.x += dots[i].v[phase % NUM_PHASES].x * e;
          dots[i].c.y += dots[i].v[phase % NUM_PHASES].y * e;

          drawDot(dots[i]);
        }
      } else {
        // if in a waiting phase, we draw the dot based off its formula for random motion
        // theres probably a more efficient way of calculating these positions at the start and not having to do it each cycle
        for (let i = 0; i < numDots; i++) {
          var position = dotDriftPosition(dots[i]);
          drawDot(dots[i], position.x, position.y);
        }
      }

      // Move the current time forward by one frame.
      currentFrame += 1;

      // If we've reached our maximum number of frames, jump to next phase and wait.
      if (currentFrame == frames) {
        currentFrame = 0;
        firstLoad = false;
        phase += 1;

        // change string base off phase
        if (phase % NUM_PHASES == 1) {
          currentString = RESEARCH_STRING;
          frames = TRANSITION_FRAMES;
        } else if (phase % NUM_PHASES == 3) {
          currentString = MODELS_STRING;
          frames = TRANSITION_FRAMES;
        } else if (phase % NUM_PHASES == 5) {
          currentString = DATA_STRING;
          frames = TRANSITION_FRAMES;
        } else {
          frames = waitFrames;
        }
      }

      // string length is based off the number of frames in a phase
      // if the wait phase is coming to an end, the every other frame will result in a letter being removed
      var displayLen;
      if (
        phase % NUM_PHASES == 0 ||
        phase % NUM_PHASES == 2 ||
        phase % NUM_PHASES == 4
      ) {
        if (firstLoad && currentFrame < waitFrames / 2) {
          displayLen = currentFrame / STRING_ADD_RATE;
        } else {
          displayLen = waitFrames / STRING_REMOVE_RATE - currentFrame / STRING_REMOVE_RATE;
        }
      } else {
        displayLen = currentFrame / STRING_ADD_RATE;
      }

      textRef.current.innerHTML = currentString.slice(0, displayLen) + ((currentFrame%60 < 30)  || (displayLen < currentString.length) ? '|' : '');

      //next frame
      //   window.requestAnimationFrame(moveDot);

      requestIdRef.current = requestAnimationFrame(moveDot);
    } else {
      // reset our variables on resizing and restart the animation
      canvasWidth = canvasRef.current.offsetWidth;
      canvasHeight = canvasRef.current.offsetHeight;

      context.canvas.width = canvasWidth;
      context.canvas.height = canvasHeight;

      if (isMobile) imgMultiplier = canvasWidth / FIGMA_WIDTH;
      largeDotOffset = (largeDot.width / 2) * imgMultiplier;
      medDotOffset = (medDot.width / 2) * imgMultiplier;
      smallDotOffset = (smallDot.width / 2) * imgMultiplier;
      resizing = false;
      createDots();
      startAnimation();
    }
  }

  useEffect(() => {
    // Setup the canvas element.
    // var canvas = $("canvas.dots"); CANVAS REF
    // var text = $("#changeText");
    context = canvasRef.current.getContext("2d");

    canvasWidth = canvasRef.current.offsetWidth;
    canvasHeight = canvasRef.current.offsetHeight;

    context.canvas.width = canvasWidth;
    context.canvas.height = canvasHeight;

    // canvas.attr({ height: canvasHeight, width: canvasWidth });
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    //For resizing dot position
    widthRatio = canvasWidth / FIGMA_WIDTH;
    heightRatio = canvasHeight / FIGMA_HEIGHT;

    // currentFrame tracks the frame rate in any given stage
    // initialize frames
    waitFrames = DRIFT_FRAMES;
    if (isMobile) waitFrames = MOBILE_DRIFT_FRAMES;
    frames = waitFrames;
    currentFrame = 0;

    imgMultiplier = 1;

    // phases are as follows:
    // 0: data, dots drifting
    // 1: animating from data to research
    // 2: research, drifting dots are connected in clusters of 5
    // 3: animating from research to models
    // 4: models, drifting, all dots are connected
    // 5: animating from models to data
    phase = 0;

    // Init String
    currentString = DATA_STRING;

    // convert figma data to readable objects
    fimgaData = getData(figma3);
    data = fimgaData.data;
    research = fimgaData.research;
    models = fimgaData.models;

    //set up our array of dots
    numDotsPerGroup = data.dots["40"].length;
    dots = [];
    createDots();
    numDots = dots.length;

    // For Modulo Stuff for line clustering animations etc.
    clusterModulo = Math.floor(numDotsPerGroup / (NUM_CLUSTERS - 1));
    verticesPerClusterModulo = Math.floor(
      clusterModulo / NUM_VERTICES_PER_CLUSTER
    );

    // resizing the canvas has some weird issues when trying to cancel
    // the animation at each resize event
    // so we have a short timer to approximate the "end" of the event and
    // then restart the animation with the new dimensions
    resizing = false;

    window.addEventListener("resize", onResize, true);

    function onResize(event) {
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeDone, 100);
    }

    function resizeDone() {
      resizing = true;
    }

    // Load in our images
    var imgs = [];
    var numLoaded = 0;

    // big background image
    backgroundDot = new Image();
    backgroundDot.src = "../assets/gradient2.png";
    imgs.push(backgroundDot);

    //foreground large dot 100% opacity
    largeDot = new Image();
    largeDot.src = "../assets/100.png";
    largeDotOffset = 0;
    imgs.push(largeDot);

    // midground med dot 60% opacity
    medDot = new Image();
    medDot.src = "../assets/60.png";
    medDotOffset = 0;
    imgs.push(medDot);

    // background small dot 40% opacity
    smallDot = new Image();
    smallDot.src = "../assets/40.png";
    smallDotOffset = 0;
    imgs.push(smallDot);

    // once images are all loaded, we start animating
    imgsLen = imgs.length;
    for (let i = 0; i < imgsLen; i++) {
      imgs[i].onload = function (i) {
        numLoaded++;
        if (numLoaded == imgsLen) {
          largeDotOffset = (largeDot.width / 2) * imgMultiplier;
          medDotOffset = (medDot.width / 2) * imgMultiplier;
          smallDotOffset = (smallDot.width / 2) * imgMultiplier;
          startAnimation();
        }
      };
    }

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(requestIdRef.current);
    };
  }, []);

  return (
    <div>
      <div className="canvasContainer" ref={containerRef}>
        <canvas
          className="dots"
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
        />

        <Nav />
        <h1 className="text px-4 text-white text-5xl md:text-7xl md:pt-20 pt-12 max-w-6xl block mx-auto">
          <span className="text-green text-5xl md:text-7xl" ref={textRef}>
            Reliable Data
          </span>
          <br />
          By the Community,
          <br />
          For Everyone
        </h1>
        <div className="max-w-6xl block mx-auto px-4 relative">
          <div className="flex flex-wrap pb-52 pt-6">
            <a
              href="https://app.credmark.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="mt-5 inline-flex items-center px-8 py-3 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green hover:bg-white bor"
              >
                <p className="flex text-credmarkpurple text-sm py-0 leading-4">
                  Get Started
                </p>
              </button>
            </a>
            <a
              href="https://docs.credmark.com/credmark/"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="mt-5 inline-flex items-center mx-2 px-8 py-2.5 shadow-sm text-d font-medium rounded-md text-white hover:text-green border-2 border-solid border-white hover:border-green"
              >
                <p className="flex text-sm py-0 leading-4">
                  White Paper 
                </p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DotAnimation;

<button
  type="button"
  className="mt-5 inline-flex items-center px-8 py-3 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green"
>
  <p className="flex text-credmarkpurple text-sm py-0 leading-4">
    Learn More
    <img
      width={16}
      className="float-right ml-1"
      alt="arrow right"
      src="../assets/arrow_purple.svg"
    />
  </p>
</button>;
