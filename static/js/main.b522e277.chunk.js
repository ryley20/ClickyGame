(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:"1",image:"https://github.com/ryley20/ClickyGame/blob/gh-pages/reactapp/images/falco.jpg?raw=truegit a"},{id:"2",image:"https://files.slack.com/files-pri/TJQUN385V-FLKNJ1H5Z/bowser.jpg"},{id:"3",image:"https://files.slack.com/files-pri/TJQUN385V-FLQQ30LEM/kirby.jpg"},{id:"4",image:"https://files.slack.com/files-pri/TJQUN385V-FLQQ30KH7/jigglypuff.jpg"},{id:"5",image:"https://files.slack.com/files-pri/TJQUN385V-FLWLAND9S/ice_climbers.jpg"},{id:"6",image:"https://files.slack.com/files-pri/TJQUN385V-FLX56KXN1/ganandorf.jpg"},{id:"7",image:"https://files.slack.com/files-pri/TJQUN385V-FLZ94P3SS/fox.jpg"},{id:"8",image:"https://files.slack.com/files-pri/TJQUN385V-FLX56KWDT/dr_mario.jpg"},{id:"9",image:"https://github.com/ryley20/ClickyGame/blob/gh-pages/reactapp/images/DK.jpg?raw=true"},{id:"10",image:"https://files.slack.com/files-pri/TJQUN385V-FLZ94P2LW/cptn_falcon.jpg"},{id:"11",image:"https://files.slack.com/files-pri/TJQUN385V-FLX4SMUG0/link.jpg"},{id:"12",image:"https://files.slack.com/files-pri/TJQUN385V-FLQQ9R1LH/luigi.jpg"},{id:"13",image:"https://files.slack.com/files-pri/TJQUN385V-FLWLHJ92Q/mario.jpg"},{id:"14",image:"https://files.slack.com/files-pri/TJQUN385V-FLWLHJAF6/marth.jpg"},{id:"15",image:"https://files.slack.com/files-pri/TJQUN385V-FLKNQS55Z/mewtwo.jpg"},{id:"16",image:"https://files.slack.com/files-pri/TJQUN385V-FLZ0NUA4F/mr_g_w.jpg"},{id:"17",image:"https://files.slack.com/files-pri/TJQUN385V-FLX4SMVT2/ness.jpg"},{id:"18",image:"https://files.slack.com/files-pri/TJQUN385V-FLX4SMX40/peach.jpg"},{id:"19",image:"https://files.slack.com/files-pri/TJQUN385V-FLZ9BKSMU/pikachu.jpg"},{id:"20",image:"https://files.slack.com/files-pri/TJQUN385V-FLQQ9R5C1/roy.jpg"},{id:"21",image:"https://files.slack.com/files-pri/TJQUN385V-FLKNK6L7L/samus.jpg"},{id:"22",image:"https://files.slack.com/files-pri/TJQUN385V-FLWLSUVJ8/yoshi.jpg"},{id:"23",image:"https://files.slack.com/files-pri/TJQUN385V-FLWLSUVK6/young_link.jpg"},{id:"24",image:"https://files.slack.com/files-pri/TJQUN385V-FLKNK6Q3U/zelda.jpg"}]},,,,,,,,function(e,t,i){e.exports=i(19)},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var a=i(0),c=i.n(a),r=i(3),o=i.n(r),s=(i(15),i(4)),n=i(5),l=i(7),m=i(6),p=i(8),g=(i(16),{bgDark:{backgroundColor:"rgb(1,0,1)"}}),f=function(e){return c.a.createElement("header",{style:g.bgDark,className:" w-100 ph3 pv3 pv2-ns ph4-m ph5-l tc"},c.a.createElement("nav",{className:"f6 fw6 ttu tracked"},c.a.createElement("p",{className:"link dim white dib mr3",title:"Home"},"The Game"),c.a.createElement("p",{className:"link dim white dib mr3"},"Status: ",e.status),c.a.createElement("p",{className:"link dim white dib mr3",title:"Store"},"Score: ",e.currentScore),c.a.createElement("p",{className:"link dim white dib",title:"Contact"},"Top Score: ",e.topScore)))},d={logoIcon:{width:250,heigth:200},bgDark:{backgroundColor:"rgb(1,0,1)"}},u=function(e){return c.a.createElement("article",{style:d.bgDark,className:"mw7 center ph3 ph5-ns tc br2 pv3 bg-black-90 mb5 animated fadeIn"},c.a.createElement("img",{style:d.logoIcon,className:"logoIcon",src:"https://i.ytimg.com/vi/EhgDibw7vB4/maxresdefault.jpg",alt:"smashbroslogo"}),c.a.createElement("h2",{className:"fw2 f4 lh-copy mt0 mb3 white animated fadeIn slower"},"Click on a character to earn points, but don't click the same character twice or you lose!"))},h=function(e){return c.a.createElement("section",{id:e.id,className:"tc pa3 hvr-float-shadow animated zoomInUp",value:e.id,onClick:function(){return e.clickedPlayer(e.id)}},c.a.createElement("article",{className:"w4 pa2 "},c.a.createElement("img",{src:e.image,className:"db",alt:"game-char"})))},k=i(1),w=(i(17),function(e){for(var t=e.length;t>0;){var i=Math.floor(Math.random()*t),a=e[--t];e[t]=e[i],e[i]=a}return e}),v=function(e){function t(){var e,i;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(i=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={currentScore:0,topScore:0,result:"",clicked:[],Icons:k,gameOver:!1},i.clickedPlayer=function(e){console.log("Picture clicked with id: ".concat(e)),i.state.clicked.includes(e)?i.resetGame():(i.pointIncrease(),i.state.clicked.push(e),i.setState({gameOver:!1}))},i.pointIncrease=function(){var e=i.state.currentScore+1;console.log("the score is ".concat(e)),e===i.state.Icons.length?i.setState({result:"You win! Start clicking to play again!",topScore:e,currentScore:0,clicked:[],Icons:k,gameOver:!1}):e>i.state.topScore?i.setState({topScore:e,currentScore:e,result:"Correct! New high score!"}):i.setState({currentScore:e,result:"Correct!"}),i.resetIconArray()},i.resetGame=function(){i.setState({points:0,currentScore:0,topScore:i.state.topScore,result:"You Lost",clicked:[],Icons:k,gameOver:!0}),console.log("Game over? ",i.state.gameOver),i.resetIconArray()},i.resetIconArray=function(){var e=w(k);i.setState({Icons:e})},i}return Object(p.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){this.setState({result:"Click a player to get started"})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement(f,{topScore:this.state.topScore,currentScore:this.state.currentScore,status:this.state.result}),c.a.createElement(u,null),c.a.createElement("div",{className:"mainStyle"},this.state.Icons.map(function(t){return c.a.createElement(h,{id:t.id,image:t.image,clickedPlayer:e.clickedPlayer})})))}}]),t}(a.Component),N=(i(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function S(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(c.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/ClickyGame",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/ClickyGame","/service-worker.js");N?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):S(e)})}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.b522e277.chunk.js.map