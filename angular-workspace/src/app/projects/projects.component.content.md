<!--
<div class="alert alert-danger">
This page is still being migrated and developed. All content remains subject to change.
</div>
-->

<html>
<div class="row">

<div class="col-md-4 order-md-8">
<div class="card">

<div class="card-header" markdown="block">

## Poster Session

</div>

<div class="card-body" markdown="block">

Please join us for a poster session celebrating the outstanding design work of CSE 440 students:

Wednesday, March 20, 2019

4:30pm to 5:30pm, [CSE Atrium](http://www.washington.edu/maps/#!/cse)

<img src="assets/images/poster_session.jpg" class="posterSessionImage" alt="Photo of Poster Session"/>
</div>  

</div>
</div>

<div class="col-md-8">

## Project Theme

As a focus for Winter 2019, we asked students to explore __self-tracking and everyday interaction with personal intelligences__.

People have long sought to better understand themselves, but continuing technology advances enable new approaches.
Students examined problems people encounter in gathering and gaining value from personal data,
then explored how a combination of design and machine intelligence can 
help go beyond simple data fetishes to help people in using personal data as part of reaching their goals.

## Project Websites

<html>
  <div class="row">
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12" *ngFor="let project of projects.projects">
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
</html>

</div>

</div>
</html>
