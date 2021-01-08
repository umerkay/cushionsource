const colors = [
  {
    texture: "img/patterns/wood_.jpg",
    size: [2, 2, 2],
    shininess: 60,
    cost: 0.2,
  },

  {
    texture: "img/patterns/fabric_.jpg",
    size: [4, 4, 4],
    shininess: 0,
    cost: 0.2,
  },

  {
    texture: "img/patterns/pattern_.jpg",
    size: [8, 8, 8],
    shininess: 10,
    cost: 0.2,
  },

  {
    texture: "img/patterns/denim_.jpg",
    size: [3, 3, 3],
    shininess: 0,
    cost: 0.2,
  },

  {
    texture: "img/patterns/quilt_.jpg",
    size: [6, 6, 6],
    shininess: 0,
    cost: 0.2,
  },
  {
    texture: "img/patterns/teal.jpg",
    size: [6, 6, 6],
    shininess: 0,
    cost: 0.5,
  },
  {
    texture: "img/patterns/swirl.jpg",
    size: [6, 6, 6],
    shininess: 0,
    cost: 0.5,
  },
  {
    texture: "img/patterns/staur.jpg",
    size: [6, 6, 6],
    shininess: 0,
    cost: 0.5,
  },

  {
    color: "131417",
  },

  {
    color: "374047",
  },

  {
    color: "5f6e78",
  },

  {
    color: "7f8a93",
  },

  {
    color: "97a1a7",
  },

  {
    color: "acb4b9",
  },

  {
    color: "DF9998",
  },

  {
    color: "7C6862",
  },

  {
    color: "A3AB84",
  },

  {
    color: "D6CCB1",
  },

  {
    color: "F8D5C4",
  },

  {
    color: "A3AE99",
  },

  {
    color: "EFF2F2",
  },

  {
    color: "B0C5C1",
  },

  {
    color: "8B8C8C",
  },

  {
    color: "565F59",
  },

  {
    color: "CB304A",
  },

  {
    color: "FED7C8",
  },

  {
    color: "C7BDBD",
  },

  {
    color: "3DCBBE",
  },

  {
    color: "264B4F",
  },

  {
    color: "389389",
  },

  {
    color: "85BEAE",
  },

  {
    color: "F2DABA",
  },

  {
    color: "F2A97F",
  },

  {
    color: "D85F52",
  },

  {
    color: "D92E37",
  },

  {
    color: "FC9736",
  },

  {
    color: "F7BD69",
  },

  {
    color: "A4D09C",
  },

  {
    color: "4C8A67",
  },

  {
    color: "25608A",
  },

  {
    color: "75C8C6",
  },

  {
    color: "F5E4B7",
  },

  {
    color: "E69041",
  },

  {
    color: "E56013",
  },

  {
    color: "11101D",
  },

  {
    color: "630609",
  },

  {
    color: "C9240E",
  },

  {
    color: "EC4B17",
  },

  {
    color: "281A1C",
  },

  {
    color: "4F556F",
  },

  {
    color: "64739B",
  },

  {
    color: "CDBAC7",
  },

  {
    color: "946F43",
  },

  {
    color: "66533C",
  },

  {
    color: "173A2F",
  },

  {
    color: "153944",
  },

  {
    color: "27548D",
  },

  {
    color: "438AAC",
  },
];

const INITIAL_MTL = new THREE.MeshPhongMaterial({
  color: 0xf1f1f1,
  shininess: 10,
});

const INITIAL_MTL_BLACK = new THREE.MeshPhongMaterial({
  color: 0x000000,
  shininess: 10,
});

const items = [
  // {
  //   id: "chair",
  //   name: "Chair",
  //   hasWelting: false,
  //   hasResize: false,
  //   activeOption: "backrest",
  //   childList: [
  //     { childID: "Mesh_0", mtl: INITIAL_MTL_BLACK, editable: false },
  //     { childID: "backrest" },
  //     {
  //       childID: "legs",
  //       mtl: INITIAL_MTL_BLACK,
  //       editable: false,
  //     },
  //     { childID: "seat" },
  //   ],
  // },
  // {
  //   id: "pillowcomplete",
  //   name: "Pillow",
  //   hasWelting: true,
  //   hasResize: false,
  //   activeOption: "pillow",
  //   mtlDependants: ["tie1", "tie2", "tie3", "tie4"],
  //   childList: [
  //     {
  //       childID: "tie1",
  //       editable: false,
  //       visible: false,
  //     },
  //     {
  //       childID: "tie2",
  //       editable: false,
  //       visible: false,
  //     },
  //     {
  //       childID: "tie3",
  //       editable: false,
  //       visible: false,
  //     },
  //     {
  //       childID: "tie4",
  //       editable: false,
  //       visible: false,
  //     },
  //     { childID: "pillow", editable: true, visible: true },
  //     { childID: "welting", editable: true, visible: false },
  //   ],
  // },
  {
    name: "--- PILLOWS ---",
  },
  {
    id: "fixed/pillowThrow",
    name: "Throw Pillow",
    scale: 2,
    activeOption: "front",
    frontOption: "front",
    backOption: "back",
    weltOption: "welting",
    childList: [
      { childID: "pillow", editable: true, visible: true },
      { childID: "welting", editable: true, visible: true },
    ],
  },
  {
    id: "pillowThrowBoxed",
    name: "Throw Pillow (Boxed)",
    scale: 2,
    activeOption: "pillow",
    frontOption: "pillow",
    // backOption: "back",
    weltOption: "welting",
    childList: [
      { childID: "pillow", editable: true, visible: true },
      { childID: "welting", editable: true, visible: true },
    ],
  },
  {
    id: "fixed/pillowThrowFlang",
    name: "Throw Pillow with Flange",
    scale: 1,
    activeOption: "front",
    frontOption: "front",
    backOption: "back",
    weltOption: "flang",
    childList: [
      { childID: "pillow", editable: true, visible: true },
      { childID: "flang", editable: true, visible: true },
    ],
  },
  {
    id: "fixed/pillowLumbarFlang",
    name: "Lumbar Pillow with Flange",
    scale: 2,
    activeOption: "front",
    frontOption: "front",
    backOption: "back",
    weltOption: "flang",
    childList: [
      { childID: "pillow", editable: true, visible: true },
      { childID: "flang", editable: true, visible: true },
    ],
  },
  {
    id: "fixed/pillowLumbar",
    name: "Lumbar Pillow",
    scale: 2,
    activeOption: "front",
    frontOption: "front",
    backOption: "back",
    weltOption: "welting",
    childList: [
      { childID: "pillow", editable: true, visible: true },
      { childID: "welting", editable: true, visible: true },
    ],
  },
  {
    id: "fixed/pillowLumbarBoxed",
    name: "Lumbar Pillow (Boxed)",
    scale: 2,
    activeOption: "front",
    frontOption: "front",
    sideOption: "side",
    backOption: "back",
    weltOption: "welting",
    childList: [
      { childID: "pillow", editable: true, visible: true },
      { childID: "welting", editable: true, visible: true },
    ],
  },
  {
    id: "fixed/pillowThrowBoxedCircular",
    name: "Circular Throw Pillow (Boxed)",
    scale: 0.05,
    activeOption: "front",
    frontOption: "front",
    sideOption: "side",
    backOption: "back",
    weltOption: "welting",
    childList: [
      { childID: "pillow", editable: true, visible: true },
      { childID: "welting", editable: true, visible: true },
    ],
  },
  {
    id: "fixed/pillowBolster",
    name: "Bolster Pillow",
    scale: 3,
    view: "front",
    activeOption: "pillow",
    frontOption: "pillow",
    backOption: "end",
    weltOption: "welting",
    childList: [
      { childID: "pillow", editable: true, visible: true },
      { childID: "welting", editable: true, visible: true },
    ],
  },
  {
    name: "--- CUSHIONS ---",
  },
  {
    id: "cushions/windowSeatCushion",
    name: "Window Seat Cushion",
    scale: 1,
    view: "front",
    activeOption: "cushion",
    frontOption: "cushion",
    weltOption: "welting",
    childList: [
      { childID: "cushion", editable: true, visible: true },
      { childID: "welting", editable: true, visible: true },
    ],
  },
  {
    id: "cushions/sofaCushionSeatSingle",
    name: "Sofa Cushions Seat Single",
    scale: 1,
    view: "front",
    activeOption: "cushion",
    frontOption: "cushion",
    weltOption: "welting",
    childList: [
      { childID: "cushion", editable: true, visible: true },
      { childID: "welting", editable: true, visible: true },
    ],
  },
  {
    id: "cushions/sofaCushionSeatDouble",
    name: "Sofa Cushions Seat Double",
    scale: 1,
    view: "front",
    activeOption: "cushion",
    frontOption: "cushion",
    weltOption: "welting",
    childList: [
      { childID: "cushion", editable: true, visible: true },
      { childID: "welting", editable: true, visible: true },
    ],
  },
  {
    id: "cushions/sofaCushionSeatTriple",
    name: "Sofa Cushions Seat Triple",
    scale: 1,
    view: "front",
    activeOption: "cushion",
    frontOption: "cushion",
    weltOption: "welting",
    childList: [
      { childID: "cushion", editable: true, visible: true },
      { childID: "welting", editable: true, visible: true },
    ],
  },
  {
    id: "cushions/sofaCushionsSetSingle",
    name: "Sofa Cushions Set Single",
    scale: 1,
    view: "front",
    activeOption: "cushion",
    frontOption: "cushion",
    weltOption: "welting",
    childList: [
      { childID: "cushion", editable: true, visible: true },
      { childID: "welting", editable: true, visible: true },
    ],
  },
  {
    id: "cushions/sofaCushionsSetDouble",
    name: "Sofa Cushions Set Double",
    scale: 1,
    view: "front",
    activeOption: "cushion",
    frontOption: "cushion",
    weltOption: "welting",
    childList: [
      { childID: "cushion", editable: true, visible: true },
      { childID: "welting", editable: true, visible: true },
    ],
  },
  {
    id: "cushions/sofaCushionsSetTriple",
    name: "Sofa Cushions Set Triple",
    scale: 1,
    view: "front",
    activeOption: "cushion",
    frontOption: "cushion",
    weltOption: "welting",
    childList: [
      { childID: "cushion", editable: true, visible: true },
      { childID: "welting", editable: true, visible: true },
    ],
  },
  {
    id: "cushions/frenchCushion",
    name: "French Cushion",
    scale: 1,
    view: "front",
    activeOption: "cushion",
    frontOption: "cushion",
    weltOption: "welting",
    childList: [
      { childID: "cushion", editable: true, visible: true },
      { childID: "welting", editable: true, visible: true },
    ],
  },
  {
    id: "cushions/customSeatCushionSquared",
    name: "Custom Cushion Seat Squared",
    scale: 1,
    view: "front",
    activeOption: "cushion",
    frontOption: "cushion",
    weltOption: "welting",
    childList: [
      { childID: "cushion", editable: true, visible: true },
      { childID: "welting", editable: true, visible: true },
    ],
  },
  {
    id: "cushions/customSeatCushionCircular",
    name: "Custom Cushion Sear Circular",
    scale: 0.05,
    view: "front",
    activeOption: "cushion",
    frontOption: "cushion",
    weltOption: "welting",
    childList: [
      { childID: "cushion", editable: true, visible: true },
      { childID: "welting", editable: true, visible: true },
    ],
  },
];

let sample = {
  id: "pillowBolster",
  name: "Bolster Pillow",
  hasFlang: false,
  //render details
  scale: 3,
  view: "front",
  //feature details
  customisations: [
    {
      name: "Fabric",
      options: ["pillow", "end"],
    },
    // { name: "Welting", childName: "flang" },
    // {
    //   name: "Fill",
    //   options: ["Dacron", "Down", "Down Alternative", "Outdoor Fill"],
    // },
    // {
    //   name: "Dimensions",
    //   options: ["diameter", "length"],
    // },
  ],
  //initial child list
  childList: [
    { childID: "pillow", visible: true },
    { childID: "welting", visible: true },
  ],
};

function buildItems(items) {
  items.forEach((item, i) => {
    let itemCont = document.createElement("button");
    itemCont.classList.add("form-control", "divbox1", "smol");
    let itemEl = document.createElement("a");
    // let itemImg = document.createElement("img");
    // itemImg.src = "icons/" + item.id + ".jpg";
    // itemCont.appendChild(itemImg);
    itemCont.appendChild(itemEl);

    if (item.id) {
      itemEl.innerHTML = `<span class="glyphicon glyphicon-th"></span>&nbsp<a href="customise.html#${i}">${item.name}</a>`;
      itemCont.addEventListener("click", (e) => {
        window.location = "customise.html#" + i;
        window.location.reload();
      });
    } else {
      itemEl.innerHTML = `&nbsp<a">${item.name}</a>`;
    }

    document.getElementById("inventory").appendChild(itemCont);
  });
}
