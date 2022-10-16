# Push Notification

# How to use
to add a push notification to your website add

1. Add/lonk javascript file from **dist** folder to your website
2. make a function call to on javascript

``` js
pushNotification({
    title: "Title",
    tag: "tag",
    message: "Notification body/message",
});
```
# Parameters

| Parameter | Function | value | Default | Note|
|----|------|----|----|------ |
|__title__|add titlte to notification | _string_ | _null_|Important|
|__tag__|notification identifier| _string_ | _null_|Important|
|__message__|notification body| _string_ | _null_|Important|
|__icon__|url address to icon/logo|_url_|_null_||
|__image__|url address to image|_url_|_null_|may not supported by all devices/browsers|
