# Subsonic-API
Subsonic API in a es6 Javascript Class with no dependencies.

Currently incomplete but is in development for use in my Chrome web app PolySonic.


Usage Example

```javascript
      var subsonic = new SubsonicAPI({
        https: true,
        ip: 'IP ADDRESS',
        port: PORT,
        user: 'Username',
        password: 'Password',
        appName: 'App Name',
        md5Auth: true
      });

      document.addEventListener('subsonicApi-ready', event => {
        if (event.detail.status === 'ok') {
          // successful login and user permissions fetched
          // user permissions contained in  || event.detail.user
          subsonic.getAlbumList('newest' , 60, 0).then(newest => {
            // newest is a array containing the newest 60 albums skipping 0
          }, err => {
            // error making request 
          });
        } else {
          // error connecting 
          // error message in || event.detail.error
        }
      });
```