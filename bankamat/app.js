let pullar = [200, 100, 50, 20, 10, 5, 1];
let manat = 999;
let btn = document.querySelector("button");
let inp = document.querySelector("input");
btn.addEventListener("click", () => {

  let manat = Number(inp.value);
  pullar.map((pul) => {
    let say = parseInt(manat / pul);
    let div = document.createElement("div");

    if (say > 0) {
      manat = manat - say * pul;
      for (let i = 0; i < say; i++) {
        let img = document.createElement("img");
        img.src = `img/${pul}.jpg`;
        img.style.width='400px'
        img.style.height='200px'
        img.style.objectFit='cover'
        img.style.marginRight='-280px'
        div.append(img);

      }
    }
    document.body.append(div);
  });
});

// Todo: -- (2)--(her 500 milli saniyede bir artirir ) --//
//clear interval temizliyir //
// let a = 10
// let interval =setInterval(()=>{
//     a++
//     if(a>20){
//         clearInterval(interval)
//     }
//     console.log('kod calidi');
// },500)
// // Todo: -- (3)--(bu vaxt kecenden sonra bir defe isle sonra dayan) --//
// setTimeout(()=>{
//     console.log('calisdi');
// },5000)
// Todo: -- (10)--(sty
