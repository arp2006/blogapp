# Readit

A minimal blog web application built in an attempt to lean Node.js, Express.js, and EJS. 
Users can compose and view blog posts. Posts are stored in memory (no database), so they do not persist between server restarts.

## Features

- Compose new blog posts with a title and content
- View a list of all posts on the homepage
- Click on a post title to view its full content
- Dynamic routing for individual posts
- Basic styling with CSS

## Tech Stack

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- HTML/CSS

## Getting Started

### Prerequisites

- Node.js installed on your system

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arp2006/blogapp.git
   cd solarsystem
2. Install dependenciesbash
   ```bash
   npm i
3. Start server
   ```bash
   node index.js
4. Open your browser and navigate to http://localhost:3000

##Folder Structure
```
/solarsystem
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── home.ejs
│   ├── compose.ejs
│   └── post.ejs
├── public/
│   └── styles/
│       └── style.css
├── index.js
└── README.md
```
# Notes
- Posts are not saved to a database for now; they exist only during runtime. 
