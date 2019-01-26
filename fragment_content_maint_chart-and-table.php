<div class="container">
<div class="row">
<div class="col-3 col-sm-3 mb-3">
               <table class="table table" style="width:auto;" align="center">
                 <thead><tr><th colspan="2" class="text-center"> Financial Overview </th></tr></thead>
                 <tbody>
                  <tr class="small"><td class="text-right">$129.88</td>
                  <td class="text-left"> Maintenance Costs </td></tr>
                  <tr class="small"><td class="text-right">21.50</td>
                  <td class="text-left"> Current Hours </td></tr>
                  <tr class="small"><td class="text-right">-0.50</td>
                  <td class="text-left"> Hours Remaining </td></tr>
                </tbody></table>
<div>
  <iframe class="chartjs-hidden-iframe" tabindex="-1" style="display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;"></iframe>
  <canvas id="doughnut-chart2" width="231" height="231" style="display: block; width: 231px; height: 231px;"></canvas>
</div>
<script>
new Chart(document.getElementById("doughnut-chart2"), {
    type: "doughnut",
    data: {
      labels: ["Time On", "Time Remaining"],
      datasets: [
        {
          label: "Hours Overview",
          backgroundColor: ["#009900", "#70db70"],    data: [21.5,-0.5]
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: "Hours Overview"
      }
    }
});
</script>
</div>
