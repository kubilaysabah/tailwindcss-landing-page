const loadChart = () => {
  const ctx = document.querySelector("[chart]");

  const data = {
    labels: ["Direct", "Refferal", "Search", "Social", "Paid"],
    datasets: [
      {
        label: "My First Dataset",
        data: [51, 12.5, 12.5, 12.5, 12.5],
        backgroundColor: [
          "#AEA3E6",
          "#FFDA62",
          "#BCECFF",
          "#FDAFA6",
          "#C9FDA1",
        ],
        hoverOffset: 4,
      },
    ],
  };

  new Chart(ctx, {
    type: "doughnut",
    data: data,
  });
};

window.addEventListener("load", () => {
  loadChart();
});
