function updateTime() {
    let now = new Date();

    // ✅ Get local time in 24-hour format
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // ✅ Correct AM/PM logic
    let ampm = (hours >= 12) ? "AM" : "PM";

    if (hours === 0) {  
        hours = 12; // Midnight case (12 AM)
    } else if (hours > 12) {  
        hours -= 12; // Convert 24-hour format to 12-hour format
    }

    // ✅ Add leading zeros (01, 02, 03...)
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    // ✅ Update time in HTML
    document.getElementById("liveTime").innerText = hours + ":" + minutes + " " + ampm;
    document.getElementById("liveSeconds").innerText = seconds;
}

// ✅ Update time every second
setInterval(updateTime, 1000);
updateTime();

 
 // ✅ Chart.js Configuration
 const ctx = document.getElementById('fitnessChart').getContext('2d');
   new Chart(ctx, {
     type: "bar",
     data: {
         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
         datasets: [
             {
                 label: "Water",
                 data: [40, 30, 10, 20, 35, 15, 50, 25, 30, 10],
                 backgroundColor: "blue", // Blue
                 borderRadius: 5,
                 barThickness: 10, // ✅ Bar Width Same as Image
             },
             {
                 label: "Steps",
                 data: [20, 15, 5, 25, 18, 10, 30, 20, 15, 5],
                 backgroundColor: "yellow", // Green
                 borderRadius: 5,
                 barThickness: 10,
             },
             {
                 label: "Calories",
                 data: [15, 10, 5, 18, 25, 8, 22, 12, 20, 18],
                 backgroundColor: "red", // Yellow
                 borderRadius: 5,
                 barThickness: 10,
             }
         ]
     },
     options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
             legend: { display: false }, // ✅ Hide Legend (Because We Added Custom)
             tooltip: { enabled: true } // ✅ Hover Effect Same as Image
         },
         scales: {
             x: { grid: { display: false } }, // ✅ No Grid on X-Axis
             y: { 
                 beginAtZero: true, 
                 grid: { color: "rgba(255,255,255,0.1)" }, // ✅ Light Grid on Y-Axis
                 ticks: { stepSize: 10 } // ✅ Space Between Y-Axis Same as Image
             }
         }
     }
 });