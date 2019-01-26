<div class="card mb-2">
  <div class="card-header">
    <i class="fas fa-table"></i>
    Maintenance Overview</div>
                          <!--above the table-->
                          <?php require('fragment_content_maint_chart-and-table.php'); ?>
<div class="row">
  <div class="card-body col-14 table-responsive">
       <table class="table table-bordered table-striped" id="dataTable" width="100%" cellspacing="0">
          <thead>
              <tr>
                      <th data-field="m_date">Date</th>
                      <th data-field="m_hours_on">Hours On</th>
                      <th data-field="m_cost">Cost</th>
                      <th data-field="location_id">Facility Name</th>
                      <th data-field="location_city">City</th>
                      <th data-field="location_state">State</th>
              </tr>
          </thead>
         </table>
       </div></div>
  </div>                                                                        <!--end table of datas-->
</div>
  <div class="card-footer small text-muted">...</div>
</div>
