let count = 0;
document.getElementById("send").addEventListener("click", function () {
  count++;
  let inputValue = document.getElementById("inputfield");
  let listContainer = document.getElementById("list-container");
  let item = document.createElement("tr");
  item.innerHTML = `
        <td>${count}</td>
        <td>${inputValue.value}</td>
        <td id='line'>
        <button class="btn delete" id="">Delete</button>
        <button class="btn done" >Done</button>
        </td>
  `;
  listContainer.appendChild(item);
  inputValue.value = " ";

  //delete
  let delBtn = document.getElementsByClassName("delete");
  for (let btn of delBtn) {
    btn.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.remove();
    });
  }

  //done
  let dones = document.getElementsByClassName("done");
  for (let done of dones) {
    done.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.style.textDecoration = "line-through";
    });
  }

  //clear
  let clear = document.getElementById("clear");
  clear.style.display = "block";
  clear.addEventListener("click", function () {
    listContainer.innerHTML = "";
    clear.style.display = "none";
  });
});
