<div class="alert alert-danger">
This page is still being migrated and developed. All content remains subject to change.
</div>

<html>
  <div class="calendar">
    <div class="week" *ngFor="let currentWeek of datesOfInstructionByWeek()">
      <div class="day" *ngFor="let currentDay of datesOfWeekdaysForWeek(currentWeek)">
        <p>{{ moment(currentDay).format('MMM D') }}</p>
        <!-- 
          -- Holiday
          -->        
        <div *ngFor="let currentHoliday of getHolidaysForDay(currentDay)">
          <div class="holiday">
            <p>{{ currentHoliday.name }}</p>
          </div>
        </div>
        <!--  
          -- Lecture
          --
            <div class="item lecture">
              <br>
              {% if currentlecture.slides != nil %}
                [<a href="{{ site.baseurl }}/{{ currentlecture.slides }}">slides</a>]
              {% endif %}
              {% if currentlecture.panopto != nil %}
                [<a href="{{ currentlecture.panopto }}">video</a>]
              {% endif %}
              {% if currentlecture.slides != nil or currentlecture.video != nil %}
                <br>
              {% endif %}
              <small>
                {% for currentlocationitem in site.data.calendar.locations[currentlocation] %}
                    {{ currentlocationitem.time }} |
                    {{ currentlocationitem.location }}<br>
                {% endfor %}
              </small>
            </div>
          -->
        <div *ngFor="let currentLecture of getLecturesForDay(currentDay)">
          <div class="lecture">
            <!-- Name or placeholder 'Lecture' -->
            <p *ngIf="currentLecture.name" [innerHTML]="currentLecture.name"></p>
            <p *ngIf="!(currentLecture.name)">Lecture</p>
            <div *ngIf="currentLecture.slides" class="slides">
              <p>[<app-generated-link linkHREF="{{ currentLecture.slides }}">slides</app-generated-link>]</p>
            </div>
            <div *ngIf="currentLecture.location" class="location">
              <div *ngFor="let currentLocation of currentLecture.location">
                <p>{{ currentLocation.time }} | {{ currentLocation.location }}</p>
              </div>
            </div>            
          </div>
        </div>
        <!-- 
          -- Section
          --
            <div class="item section">
              {% if currentsection.slides != nil %}
                <a href="{{ site.baseurl }}/{{ currentsection.slides }}">
              {% endif %}
                {% if currentsection.name != nil %}
                  {{ currentsection.name }}<br>
                {% else %}
                  Section<br>
                {% endif %}
              {% if currentsection.slides != nil %}
                </a>
              {% endif %}
            </div>
          -->
        <div *ngFor="let currentSection of getSectionsForDay(currentDay)">
          <div class="section">
            <!-- Name or placeholder 'Section' -->
            <p *ngIf="currentSection.name" [innerHTML]="currentSection.name"></p>
            <p *ngIf="!(currentSection.name)">Section</p>
            <div *ngIf="currentSection.location" class="location">
              <div *ngFor="let currentLocation of currentSection.location">
                <p>{{ currentLocation.time }} | {{ currentLocation.location }}</p>
              </div>
            </div>            
          </div>
        </div>
        <!--
          -- Major
          --
            {% assign currentlocation = currentmajor.location %}
            <div class="item major">
              {% if currentmajor.link != nil %}<a href="{{ site.baseurl }}/{{ currentmajor.link }}">{% endif %}
                {{ currentmajor.name }}<br>
                {% if currentmajor.link != nil %}</a>{% endif %}
              <small>
                {% for currentlocationitem in site.data.calendar.locations[currentlocation] %}
                    {{ currentlocationitem.time }} |
                    {{ currentlocationitem.location }}<br>
                {% endfor %}
              </small>
            </div>
          -->
        <div *ngFor="let currentMajor of getMajorsForDay(currentDay)">
          <div class="major">
            <!-- If the link exists, apply that -->
            <p *ngIf="currentMajor.link">
              <app-generated-link linkHREF="{{ currentMajor.link }}">{{ currentMajor.name }}</app-generated-link>
            </p>
            <!-- Otherwise, identical content but without the link -->
            <p *ngIf="!(currentMajor.link)">
              {{ currentMajor.name }}
            </p>
            <!-- Location if specified -->
            <div *ngIf="currentMajor.location" class="location">
              <div *ngFor="let currentLocation of currentMajor.location">
                <p>{{ currentLocation.time }} | {{ currentLocation.location }}</p>
              </div>
            </div>            
          </div>
        </div>
        <!-- 
          -- Assignments
          --
            <div class="item assignment">
              <small>
                  {% if currentassignment.link != nil %}<a href="{{ site.baseurl }}/{{ currentassignment.link }}">{% endif %}
                  {{ currentassignment.name }}<br>
                  {% if currentassignment.duenote != nil %}{{ currentassignment.duenote }}{% endif %}
                  {% if currentassignment.link != nil %}</a>{% endif %}
              </small>
            </div>
          -->
        <div *ngFor="let currentAssignment of getAssignmentsForDay(currentDay)">
          <div class="assignment">
            <!-- If the link exists, apply that -->
            <p *ngIf="currentAssignment.link">
              <app-generated-link linkHREF="{{ currentAssignment.link }}">
                <span [innerHTML]="currentAssignment.name"></span>
                <ng-container *ngIf="currentAssignment.dueNote">
                  <br>{{ currentAssignment.dueNote }}
                </ng-container>
              </app-generated-link>
            </p>
            <!-- Otherwise, identical content but without the link -->
            <p *ngIf="!(currentAssignment.link)">
              <span [innerHTML]="currentAssignment.name"></span>
              <ng-container *ngIf="currentAssignment.dueNote">
                <br>{{ currentAssignment.dueNote }}
              </ng-container>
            </p>            
          </div>
        </div>
        <!-- 
          -- Office Hours
          -->
        <div *ngFor="let currentOfficeHours of getOfficeHoursForDay(currentDay)">
          <div class="officeHours">
            <p>{{ currentOfficeHours.name }}</p>
            <div *ngIf="currentOfficeHours.location" class="location">
              <div *ngFor="let currentLocation of currentOfficeHours.location">
                <p>{{ currentLocation.time }} | {{ currentLocation.location }}</p>
              </div>
            </div>            
          </div>
        </div>
        <!-- 
          -- Aways
          -->
        <div *ngFor="let currentAway of getAwaysForDay(currentDay)">
          <div class="away">
            <p [innerHTML]="currentAway.name"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</html>
