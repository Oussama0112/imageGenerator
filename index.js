document.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("btn")) {
    const r = e.target.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    e.target.style.setProperty("--tran-or", `${x}px ${y}px`);
  }
});
//---------------main code and fetching data---------------
//-----my document Element
let imageEl = document.querySelector(".image"),
  btnEl = document.querySelector(".btn"),
  artistEl = document.querySelector(".artist");

btnEl.addEventListener("click", function () {
  getData();
});

async function getData() {
  try {
    btnEl.disabled = true;
    imageEl.innerHTML = `<span></span>`;
    artistEl.innerText = "uploading...";
    let response = await fetch("https://api.catboys.com/img");
    let data = await response.json();
    imageEl.innerHTML = `<img src=${data["url"]} alt= "image doese'nt exist" />`;
    artistEl.innerText = data["artist"];
    btnEl.disabled = false;
  } catch (error) {
    imageEl.innerHTML = `something went wrong please try later`;
    btnEl.disabled = false;
  }
}
