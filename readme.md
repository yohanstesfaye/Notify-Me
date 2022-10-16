# Push Notification

A simple javascript push notification library for a websites.
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

| Parameter | description | value | Default | Note|
|----|------|----|----|------ |
|__title__|add titlte to notification | _string_ | _null_|Important|
|**tag**|linking morethan one notification together| _string_ | _null_|Important|
|__message__|notification body| _string_ | _null_|Important|
|__icon__|url address to icon/logo|_url_|_null_||
|**image**|url address to image|_url_|_null_|not supported by all browsers|
|**silent**|intended to fire a silent notification|_boolean_|_false_|not supported by all browsers|
|**renotify**|intended to fire a silent notification|_boolean_|_true_|not supported by all browsers|

