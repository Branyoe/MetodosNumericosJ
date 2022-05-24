class FormData{
  constructor(x0 = 0, x1 = 0, fx = ""){
    this.x0 = parseFloat(x0);
    this.x1 = parseFloat(x1);
    this.fx = fx;
  }
}

module.exports = FormData;