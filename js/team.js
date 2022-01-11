const people = [
  "Majke",
  "Patricia",
  "Melina",
  "Edgar",
  "Agnes",
  "Martin",
  "Irene",
  "Manuel",
];

people.forEach((person) => {
  const selector = document.querySelector(`#${person}`);
  window.addEventListener(
    "scroll",
    () => {
      const domRect = selector.getBoundingClientRect();
      const viewPortHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const target = viewPortHeight / 2 + 200;
      const response = domRect.top <= target && domRect.bottom >= target;
      if (response) {
        selector.classList.add("visible");
        selector.classList.add("slideRight");
      }
    },
    false
  );
});
