const lista = ['kepek/kep1.jpg','kepek/kep2.jpg','kepek/kep3.jpg','kepek/kep4.jpg','kepek/kep5.jpg','kepek/kep6.jpg'];
const KIVALASZTOTTKEPEK = []
let db = 0;
$(function(){
    console.log("barmi");
    const felsoSection = $(`#felso`);
    let tartalom = osszeAllit();
    felsoSection.append(tartalom);
    const FELSOKEPEK = $("#felso img");
    FELSOKEPEK.on("click", kepreKattintas);
    
})
function kepreKattintas(event){
    const aktKep = event.target;
    console.log(aktKep.id);
    console.log($(aktKep).attr("id"));
    aktKep.src = lista[aktKep.id]; 
    KIVALASZTOTTKEPEK.push($(aktKep).attr("id"));
    db++;
    if(db==2) {
        db=0;
        visszaFordit()
        
    }
}   
function visszaFordit(){
    console.log(KIVALASZTOTTKEPEK);
    
    
 setTimeout(function() {
    const FELSOKEPEK = $("#felso img");
    let aktKep = FELSOKEPEK.eq(KIVALASZTOTTKEPEK[0]);
    $(aktKep).attr("src","kepek/hatter.jpg");
    aktKep = FELSOKEPEK.eq(KIVALASZTOTTKEPEK[1]);
    $(aktKep).attr("src","kepek/hatter.jpg");
    KIVALASZTOTTKEPEK.pop();
    KIVALASZTOTTKEPEK.pop();

}, 1000);
    
    

       
}




function osszeAllit(){
    let db = 0;
    let txt="";
    for (let index = 0; index < lista.length; index++) {
        txt+=`<div id="${db}"><img src="kepek/hatter.jpg" alt="kepem" id="${index}"> </div>`;
            db+=1;
    }
    console.log(txt);
    return txt;

}