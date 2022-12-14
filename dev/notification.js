// navigator.serviceWorker.register("./notify-me-service-worker.js");

//Service worker registration
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("notify-me-service-worker.js")
    .then((registration1) => {
      registration1.addEventListener("updatefound", () => {
        // If updatefound is fired, it means that there's
        // a new service worker being installed.
        const installingWorker = registration.installing;
        console.log(
          "A new service worker is being installed:",
          installingWorker
        );

        // You can listen for changes to the installing service worker's
        // state via installingWorker.onstatechange
      });
    })
    .catch((error) => {
      console.error(`Service worker registration failed: ${error}`);
    });
} else {
  console.error("Service workers are not supported.");
}

//push notification object
var pushNotificationObj = function () {
    let image = null;
    let silent = false;
    let renotify = true;
    let error = null;
    let timeout = 0;
    let notification = null;
    let vibrate = [250,250,250];
    let showEvent = null;
    let closeEvent = null;
    let clickEvent = null;

     this.requestPermission=async () => {
        if ("Notification" in window) {
            if (Notification.permission === "default") {
                Notification.requestPermission().then(response => {
                    return response;
                });
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

        // add a function for on Show event
        if (option.onShow !== null) this.showEvent = option.onShow;
        
        // add a function for on Close event
        if (option.onClose !== null) this.closeEvent = option.onClose;
        
        // add a function for on Click event
        if (option.onClick !== null) this.clickEvent = option.onClick;

        // set renotify from option if it passed
        if (option.timeout !== null) this.timeout = option.timeout;

        // Notification option constraction
        notification_option = {
            body: option.message,
            icon: option.icon,
            tag: option.tag,
            renotify: this.renotify,
            silent: this.silent,
            vibrate: this.vibrate,
            image: this.image
        };

        // Chack browser support for Notification API
        if ("Notification" in window) {
            if (Notification.permission === "granted") {
                this.showNotification(option.title,notification_option);
            } else if (Notification.permission === "denied") {
                // Alert notification access denied
                this.showError();
            } else {
                // Request notification permission and show notification
                if (Notification.permission === "default") {
                    Notification.requestPermission().then(response => {
                        if (response === "granted") {
                            this.showNotification(option.title, notification_option);
                        } else {
                            this.showError();
                        }
                    });
                }
            }

        } else {
            alert("Your browser doesnot support push notification");
        }    
    },
    //show Notification
    this.showNotification = (title,option) => {
        // Show Notification
        // this.notification = new Notification(title, option);
        navigator.serviceWorker.ready.then(registration => {
            registration.showNotification(option.title, notification_option);
            //add event handler
            // registration.onnotificationclose = (event) => {
            //     console.log("Notification is close"); 
            //     alert("Here");
            // };

            // registration.onnotificationclick = (event) => {
            //     console.log("Notification is clicked"); 
            //     alert("Here");
            // };

            // console.log(registration);
        });
        
        // if (this.timeout > 0) {
        //     setTimeout(() => { 
        //         this.notification.close();
        //     }, this.timeout);
        // }
        // //event listners
        // this.notification.onClose = this.closeEvent;
        // this.notification.onClick = this.clickEvent;
        // this.notification.onShow = this.showEvent;
        
        
    }    
    
    this.showError = () => {
        alert("Notification Access is denied. Grant a persmission to get a notification here"); 
    };
}

var NotifyMe = new pushNotificationObj();


