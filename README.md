# agora-meteor-demo

An example Agora server using [agora-meteor](https://github.com/Agora-Project/agora-meteor).

## Install

To build the Agora forum software, you will need [git](https://git-scm.com/) and [meteor](https://www.meteor.com/). You can see how to install them on their websites.

Once you have your dependencies installed, run this:

```bash
git clone https://github.com/garbados/agora-meteor-demo
cd agora-meteor-demo
git submodule init
git submodule update
meteor npm install
```

## Usage

To start the server, just do:

```bash
meteor
```

The Agora server will start on `http://localhost:3000`

In addition to the routes provided by agora-meteor, agora-meteor-demo adds routing and templating for user accounts using [useraccounts:iron-routing](https://github.com/meteor-useraccounts/iron-routing). You can see how it is configured at [lib/config/useraccounts.js](./lib/config/useraccounts.js). In particular, it adds these routes:

* `/signIn`: A sign-in page.
* `/signUp`: A sign-up page. Upon user creation, a verification email will be sent to the given email address.
* `/changePwd`: A page where users can change their password.
* `/forgotPwd`: A page to request a password reset.
* `/resetPwd`: A page where a user can reset their password after requesting a password reset.
* `/verifyEmail`: Upon user creation, a verification email will be sent to the given email address with a link to this page, associated with a unique token.

## Testing

Currently, there is no test suite. However, it is coming!

## Contributing

To contribute to Agora, please see agora-meteor's [issues](https://github.com/Agora-Project/agora-meteor/issues) page, and either submit an issue reflecting your problem or concern or request, or pick one out and leave a comment asking for guidance. The maintainers will pick it up :)

Once you've got a patch for an issue, please submit a PR. Thank you for your help!

## License

GPL-3.0. See the `LICENSE` file for the license's full text.
