// Call the dataTables jQuery plugin
//$(document).ready(function() {
//  $('#dataTable').DataTable();
//});

$.getJSON("http://kami-nashi.com/skatetrax.core/sessions-full_json.php", function(jsonFromFile) {
  $('#dataTable').bootstrapTable({
    data: jsonFromFile,
    "pagingType": "full_numbers"
  });
   $('.dataTables_length').addClass('bs-select');
});

