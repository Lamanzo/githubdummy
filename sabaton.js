function notifyMe() {

  if (!("Notification" in window)) {
    alert("This browser does not support system notifications");
  }

  else if (Notification.permission === "granted") { // 3 == "3"   3 === "3"
    const notification = new Notification("Hi there!");
  }
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          const notification = new Notification("Hi there!");
          console.log(notification);
        }
      }
    );
  }
}
navigator.vibrate([200, 100, 200]);
