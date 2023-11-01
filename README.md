This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

<p align="center">
  <img src="https://github.com/ZhenjaHorbach/TestTask/assets/68128028/9f0f7dc9-50b3-4a54-815c-36c115c67b5c" alt="Image description">
</p>

## Step 1: Clone the Repository and Install Dependencies
First, you need to clone the project repository and install the necessary dependencies.

```bash
# Clone the repository using Git
git clone https://github.com/ZhenjaHorbach/TestTask.git
cd TestTask

# Install project dependencies using npm
npm install

# OR using Yarn
yarn install
```

If your React Native project includes native iOS components and uses CocoaPods for dependency management, you need to run pod install to install the required iOS dependencies. Navigate to the ios directory of your project and run:

```bash
cd ios
pod install
```

## Step 2: Start the Metro Server

You will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

## More Information
For more information on setting up your React Native environment and creating a new application, you can refer to the official React Native documentation: [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup).

This is one way to run your app. You can also run it directly from within Android Studio and Xcode respectively.

