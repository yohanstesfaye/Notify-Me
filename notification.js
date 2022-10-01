
var pushNotification = function (option) {
    let image = null;
    let silent = flase;

    /**
     * Add Image if it is passed on call
     */
    if (option.image !== null) {
        image = option.image;
    }
    /**
     * set silent from option if it passed
     */
    if (option.silent !== null) {
        image = option.silent;
    }

    /**
     * Chack browser support for Notification API
     */
    if ("Notification" in window) {

        if (Notification.permission === "granted") {
            // Show Notification
            const notification=new Notification(option.title, {
                body: option.message,
                icon: option.icon,
                tag: option.tag,
                renotify: true,
                silent: silent,
                image: image
            });  
            
            notification.addEventListener("show",e => {
                console.log(e); 
            });
        } else if (Notification.permission === "denied") {
             // Alert notification access denied
            alert("Notification Access is denied. Grant a persmission to get a notification");    
        } else {
            // Request notification permission and show notification
            Notification.requestPermission().then(response => {
                pushNotification(option);         
            });
        }

    } else {
        alert("Your browser doesnot support push notification");
    }

} 
