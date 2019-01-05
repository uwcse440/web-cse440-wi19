<div class="alert alert-danger">
This page is still being migrated and developed. All content remains subject to change.
</div>

<html>
  <div class="calendar">
    <div class="week" *ngFor="let currentWeek of datesOfInstructionByWeek()">
      <div class="day" *ngFor="let currentDay of datesOfWeekdaysForWeek(currentWeek)">
        <p>{{ moment(currentDay).format('MMM D') }}</p>
      </div>
    </div>
  </div>
</html>
