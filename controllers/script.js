const ResponseData = require("../models/ResponseData");

function calcular({ x0, x1, fx }) {
  let fxFormatted, integralFormatted, integralX0, integralX1, res
  fxFormatted = getFormattedFx(fx);
  integralFormatted = getIntegralFormatted(fxFormatted);
  integralX0 = integral(integralFormatted, x0);
  integralX1 = integral(integralFormatted, x1);
  res = integralX1.res - integralX0.res;

  const ResData = new ResponseData({
    fx: fxFormatted.join(" "),
    x0: x0,
    x1: x1,
    integral: integralFormatted.join(" "),
    integralX0Pross: integralX0.process.join(" "),
    integralX0: integralX0.res,
    integralX1Pross: integralX1.process.join(" "),
    integralX1: integralX1.res,
    res: res
  });
  return ResData;
}

function integral(integral = [], x){
  let process = []
  let resultados = integral.map((v, i) => {
    let str = v.replace(/x/g, x);
    process.push({
      exp: str,
      res: eval(str)
    });
    return eval(str);
  })

  let sum = 0

  resultados.forEach((x, i) => {
    sum += x;
  })

  return {
    res: sum,
    process: process
  };
}

function getFormattedFx(fx = ""){
  let fxFormatted = fx.trim();
  fxFormatted = fxFormatted.split(" ")
  return fxFormatted;
}

function getIntegralFormatted(fx = []){
  let integralFormatted = fx.map(v => {
    if(!v.includes("x")){
      return `(${v})*x`
    }
    if(v.includes("^")){
      let t1Fin, t1, str, exponente;
      t1Fin = v.indexOf("x");
      t1 = v.slice(0,t1Fin);
      exponente = parseFloat(v.slice(v.indexOf("^") + 1));
      if(!(t1 === '' || t1 === "+" || t1 === "-")){
        return str = `(${t1})*((${"(x)**" + (exponente + 1)})/${exponente + 1})`;
      }
      return str = `((${"(x)**" + (exponente + 1)})/${exponente + 1})`;
    }else{
      let t1Fin, t1, str;
      t1Fin = v.indexOf("x");
      t1 = v.slice(0,t1Fin);
      if(!(t1 === '' || t1 === "+" || t1 === "-")){
        return str = `(${t1})*((${"x**" + 2})/${2})`;
      }
      return str = `((${"x**" + 2})/${2})`;

    }
    
  })
  return integralFormatted;
}

module.exports = { calcular }