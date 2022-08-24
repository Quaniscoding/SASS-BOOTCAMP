var service = new Service();

function getEle(id) {
    return document.getElementById(id);
}

function fetchData() {
    //pending
    //show loading
    getEle("loading").style.display = "block";

    service
        .getListProduct()
        .then(function (result) {
            //response
            renderHTML(result.data);

            //hide loading
            getEle("loading").style.display = "none";
        })
        .catch(function (error) {
            //response
            console.log(error);
            //hide loading
            getEle("loading").style.display = "none";
        });
}
fetchData();
function renderHTML(data) {
    var content = "";
    data.forEach(function (product) {
        content += `
      <div class="person">
      <div class="person_img">
        <span>
          <img style="width: 100%" src="./img/${product.hinhAnh}" alt="" />
        </span>
      </div>
      <p>${product.ngonNgu}</p>
      <h1>${product.hoTen}</h1>
      <h6>${product.moTa}</h6>
    </div>
      `;
    });
    getEle("teacher").innerHTML = content;
}