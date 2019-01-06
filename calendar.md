<div class="calendar">

{% comment %}
<div class="row week">
<div class="col-xs-12">
<div class="alert alert-danger" markdown="1">
This page is still being migrated and developed. All content remains subject to change.
</div>
</div>
</div>
{% endcomment %}

  {% for currentdaynum in (0..numdays) %}
    {% assign currentdateseconds = currentdaynum | times: 86400 | plus: 3600 | plus: startdateseconds %}
    {% assign currentdate = currentdateseconds | date: '%F' %}
    {% assign currentdayofweek = currentdate | date: '%a' %}

    {% case currentdayofweek %}
    {% when 'Sun' %}
    <div class="row week">
    {% when 'Mon' or 'Tue' or 'Wed' or 'Thu' or 'Fri' %}
    <div class="col-md-2-4 day">
      {{ currentdate | date: '%b %-d'}}<br>

        Holiday was here

        {% for currentaway in site.data.calendar.aways %}
          {% if currentdate == currentaway.date %}
            <div class="item away">
              {{ currentaway.name }}
            </div>
          {% endif %}
        {% endfor %}

        Lecture was here

        Section was here

        Major was here

        Assignment was here

        {% for currentofficehour in site.data.calendar.officehours %}
          {% if currentdate == currentofficehour.date %}
            {% assign currentlocation = currentofficehour.location %}
            <div class="item officehour">
              <small>
                {{ currentofficehour.name }}<br>
                {% for currentlocationitem in site.data.calendar.locations[currentlocation] %}
                  {{ currentlocationitem.time }}<br>
                  {{ currentlocationitem.location }}<br>
                {% endfor %}
              </small>
            </div>
          {% endif %}
        {% endfor %}
    </div>
    {% when 'Sat' %}
    </div>
    {% endcase %}
  {% endfor %}
</div>
