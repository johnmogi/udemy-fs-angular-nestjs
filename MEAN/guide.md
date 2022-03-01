MUST READ: Angular CLI - Latest Version
Important - MUS READ

1) In the next lecture, we will need to install NodeJS (the Angular CLI, a tool we use for creating Angular projects, uses it).

You will learn how to install the Angular CLI and NodeJS in the next lecture but make sure that you DON'T download NodeJS version 17! Because at the moment, Angular doesn't work with that version.

Instead, download the LTS version of NodeJS. You can download that version via this link (use the "LTS" version): https://nodejs.org/en/download/

2) In addition, you might encounter dependency errors when creating new Angular projects.

This is a bug in the latest CLI version (13.1.0), published some hours ago:
https://github.com/angular/angular-cli/issues/22333
A fix is on its way:
https://github.com/angular/angular-cli/pull/22334
For now you can run npm i -g @angular/cli@13.0.4 as a workaround, and then create a new project with ng new.

3) In the next lecture, we'll create a new Angular project.

Make sure you add the --no-strict flag when running ng new (e.g. run ng new my-project --no-strict) in the next lecture.

Thereafter, this tool will ask you two questions:

1) Do you want to use the Angular Router? => Choose "No Router"

2) Which CSS pre-processor do you want to use? => Choose "CSS"