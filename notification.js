
function pushNotification(option) {

    Notification.requestPermission().then(response => {
        if (response==="granted") {
            const notification = new Notification(option.title, {
                body: option.message,
                icon: option.icon,
                tag: option.tag
            });
        } else if (response === "denied") {
            alert("Notification Access is denied. Grant a persmission to get a notification"); 
       }
    });
}