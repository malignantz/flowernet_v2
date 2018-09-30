const { execFile } = require("child_process");
const mozjpeg = require("mozjpeg");

let photos = require("./photoList").photosList;

let pads = Object.keys(photos);
let base = "../../public/assets/";

//console.log(pads);

let fileList = pads.reduce((result, pad) => {
  return result.concat(
    photos[pad].map(imgName => {
      return base + `${pad}/ web_${pad}_${imgName}.jpg`;
    })
  );
}, []);
/*
fileList = fileList.concat(
  pads.reduce((result, pad) => {
    return result.concat(
      photos[pad].map(imgName => {
        return base + `${pad}/ blur_${pad}_${imgName}.jpg`;
      })
    );
  }, [])
);
*/

//console.log(fileList);

let fileList1 = fileList.slice(0);
let quality = 90;

Promise.all(
  fileList1.map(
    file =>
      new Promise((res, rej) => {
        execFile(
          mozjpeg,
          [
            "-outfile",
            String(
              file.slice(0, file.lastIndexOf(".")) + "_" + file.slice(-4)
            ).replace(" ", ""),
            "-quality",
            quality,
            file
          ],
          err => {
            if (err) {
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
