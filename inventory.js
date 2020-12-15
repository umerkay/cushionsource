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
  {
    id: "chair",
    name: "Chair",
    hasWelting: false,
    hasResize: false,
    activeOption: "backrest",
    childList: [
      { childID: "Mesh_0", mtl: INITIAL_MTL_BLACK, editable: false },
      { childID: "backrest" },
      {
        childID: "legs",
        mtl: INITIAL_MTL_BLACK,
        editable: false,
      },
      { childID: "seat" },
    ],
  },
  {
    id: "pillowcomplete",
    name: "Pillow",
    hasWelting: true,
    hasResize: false,
    activeOption: "pillow",
    // childList: [],
    childList: [
      { childID: "tie1", mtl: INITIAL_MTL_BLACK, editable: false },
      { childID: "tie2", mtl: INITIAL_MTL_BLACK, editable: false },
      { childID: "tie3", mtl: INITIAL_MTL_BLACK, editable: false },
      { childID: "tie4", mtl: INITIAL_MTL_BLACK, editable: false },
      { childID: "pillow", editable: true, visible: true },
      { childID: "welting", editable: true, visible: false },
    ],
  },
  {
    id: "pillowcomplete",
    name: "Pillow",
    hasWelting: true,
    hasResize: false,
    activeOption: "pillow",
    childList: [
      { childID: "tie1", mtl: INITIAL_MTL_BLACK, editable: false },
      { childID: "tie2", mtl: INITIAL_MTL_BLACK, editable: false },
      { childID: "tie3", mtl: INITIAL_MTL_BLACK, editable: false },
      { childID: "tie4", mtl: INITIAL_MTL_BLACK, editable: false },
      { childID: "pillow", editable: true, visible: true },
      { childID: "welting", editable: true, visible: false },
    ],
  },
];

function buildItems(items) {
  items.forEach((item, i) => {
    let itemCont = document.createElement("button");
    itemCont.classList.add("form-control", "divbox1");
    let itemEl = document.createElement("a");
    // let itemImg = document.createElement("img");
    // itemImg.src = "icons/" + item.id + ".jpg";
    // itemCont.appendChild(itemImg);
    itemCont.appendChild(itemEl);

    itemEl.innerHTML = `<span class="glyphicon glyphicon-th"></span>&nbsp<a href="customise.html#${i}">${item.name}</a>`;
    itemCont.addEventListener("click", (e) => {
      window.location = "customise.html#" + i;
      window.location.reload();
    });

    document.getElementById("inventory").appendChild(itemCont);
  });
}
