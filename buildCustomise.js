// function buildCustomise(itemData) {
//   itemData.customisations.forEach((cust) => {
//     document.getElementById("customisations").innerHTML += html`
//       <div class="list-group-item text-center" id="${cust.name}">
//         <img src="img/Icons/${cust.name}.png" width="40px" />
//         <a>${cust.name}</a>
//       </div>
//     `;
//     document.body.innerHTML += html`
//       <div class="cust-menu ${cust.name}">${custMenus[cust.name](cust)}</div>
//     `;
//   });
// }

// const html = (strings, ...params) => {
//   let combstring = "";
//   strings.forEach((string, index) => {
//     combstring += string + (params[index] || "");
//   });
//   return combstring;
// };

// let custMenus = {
//   Fabric: (itemData) => {
//     let returnHtml = "";
//     itemData.options.forEach((opt) => {
//       returnHtml += html`
//         <div class="form-group">
//           <div class="form-control divbox">
//             <a>Fabric Selection (${opt})</a>
//           </div>
//           <button
//             class="form-control divbox1"
//             data-toggle="modal"
//             data-target=".bd-example-modal-lg"
//             onClick="activeOption=${opt}; $('#fabric-modal').modal('toggle')"
//           >
//             <span class="glyphicon glyphicon-th"></span>&nbsp<a
//               >Choose different fabric</a
//             >
//           </button>
//           <button
//             id="fabricColorDisplay"
//             class="form-control divbox1"
//             style="background-image: url('img/fabric.png')"
//           ></button>
//           <button class="form-control divbox1"><a>Optimal</a></button>
//           <button
//             class="form-control divbox1"
//             style=" background-color: white;"
//           >
//             <a
//               >Create Custome Size
//               <span
//                 class="glyphicon glyphicon-plus"
//                 style="float: right; padding-top: 0.5vw;"
//               ></span
//             ></a>
//           </button>
//         </div>
//       `;
//     });
//     return returnHtml;
//   },
// };
