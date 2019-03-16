# Assignment 4: Communicating Your Design

<!--
<div class="alert alert-danger" markdown="1">
This page is still being migrated and developed. All content remains subject to change.
</div>
-->

## Overview

You have identified a problem, explored a design space, selected a promising design, and iterated on that design.
It is now time to focus on communicating your design and your design process.
This group assignment communicates your design through a __website__, 
a __video prototype__, a __poster__, and a __pitch__.

This assignment is worth __15%__ of your overall course grade:

- __4%__ for [Assignment 4d: Final Video Prototype](#id-4e-final-poster-final-video-final-website)
- __4%__ for [Assignment 4d: Final Website](#id-4e-final-poster-final-video-final-website)
- __4%__ for [Assignment 4d: Final Poster](#id-4e-final-poster-final-video-final-website)
- __3%__ for the milestones 
  - __1%__ for [Assignment 4a: Initial Website](#id-4a-initial-website)
  - __1%__ for [Assignment 4b: Initial Video Prototype](#id-4b-initial-video-prototype)
  - __1%__ for [Assignment 4c: Initial Poster and Pitch](#id-4c-initial-poster-and-pitch) 

[Assignment 4f: Poster Session](#id-4f-poster-session) is intentionally not graded.

## Milestones

This is a group assignment, consisting of six milestones.

* [Assignment 4a: Initial Website](#id-4a-initial-website)

  <app-assignment-due-text dueText="{{ page.due_project_4a }}"></app-assignment-due-text>

* [Assignment 4b: Initial Video Prototype](#id-4b-initial-video-prototype)

  <app-assignment-due-text dueText="{{ page.due_project_4b }}"></app-assignment-due-text>

* [Assignment 4c: Poster Critique and Pitch](#id-4c-initial-poster-and-pitch)

  <app-assignment-due-text dueText="{{ page.due_project_4c }}"></app-assignment-due-text>

* [Assignment 4d: Final Poster, Final Video, Final Website](#id-4d-final-poster-final-video-final-website)

  <app-assignment-due-text dueText="{{ page.due_project_4d }}"></app-assignment-due-text>

* [Assignment 4e: Team Peer Feedback](#id-4e-team-peer-feedback)

  <app-assignment-due-text dueText="{{ page.due_project_4e }}"></app-assignment-due-text>

* [Assignment 4f: Poster Session](#id-4f-poster-session)

  <app-assignment-due-text dueText="{{ page.due_project_4f }}"></app-assignment-due-text>

## Project Description

In this assignment, you communicate your design in several forms.
You will create a website, a video prototype, a poster, and a pitch to present your work from the entire quarter.

1. Create a project website that provides an overview of the project, 
   presents your design process, and introduces team members. 
   At a minimum, it must include links to
   your [Assignment 2](/assignments/assignment2/) report, 
   your [Assignment 3](/assignments/assignment3/) report, your video prototype, and your poster.
   Optionally, also include your presentations or other materials.
   Ideally, much of this same content will also be presented in a manner more appropriate for the web. 
   
   Be sure you have updated any documents that course staff said needed fixed before posting 
   (e.g., any report that accidentally included participant identifying information). 

2. Create a video prototype that illustrates your proposed design. 
   Use the storyboards you created as a basis for your video prototype. 
   Be sure you video conveys all of:
   
   - the problem
   - the design
   - the context 
   - the satisfaction
   
   Refer to the examples provided in lecture, as well as videos from prior classes, for creating an effective video.

   It is critical that your video be short enough to remain engaging while delivering its content.
   Your video prototype should probably not be more than 2 minutes long.

   A modern phone can capture video of adequate quality for this assignment. 

3. Create a poster that communicates your design and your design process to a general audience.
   The goal is to present your work in a visual form to interested parties from across campus or from industry. 
   You need to quickly convey the most important aspects of your work. 
   The poster must be 32"x40" (portrait, vertical). 
   
4. Create a pitch that you can deliver together with your poster.
   This should summarize the problem and your design.
   It should be no more than 1 minute long.
   This pitch should convince the audience your problem was worth investigating and that your design effectively addresses it.

## Deliverables

### 4a: Initial Website

<app-assignment-due-text dueText="{{ page.due_project_4a }}"></app-assignment-due-text>

The goal of this milestone is to post an initial project website as part of the course website.

We will use your websites to advertise the poster session.
Although this is an initial website on which you will get feedback and will be able to update,
you should submit a complete and high-quality version of your website appropriate for advertising the course projects.

Your website will be served from a subdirectory of this course website.

Within the GitHub repository of the course:

<p>[https://github.com/uwcse440/web-cse440-wi19](https://github.com/uwcse440/web-cse440-wi19)</p>

You will submit your website as a set of static files in your project directory:

`angular-workspace/src/assets/projects/**projectpath**`
 
It is also linked via a thumb from the projects page:

<p>[Projects Page](/projects.html)</p>

You should provide an appropriate 150x150 thumb at:

`angular-workspace/src/assets/projects/**projectpath**/project_thumb.png`

You can build your website however you like, but everything needed for your site must be in your directory.
Do not attempt to integrate with the functionality used for this course website.
Simply build your website and submit the set of static files to be served from your directory. 
Because you must provide a set of static files for your website, you may not use external site builders (e.g., Wix).

Because your website will be served from a directory, be sure to use relative paths within your source.

You will later add your video to the website. You may want to plan ahead for that additional content.

#### Samples from Prior Offerings

Samples from prior offerings include:

<app-assignment-samples sampleToLink="website"></app-assignment-samples>
  
Note that details of assignments may have changed since prior offerings, so their reports may not map to the current project.
Also note these samples are intended to illustrate a variety of approaches, none of which is intended to be ideal or exemplary.
Be sure to understand and carefully consider project requirements and feedback from the course staff in the context of your own work.

#### Submission

Submit a pull request containing your website. We will merge as quickly as possible. 
You can submit multiple requests as needed to fix issues or improve your website.
Your request should not modify anything outside your project website.

Submit simple pull requests early so that you become familiar with this functionality.
Do not wait until the final moments to begin to learn how to do this.

If you are absolutely unable to submit a pull request, submit via Canvas here:

<app-assignment-submission-link linkSubmission="{{ page.link_project_4a }}"></app-assignment-submission-link>

#### Contribution Statement

<app-assignment-contribution-statement></app-assignment-contribution-statement>

#### Grading

This milestone will be graded on a scale of __8 points__:

1.  __Completeness of Content__: (3 points)
2.  __Appropriately Clear and Polished Presentation__: (3 points)
3.  __Submitted via Pull Request__: (2 points)

Your website should be complete and will be evaluated as such.
But later critique and refinement will help further improve it before the final poster session.

### 4b: Initial Video Prototype

<app-assignment-due-text dueText="{{ page.due_project_4b }}"></app-assignment-due-text>

The goal of this milestone is to create a video that communicates your design to a broad audience.

Remember it should probably not be more than 2 minutes long.

You are required to include appropriate captions for the accessibility of your video. 
The staff has prepared simple instructions on how to do that using a script of your video together with YouTube's captioning tools:

<p>[https://canvas.uw.edu/files/53767196/download?download_frd=1](https://canvas.uw.edu/files/53767196/download?download_frd=1)</p>

Be sure to check the quality of the resulting captions and correct them as necessary.

<!--
Submit your video prototype in a portable and playable format.
It should be sufficiently high-resolution for projection, but sufficiently compressed that it can be played on a typical laptop. 
Specifically, it should be playable on a Windows laptop and Mac OS laptop without special codecs installed (e.g., H.264 in an mp4 container). 
It should be less than 50 MB in size. 

We have had good experiences encoding video using the open-source tool HandBrake together with its presets.

If you contact us regarding early drafts of your video, we will test that they play properly.
-->

#### Samples from Prior Offerings

Samples from prior offerings include:

<app-assignment-samples sampleToLink="4b"></app-assignment-samples>

Note that details of assignments may have changed since prior offerings, so their reports may not map to the current project.
Also note these samples are intended to illustrate a variety of approaches, none of which is intended to be ideal or exemplary.
Be sure to understand and carefully consider project requirements and feedback from the course staff in the context of your own work.

#### Submission

Submit via Canvas here: 

<app-assignment-submission-link linkSubmission="{{ page.link_project_4b }}"></app-assignment-submission-link>

#### Contribution Statement

<app-assignment-contribution-statement></app-assignment-contribution-statement>

#### Grading

This milestone will be graded on a scale of __6 points__:

1.  __Conveys Problem, Design, Context, and Satisfaction__: (3 points)
2.  __Appropriately Clear, Polished, and Timed__: (3 points)
3.  __Appropriately Captioned for Accessibility__: (3 points)

Your video prototype should be complete and will be evaluated as such.
But later critique and refinement will help further improve it before the final poster session.

### 4c: Initial Poster and Pitch

<app-assignment-due-text dueText="{{ page.due_project_4c }}"></app-assignment-due-text>

The goal of this milestone is to create a poster that communicates your design to a broad audience.

Your poster should include:

- Logo
- Project Title
- Your Names
- Problem
- Value Proposition
- Key Functionality
- Design Process and Iteration

Your poster should include images and limited amounts of text.

An effective poster size is 32"x40". A PowerPoint template is available here:

[Cow Project PowerPoint template](/assets/samples/4c/poster_template.ppt)

You should heavily modify the template to be unique and represent your project.

During the final poster session, your team will give a one minute pitch to a small group of judges. 

Be prepared to give your pitch.
Course staff and other students will give feedback so you can improve before the final poster session.

#### Samples from Prior Offerings

Samples from prior offerings include:

<app-assignment-samples sampleToLink="4c"></app-assignment-samples>

Note that details of assignments may have changed since prior offerings, so their reports may not map to the current project.
Also note these samples are intended to illustrate a variety of approaches, none of which is intended to be ideal or exemplary.
Be sure to understand and carefully consider project requirements and feedback from the course staff in the context of your own work.

#### Submission

Submit your poster via Canvas here: 

<app-assignment-submission-link linkSubmission="{{ page.link_project_4c }}"></app-assignment-submission-link>

Your poster may be in PPT, PPTX, or PDF format. 
We have a color plotter that can print posters this size. 
Your source file is due as above, we will then coordinate with you for proofreading and printing.

Be prepared to give your pitch.

#### Contribution Statement

<app-assignment-contribution-statement></app-assignment-contribution-statement>

#### Grading

This milestone will be graded on a scale of __8 points__:

1.  __Initial Poster__: (3 points)
2.  __Initial Pitch__: (3 points)
3. __Clarity and Presentation__: (2 points)

### 4d: Final Poster, Final Video, Final Website

<app-assignment-due-text dueText="{{ page.due_project_4d }}"></app-assignment-due-text>

Course staff need your finalized poster as soon as possible, to organize printing and preparing for the poster session.

Finalize your video prototype and website so we can finalize grading.

#### Submission

Submit your final poster as soon as possible here:

<app-assignment-submission-link linkSubmission="{{ page.link_project_4d_poster }}"></app-assignment-submission-link>

Submit a pull request containing your website. We will merge as quickly as possible. 
You can submit multiple requests if needed to fix issues or improve your website.
Your request should not modify anything outside your project website.

Submit simple pull requests early so that you become familiar with this functionality.
Do not wait until the final moments to begin to learn how to do this.

Depending on how you embed your video in your website, it may or may not be part of the pull request.
For example, embedding a YouTube or Vimeo player does not give us your video.
We therefore explicitly ask that final videos also be submitted via Canvas here: 

<app-assignment-submission-link linkSubmission="{{ page.link_project_4d_video }}"></app-assignment-submission-link>

#### Contribution Statement

<app-assignment-contribution-statement></app-assignment-contribution-statement>

#### Grading

Your final video, final website, and final poster will each be graded on a scale of __10 points__.

#### Poster

- __Content__: (5 points)
  - Includes all of the points listed above
  - Key features of the design are clear
  - Gives insight into the design process
- __Presentation__: (5 points)
  - Large images that show the key parts of the design
  - Only minimal and appropriate use of text
  - Text is large and legible
  - Colors and fonts are a pleasing combination and easy to read

#### Video Prototype

- __Content__: (7 points)
  - Conveys the problem addressed by the design
  - Conveys the design itself
  - Conveys the context of interaction
  - Conveys the satisfaction of the design  
- __Presentation__: (3 points)
  - Reasonable level of production value
  - Appropriately edited and paced

#### Website

- __Content__: (5 points)
  - Includes all of the points listed above
  - Key features of the design are clear
  - Gives insight into the design process
  - Links to your reports and video prototype
- __Presentation__: (5 points)
  - Looks professional and is something you would consider including in a design portfolio

### 4e: Team Peer Feedback

<app-assignment-due-text dueText="{{ page.due_project_4e }}"></app-assignment-due-text>

Submit peer feedback using the form distributed to the class by email.

### 4f: Poster Session

<app-assignment-due-text dueText="{{ page.due_project_4f }}"></app-assignment-due-text>

Come to the poster session to show off your work and engage with your classmates.
Present your pitch to a team of judges.

Take the opportunity present your work, chat with judges,
engage with other students, and reflect on a busy and productive quarter.

We will not be conducting any evaluation at the poster session itself. 
