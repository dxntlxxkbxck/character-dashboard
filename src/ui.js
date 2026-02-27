// src/ui.js
export const createUI = (containerId) => {
  const container = document.getElementById(containerId);

  const clear = () => {
    if (container) container.innerHTML = "";
  };

  const render = (data) => {
    clear();

    if (!data.length) {
      container.innerHTML = "<p>Персонажей не найдено</p>";
      return;
    }

    const cards = data.map((item) => `
      <div style="
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 12px;
        margin: 8px;
        width: 200px;
        display: inline-block;
        vertical-align: top;
      ">
        <img src="${item.image}" alt="${item.name}" style="width: 100%; border-radius: 4px;" />
        <h3 style="margin: 10px 0;">${item.name}</h3>
        <p>Статус: ${item.status}</p>
        <p>Вид: ${item.species}</p>
        <p>Эпизоды: ${item.episode.length}</p>
      </div>
    `).join("");

    container.innerHTML = cards;
  };

  return { render, clear };
};
