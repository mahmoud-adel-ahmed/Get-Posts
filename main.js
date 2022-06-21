let container = document.querySelector(".container");
let row = document.querySelector(".row");

function printData(data) {
  let item = data
    .map((item) => {
      return `
          <div class="box">
              <h3 class="title">${item.title}</h3>
              <p class="body">
              ${item.body}
              </p>
              <span class="date">${item.date}</span>
          </div>
      `;
    })
    .join(" ");
  row.innerHTML = item;
}

let url = "./data.json";
fetch(url)
  .then((res) => res.json())
  .then(({ data }) => printData(data))
  .catch((err) => console.log(err.message));
