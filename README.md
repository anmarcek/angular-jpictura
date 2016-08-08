![jPictura](/docs/logo.png)

***

# WORK IN PROGRESS - Should NOT be used yet!

Angular jPictura is a simple AngularJS 1 library for responsive alignment of images.

## Table of contents

* [Quick start](#quick-start)
* [Options](#options)

## Quick start

### Installation

* [Download the latest release](/angular-jpictura.zip?raw=true).
* Install with [npm](https://www.npmjs.com): `npm install angular-jpictura`.

The following two files have to be used in your solution:

```
angular-jpictura/
└── dist/
    ├── css/
    │   └── angular-jpictura.min.css
    └── angular-jpictura.min.js
```

### Setup

Include ```angular-jpictura.min.css``` inside of your head tag and ```angular-jpictura.min.js``` just before the closing body tag. Be sure to include AngularJS 1 before angular-jpictura.min.js.

```html
<head>
    <title>Your Intergalactic Website</title>        
    <link rel="stylesheet" href="angular-jpictura/dist/css/angular-jpictura.min.css">
</head>
<body>
        
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
    <script src="angular-jpictura/dist/angular-jpictura.min.js"></script>
</body>
```