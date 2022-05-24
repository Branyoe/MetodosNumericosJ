function calcular({ x0, x1, fx }) {
  let fxFormatted = getFormattedFx(fx);
  let integralFormatted = getIntegralFormatted(fxFormatted)
  return integralFormatted;
}

function getFormattedFx(fx = ""){
  let fxFormatted = fx.trim();
  fxFormatted = fxFormatted.split(" ")
  return fxFormatted;
}

function getIntegralFormatted(fx = []){
  let integralFormatted = fx.map(v => {
    if(!v.includes("x")){
      return `${v}*x`
    }
    if(v.includes("^")){
      let t1Fin, t1, str;
      t1Fin = v.indexOf("x");
      t1 = v.slice(0,t1Fin);
      let exponente = parseFloat(v.slice(v.indexOf("^") + 1));
      return str = `${t1}*((${"x^" + (exponente + 1)})/${exponente + 1})`;
    }else{
      let t1Fin, t1, str;
      t1Fin = v.indexOf("x");
      t1 = v.slice(0,t1Fin);
      return str = `${t1}*((${"x^" + 2})/${2})`;
    }
    
  })
  return integralFormatted;
}

module.exports = { calcular }