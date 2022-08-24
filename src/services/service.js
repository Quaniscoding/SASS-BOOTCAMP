function Service() {
    this.getListProduct = function () {
        return axios({
            url: "https://6305b893dde73c0f844a25d3.mockapi.io/QLTT",
            method: "GET",
        });
    };
}