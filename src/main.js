// src/main.js
import { getData } from "./fetcher.js";
import { createUI } from "./ui.js";

const loadBtn = document.getElementById("loadBtn");

const fetcher = {
  getData: async (url) => getData(url),
};

const ui = createUI("container");

const loadData = async () => {
  const url = "https://rickandmortyapi.com/api/character";
  const data = await fetcher.getData(url);
  ui.render(data);
};

// Загрузка по клику на кнопку
if (loadBtn) {
  loadBtn.addEventListener("click", loadData);
}

// Если хочешь сразу при загрузке:
// loadData();
