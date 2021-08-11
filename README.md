# EmployIn

A tinder-like app for employers finding candidates for job positions. A user can navigate to specific pages through the navigation bar. They can create new posts, swipe on qualified candidates for a job posting, view/call/email candidate profiles, and view personal business profile as well.

## Contributors

- [Leam Murphy](https://github.com/leammurphy)
- [Alex Li](https://github.com/a-218)
- [John Lowie](https://github.com/JohnLowie4)

## Demo

![EmployIn App Navigation](https://youtu.be/28jZGhbCa4Y)

## Notes

This app requires node version 12 or higher and runs on [expo](https://expo.dev).

This app is also emulated through an Android phone, some iPhone simulations may work but it is not a guaranteed.

## Warnings

This app is developed on apple and linux computers using expo

Due to iOS and Android development security features, mobile development with react native only allows secured HTTP requests. Connecting the app to [EmployIn-Server](https://github.com/JohnLowie4/EmployIn-Server) while using the user's IP address instead of `localhost` is a work-around for this. Please follow the setup instructions in order not to leak your IP address to anyone.

The call and email features on the app are only available for users running the app through the expo app on Google play or the app store.

## Dependencies

- @react-navigation/bottom-tabs
- @react-navigation/native
- @react-navigation/stack
- axios
- expo
- expo-status-bar
- express
- react
- react-dom
- react-native
- react-native-axios
- react-native-email
- react-native-gesture-handler
- react-native-phone-call
- react-native-size-matters
- react-native-web

## Setup

1. Go to the root directory and run `npm install` to install dependencies
2. Make a copy of the `src/hooks/ip.example.js` as `ip.js` and save in the same folder. (Make sure you follow this instruction carefully, as the `ip.js` file is [ignored](https://github.com/JohnLowie4/EmployIn/blob/master/.gitignore))
3. Follow the instructions in `ip.example.js` to connect to the server.
4. Open the terminal and run the following command in the root directory:
   `npm start`
5. Open and run your favorite mobile emulator/simulator or through your phone with the expo app on [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_CA&gl=US) or on the [Apple App Store](https://apps.apple.com/ca/app/expo-go/id982107779).
