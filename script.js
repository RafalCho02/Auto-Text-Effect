const $textEl = $("#text");
const $speedEl = $("#speed");
const text = "We Love Programming!";
let idx = 1;
let speed = 300 / $speedEl.val();

writeText();

function writeText() {
  $textEl.html(text.slice(0, idx));
  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

$speedEl.on("input", function () {
  speed = 300 / $(this).val();
});
