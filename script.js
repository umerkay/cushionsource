const LOADER = document.getElementById("js-loader");

const TRAY = document.getElementById("fabric-modal-content");
const DRAG_NOTICE = document.getElementById("js-drag-notice");

var theModel;

var hash = new URL(document.URL).hash;
var item = items[hash.slice(1)];
const MODEL_PATH = "models/" + (item.id + ".glb" || "pillow.glb");

var activeOption = item.activeOption || "seat";
var loaded = false;

const BACKGROUND_COLOR = 0xffffff;
// const BACKGROUND_COLOR = 0xf1f1f1;
// Init the scene
const scene = new THREE.Scene();
// Set background
scene.background = new THREE.Color(BACKGROUND_COLOR);
scene.fog = new THREE.Fog(BACKGROUND_COLOR, 20, 100);

const canvas = document.querySelector("#c");

// Init the renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

renderer.shadowMap.enabled = true;
renderer.setPixelRatio(window.devicePixelRatio);

var cameraFar = 5;

document.body.appendChild(renderer.domElement);

// Add a camerra
var camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = cameraFar;
camera.position.x = 0;
camera.position.y = -1;

// Initial material
const INITIAL_MTL = new THREE.MeshPhongMaterial({
  color: 0xf1f100,
  shininess: 10,
});

// const INITIAL_MAP = [
//   { childID: "Mesh_0", mtl: INITIAL_MTL },
//   { childID: "back", mtl: INITIAL_MTL },
//   { childID: "base", mtl: INITIAL_MTL },
//   { childID: "cushions", mtl: INITIAL_MTL },
//   { childID: "legs", mtl: INITIAL_MTL },
//   { childID: "supports", mtl: INITIAL_MTL },
// ];

// Init the object loader
var loader = new THREE.GLTFLoader();

loader.load(
  MODEL_PATH,
  function (gltf) {
    theModel = gltf.scene;

    theModel.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });

    // Set the models initial scale
    theModel.scale.set(1, 1, 1);
    // theModel.rotation.y = Math.PI;
    // theModel.position.y = 1;

    // Offset the y position a bit
    theModel.position.y = -1;

    let childDict = {};
    // Set initial textures
    for (let object of item.childList) {
      initColor(
        theModel,
        object.childID,
        object.mtl ? object.mtl : INITIAL_MTL
      );
      childDict[object.childID] = object;
    }

    buildChildren(item);
    item.mtlDependants = item.mtlDependants || [];

    // Add the model to the scene
    theModel.traverse(function (child) {
      if (childDict[child.name]?.visible === false) {
        child.visible = false;
      }
    });
    scene.add(theModel);
    scale = item.scale || 1;
    theModel.scale.set(scale, scale, scale);
    setAnimation(ViewAngles[item.view || "top"], 60, false);
    document.getElementById("selectView").value = item.view || "top";

    // Remove the loader
    LOADER.remove();
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

function toggleChild(childID, toggle = false) {
  if (childID instanceof Array) {
    childID.forEach((_childID) =>
      theModel.traverse((child) => {
        if (child.name === _childID) {
          child.visible = toggle;
        }
      })
    );
  } else {
    theModel.traverse((child) => {
      if (child.name === childID) {
        child.visible = toggle;
      }
    });
  }
}

// Function - Add the textures to the models
function initColor(parent, type, mtl) {
  parent.traverse((o) => {
    if (o.isMesh) {
      if (o.name.includes(type)) {
        o.material = mtl;
        o.nameID = type; // Set a new property to identify this object
      }
    }
  });
}

// Add lights
var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
hemiLight.position.set(50, 50, 0);
// Add hemisphere light to scene
scene.add(hemiLight);

var dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
dirLight.position.set(-8, 0, 8);
dirLight.castShadow = true;
dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
// Add directional Light to scene
scene.add(dirLight);

// Floor
var floorGeometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
var floorMaterial = new THREE.MeshPhongMaterial({
  color: 0xeeeeee,
  shininess: 0,
});

var floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -0.5 * Math.PI;
floor.receiveShadow = true;
floor.position.y = -2;
// scene.add(floor);

// Add controls
// var controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.maxPolarAngle = Math.PI / 2;
// controls.minPolarAngle = Math.PI / 3;
// controls.enableDamping = true;
// controls.enablePan = false;
// controls.dampingFactor = 0.1;
// controls.autoRotate = false; // Toggle this if you'd like the chair to automatically rotate
// controls.autoRotateSpeed = 0.2; // 30

function animate() {
  // controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  if (theModel != null) {
    if (animRotate.active) {
      theModel.rotateX(animRotate.angle[0] / animRotate.frames);
      theModel.rotateY(animRotate.angle[1] / animRotate.frames);
      theModel.rotateZ(animRotate.angle[2] / animRotate.frames);

      animRotate.frames0++;
      if (animRotate.frames0 >= animRotate.frames) {
        animRotate.active = false;
      }
    }
  }
}

const ViewAngles = {
  top: [Math.PI / 2, 0, 0],
  front: [0, 2 * Math.PI, 0],
  left: [0, Math.PI / 2, 0],
  right: [0, -Math.PI / 2, 0],
  bottom: [-Math.PI / 2, 0, 0],
  perspective: [Math.PI / 8, -Math.PI / 8, 0],
};

let animRotate = {
  active: false,
  angle: [0, 0, 0],
  frames: 60,
  frames0: 0,
};

function setAnimation(angles, frames = 120, add = true) {
  theModel.rotation.x = 0;
  theModel.rotation.y = 0;
  theModel.rotation.z = 0;
  if (typeof angles === "string") {
    angles = ViewAngles[angles];
  }
  calcedAngles = [...angles];
  if (add != true) {
    calcedAngles[0] -= theModel.rotation.x;
    calcedAngles[1] -= theModel.rotation.y;
    calcedAngles[2] -= theModel.rotation.z;
  }
  console.log(calcedAngles);
  animRotate = {
    active: true,
    angle: calcedAngles,
    frames,
    frames0: 0,
  };
}

const rotation = (e) => {
  theModel.rotation.y = e.target.value;
};
// document.querySelector("#rotation").addEventListener("input", rotation);

animate();

// Function - New resizing method
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  var width = window.innerWidth;
  var height = window.innerHeight;
  var canvasPixelWidth = canvas.width / window.devicePixelRatio;
  var canvasPixelHeight = canvas.height / window.devicePixelRatio;

  const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

//Function - Build Children

function buildChildren(item) {
  item.childList.forEach((child) => {
    if (child.editable != false) {
      childOpt = document.createElement("option");
      childOpt.innerHTML = child.childID;
      childOpt.value = child.childID;
      document.getElementById("children").appendChild(childOpt);
    }
  });
  document.getElementById("children").addEventListener("input", (e) => {
    activeOption = e.target.value;
  });
}

// Function - Build Colors

function buildColors(colors) {
  for (let [i, color] of colors.entries()) {
    let swatch = document.createElement("div");
    swatch.classList.add("tray__swatch");

    if (color.texture) {
      swatch.style.backgroundImage = "url(" + color.texture + ")";
    } else {
      swatch.style.background = "#" + color.color;
    }

    swatch.setAttribute("data-key", i);
    TRAY.append(swatch);
  }
}

buildColors(colors);

// Select Option
const options = document.querySelectorAll(".option");

for (const option of options) {
  option.addEventListener("click", selectOption);
}

function selectOption(e) {
  let option = e.target;
  activeOption = e.target.dataset.option;
  for (const otherOption of options) {
    otherOption.classList.remove("--is-active");
  }
  option.classList.add("--is-active");
}

// Swatches
const swatches = document.querySelectorAll(".tray__swatch");

for (const swatch of swatches) {
  swatch.addEventListener("click", selectSwatch);
}

let _selectedSwatchMain = "FFFFFF";
let activeParam;

function selectSwatch(e) {
  let color = e ? colors[parseInt(e.target.dataset.key)] : _selectedSwatchMain;
  if (activeParam === "frontOption") _selectedSwatchMain = color;
  let new_mtl;

  if (color.texture) {
    let txt = new THREE.TextureLoader().load(color.texture);

    txt.repeat.set(color.size[0], color.size[1], color.size[2]);
    txt.wrapS = THREE.RepeatWrapping;
    txt.wrapT = THREE.RepeatWrapping;

    new_mtl = new THREE.MeshPhongMaterial({
      map: txt,
      shininess: color.shininess ? color.shininess : 10,
    });
  } else {
    new_mtl = new THREE.MeshPhongMaterial({
      color: parseInt("0x" + color.color),
      shininess: color.shininess ? color.shininess : 10,
    });
  }

  setMaterial(theModel, activeOption, new_mtl);

  const display = document.getElementById(
    "fabricColorDisplay" + (activeParam || "")
  );
  if (display) {
    if (color.texture) {
      display.style.backgroundImage = "url(" + color.texture + ")";
    } else {
      display.style.background = "#" + color.color;
    }
  }

  // if (activeParam === "frontOption" && matchWeltingFabric === true) {
  //   activeOption = "welting";
  //   activeParam = "";
  //   selectSwatch(e);
  //   activeParam = "frontOption";
  //   activeOption = item.activeOption;
  // }

  console.log(activeParam, activeOption);
  if (activeParam === "frontOption" && item.mtlDependants) {
    item.mtlDependants.forEach((dep) => {
      activeOption = dep;
      activeParam = "";
      selectSwatch(e);
      console.log(dep);
    });
    activeOption = item.activeOption;
  }
  activeParam = "";
}

let matchWeltingFabric = false;

function setMaterial(parent, type, mtl) {
  parent.traverse((o) => {
    if (type != null) {
      if (o.name == type) {
        o.material = mtl;
        if (o instanceof THREE.Group) {
          o.children.forEach((child) => (child.material = mtl));
        }
      }
    } else if (item.childList.length <= 1) {
      o.material = mtl;
    }
    // o.material = mtl; //experimental
  });
}

// Function - Opening rotate
let initRotate = 0;

function initialRotation() {
  initRotate++;
  if (initRotate <= 60) {
    theModel.rotation.y += Math.PI / 60;
  } else {
    loaded = true;
  }
}

var slider = document.getElementById("js-tray"),
  sliderItems = document.getElementById("js-tray-slide"),
  difference;

function slide(wrapper, items) {
  var posX1 = 0,
    posX2 = 0,
    posInitial,
    threshold = 20,
    posFinal,
    slides = items.getElementsByClassName("tray__swatch");

  // Mouse events
  items.onmousedown = dragStart;

  // Touch events
  items.addEventListener("touchstart", dragStart);
  items.addEventListener("touchend", dragEnd);
  items.addEventListener("touchmove", dragAction);

  function dragStart(e) {
    e = e || window.event;
    posInitial = items.offsetLeft;
    difference = sliderItems.offsetWidth - slider.offsetWidth;
    difference = difference * -1;

    if (e.type == "touchstart") {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction(e) {
    e = e || window.event;

    if (e.type == "touchmove") {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }

    if (
      items.offsetLeft - posX2 <= 0 &&
      items.offsetLeft - posX2 >= difference
    ) {
      items.style.left = items.offsetLeft - posX2 + "px";
    }
  }

  function dragEnd(e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
    } else if (posFinal - posInitial > threshold) {
    } else {
      items.style.left = posInitial + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// slide(slider, sliderItems);
