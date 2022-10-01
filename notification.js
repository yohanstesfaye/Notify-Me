
var pushNotification = function (option) {
    let image = null;

    if (option.image !== null) {
        image = option.image;
    }
    if ("Notification" in window) {

        if (Notification.permission === "granted") {
            const notification=new Notification(option.title, {
                body: option.message,
                icon: option.icon,
                tag: option.tag,
                renotify: true,
                image: image
            });   
            notification.addEventListener("show",e => {
                console.log(e); 
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
