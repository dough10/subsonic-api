  (() => {

    function output(string) {
      let div = document.createElement('div');
      div.textContent = string;
      document.querySelector('body').appendChild(div);
    }

    window.onload = () => {
      output('starting subsonic-api.js test script');

    }

    var subsonic = new SubsonicAPI({
      https: false,
      ip: 'dough10.me',
      port: 4040,
      user: 'admin',
      password: 'oicu812bitch',
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
          subsonic.getIndexes(folders[0].id).then(artists => {
            output('got artist starting with: ' + artists[0].name);
            subsonic.getMusicDirectory(artists[0].artist[0].id).then(albums => {
              output('got tracks on the album: ' + albums.child[0].title + ' by '  + albums.child[0].artist);
              subsonic.getMusicDirectory(albums.child[0].id).then((tracks) => {
                output('playing first track on ' + tracks.name);
                let audio = new Audio();
                audio.src = subsonic.streamUrl(tracks.child[0].id, 320);
                audio.controls = true;
                document.querySelector('body').appendChild(audio);
                audio.play();
                subsonic.getArtist().then(artists => {
                  subsonic.getArtist(artists[0].artist[0].id).then(artist => {
                    subsonic.getTopSongs(10, artist.name).then(top10 => {
                      output('top ' + top10.length + ' songs for artist ' + artist.name);
                      top10.forEach(song => {
                        output(song.title + ',');
                      });
                      subsonic.getGenres().then(genres => {
                        output(genres.length + ' genres');
                        subsonic.getAlbumList2('newest', 60, 0).then(albums => {
                          output(albums[0].name + ' is the newest album');
                          subsonic.getAlbum(albums[albums.length - 1].id).then(album => {
                            output(album.name + ' info fetched')
                            subsonic.getArtistInfo2(album.artistId).then(info => {
                              output(info)
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
  })();
