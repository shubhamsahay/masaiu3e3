// const myfun=async()=>{
//     try{
//         const q= document.getElementById("query").ariaValueMax;
//         const res= await fetch(`https://masai-mock-api.herokuapp.com/hotels/search?city={query}`);
//         const data = await res.json();
//         append(data.items);
//     }catch(err){
//         console.log(err);
//     }
// };

let id;
let htlist=document.getElementById(`hotels_list`);
async function searchhotel(){
    try{
        const query =document.getElementById(`query`).value;
        const res=await fetch(`https://masai-mock-api.herokuapp.com/hotels/search?city={query}`)
        const data=await res.json();
        const hotel=data.search;
        return hotel 
    }catch(err){
        console.log("err:",err);
    }
}

function movieset(data){
    hotels_list.innerHTML=null;
    
    data.foreach(function(el){
        let d=document.createElement("div");
        d.style.height="100px";
        d.style.width="80px";
       let img=document.createElement("img");
       img.src=el.image;
       img.style.height="70%";
       img.style.height="50%";

       let name=document.createElement("p");
       name.innerText=el.details;

       let price=document.createElement("p");
       price.innerText=el.priceperroom;

       let ac=document.createElement("p");
       ac.innerText=el.aacornot;

       let rating=document.createElement("p");
       rating.innerText=el.hotelrating;
       
       let btn=document.createElement("btn");
       btn.innerText="Book Now";
       btn.setAttribute("id","book")

       d.append(img,name,price,ac,rating,btn);
       document.querySelector("#hotels_list").append(d);
    })
}
async function main(){
    let data=await searchhotel();
    if(data===undefined){
        return false;
    }
    movieset(data);
}
function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function(){
        func();
    },delay);
}