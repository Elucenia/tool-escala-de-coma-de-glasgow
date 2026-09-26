/* tool-escala-de-coma-de-glasgow · Elucenia · https://github.com/Elucenia/tool-escala-de-coma-de-glasgow
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"escala-de-coma-de-glasgow","title":"Escala de Coma de Glasgow (com GCS-P)","fields":[["o","Abertura ocular (E)","sel",{"opts":{"1":"1 · Ausente","2":"2 · À pressão","3":"3 · Ao som","4":"4 · Espontânea","nt":"NT · Não testável"}}],["v","Resposta verbal (V)","sel",{"opts":{"1":"1 · Ausente","2":"2 · Sons","3":"3 · Palavras","4":"4 · Confusa","5":"5 · Orientada","nt":"NT · Não testável (ex.: intubado)"}}],["m","Melhor resposta motora (M)","sel",{"opts":{"1":"1 · Ausente","2":"2 · Extensão","3":"3 · Flexão anormal","4":"4 · Flexão normal","5":"5 · Localiza","6":"6 · Obedece a comandos","nt":"NT · Não testável"}}],["p","Reatividade pupilar à luz","radio",{"opts":{"0":"Ambas reagem","1":"Uma não reage","2":"Nenhuma reage","nt":"Não avaliável"}}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* Elucenia arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';

a.def("escala-de-coma-de-glasgow",function(a){var e="E"+("nt"===a.o?"NT":a.o)+" V"+("nt"===a.v?"NT":a.v)+" M"+("nt"===a.m?"NT":a.m);if("nt"===a.o||"nt"===a.v||"nt"===a.m)return{main:[e,""],label:"Glasgow por componentes",level:"mid",verdict:"Escore total não calculável: registre e comunique os componentes",note:"Com um componente não testável (ex.: olhos edemaciados, intubação), a soma subestima a gravidade. Descreva cada componente separadamente.",raw:{nt:1}};var o=+a.o+ +a.v+ +a.m,i=o>=13?["leve","low"]:o>=9?["moderada","mid"]:["grave","high"],r=[["Componentes",e]],n={gcs:o,score:o};if("nt"!==a.p&&null!=a.p){var c=o-+a.p;n.gcsp=c,r.push(["GCS-P (Glasgow − reatividade pupilar)",c+" (de 1 a 15)"])}return{main:[String(o),"de 15"],label:"Escala de Coma de Glasgow",level:i[1],verdict:"Gravidade "+i[0]+" ("+(o>=13?"13 a 15":o>=9?"9 a 12":"3 a 8")+")",rows:r,note:o<=8?"Glasgow ≤ 8: avalie a necessidade de via aérea definitiva.":"",raw:n}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
