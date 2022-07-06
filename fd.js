addEventListener("fetch", (event) => {
  let url = new URL(event.request.url);
  url.hostname = "appname.herokuapp.com";
  let request = new Request(url, event.request);
  event.respondWith(fetch(request));
});
