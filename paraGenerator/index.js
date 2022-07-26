const input = document.getElementById("numWords");
const container =document.querySelector(".container");

const getWords=(n)=>{
  const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let temp=""
  
  for(let i=0;i<n;++i){
    const random = (Math.random()*25).toFixed(0);
    temp+=text[random]
  }
  return temp;
}

const generateData = ()=>{
  let tpara = ""
  for (let i=0;i<Number(input.value);++i){
    const random = (Math.random()*25).toFixed(0);
    tpara+=getWords(random)
    tpara+=" "
  }
  const para = document.createElement("p");
  para.setAttribute("class","paras");
  para.innerText = tpara;
  container.append(para)
};

