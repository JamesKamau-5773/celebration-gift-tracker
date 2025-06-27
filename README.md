# celebration-gift-tracker# Advanced Celebration Tracker

#### A single-page application for tracking birthdays, anniversaries, and gift ideas with celebration reminders.

#### By **James**

## Description

This application helps users manage important celebrations by tracking dates, gift ideas, budgets, and preparation status. Built with vanilla JavaScript, it demonstrates modern frontend development practices including async API communication, DOM manipulation, and responsive design.

## Screenshot

![Celebration Gift Tracker Interface](./assets/screenshots/app-screenshot.png)

## Features

- Add celebrations with full details (name, date, gift ideas, cost)

- View upcoming celebrations (7-day highlight)

- Search celebrations

- Delete celebrations

- Responsive design 

- Notification system

## How to Use


### Requirements


- Modern web browser (Chrome, Firefox, Safari, Edge)

- Internet connection (for API access)

### Using the Live Application

1. Visit [the deployed site](https://jameskamau-5773.github.io/ celebration-gift-tracker/)

2. Add celebrations using the form
3. View upcoming events in the list
4. Use search to find specific celebrations
-

### Local Development

To run the project locally, you'll need:

- Node.js (v14+ recommended)
- Basic understanding of JavaScript
- Code editor (VS Code recommended)

#### Installation Process

1. . Clone the repository:

   ```bash
   git clone https://github.com/jameskamau-5773/celebration-gift-tracker.git 

   cd celebration-gift-tracker

2. Open index.html in your browser (connects to live API by default)  

3. For local API development:
    npm install -g json-server
    json-server --watch db.json --port 3001

  Then update BASE_URL in index.js to http://localhost:3001/   celebrations

 ## API Reference

 ### Base URL

  https://challange-json-server.onrender.com/celebrations

 ### Endpoints

 Method	    Endpoint	         Description
  GET     	   /	          Retrieve all celebrations
  POST	       /	          Add new celebration
  DELETE       / :id	      Remove celebration   


  ## Technologies Used

      .Frontend: HTML5, CSS3, Vanilla JavaScript

      .Backend: JSON Server hosted on Render

      .Icons: Font Awesome

      .Styling: CSS Variables, Gradient Backgrounds

  ## Support and Contact Details

  For questions or support:

      Email: [jameskamau5773@gmail.com]

      GitHub: @jameskamau-5773

  ## License    

    MIT License

    Copyright © 2024 James Kamau


    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.