const express = require('express')
const fs = require('fs-extra')
const path = require('path');
const bodyParser = require(`body-parser`)
const jsdom = require("jsdom");
const util = require('util');
const url = require('url');

const hljs = require("highlight.js");
const md = require("markdown-it")({
  html: false,
  xhtmlOut: false,
  breaks: false,
  langPrefix: "language-",
  linkify: true,
  typographer: true,
  quotes: "“”‘’",
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          "</code></pre>"
        );
      } catch (__) {}
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  }
});

const header = fs.readFileSync('header/header.html', 'utf8');
const html_top = fs.readFileSync('header/top.html', 'utf8');
const html_top2 = fs.readFileSync('header/posttop.html', 'utf8');
const html_bottom = fs.readFileSync('header/bottom.html', 'utf8');
const doublediv = fs.readFileSync('header/dd.html', 'utf8');

const app = express()
app.use(express.static('public'));

const TITLE = "Haram Blog"
const portnum = 8090

const home_script = `
<script>

</script>
`

const aboutme_script = `
<script>
    document.getElementById('sub1').style.backgroundColor = '#e4daf0';
</script>
`

const python_script = `
<script>
    document.getElementById('sub2').style.backgroundColor = '#daf0dc';

</script>
`

const frontend_script = `
<script>
    document.getElementById('sub3').style.backgroundColor = '#dae5f0';

</script>
`

const css_script = `
<script>
    document.getElementById('sub4').style.backgroundColor = '#f3e0d2';
</script>
`

const silver_script = `
<script>
    document.getElementById('sub5').style.backgroundColor = '#e4e2e1';

</script>
`

const gold_script = `
<script>
    document.getElementById('sub6').style.backgroundColor = '#f2eece';
</script>
`


app.get("/", function (request, respond, next) {
    respond.writeHead(200);
    const data = fs.readFileSync('footer/home_footer.html', 'utf8');

    const templete = `
    ${html_top}
    ${header}
    ${data}
    ${html_bottom}
    `

    respond.end(`${templete}`);
});

app.get("/aboutme", function (request, respond, next) {
    respond.writeHead(200);
    const data = fs.readFileSync('footer/about_me.md', 'utf8');
    const data2 = fs.readFileSync('footer/aboutme_footer.html', 'utf8');
    const convert_data = md.render(data);

    templete = `
    ${html_top}
    ${header}
    ${data2}
    ${convert_data}
    ${doublediv}
    ${aboutme_script}
    ${html_bottom}
    `

    respond.end(`${templete}`);
});

app.get("/python", function (request, respond, next) {
    respond.writeHead(200);
    const data = fs.readFileSync('footer/python_footer.html', 'utf8');

    templete = `
    ${html_top}
    ${header}
    ${data}
    ${doublediv}
    ${python_script}
    ${html_bottom}
    `

    respond.end(`${templete}`);
});

app.get(`/pythonpost`, function (request, respond, next) {

    var urlParse = url.parse(request.url, true);
    var queryString = urlParse.query;

    respond.writeHead(200);
    const data = fs.readFileSync(`post_python/${queryString.name}.md`, 'utf8');
    const title = fs.readFileSync(`post_python/title/${queryString.name}.html`, 'utf8');
    const convert_data = md.render(data);

    const templete = `
    ${html_top}
    ${header}
    <div id="footer">
        <div id="bigtitle1">
            ${title}
        </div>

        <div id="contents">
    ${convert_data}
    ${doublediv}
    ${python_script}
    ${html_bottom}
    `

    respond.end(`${templete}`)
});

app.get(`/frontendpost`, function (request, respond, next) {

    var urlParse = url.parse(request.url, true);
    var queryString = urlParse.query;

    respond.writeHead(200);
    const data = fs.readFileSync(`post_frontend/${queryString.name}.md`, 'utf8');
    const title = fs.readFileSync(`post_frontend/title/${queryString.name}.html`, 'utf8');
    const convert_data = md.render(data);

    const templete = `
    ${html_top}
    ${header}
    <div id="footer">
        <div id="bigtitle1">
            ${title}
        </div>

        <div id="contents">
    ${convert_data}
    ${doublediv}
    ${frontend_script}
    ${html_bottom}
    `

    respond.end(`${templete}`)
});

app.get(`/csspost`, function (request, respond, next) {

    var urlParse = url.parse(request.url, true);
    var queryString = urlParse.query;

    respond.writeHead(200);
    const data = fs.readFileSync(`post_css/${queryString.name}.md`, 'utf8');
    const title = fs.readFileSync(`post_css/title/${queryString.name}.html`, 'utf8');
    const convert_data = md.render(data);

    const templete = `
    ${html_top}
    ${header}
    <div id="footer">
        <div id="bigtitle1">
            ${title}
        </div>

        <div id="contents">
    ${convert_data}
    ${doublediv}
    ${css_script}
    ${html_bottom}
    `

    respond.end(`${templete}`)
});

app.get(`/silverpost`, function (request, respond, next) {

    var urlParse = url.parse(request.url, true);
    var queryString = urlParse.query;

    respond.writeHead(200);
    const data2 = fs.readFileSync('footer/aboutme_footer.html', 'utf8');
    const data = fs.readFileSync(`post_python/${queryString.name}.md`, 'utf8');
    const convert_data = md.render(data);

    const templete = `
    ${html_top}
    ${header}
    ${data2}
    ${convert_data}
    ${doublediv}
    ${python_script}
    ${html_bottom}
    `

    respond.end(`${templete}`)
});

app.get(`/goldpost`, function (request, respond, next) {

    var urlParse = url.parse(request.url, true);
    var queryString = urlParse.query;

    respond.writeHead(200);
    const data2 = fs.readFileSync('footer/aboutme_footer.html', 'utf8');
    const data = fs.readFileSync(`post_python/${queryString.name}.md`, 'utf8');
    const convert_data = md.render(data);

    const templete = `
    ${html_top}
    ${header}
    ${data2}
    ${convert_data}
    ${doublediv}
    ${python_script}
    ${html_bottom}
    `

    respond.end(`${templete}`)
});

app.get("/frontend", function (request, respond, next) {
    respond.writeHead(200);
    const data = fs.readFileSync('footer/frontend_footer.html', 'utf8');

    templete = `
    ${html_top}
    ${header}
    ${data}
    ${doublediv}
    ${frontend_script}
    ${html_bottom}
    `

    respond.end(`${templete}`);
});

app.get("/css", function (request, respond, next) {
    respond.writeHead(200);
    const data = fs.readFileSync('footer/css_footer.html', 'utf8');

    templete = `
    ${html_top}
    ${header}
    ${data}
    ${doublediv}
    ${css_script}
    ${html_bottom}
    `

    respond.end(`${templete}`);
});

app.get("/silver", function (request, respond, next) {
    respond.writeHead(200);
    const data = fs.readFileSync('footer/silver_footer.html', 'utf8');

    templete = `
    ${html_top}
    ${header}
    ${data}
    ${doublediv}
    ${silver_script}
    ${html_bottom}
    `

    respond.end(`${templete}`);
});

app.get("/gold", function (request, respond, next) {
    respond.writeHead(200);
    const data = fs.readFileSync('footer/gold_footer.html', 'utf8');

    templete = `
    ${html_top}
    ${header}
    ${data}
    ${doublediv}
    ${gold_script}
    ${html_bottom}
    `

    respond.end(`${templete}`);
});


app.listen(portnum);
