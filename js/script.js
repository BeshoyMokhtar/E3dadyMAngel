let tabs = document.querySelectorAll(".tabs li");
let tabsArr = Array.from(tabs);
let tables = document.querySelectorAll(".content table");
let tablesArr = Array.from(tables);
let imges = document.querySelectorAll(".imges");
let imgesArr = Array.from(imges);
tabsArr.forEach((el) => {
  el.addEventListener("click", function (ev) {
    tabsArr.forEach((ele) => {
      ele.classList.remove("active");
    });
    ev.currentTarget.classList.add("active");
    tablesArr.forEach((di) => {
      di.classList.remove("active");
    });
    document
      .querySelector(ev.currentTarget.dataset.per)
      .classList.add("active");
    imgesArr.forEach((im) => {
      im.classList.remove("active");
    });
    document
      .querySelector(ev.currentTarget.dataset.imges)
      .classList.add("active");
  });
});
