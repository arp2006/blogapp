import express from "express";
import bodyParser from "body-parser";
let posts = [];

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home.ejs",{posts: posts});
});

app.get("/post", (req, res) => {
  res.render("post.ejs");
});

app.get("/compose", (req, res) => {
  res.render("compose.ejs");
});

app.post("/compose",(req,res) => {
  const post = {
    title: req.body.title,
    content: req.body.content
  };
  posts.push(post);
  res.redirect("/");
})

app.get("/posts/:title",(req,res) => {
  const p = posts.find(p=>p.title===req.params.title);
  if(p){
    res.render("post.ejs",{
      postTitle: p.title,
      postContent: p.content
    });
  }
  else
    res.status(404).send("Post not found");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});