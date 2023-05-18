# Fast Food Front-end
A Fast Food UI for mobile application


## Preview
![Screenshot from 2023-05-18 13-00-01](https://github.com/paganayo/fast-food/assets/117369955/e9402339-b144-43bc-9fa6-d8ea8605739c)
![Screenshot from 2023-05-18 13-01-32](https://github.com/paganayo/fast-food/assets/117369955/2b7b6ebe-2cdd-4da8-b638-69f1d9f40827)
![Screenshot from 2023-05-18 12-59-41](https://github.com/paganayo/fast-food/assets/117369955/aeb6f12a-5c92-4c8c-94fc-8c5837305d75)
![Screenshot from 2023-05-18 13-01-42](https://github.com/paganayo/fast-food/assets/117369955/f8b1e5ca-1fdf-413d-9cd1-d341ce83f31a)
![Screenshot from 2023-05-18 13-01-48](https://github.com/paganayo/fast-food/assets/117369955/5ad307f3-149f-465f-89ef-899b8e4e9f8d)
![Screenshot from 2023-05-18 13-01-52](https://github.com/paganayo/fast-food/assets/117369955/01e2f520-5266-42d0-9c4b-18327cf9cfa3)
![Screenshot from 2023-05-18 13-01-55](https://github.com/paganayo/fast-food/assets/117369955/62fb1bdf-265a-46b0-bc95-279d14baee3e)
![Screenshot from 2023-05-18 13-02-00](https://github.com/paganayo/fast-food/assets/117369955/28280995-322c-4241-8904-d398f5b0f24a)
![Screenshot from 2023-05-18 13-02-07](https://github.com/paganayo/fast-food/assets/117369955/53a495fc-4335-4531-b3c6-30a9fcfa9f65)



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


