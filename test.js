  (() => {

    function output(string) {
      let div = document.createElement('div');
      div.textContent = string;
      document.querySelector('body').appendChild(div);
    }

    /**
     * generate a random number within the provided range
     * @param {Number} min           the minium value to return
     * @param {Number} max           the maximum number to return
     */
    function _randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    window.onload = () => {
      output('starting subsonic-api.js test script');

      var subsonic = new SubsonicAPI({
        https: true,
        ip: 'subsonic.monstermuffin.org',
        port: 443,
        user: 'GuestUser',
        password: 'GuestPassword',
        appName: 'SubsonicAPI Test'
      });

      document.addEventListener('subsonicApi-ready', event => {
        // check event.detail.status for 'ok'
        if (event.detail.status === 'ok') {
          // can now make api calls
          // event.detail.user contains user permissions from subsonic
          output('Welcome ' + event.detail.user.username);
          subsonic.getMusicFolders().then(folders => {
            output(folders.length + ' media folders');
            subsonic.getIndexes(folders[_randomNumber(0, folders.length - 1)].id).then(artists => {
              output('got list of artists');
              artists.forEach(artist => output(artist.name))
              subsonic.getMusicDirectory(artists[_randomNumber(0, artists.length - 1)].artist[0].id).then(albums => {
                output('got tracks on the album: ' + albums.child[0].title + ' by '  + albums.child[0].artist);
                subsonic.getMusicDirectory(albums.child[_randomNumber(0, albums.child.length - 1)].id).then(tracks => {
                  let toPlay = tracks.child[_randomNumber(0, tracks.child.length - 1)];
                  output('playing a random track from ' + tracks.name + ' named ' + toPlay.title);
                  let audio = new Audio();
                  audio.src = subsonic.streamUrl(toPlay.id, 96);
                  audio.controls = true;
                  document.querySelector('body').appendChild(audio);
                  audio.play();
                  subsonic.getArtist().then(artists => {
                    subsonic.getArtist(artists[_randomNumber(0, artists.length -1)].artist[0].id).then(artist => {
                      subsonic.getTopSongs(artist.name, 10).then(top10 => {
                        if (top10) {
                          output('top ' + top10.length + ' songs for artist ' + artist.name);
                          top10.forEach(song => {
                            output(song.title + ',');
                          });
                        }
                        subsonic.getGenres().then(genres => {
                          output(genres.length + ' genres');
                          subsonic.getAlbumList2('newest', 60, 0).then(albums => {
                            output(albums[0].name + ' is the newest album');
                            subsonic.getAlbum(albums[_randomNumber(0, albums.length - 1)].id).then(album => {
                              output(album.name + ' info fetched')
                              subsonic.getArtistInfo2(album.artistId).then(info => {
                                console.log(info)
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });

        } else {
          // failed login details in event.detail.error
        }
      });
    }

  })();
