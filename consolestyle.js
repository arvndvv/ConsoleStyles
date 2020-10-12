let bannerBigGreen =
  "color:#0c3;font-weight:bold;background:black;padding:10px 10% 10px 10%; font-size:4em;font-family:'monospace',sans-serif,roboto;border:2px solid #0a3;";
let bannerBigBlue =
  "color:#05f;font-weight:bold;font-size:4em;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;";

let bannerBigRed =
  "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold";
let bannerRainbow =
  "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)";
let textHacker =
  "font-size:1.3em;color:#0d3;background:black; padding:2px 10px 2px 0px;";
let textClassicGray =
  "font-size:1.3em;color:#aaa;background:#333; padding:2px 10px 2px 0px;";
let textClassicBlack =
  "font-size:1.3em;color:#000;background:#aaa; padding:2px 10px 2px 0px;";

let error =
  "font-size:1.3em;color:#e33;border:2px solid #e33;padding:2px 5px 2px 5px;border-radius:5px";
let success =
  "font-size:1.3em;color:#090;border:2px solid #0a0;padding:2px 5px 2px 5px;border-radius:5px";
let remarks =
  "font-size:1.3em;color:#33f;border:2px solid #33f;padding:2px 5px 2px 5px;border-radius:5px";

console.log("%cB374%cBR4IN", bannerBigGreen, bannerBigRed);
x = "23.55";

console.log("%c B374BR4IN! this is sample output text", textClassicBlack);
console.log("%c B374BR4IN! this is sample output text", textClassicGray);
console.log("%c B374BR4IN! this is sample output text", textHacker);
console.log("%cERROR Occured", error);
console.log("%cSuccess", success);
console.log("%c" + x, remarks);
