const { execFile } = require("child_process");

let photos = {
  ALL: [
    "gym1",
    "gym2",
    "gym3",
    "underbedbin",
    "kitchen1",
    "kitchen2",
    "oats",
    "rice",
    "ricemaker",
    "steamer"
  ],
  ST: [
    "livingroom1",
    // "livingroom2", its a fucking png
    "livingroom3",
    "kitchen1",
    "diningnook1",
    "diningnook2",
    "dishwasher",
    "entry",
    "coffee1",
    "coffee2",
    // "foodbins1", its a fucking png
    "bathroom1"
  ],
  DSF: [],
  WF: [],
  PL: []
};

let pads = Object.keys(photos);
let base = "../public/assets/";

//console.log(pads);

let fileList = pads.reduce((result, pad) => {
  return result.concat(
    photos[pad].map(imgName => {
      return base + `${pad}/${pad}_${imgName}.jpg`;
    })
  );
}, []);

console.log(fileList);

//let fileList1 = fileList.slice(0, 1);
let size, prefix;
if (process.argv[2] === "blur") {
  size = "-s 20x30";
  prefix = "-p blur_";
} else {
  size = "-s 400x500>";
  prefix = "-p web_";
}

Promise.all(
  fileList.slice(0, 1).map(
    file =>
      new Promise((res, rej) => {
        execFile(
          "image-batch-resizer",
          ["-d", "./../public/assets", size, prefix],
          err => {
            if (err) {
              console.log("error", file);
              rej(err);
            } else {
              res("Done!");
            }
          }
        );
      })
  )
).then(arr => {
  arr.every(item => item === "Done!")
    ? console.log("All dones!")
    : console.log("There were errors!", arr.filter(item => item !== "Done"));
});
