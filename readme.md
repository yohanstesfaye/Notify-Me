# Push Notification

A simple javascript push notification library for a websites.

## How to use

to add a push notification to your website add

1. Add/link javascript file from **dist** folder to your website
2. make a function call to on javascript


### Request Notification Permission

```js
pushNotification.requestPermission();
```

### Get Notification Permission
get the status of website notification permission. return values are **default**, **granted** and **denied**

```js

pushNotification.permission();
```

### Show notification

to make a push notification make a call to member function **notify** it will have an object argument **option** which have 3 important properties **title**, **tag**, **message** other more optional properties.

``` js
pushNotification.notify({
    title: "Title",
    tag: "tag",
    message: "Notification body/message",
});
```

## Parameters

| Parameter | description | value | Default | Note|
|----|------|----|----|------ |
|__title__|add titlte to notification | _string_ | _null_|Important|
|**tag**|linking morethan one notification together| _string_ | _null_|Important|
|__message__|notification body| _string_ | _null_|Important|
|__icon__|url address to icon/logo|_url_|_null_||
|**image**|url address to image|_url_|_null_|[not supported by all browsers](https://developer.mozilla.org/en-US/docs/Web/API/Notification/image#browser_compatibility)|
|**silent**|intended to fire a silent notification|_boolean_|_false_|[not supported by all browsers](https://developer.mozilla.org/en-US/docs/Web/API/Notification/silent#browser_compatibility)|
|**renotify**|intended to fire a silent notification|_boolean_|_true_|[not supported by all browsers](https://developer.mozilla.org/en-US/docs/Web/API/Notification/renotify#browser_compatibility)|
