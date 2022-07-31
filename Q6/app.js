let monthsLabel = [];
let numbersLabel = [];

const chartData = async () => {
  try {
    const res = await axios.get(
      "https://my-json-server.typicode.com/ahmad-athra/exam1/ChartData"
    );

    const chartApiData = res.data[0];

    const months = chartApiData.xaxis.map((element) => {
      return element;
    });

    const numbers = chartApiData.yaxis.map((element) => {
      return element;
    });

    monthsLabel = months;
    numbersLabel = numbers;
  } catch (error) {
    throw error;
  }
};

const dummyChartArrow = async () => {
  await chartData();

  const ctx = document.getElementById("myChart").getContext("2d");

  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
      labels: monthsLabel,
      datasets: [
        {
          label: "Number",
          backgroundColor: "pink",
          borderColor: "rgb(255, 99, 132)",
          data: numbersLabel,
        },
      ],
    },

    options: {
      interaction: {
        mode: "index",
      },
    },
  });
};

dummyChartArrow();
