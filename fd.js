//基础
addEventListener("fetch", (event) => {
  let url = new URL(event.request.url);
  url.hostname = "appname.herokuapp.com";
  let request = new Request(url, event.request);
  event.respondWith(fetch(request));
});
//单双轮换
const SingleDay = "app0.herokuapp.com";
const DoubleDay = "app1.herokuapp.com";
addEventListener("fetch", (event) => {
  let nd = new Date();
  if (nd.getDate() % 2) {
    host = SingleDay;
  } else {
    host = DoubleDay;
  }

  let url = new URL(event.request.url);
  url.hostname = host;
  let request = new Request(url, event.request);
  event.respondWith(fetch(request));
});
