var pushNotificationObj = function () {
    this.image = null;
    this.silent = false;
    this.renotify = true;

    this.requestPermission= () => {
        if ("Notification" in window) {
            if (Notification.permission !== "granted" || Notification.permission !== "denied") {
                Notification.requestPermission();
            }
        }
    }

    //notification permission
    this.permission = () => {
        return Notification.permission;
    }

    //show notification
    this.notify = (option) => {
        // Add Image if it is passed on call
        if (option.image !== null) this.image = option.image;

        // set silent from option if it passed
        if (option.silent !== null)  this.silent = option.silent;

        // set renotify from option if it passed
        if (option.renotify !== null) this.renotify = option.renotify;

        // Notification option constraction
        notification_option = {
            body: option.message,
            icon: option.icon,
            tag: option.tag,
            renotify: this.renotify,
            silent: this.silent,
            image: this.image,
        };

        // Chack browser support for Notification API
        if ("Notification" in window) {

            if (Notification.permission === "granted") {
                // Show Notification
                const notification=new Notification(option.title, notification_option);  
            } else if (Notification.permission === "denied") {
                // Alert notification access denied
                alert("Notification Access is denied. Grant a persmission to get a notification");    
            } else {
                // Request notification permission and show notification
                Notification.requestPermission().then(response => {
                    if (response == "granted") {
                        this.notify(option); 
                    }        
                });
            }

        } else {
            alert("Your browser doesnot support push notification");
        }
   }
}

var NotifyMe = new pushNotificationObj();
