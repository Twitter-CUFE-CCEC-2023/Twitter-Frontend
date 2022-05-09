self.addEventListener("push", (event) => {
  const data = event.data.json();
  const { title } = data;

  const body = {
    body: data.body,
  };

  event.waitUntil(self.registration.showNotification(title, body));
});
