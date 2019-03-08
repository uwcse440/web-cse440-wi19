<!--
<div class="alert alert-danger">
This page is still being migrated and developed. All content remains subject to change.
</div>
-->

## Project Theme

As a focus for Winter 2019, we asked students to explore __self-tracking and everyday interaction with personal intelligences__.

People have long sought to better understand themselves, but continuing technology advances enable new approaches.
Students examined problems people encounter in gathering and gaining value from personal data,
then explored how a combination of design and machine intelligence can 
help go beyond simple data fetishes to help people in using personal data as part of reaching their goals.

## Project Websites

<html>
  <ng-container>
    <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12" *ngFor="let project of projects.projects">
        <p>
          <app-generated-link linkHREF="assets/projects/{{ project.path }}/" forceExternal="true">{{ project.name }}</app-generated-link>
        </p>
        <div class="projectThumbBox">
          <p>
            <app-generated-link linkHREF="assets/projects/{{ project.path }}/" forceExternal="true">
              <img src="assets/projects/{{ project.path }}/project_thumb.png" width="150" class="projectThumbImage" alt="{{ project.name }}"/>
            </app-generated-link>
          </p>
        </div>
      </div>
    </div>
  </ng-container>
</html>

<!--
{% assign projects_count = site.data.projects.projects | size %}
{% assign projects_rows = projects_count | divided_by: 4 | plus: 1 %}

{% if projects_count == 0 %}
Will be linked here as course projects are proposed and developed.
{% endif %}

<div class="row">
  {% for item_project in site.data.projects.projects %}
    <div class="col-sm-3 col-xs-6">
      <p>
        {% if item_project.publishlink %}
        <a href="{{ item_project.path }}/" target="_blank">
          {{ item_project.name }}
        </a>
        {% else %}
          {{ item_project.name }}
        {% endif %}
      </p>
      <div class="thumbnailBox">
        {% if item_project.publishlink %}
        <a href="{{ site.baseurl }}/projects/{{ item_project.path }}/" target="_blank">
        {% endif %}
          {% capture thumb_exists %}{% file_exists projects/{{ item_project.path }}/project_thumb.png %}{% endcapture %}
          {% if thumb_exists == "true" %}
          {% else %}
            <img src="{{ site.baseurl }}/projects/150x150.png" width="150" class="projectThumbnail" alt="{{ item_project.name }}"/>
          {% endif %}
        {% if item_project.publishlink %}
        </a>
        {% endif %}
      </div>
      {% assign row_current = forloop.index | minus: 1 | divided_by: 4 | plus: 1 %}
      {% unless row_current == projects_rows %}
        <p>&nbsp;</p>
      {% endunless %}
    </div>
  {% endfor %}
</div>
-->

<!--
<div class="sidebar_start"></div>

<div class="row">
<div class="col-md-12" markdown="block">
<div class="panel panel-default" style="margin-top:20px;">
<div class="panel-heading" markdown="block">
## Poster Session
</div>

<div class="panel-body" markdown="block">
Please join us for a poster session celebrating the outstanding design work of CSE 440 students:

<!--
Thank you for joining us to celebrate the outstanding design work of CSE 440 students:
--!>

Thursday, December 14, 2017

11:15 am to 12:15pm, [CSE Atrium](http://www.washington.edu/maps/#!/cse)

<img src="images/poster_session.jpg" width="100%" alt="Poster Session"/>
</div>
</div>
</div>
</div>

<div class="sidebar_end"></div>
-->
