# Notify Me

![Notify Me](./asset/Notify%20Me%20board.png)

A simple javascript push notification library for a websites. It uses a javascript Notification API and supported on all browsers for desktop and mobile.

## Get started

to use a push notification feature you need to add a push notification to your website add

1. Add/link javascript file from **dist** folder to your website
2. make a function call to on javascript

to use a push notification you access using **NotifyMe** object.


### Request Notification Permission

to get show a push notification for a user need to grant a notification access on the browser. so to do that we need to use the following method to request a notification permission.

```js
NotifyMe.requestPermission();
```

### Get Notification Permission

To check the status of status of website notification permission you can use the following method. It have a  return values **default**, **granted** or **denied**

```js
NotifyMe.permission();
```

### Show notification

to make a push notification make a call to member function **notify** it will have an object argument **option** which have 3 important properties **title**, **tag**, **message** other more optional properties.

``` js
NotifyMe.notify({
    title: "Title",
    tag: "tag",
    message: "Notification body/message",
});
```

## Methods

| Method | Description |
|--|-----|
|**requestPermission()**|make a request for notification access permission |
|**permission()**| return notification permission status|
|**notify(_option_)**|show notification|

## Properties

A properties that can be used on **Option** for **notify** method

|Properties | Description | Value | Default | Note|
|----|------|----|----|------ |
|__title__|add titlte to notification | _string_ | _null_|Important|
|**tag**|linking morethan one notification together| _string_ | _null_|Important|
|__message__|notification body| _string_ | _null_|Important|
|__icon__|url address to icon/logo|_url_|_null_||
|**image**|url address to image|_url_|_null_|[Not supported by all browsers](https://developer.mozilla.org/en-US/docs/Web/API/Notification/image#browser_compatibility)|
|**silent**|intended to fire a silent notification|_boolean_|_false_|[Not supported by all browsers](https://developer.mozilla.org/en-US/docs/Web/API/Notification/silent#browser_compatibility)|
|**renotify**|intended to fire a silent notification|_boolean_|_true_|[Not supported by all browsers](https://developer.mozilla.org/en-US/docs/Web/API/Notification/renotify#browser_compatibility)|
