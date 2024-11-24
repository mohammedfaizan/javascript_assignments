const selectedItem = document.getElementById("states");

selectedItem.addEventListener("change", deleteOption);

function deleteOption() {
  selectedItem.remove(selectedItem.selectedIndex);
  let p = document.createElement("p");
  p.innerHTML = `The number of items in the list is :${selectedItem.length}<br>`;
  p.innerHTML += `Dropdown List:`;
  for (const item of selectedItem) {
    p.innerHTML += `${item.text}<br>`;
  }
  document.body.append(p);
}
