class Dropdown {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.items = options.items;

    this.$el.querySelector(".dropdown__label").textContent =
      this.items[0].language;

    this.$el.addEventListener("click", (event) => {
      if (event.target.classList.contains("dropdown__label")) {
        if (this.$el.classList.contains("open")) {
          this.close();
        } else {
          this.open();
        }
      } else if (event.target.tagName.toLowerCase() === "li") {
        this.select(event.target.dataset.id);
      }
    });

    const ITEMS_HTML = this.items
      .map((item) => {
        return `<li data-id="${item.ext}">${item.language}</li>`;
      })
      .join(" ");

    this.$el
      .querySelector(".dropdown__menu")
      .insertAdjacentHTML("afterbegin", ITEMS_HTML);
  }

  select(ext) {
    const ITEM = this.items.find((item) => item.ext === ext);
    this.$el.querySelector(".dropdown__label").textContent = ITEM.language;
    this.close();
  }

  open() {
    this.$el.classList.add("open");
  }

  close() {
    this.$el.classList.remove("open");
  }
}

// eslint-disable-next-line no-unused-vars
const DROPDOWN = new Dropdown("#dropdown", {
  items: [
    { language: "JavaScript", ext: "js" },
    { language: "Python", ext: "py" },
    { language: "C++", ext: "cpp" },
    { language: "Rust", ext: "rs" },
    { language: "Kotlin", ext: "kt" }
  ]
});
