const container = document.querySelector(".container");
const input = document.getElementById("noOfWords");


const generateword = (n) => {
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for (i=0; i<n; ++i) {
        const random = (Math.random()*25).toFixed(0);
        text += letters[random];

    }
    return text;

}


// let noOfWords;
const generatepara = () => {
    const noOfWords = Number(input.value);
    
    const para = document.createElement("p");

    let data = " ";

    for (let i=0; i<noOfWords;++i) {
        const randomnumber = (Math.random() * 15).toFixed(0);
        data += generateword(randomnumber);
        data += " ";
    } 
    
    para.innerHTML = data;
    para.setAttribute("class", "paras");

     container.append(para);
};