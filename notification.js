
var pushNotification = function (option) {
    if ("Notification" in window) {
        if (Notification.permission === "granted") {
            const notification = new Notification(option.title, {
                body: option.message,
                icon: option.icon,
                tag: option.tag
            });        
        } else if (Notification.permission === "denied") {
                alert("Notification Access is denied. Grant a persmission to get a notification");    
        } else {
            Notification.requestPermission().then(response => {
                pushNotification(option);         
            });
        }
    } else {
        alert("Your browser doesnot support push notification");
    }

} 
