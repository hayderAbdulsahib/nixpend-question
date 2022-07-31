const lightIds = ["light-green", "light-yellow", "light-red"];
const trafficColors = [];
const personColors = [];
const timer = [];

const startBtn = document.querySelector("#start-btn");
console.log(startBtn);

startBtn.addEventListener("click", () => {
  console.log("you clicked");
  getDataApi();
  // trafficFunc();
});

const getDataApi = async () => {
  try {
    const resGreen = await axios.get(
      "https://my-json-server.typicode.com/ahmad-athra/traffic-light-green/green_light"
    );
    console.log("the data", resGreen.data[0]);
    trafficColors.push(resGreen.data[0].light_color);
    personColors.push(resGreen.data[0].family_color);
    timer.push(resGreen.data[0].timer);

    const resYellow = await axios.get(
      "https://my-json-server.typicode.com/ahmad-athra/traffic-light-green/yellow_light"
    );
    trafficColors.push(resYellow.data[0].light_color);
    personColors.push(resYellow.data[0].family_color);
    timer.push(resYellow.data[0].timer);

    const resRed = await axios.get(
      "https://my-json-server.typicode.com/ahmad-athra/traffic-light-green/red_light"
    );

    trafficColors.push(resRed.data[0].light_color);
    personColors.push(resRed.data[0].family_color);
    timer.push(resRed.data[0].timer);

    console.log(trafficColors);
    console.log(personColors);
    console.log(timer);

    trafficFunc();
  } catch (error) {
    throw error;
  }
};

//the traffic light part functionality

const trafficFunc = () => {
  // const colors = ["green", "yellow", "red"];
  // const lightIds = ["light-green", "light-yellow", "light-red"];

  let index = 0;
  setInterval(() => {
    console.log("Delayed for 1 second.");
    const personDev = document.getElementById("person-icon");

    if (index > 2) {
      index = 0;
      document.getElementById("light-red").style.backgroundColor = "aqua";
    }
    if (index !== 0) {
      const lightDev = document.querySelectorAll(".flex-container div");
      lightDev[index - 1].style.backgroundColor = "aqua";

      personDev.style.color = "black";
    }

    const lightDev = document.getElementById(lightIds[index]);
    lightDev.style.backgroundColor = trafficColors[index];

    console.log(personDev);
    // const personDev = document.getElementById(lightIds[index]);
    personDev.style.color = personColors[index];

    index++;
  }, timer[index] * 1000);
};

// const trafficFunc = () => {
//   const colors = ["green", "yellow", "red"];
//   const lightIds = ["light-green", "light-yellow", "light-red"];

//   let index = 0;
//   setInterval(() => {
//     console.log("Delayed for 1 second.");

//     if (index > 2) {
//       index = 0;
//       document.getElementById("light-red").style.backgroundColor = "aqua";
//     }
//     if (index !== 0) {
//       const alLightDev = document.querySelectorAll(".flex-container div");
//       alLightDev[index - 1].style.backgroundColor = "aqua";
//     }

//     const lightDev = document.getElementById(lightIds[index]);
//     lightDev.style.backgroundColor = colors[index];

//     index++;
//   }, "1000");
// };
