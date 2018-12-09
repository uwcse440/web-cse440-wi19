# web-cse440-wi19

[![Build Status](https://travis-ci.org/uwcse440/web-cse440-au19.svg?branch=master)](https://travis-ci.org/uwcse440/web-cse440-au19)

A fogies project used as a template for other projects.

Provides for dependency management, tasks via the invoke tool, and testing.

## Project Dependencies

This project is based on a template:

[https://github.com/fogies/invoke-base](https://github.com/fogies/invoke-base)

Runtime dependencies for this project are:
- Python 3.6.6

See [Installation for Windows](https://github.com/uwcse440/web-cse440-au19/blob/master/readme/install_windows.md).

See [Installation for Mac](https://github.com/uwcse440/web-cse440-au19/blob/master/readme/install_mac.md).

## Tasks

This project uses Invoke for task execution. Available tasks can be listed:

`invoke -l`

See [Additional Task Documentation](https://github.com/uwcse440/web-cse440-au19/blob/master/readme/invoke.md).

Frequently used tasks will include:

### compile_config

Compile files specified in `_base_config.yml`, via key `compile_config : entries`.

`invoke compile_config` 

### dependencies_ensure

Ensure dependencies are installed.

`invoke dependencies_ensure` 

