
  <h3 align="center">MailJet SMS Sample with NodeJS</h3>

  <p align="center">
This is a sample project on integration of MailJet's SMS service in NodeJS to send SMS with their API. <br />




<!-- ABOUT THE PROJECT -->
## About The Project

[![mailjetsample.png](https://i.postimg.cc/FzQnKm5q/mailjetsample.png)](https://postimg.cc/phqB0wdY)

This is just an example project which uses MailJet API with NodeJS to show how SMS can be sent via it.


### Built With

* [MailJet](https://www.mailjet.com/sms/)
* [NodeJS](https://nodejs.org/en/)
* [Bootstrap](https://getbootstrap.com)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an instruction of how to list things you need to use the sample project and how to install them.

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
### Configuration

Open the config.js and enter your MailJet API token for this to work.

   ```sh
    module.exports = {
        apitoken: "xxxxxxxxxx", //enter your MailJet API token
        senderid: "MTHEKT"  //enter your Sender ID
    }
   ```
   
### Run the project
   ```sh
   npm start
   ```




