
// ===
// Chart data
import {convertHex} from "./utils";

export const COLORS = ["#DB66AE", "#8185D6", "#89D9DF", "#E08886"];
export const TICK_COLOR = "#757681";

export const CHARTS = [
   {
      title: "Household Expenditure",
      subtitle: "Yearly",
      config: {
         type: "radar",
         responsive: true,
         data: {
            labels: ["Education", "Food", "Transport", "Drinks", "Other"],
            datasets: [
               {
                  label: "2025",
                  backgroundColor: convertHex(COLORS[0], 20),
                  borderColor: COLORS[0],
                  borderWidth: 1,
                  pointRadius: 2,
                  data: [51, 67, 90, 31, 16]
               },
               {
                  label: "2024",
                  backgroundColor: convertHex(COLORS[1], 20),
                  borderColor: COLORS[1],
                  borderWidth: 1,
                  pointRadius: 2,
                  data: [75, 44, 19, 22, 43]
               },
               {
                  label: "2023",
                  backgroundColor: convertHex(COLORS[2], 20),
                  borderColor: COLORS[2],
                  borderWidth: 1,
                  pointRadius: 2,
                  data: [7, 14, 29, 82, 33]
               }
            ]
         },
         options: {
            maintainAspectRatio: false,
            responsive: true,
            scale: {
               pointLabels: {
                  fontColor: TICK_COLOR
               },
               ticks: {
                  display: false,
                  stepSize: 25
               }
            },
            legend: {
               position: "bottom",
               labels: {
                  boxWidth: 11,
                  fontColor: TICK_COLOR,
                  fontSize: 11
               }
            }
         }
      }
   },
   {
      title: "Monthly revenue",
      subtitle: "2025 (in millions USD)",
      config: {
         type: "bar",
         responsive: true,
         data: {
            labels: [
               "Jan",
               "Feb",
               "Mar",
               "Apr",
               "May",
               "Jun",
               "Jul",
               "Aug",
               "Sep",
               "Oct",
               "Nov",
               "Dec"
            ],
            datasets: [
               {
                  label: "First",
                  data: [27, 59, 68, 26, 79, 55, 36, 43, 44, 30, 55, 64],
                  backgroundColor: COLORS[0],
                  hoverBackgroundColor: convertHex(COLORS[0], 70)
               },
               {
                  label: "Second",
                  data: [136, 23, 44, 30, 79, 55, 61, 94, 27, 59, 98, 91],
                  backgroundColor: COLORS[1],
                  hoverBackgroundColor: convertHex(COLORS[1], 70)
               },
               {
                  label: "Third",
                  data: [88, 31, 87, 61, 77, 27, 59, 58, 136, 26, 79, 85],
                  backgroundColor: COLORS[2],
                  hoverBackgroundColor: convertHex(COLORS[2], 70)
               }
            ]
         },
         options: {
            maintainAspectRatio: false,
            responsive: true,
            indexAxis: "y",
            barThickness: 10,
            scales: {
               x: {
                  stacked: true,
                  ticks: {
                     fontColor: TICK_COLOR
                  },
                  gridLines: {
                     drawOnChartArea: false
                  }
               },
               y: {
                  stacked: true,
                  ticks: {
                     fontColor: TICK_COLOR,
                     min: 0,
                     max: 175,
                     stepSize: 25
                  }
               }
            }
         }
      }
   },
   {
      title: "Exported goods",
      subtitle: "2025 (in billions USD)",
      config: {
         type: "doughnut",
         data: {
            labels: ["Brasil", "India", "China"],
            datasets: [
               {
                  data: [300, 50, 100],
                  borderWidth: 0,
                  backgroundColor: [
                     convertHex(COLORS[0], 60),
                     convertHex(COLORS[1], 60),
                     convertHex(COLORS[2], 60)
                  ],
                  hoverBackgroundColor: [COLORS[0], COLORS[1], COLORS[2]]
               }
            ]
         },
         options: {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
               position: "bottom",
               labels: {
                  boxWidth: 11,
                  fontColor: TICK_COLOR,
                  fontSize: 11
               }
            }
         }
      }
   }
];
// === End Chart data
