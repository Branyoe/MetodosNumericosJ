class ResponseData{
  constructor({fx, x0, x1, integral, integralX0, integralX0Pross, integralX1, integralX1Pross, res}){
    this.fx = fx;
    this.x0 = x0
    this.x1 = x1
    this.integral = integral;
    this.integralX0Pross = integralX0Pross;
    this.integralX0 = integralX0;
    this.integralX1Pross = integralX1Pross;
    this.integralX1 = integralX1;
    this.res = res;
  }
}

module.exports = ResponseData;