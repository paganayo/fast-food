# Fast Food Front-end
A Fast Food UI for mobile application


## Preview
![Screenshot from 2023-05-18 13-00-01](https://github.com/paganayo/fast-food/assets/117369955/44e8da21-7995-4f6e-b3d0-561c566f8aaf)
![Screenshot from 2023-05-18 13-01-32](https://github.com/paganayo/fast-food/assets/117369955/a2a985e3-9f09-4ba4-8160-847a5bcd39c1)
![Screenshot from 2023-05-18 13-01-42](https://github.com/paganayo/fast-food/assets/117369955/e3754288-d3f9-41c3-9945-a4e74e364b13)
![Screenshot from 2023-05-18 13-01-48](https://github.com/paganayo/fast-food/assets/117369955/fe8cd238-5184-47eb-ae31-39f8a946e33f)
![Screenshot from 2023-05-18 13-01-52](https://github.com/paganayo/fast-food/assets/117369955/06aa591c-9f34-4a6d-b996-639da4add76f)
![Screenshot from 2023-05-18 13-01-55](https://github.com/paganayo/fast-food/assets/117369955/aeb2c27b-2866-4985-a427-c08999ec5fc5)
![Screenshot from 2023-05-18 13-02-00](https://github.com/paganayo/fast-food/assets/117369955/f0e4243b-98b3-456a-9b74-3bbbae996134)
![Screenshot from 2023-05-18 13-03-13](https://github.com/paganayo/fast-food/assets/117369955/03251d4f-9b58-4651-9cfa-1a0e96dcac72)


## Pre-requisites
* Node & NPM environment (Latest versions)
* Ionic CLI
* Capacitor JS
* Android Studio (the front-end was optimized in Android)
* Git
* VSCODE (optional)


### Environment Setup
Please make sure you are using the latest versions of the pre-requisites

#### Node & NPM
Check if you have the latest version of node and npm. If not, download it through https://nodejs.org/en/download.
```bash
$ node --version
$ npm --version
```
#### Ionic CLI
Install the Ionic CLI with npm:
```bash
npm install -g @ionic/cli
```
If there was a previous installation of the Ionic CLI, it will need to be uninstalled due to a change in package name.
```bash
npm uninstall -g ionic
npm install -g @ionic/cli
```
#### Android Studio
You will need to install the android studio here https://developer.android.com/studio.

For the Android Studio setup guide, please go to https://developer.android.com/studio/install

#### Capacitor JS
Capacitor 5 requires a minimum of Android Studio 2022.2.1. 

For the capacitor setup guide please see https://capacitorjs.com/docs/getting-started/environment-setup


### Usage
Once the our environment setup is completed, clone the repository into your local machine
```bash
git clone https://github.com/paganayo/fast-food.git

cd fast-food

npm install
```
#### Running the app
We can run our app in the ff:
* Using terminal
* Using Ionic extension in VS Code
* Using Android Studio IDE


#### Terminal
```bash
ionic capacitor add android   // If there is no existing android platform, we need to add it to our project.

ionic capacitor build         // We need to build to make sure we copy the web assets into the specified native platform

ionic capacitor sync          // We need to sync our web and mobile to update the Capacitor native platform(s) and dependencies

ionic capacitor run           // Once the web and mobile are synced, we can now open our app. This will prompt a list of platforms you want the app to run.

```

#### Ionic Extension in VS Code
We can easily use our Ionic CLI commands in VS Code.

Open your VS Code and add the Ionic extension. Once done, please open the Ionic extension and click the following to run our app:
* Project
  * Build
  * Sync
* Run
  * Android
  * Choose the device (You need to add a Virtual device in your android studio)

#### Android Studio IDE
* Open the android studio IDE and open your project from our fast-food/android folder  
* Run the app or press Ctrl+F5


