* modified from https://github.com/volojs/create-template

Boilerplate repo for new apps

This web project has the following setup:

* www/ - the web assets for the project
    * index.html - the entry point into the app.
    * js/
        * main.js - the top-level config script used by index.html
        * app.js - the top-level script that controls the app
    * modules/ - the directory to store project-specific scripts.
    * libs/ - the directory to hold third party scripts.
* tools/ - the build tools to optimize the project.

To optimize, run:

    volo build

This will run the "build" command in the volofile that is in this directory.

That build command creates an optimized version of the project in a
**www-built** directory. The js/app.js file will be optimized to include
all of its dependencies.

For more information on the optimizer:
http://requirejs.org/docs/optimization.html

For more information on using requirejs:
http://requirejs.org/docs/api.html
