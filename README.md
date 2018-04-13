## Colony frontend coding challenge

I'll be building a simple react component: an avatar picker. It looks like this:

![Pick an avatar](https://github.com/JoinColony/coding-challenge/raw/master/avatar_picker.gif "Pick me!")

The user clicks on the avatar to open a popover which allows the user to choose another avatar from the list. After a click a (fake) HTTP request is made (while a loading spinner runs), the popover closes and the new avatar will appear in the inital view.

### Design and behaviour:

* The initially shown avatar is the first in the given list of avatars
* The initial avatar which opens the popover has a border of 1px on hover and active state
* The avatar icons are shown in groups of 4, aligned left (with 6 icons it will exactly look like it does in the gif)
* The popover opens with a scaling animation that overbounces a bit (see gif; you're free to choose values for the animation that look good in your opinion, or close to what you see above)
* The currently chosen avatar has a blue border of 3px
* The avatar list icons have grey border and are overlaid by a blue colored area with an opacity of 20% on hover
* The loading spinner should look like shown above. It is also blue.
* The popover fades out with a scaling animation (no overbounce)
* A click outside the popover area will result in the popover closing
* Simulate a server request/response by showing the spinner for exactly one second before choosing the avatar
* The popover is closed when an avatar is chosen

### Usage

* npm install
* npm start/ yarn start
* open http://localhost:3000

### Tesing

* npm test or yarn test