import "./styles.css";

const empty = document.getElementById("empty-table");
const tableBody = document.getElementById("table-body");
const inputForm = document.getElementById("input-form");

empty.addEventListener("click", () => {
  tableBody.innerHTML = "";
});

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("input-username").value;

  const length = tableBody.rows.length;

  if (length > 0) {
    for (let i = 0; i < length; i++) {
      if (tableBody.rows[i].cells[0].innerHTML === username) {
        editRow(i);
        break;
      } else if (i + 1 < length) {
        continue;
      } else {
        newRow();
      }
    }
  } else {
    newRow();
  }
});

function newRow() {
  const username = document.getElementById("input-username").value;
  const email = document.getElementById("input-email").value;
  const address = document.getElementById("input-address").value;
  const checkBox = document.getElementById("input-admin").checked;
  let admin = "-";
  if (checkBox === true) {
    admin = "X";
  }

  let newRow = document.createElement("tr");
  let newData1 = document.createElement("td");
  newData1.innerHTML = username;
  let newData2 = document.createElement("td");
  newData2.innerHTML = email;
  let newData3 = document.createElement("td");
  newData3.innerHTML = address;
  let newData4 = document.createElement("td");
  newData4.innerHTML = admin;

  newRow.appendChild(newData1);
  newRow.appendChild(newData2);
  newRow.appendChild(newData3);
  newRow.appendChild(newData4);

  if (document.getElementById("input-image").files.length > 0) {
    const file = document.getElementById("input-image").files[0];
    const imagePath = URL.createObjectURL(file);
    let newData5 = document.createElement("td");
    const image = document.createElement("img");
    image.setAttribute("src", imagePath);
    image.setAttribute("height", 64);
    image.setAttribute("width", 64);
    newData5.appendChild(image);
    newRow.appendChild(newData5);
  }

  tableBody.appendChild(newRow);
}

function editRow(i) {
  const username = document.getElementById("input-username").value;
  const email = document.getElementById("input-email").value;
  const address = document.getElementById("input-address").value;
  const checkBox = document.getElementById("input-admin").checked;
  let admin = "-";
  if (checkBox === true) {
    admin = "X";
  }

  let newRow = document.createElement("tr");
  let newData1 = document.createElement("td");
  newData1.innerHTML = username;
  let newData2 = document.createElement("td");
  newData2.innerHTML = email;
  let newData3 = document.createElement("td");
  newData3.innerHTML = address;
  let newData4 = document.createElement("td");
  newData4.innerHTML = admin;

  newRow.appendChild(newData1);
  newRow.appendChild(newData2);
  newRow.appendChild(newData3);
  newRow.appendChild(newData4);

  if (document.getElementById("input-image").files.length > 0) {
    const file = document.getElementById("input-image").files[0];
    const imagePath = URL.createObjectURL(file);
    let newData5 = document.createElement("td");
    const image = document.createElement("img");
    image.setAttribute("src", imagePath);
    image.setAttribute("height", 64);
    image.setAttribute("width", 64);
    newData5.appendChild(image);
    newRow.appendChild(newData5);
  }

  const oldRow = tableBody.rows[i];
  tableBody.replaceChild(newRow, oldRow);
}
