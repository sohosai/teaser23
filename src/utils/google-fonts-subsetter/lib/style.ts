import path from "path";
import fs from "fs";
import type { StylesheetAsset } from "astro/app/types";
import postcss from "postcss";

export function getStyleSheet(style: StylesheetAsset) {
  if (style.type == "inline") {
    return style.content;
  } else if (style.type == "external") {
    const src = path.join("dist", style.src);
    return fs.readFileSync(src).toString();
  }
}

parseStyleSheet(
  ` @charset "UTF-8";/*! destyle.css v4.0.0 | MIT License | https://github.com/nicolas-cusan/destyle.css */*,:before,:after{box-sizing:border-box;border-style:solid;border-width:0}html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0}main{display:block}p,table,blockquote,address,pre,iframe,form,figure,dl{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;margin:0}ul,ol{margin:0;padding:0;list-style:none}dt{font-weight:700}dd{margin-left:0}hr{box-sizing:content-box;height:0;overflow:visible;border-top-width:1px;margin:0;clear:both;color:inherit}pre{font-family:monospace,monospace;font-size:inherit}address{font-style:inherit}a{background-color:transparent;text-decoration:none;color:inherit}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:inherit}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}svg,img,embed,object,iframe{vertical-align:bottom}button,input,optgroup,select,textarea{-webkit-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;background:transparent;padding:0;margin:0;border-radius:0;text-align:inherit;text-transform:inherit}button,[type=button],[type=reset],[type=submit]{cursor:pointer}button:disabled,[type=button]:disabled,[type=reset]:disabled,[type=submit]:disabled{cursor:default}:-moz-focusring{outline:auto}select:disabled{opacity:inherit}option{padding:0}fieldset{margin:0;padding:0;min-width:0}legend{padding:0}progress{vertical-align:baseline}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=number]{-moz-appearance:textfield}label[for]{cursor:pointer}details{display:block}summary{display:list-item}[contenteditable]:focus{outline:auto}table{border-color:inherit;border-collapse:collapse}caption{text-align:left}td,th{vertical-align:top;padding:0}th{text-align:left;font-weight:700}:target{scroll-margin-top:4rem}body{display:flex;flex-direction:column;min-height:100vh;font-family:Mulish,Arial,Hiragino Kaku Gothic ProN,ヒラギノ角ゴ ProN W3,ヒラギノ角ゴシック,Hiragino Sans,Noto Sans Japanese,Noto Sans JP,Noto Sans CJK JP,YuGothic,Yu Gothic,sans-serif}h1{font-size:4rem;font-weight:300}@media screen and (max-width: 899px){h1{font-size:3.2em}}h2{font-size:1.5rem;font-weight:400;line-height:1.5}h3{font-size:1.125rem;font-weight:400}p{line-height:1.8}a{color:#666;text-decoration:underline}address{font-style:normal}hr{border:none}small{font-size:.9rem}dt{font-weight:inherit}main{flex-grow:1;background-color:#f1f1f1}main section{margin:1.5rem 0}main h2{font-weight:600;margin:.25em 0;line-height:1.5;border-inline-start:.25em solid rgb(237,109,31);padding-inline-start:1ch}.aria{position:absolute;white-space:nowrap;width:1px;height:1px;overflow:hidden;border:0;padding:0;clip-path:inset(50%);margin:-1px}span[aria-hidden=true]{display:none}nav:where(.astro-3EF6KSR2){position:fixed;width:100%;transition:background-color .25s ease}nav:where(.astro-3EF6KSR2) #navigation-wrapper:where(.astro-3EF6KSR2){display:flex;justify-content:space-between}@media screen and (min-width: 900px){nav:where(.astro-3EF6KSR2) #navigation-wrapper:where(.astro-3EF6KSR2){flex-direction:row;align-items:center}}@media screen and (max-width: 899px){nav:where(.astro-3EF6KSR2) #navigation-wrapper:where(.astro-3EF6KSR2){flex-direction:column;align-items:flex-start}}nav:where(.astro-3EF6KSR2) #navigation-menu-wrapper:where(.astro-3EF6KSR2){display:flex;height:4rem;flex-direction:row;align-items:center;justify-content:space-between}nav:where(.astro-3EF6KSR2) #navigation-menu-wrapper:where(.astro-3EF6KSR2) .logo:where(.astro-3EF6KSR2){padding:.75em 0}nav:where(.astro-3EF6KSR2) #navigation-menu-wrapper:where(.astro-3EF6KSR2) .logo:where(.astro-3EF6KSR2) img:where(.astro-3EF6KSR2){height:2.5em;margin:0}@media screen and (max-width: 899px){nav:where(.astro-3EF6KSR2) #navigation-menu-wrapper:where(.astro-3EF6KSR2),nav:where(.astro-3EF6KSR2) #navigation-items:where(.astro-3EF6KSR2){width:100%;max-width:1120px;margin-inline:auto;padding-inline:min(1.25rem,4.75vw)}}@media screen and (min-width: 900px){nav:where(.astro-3EF6KSR2) #navigation-wrapper:where(.astro-3EF6KSR2){max-width:1120px;margin-inline:auto;padding-inline:min(1.25rem,4.75vw);width:100%}}#navigation-items:where(.astro-3EF6KSR2){display:flex;transition:opacity .5s ease}#navigation-items:where(.astro-3EF6KSR2)[aria-hidden=true]{display:none}#navigation-items:where(.astro-3EF6KSR2)[aria-hidden=false]{height:auto}#navigation-items:where(.astro-3EF6KSR2) a:where(.astro-3EF6KSR2){position:relative;font-size:1rem;text-decoration:none}@media screen and (min-width: 900px){#navigation-items:where(.astro-3EF6KSR2){flex-direction:row;gap:0 1em}#navigation-items:where(.astro-3EF6KSR2) li:where(.astro-3EF6KSR2){margin:0}#navigation-items:where(.astro-3EF6KSR2) a:where(.astro-3EF6KSR2){display:inline;padding:1em 0}}@media screen and (max-width: 899px){#navigation-items:where(.astro-3EF6KSR2){flex-direction:column;width:100%;padding-block-end:.75em}#navigation-items:where(.astro-3EF6KSR2) li:where(.astro-3EF6KSR2){width:100%;margin:.5em 0}#navigation-items:where(.astro-3EF6KSR2) a:where(.astro-3EF6KSR2){margin:0 auto;max-width:1120px}}nav:where(.astro-3EF6KSR2)[data-navigation_style=transparent]{background-color:#00000040}nav:where(.astro-3EF6KSR2)[data-navigation_style=transparent][aria-expanded=true]{background-color:#000000bf}nav:where(.astro-3EF6KSR2)[data-navigation_style=transparent] .logo-black:where(.astro-3EF6KSR2){display:none}nav:where(.astro-3EF6KSR2)[data-navigation_style=transparent] .logo-white:where(.astro-3EF6KSR2){display:block}nav:where(.astro-3EF6KSR2)[data-navigation_style=transparent] li:where(.astro-3EF6KSR2) a:where(.astro-3EF6KSR2){color:#fff}@media screen and (min-width: 900px){nav:where(.astro-3EF6KSR2)[data-navigation_style=transparent] li:where(.astro-3EF6KSR2) a:where(.astro-3EF6KSR2):before{content:"";display:inline-block;height:100%;width:100%;position:absolute;top:0;left:0;z-index:-1;border-radius:1.5rem;background:linear-gradient(rgb(30,184,203),rgb(237,109,31));filter:blur(1rem);opacity:0;transition:opacity .25s ease}nav:where(.astro-3EF6KSR2)[data-navigation_style=transparent] li:where(.astro-3EF6KSR2) a:where(.astro-3EF6KSR2):hover:before{opacity:50%}}@media screen and (max-width: 899px){nav:where(.astro-3EF6KSR2)[data-navigation_style=transparent] li:where(.astro-3EF6KSR2) a:where(.astro-3EF6KSR2){transition:color .25s ease}nav:where(.astro-3EF6KSR2)[data-navigation_style=transparent] li:where(.astro-3EF6KSR2) a:where(.astro-3EF6KSR2):hover{color:#1eb8cb}}nav:where(.astro-3EF6KSR2)[data-navigation_style=transparent] :where(.astro-3EF6KSR2)[astro-icon=hamburger-menu]{stroke:#fff}nav:where(.astro-3EF6KSR2)[data-navigation_style=white]{box-shadow:#0000001a 0 1px 4px}@media screen and (min-width: 900px){nav:where(.astro-3EF6KSR2)[data-navigation_style=white]{background-color:#f1f1f1}}@media screen and (max-width: 899px){nav:where(.astro-3EF6KSR2)[data-navigation_style=white] #navigation-menu-wrapper:where(.astro-3EF6KSR2){background-color:#f1f1f1}nav:where(.astro-3EF6KSR2)[data-navigation_style=white] ul:where(.astro-3EF6KSR2){background-color:#f1f1f1e6;backdrop-filter:blur(10px)}}nav:where(.astro-3EF6KSR2)[data-navigation_style=white] .logo-black:where(.astro-3EF6KSR2){display:block}nav:where(.astro-3EF6KSR2)[data-navigation_style=white] .logo-white:where(.astro-3EF6KSR2){display:none}nav:where(.astro-3EF6KSR2)[data-navigation_style=white] li:where(.astro-3EF6KSR2) a:where(.astro-3EF6KSR2){color:#000;transition:color .5s ease}nav:where(.astro-3EF6KSR2)[data-navigation_style=white] li:where(.astro-3EF6KSR2) a:where(.astro-3EF6KSR2):hover{color:#1eb8cb}nav:where(.astro-3EF6KSR2)[data-navigation_style=white] :where(.astro-3EF6KSR2)[astro-icon=hamburger-menu]{stroke:#000}#hamburger-button:where(.astro-3EF6KSR2){cursor:pointer}#hamburger-button:where(.astro-3EF6KSR2) :where(.astro-3EF6KSR2)[astro-icon=hamburger-menu]{transition:all 50ms ease}#hamburger-button:where(.astro-3EF6KSR2) :where(.astro-3EF6KSR2)[astro-icon=hamburger-menu]:hover{width:110%;height:110%;margin-inline-start:-5%}@media screen and (min-width: 900px){#hamburger-button:where(.astro-3EF6KSR2){display:none}}@media screen and (max-width: 899px){#hamburger-button:where(.astro-3EF6KSR2){display:block}}@media screen and (max-width: 899px){#navigation-items:where(.astro-3EF6KSR2)[aria-hidden=false] li:where(.astro-3EF6KSR2):nth-child(1){animation:.4s ease 0s 1 normal both slidein}#navigation-items:where(.astro-3EF6KSR2)[aria-hidden=false] li:where(.astro-3EF6KSR2):nth-child(2){animation:.4s ease 50ms 1 normal both slidein}#navigation-items:where(.astro-3EF6KSR2)[aria-hidden=false] li:where(.astro-3EF6KSR2):nth-child(3){animation:.4s ease .1s 1 normal both slidein}#navigation-items:where(.astro-3EF6KSR2)[aria-hidden=false] li:where(.astro-3EF6KSR2):nth-child(4){animation:.4s ease .15s 1 normal both slidein}@keyframes slidein{0%{margin-inline-start:-16em}to{margin-inline-start:0}}}@media screen and (max-width: 899px) and (prefers-reduced-motion){#navigation-items:where(.astro-3EF6KSR2)[aria-hidden=false] li:where(.astro-3EF6KSR2){margin:0}#navigation-items:where(.astro-3EF6KSR2)[aria-hidden=false] li:where(.astro-3EF6KSR2):nth-child(n){animation-name:dissolve}}footer:where(.astro-SZ7XMLTE){background-color:#e0e0e0;padding:2.5rem 0}footer:where(.astro-SZ7XMLTE) address:where(.astro-SZ7XMLTE){padding:.5em 0}footer:where(.astro-SZ7XMLTE) address:where(.astro-SZ7XMLTE) .address:where(.astro-SZ7XMLTE){padding:.25em 0}dl:where(.astro-SZ7XMLTE){display:grid;grid-template-rows:auto auto;justify-content:start;align-content:center;gap:.5em 1em;margin:.75em 0}dl:where(.astro-SZ7XMLTE) dt:where(.astro-SZ7XMLTE){grid-column:1/2;padding:.125em .875em;border-radius:.25em;background-color:#666;color:#fff;text-align:center}dl:where(.astro-SZ7XMLTE) dd:where(.astro-SZ7XMLTE){grid-column:2/3}hr:where(.astro-SZ7XMLTE){background:rgb(204,204,204);height:1px;width:70%;margin:2em 0 1em}.copy:where(.astro-SZ7XMLTE){margin:.5em 0}    `
  //`.published-at:where(.astro-GLJZGKYK){display:block;text-align:right;font-size:.8rem}.markdown-body:where(.astro-GLJZGKYK) p{margin:1em 0}`
);

export function parseStyleSheet(styleSheet: string) {
  const root = postcss.parse(styleSheet);

  let font = [];
  root.nodes.forEach((rule) => {
    if (rule.type == "rule") {
      rule.nodes.forEach((decl) => {
        if (decl.type == "decl") {
          if (decl.prop == "font-family" && decl.value.split(",").includes("Mulish")) {
            font.push(decl);
          }
        }
      });
    }
  });

  console.log(font);
}
