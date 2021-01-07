
//API SuperHero

 
cont=0

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            maquetar(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET","https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json", true);
    xhttp.send();
  }

function maquetar(json){

    for(let i=cont;i<json.length;i++){
        console.log(json[i].name);
        var button = document.createElement("button");
        var div= document.createElement("div");
        div.style.backgroundColor="rgba(255,0,0,0.7)";
        div.style.borderRadius="50px";
        div.style.width="13rem";
        div.style.height="13rem";
        div.style.display="inline-block";
        div.style.margin="1rem";
        div.onclick=()=>{
            maquetarInformacion(json[i]);
        }

        var img=document.createElement("img");
        img.src=json[i].images.sm;
        img.style.width="8rem";
        img.style.borderRadius="20px";
        img.style.height="8rem";
        img.style.marginLeft="2.5rem";

        var nombre= document.createElement("p");
        nombre.style.textAlign="center";
        nombre.style.color="white";
        nombre.style.fontSize="20px"
        nombre.textContent=json[i].name;

        document.getElementById("card").appendChild(div);
        div.appendChild(nombre);
        div.appendChild(img);

        cont++;
        
}
}


function maquetarInformacion(json){
    console.log(json);
    var modal = document.getElementById("tvesModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";

    document.body.style.position = "static";
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";

    document.getElementById("name").textContent = json.biography.fullName;
    document.getElementById("alturas").textContent="Height: "+json.appearance.height[1];
    document.getElementById("pesos").textContent="Weight: "+json.appearance.weight[1];
    document.getElementById("pelos").textContent="Hair Color: "+json.appearance.hairColor;
    document.getElementById("ojos").textContent="Eyes Color: "+json.appearance.eyeColor;
    document.getElementById("c").textContent="Combat: "+json.powerstats.combat;
    document.getElementById("d").textContent="Durability: "+json.powerstats.durability;
    document.getElementById("i").textContent="Intelligence: "+json.powerstats.intelligence;
    document.getElementById("p").textContent="Power: "+json.powerstats.power;
    document.getElementById("sp").textContent="Speed: "+json.powerstats.speed;
    document.getElementById("st").textContent="Combat: "+json.powerstats.strength;
    span.onclick = function() {
        modal.style.display = "none";

        document.body.style.position = "inherit";
        document.body.style.height = "auto";
        document.body.style.overflow = "visible";
    }

    
    
    
}


window.onload = ()=>{setInterval(loadDoc,400)}



