# Framer Feedback Module
The Feedback Module for Framer makes it easier for you to prototype with feedback messages. It allows you to easily created a Feedback component in any part of your prototype.

## Examples
1. ![Share permalink]()
2.

## Generic Feedback
By default, the feedback component includes a dismissable icon at the end of the message. This is often used when you wish to show the user a message that needs their attention.

![generic feedback](https://media.giphy.com/media/3oFzm0oNwQ9gb1ARcQ/giphy.gif)

```coffee
button.onClick ->
  feedback = new Feedback
    text: 'This is a feedback with a dismissable button.'
```

## Auto Dismiss Feedback
If an `autoDimiss` object is passed in as an option, it will dismisses itself after a set time.

![auto dismiss feedback](https://media.giphy.com/media/3ohc13JxwiMcnnXf0c/giphy.gif)

```coffee
button.onClick ->
  feedback = new Feedback
    text: 'This is a feedback with a self destruct timer.'
    autoDismiss:
      duration: 4
```
