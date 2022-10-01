
function pushNotification(option) {
    let duration = 2000;
    let title = "Notification";
    let body = "Message is here";

    Notification.requestPermission().then(response => {
        if (response==="granted") {
            const notification = new Notification(title, {
                body: "This is a message body",
                icon: "icon.png"
            });
       } 
    });
}