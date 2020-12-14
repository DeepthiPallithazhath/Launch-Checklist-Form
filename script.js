// Write your JavaScript code here!

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
               response.json().then( function(json) {
                  const div = document.getElementById("missionTarget");
                  // Add HTML that includes the JSON data
                  div.innerHTML = `
                  <h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${json[0].name}</li>
                     <li>Diameter: ${json[0].diameter}</li>
                     <li>Star: ${json[0].star}</li>
                     <li>Distance from Earth: ${json[0].distance}</li>
                     <li>Number of Moons: ${json[0].moons}</li>
                  </ol>
                  <img src="${json[0].image}">
                  `;
               });
            });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotnameInput = document.querySelector("input[name=pilotName]");
      let copilotnameInput = document.querySelector("input[name=copilotName]");
      let fuellevelInput = document.querySelector("input[name=fuelLevel]");
      let cargomassInput = document.querySelector("input[name=cargoMass]");
      if (pilotnameInput.value === "" || copilotnameInput.value === "" || fuellevelInput.value === "" || cargomassInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
         faultyItems.style.visibility = "hidden";
         document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
         launchStatus.style.color="black";
      }
      else if(isNaN(pilotnameInput.value)===false)
       { 
       alert("PilotName should be a string");
       faultyItems.style.visibility = "hidden";
       document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
       launchStatus.style.color="black";
       }
       else if(isNaN(copilotnameInput.value)===false)
       { 
       alert("CopilotName should be a string");
       faultyItems.style.visibility = "hidden";
       document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
       launchStatus.style.color="black";
       }
       else if(isNaN(fuellevelInput.value)===true)
       { 
       alert("FuelLevel should be a number");
       faultyItems.style.visibility = "hidden";
       document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
       launchStatus.style.color="black";
       }
       else if(isNaN(cargomassInput.value)===true)
       { 
       alert("CargoMass should be a number");
       faultyItems.style.visibility = "hidden";
       document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
       launchStatus.style.color="black";
       }
      
      else
      {
      if((fuellevelInput.value<10000)&&(cargomassInput.value>10000))
      {
      faultyItems.style.visibility = "visible";
      document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch";
      launchStatus.style.color="red";
      document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the shuttle to take off"; 
      document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off"; 
      }
     else if((fuellevelInput.value<10000)&&(cargomassInput.value<10000))
     {
      faultyItems.style.visibility = "visible";  
      document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch";
      launchStatus.style.color="red";
      document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the shuttle to take off"; 
      document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch"; 
     }
     else if((cargomassInput.value>10000)&&(fuellevelInput.value>10000))
     {
      faultyItems.style.visibility = "visible";
      document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch";
      launchStatus.style.color="red";
      document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off"; 
      document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"; 
     }
     else
     {
     document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
     launchStatus.style.color="green"
     faultyItems.style.visibility = "visible"; 
     document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotnameInput.value} is Ready`;
     document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotnameInput.value} is Ready`;
     document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
     document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
     }
    }
   })
});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
