var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.SubsonicAPI = function () {
  function md5cycle(x, k) {
    var a = x[0],
        b = x[1],
        c = x[2],
        d = x[3];

    a = ff(a, b, c, d, k[0], 7, -680876936);
    d = ff(d, a, b, c, k[1], 12, -389564586);
    c = ff(c, d, a, b, k[2], 17, 606105819);
    b = ff(b, c, d, a, k[3], 22, -1044525330);
    a = ff(a, b, c, d, k[4], 7, -176418897);
    d = ff(d, a, b, c, k[5], 12, 1200080426);
    c = ff(c, d, a, b, k[6], 17, -1473231341);
    b = ff(b, c, d, a, k[7], 22, -45705983);
    a = ff(a, b, c, d, k[8], 7, 1770035416);
    d = ff(d, a, b, c, k[9], 12, -1958414417);
    c = ff(c, d, a, b, k[10], 17, -42063);
    b = ff(b, c, d, a, k[11], 22, -1990404162);
    a = ff(a, b, c, d, k[12], 7, 1804603682);
    d = ff(d, a, b, c, k[13], 12, -40341101);
    c = ff(c, d, a, b, k[14], 17, -1502002290);
    b = ff(b, c, d, a, k[15], 22, 1236535329);

    a = gg(a, b, c, d, k[1], 5, -165796510);
    d = gg(d, a, b, c, k[6], 9, -1069501632);
    c = gg(c, d, a, b, k[11], 14, 643717713);
    b = gg(b, c, d, a, k[0], 20, -373897302);
    a = gg(a, b, c, d, k[5], 5, -701558691);
    d = gg(d, a, b, c, k[10], 9, 38016083);
    c = gg(c, d, a, b, k[15], 14, -660478335);
    b = gg(b, c, d, a, k[4], 20, -405537848);
    a = gg(a, b, c, d, k[9], 5, 568446438);
    d = gg(d, a, b, c, k[14], 9, -1019803690);
    c = gg(c, d, a, b, k[3], 14, -187363961);
    b = gg(b, c, d, a, k[8], 20, 1163531501);
    a = gg(a, b, c, d, k[13], 5, -1444681467);
    d = gg(d, a, b, c, k[2], 9, -51403784);
    c = gg(c, d, a, b, k[7], 14, 1735328473);
    b = gg(b, c, d, a, k[12], 20, -1926607734);

    a = hh(a, b, c, d, k[5], 4, -378558);
    d = hh(d, a, b, c, k[8], 11, -2022574463);
    c = hh(c, d, a, b, k[11], 16, 1839030562);
    b = hh(b, c, d, a, k[14], 23, -35309556);
    a = hh(a, b, c, d, k[1], 4, -1530992060);
    d = hh(d, a, b, c, k[4], 11, 1272893353);
    c = hh(c, d, a, b, k[7], 16, -155497632);
    b = hh(b, c, d, a, k[10], 23, -1094730640);
    a = hh(a, b, c, d, k[13], 4, 681279174);
    d = hh(d, a, b, c, k[0], 11, -358537222);
    c = hh(c, d, a, b, k[3], 16, -722521979);
    b = hh(b, c, d, a, k[6], 23, 76029189);
    a = hh(a, b, c, d, k[9], 4, -640364487);
    d = hh(d, a, b, c, k[12], 11, -421815835);
    c = hh(c, d, a, b, k[15], 16, 530742520);
    b = hh(b, c, d, a, k[2], 23, -995338651);

    a = ii(a, b, c, d, k[0], 6, -198630844);
    d = ii(d, a, b, c, k[7], 10, 1126891415);
    c = ii(c, d, a, b, k[14], 15, -1416354905);
    b = ii(b, c, d, a, k[5], 21, -57434055);
    a = ii(a, b, c, d, k[12], 6, 1700485571);
    d = ii(d, a, b, c, k[3], 10, -1894986606);
    c = ii(c, d, a, b, k[10], 15, -1051523);
    b = ii(b, c, d, a, k[1], 21, -2054922799);
    a = ii(a, b, c, d, k[8], 6, 1873313359);
    d = ii(d, a, b, c, k[15], 10, -30611744);
    c = ii(c, d, a, b, k[6], 15, -1560198380);
    b = ii(b, c, d, a, k[13], 21, 1309151649);
    a = ii(a, b, c, d, k[4], 6, -145523070);
    d = ii(d, a, b, c, k[11], 10, -1120210379);
    c = ii(c, d, a, b, k[2], 15, 718787259);
    b = ii(b, c, d, a, k[9], 21, -343485551);

    x[0] = add32(a, x[0]);
    x[1] = add32(b, x[1]);
    x[2] = add32(c, x[2]);
    x[3] = add32(d, x[3]);
  }

  function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32(a << s | a >>> 32 - s, b);
  }

  function ff(a, b, c, d, x, s, t) {
    return cmn(b & c | ~b & d, a, b, x, s, t);
  }

  function gg(a, b, c, d, x, s, t) {
    return cmn(b & d | c & ~d, a, b, x, s, t);
  }

  function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
  }

  function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | ~d), a, b, x, s, t);
  }

  function md51(s) {
    txt = '';
    var n = s.length,
        state = [1732584193, -271733879, -1732584194, 271733878],
        i = void 0;
    for (i = 64; i <= s.length; i += 64) {
      md5cycle(state, md5blk(s.substring(i - 64, i)));
    }
    s = s.substring(i - 64);
    var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < s.length; i++) {
      tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
    }tail[i >> 2] |= 0x80 << (i % 4 << 3);
    if (i > 55) {
      md5cycle(state, tail);
      for (i = 0; i < 16; i++) {
        tail[i] = 0;
      }
    }
    tail[14] = n * 8;
    md5cycle(state, tail);
    return state;
  }

  /* there needs to be support for Unicode here,
   * unless we pretend that we can redefine the MD-5
   * algorithm for multi-byte characters (perhaps
   * by adding every four 16-bit characters and
   * shortening the sum to 32 bits). Otherwise
   * I suggest performing MD-5 as if every character
   * was two bytes--e.g., 0040 0025 = @%--but then
   * how will an ordinary MD-5 sum be matched?
   * There is no way to standardize text to something
   * like UTF-8 before transformation; speed cost is
   * utterly prohibitive. The JavaScript standard
   * itself needs to look at this: it should start
   * providing access to strings as preformed UTF-8
   * 8-bit unsigned value arrays.
   */
  function md5blk(s) {
    /* I figured global was faster.   */
    var md5blks = [],
        i = void 0; /* Andy King said do it this way. */
    for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
    }
    return md5blks;
  }

  var hex_chr = '0123456789abcdef'.split('');

  function rhex(n) {
    var s = '',
        j = 0;
    for (; j < 4; j++) {
      s += hex_chr[n >> j * 8 + 4 & 0x0F] + hex_chr[n >> j * 8 & 0x0F];
    }return s;
  }

  function hex(x) {
    for (var i = 0; i < x.length; i++) {
      x[i] = rhex(x[i]);
    }return x.join('');
  }

  function md5(s) {
    return hex(md51(s));
  }

  /* this function is much faster,
  so if possible we use it. Some IEs
  are the only ones I know of that
  need the idiotic second function,
  generated by an if clause.  */

  function add32(a, b) {
    return a + b & 0xFFFFFFFF;
  }

  if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
    (function () {
      function add32(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF),
            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 0xFFFF;
      }
    })();
  }

  String.prototype.hexEncode = function () {
    var r = '';
    var i = 0;
    var h = void 0;
    while (i < this.length) {
      h = this.charCodeAt(i++).toString(16);
      while (h.length < 2) {
        h = h;
      }
      r += h;
    }
    return 'enc:' + r;
  };

  var SubsonicAPI = function () {
    function SubsonicAPI(obj) {
      var _this = this;

      _classCallCheck(this, SubsonicAPI);

      if (typeof obj !== 'object') {
        throw new Error('Input must be an object & contain url, user, password & appName fields');
      }
      if (obj.hasOwnProperty('ip') && obj.hasOwnProperty('port') && obj.hasOwnProperty('user') && obj.hasOwnProperty('password') && obj.hasOwnProperty('appName') && obj.hasOwnProperty('https')) {
        if (!obj.md5Auth) {
          obj.md5Auth = true;
        }
        this.params = {
          u: obj.user,
          f: 'json',
          c: obj.appName
        };
        this._user = obj.user;
        this._md5Auth = obj.md5Auth;
        this._url = function () {
          if (obj.https) {
            return 'https://' + obj.ip + ':' + obj.port;
          } else {
            return 'http://' + obj.ip + ':' + obj.port;
          }
        }();
        this._password = obj.password;
        this._fishVersion(this._url).then(function (version) {
          _this.params.v = version;
          _this.ping().then(function (res) {
            if (res.status === 'ok') {
              _this.getUserInfo().then(function (userInfo) {
                var responseEvent = new CustomEvent('subsonicApi-ready', {
                  detail: {
                    status: res.status,
                    user: userInfo
                  }
                });
                document.dispatchEvent(responseEvent);
              });
            } else {
              var responseEvent = new CustomEvent('subsonicApi-ready', {
                detail: {
                  status: res.status,
                  error: res.error.messsage
                }
              });
              document.dispatchEvent(responseEvent);
            }
          });
        }, function () {
          throw new Error('Error attempting to fetch subsonic version from given address');
        });
      } else {
        throw new Error('Input must be an object & contain url, user, password & appName fields');
      }
    }

    _createClass(SubsonicAPI, [{
      key: '_toQueryString',
      value: function _toQueryString(params) {
        var r = [];
        for (var n in params) {
          n = encodeURIComponent(n);
          r.push(params[n] === null ? n : n + '=' + encodeURIComponent(params[n]));
        }
        return r.join('&');
      }
    }, {
      key: '_buildUrl',
      value: function _buildUrl(method, options) {
        if (options !== null && typeof options === 'object') {
          options = '&' + this._toQueryString(options);
        }
        if (!options) {
          options = '';
        }

        if (this._versionCompare(this.params.v, '1.13.0') >= 0 && this._md5Auth) {
          if (this.params.p) {
            delete this.params.p;
          }
          this.params.s = this._makeSalt(6);
          this.params.t = md5(this._password + this.params.s);
          return this._url + '/rest/' + method + '.view?' + this._toQueryString(this.params) + options;
        } else {
          if (this.params.t) {
            delete this.params.t;
          }
          if (this.params.s) {
            delete this.params.s;
          }
          this.params.p = this._password.hexEncode();
          return this._url + '/rest/' + method + '.view?' + this._toQueryString(this.params) + options;
        }
      }
    }, {
      key: '_xhr',
      value: function _xhr(url) {
        var _this2 = this;

        return new Promise(function (resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, true);
          xhr.responseType = 'json';
          xhr.onload = resolve;
          xhr.onerror = reject;
          xhr.send();
          _this2._lastXhr = xhr;
        });
      }
    }, {
      key: '_makeSalt',
      value: function _makeSalt(length) {
        var text = "";
        var possible = "ABCD/EFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }return text;
      }
    }, {
      key: '_fishVersion',
      value: function _fishVersion(url) {
        var _this3 = this;

        return new Promise(function (resolve, reject) {
          _this3._xhr(url + '/rest/ping.view?f=json').then(function (e) {
            var res = e.target.response['subsonic-response'];
            resolve(res.version);
          }, reject);
        });
      }
    }, {
      key: '_versionCompare',
      value: function _versionCompare(v1, v2, options) {
        var lexicographical = options && options.lexicographical,
            zeroExtend = options && options.zeroExtend,
            v1parts = v1.split('.'),
            v2parts = v2.split('.');
        function isValidPart(x) {
          return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x);
        }
        if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
          return NaN;
        }
        if (zeroExtend) {
          while (v1parts.length < v2parts.length) {
            v1parts.push("0");
          }while (v2parts.length < v1parts.length) {
            v2parts.push("0");
          }
        }
        if (!lexicographical) {
          v1parts = v1parts.map(Number);
          v2parts = v2parts.map(Number);
        }
        for (var i = 0; i < v1parts.length; ++i) {
          if (v2parts.length == i) {
            return 1;
          }
          if (v1parts[i] == v2parts[i]) {
            continue;
          } else if (v1parts[i] > v2parts[i]) {
            return 1;
          } else {
            return -1;
          }
        }
        if (v1parts.length != v2parts.length) {
          return -1;
        }
        return 0;
      }
    }, {
      key: 'getUserInfo',
      value: function getUserInfo() {
        var _this4 = this;

        return new Promise(function (resolve, reject) {
          var url = _this4._buildUrl('getUser', {
            username: _this4._user
          });
          _this4._xhr(url).then(function (e) {
            _this4.userPermissions = e.target.response['subsonic-response'].user;
            resolve(_this4.userPermissions);
          });
        });
      }
    }, {
      key: 'abort',
      value: function abort() {
        if (this._lastXhr) {
          this._lastXhr.abort();
        }
      }
    }, {
      key: 'ping',
      value: function ping() {
        var _this5 = this;

        return new Promise(function (resolve, reject) {
          var url = _this5._buildUrl('ping');
          _this5._xhr(url).then(function (e) {
            var res = e.target.response['subsonic-response'];
            resolve(res);
          }, function (e) {
            reject(e);
          });
        });
      }

      /**
       * if no id is given all playlists will be returned
       */

    }, {
      key: 'getPlaylist',
      value: function getPlaylist(id) {
        var _this6 = this;

        return new Promise(function (resolve, reject) {
          var url = _this6._buildUrl(function () {
            if (id) {
              return 'getPlaylist';
            } else {
              return 'getPlaylists';
            }
          }(), function () {
            if (id) {
              return {
                id: id
              };
            } else {
              return {};
            }
          }());
          _this6._xhr(url).then(function (e) {
            var res = e.target.response['subsonic-response'].playlists;
            resolve(function () {
              if (res.hasOwnProperty('playlist')) {
                return res.playlist;
              } else {
                return [];
              }
            }());
          }, reject);
        });
      }
    }, {
      key: 'getMusicFolders',
      value: function getMusicFolders() {
        var _this7 = this;

        return new Promise(function (resolve, reject) {
          var url = _this7._buildUrl('getMusicFolders');
          _this7._xhr(url).then(function (e) {
            var res = e.target.response['subsonic-response'].musicFolders.musicFolder;
            resolve(res);
          }, reject);
        });
      }
    }, {
      key: 'getIndexes',
      value: function getIndexes(id) {
        var _this8 = this;

        return new Promise(function (resolve, reject) {
          var url = _this8._buildUrl('getIndexes', function (i) {
            if (i) {
              return {
                musicFolderId: i
              };
            } else {
              return;
            }
          }(id));
          _this8._xhr(url).then(function (e) {
            var res = e.target.response['subsonic-response'].indexes.index;
            resolve(res);
          }, reject);
        });
      }
    }, {
      key: 'getMusicDirectory',
      value: function getMusicDirectory(id) {
        var _this9 = this;

        return new Promise(function (resolve, reject) {
          if (!id) {
            throw new Error('id required to look up a music directory');
          } else {
            var url = _this9._buildUrl('getMusicDirectory', {
              id: id
            });
            _this9._xhr(url).then(function (e) {
              var res = e.target.response['subsonic-response'].directory;
              resolve(res);
            }, reject);
          }
        });
      }
    }, {
      key: 'getArtist',
      value: function getArtist(id) {
        var _this10 = this;

        return new Promise(function (resolve, reject) {
          var url = _this10._buildUrl(function (id) {
            if (id) {
              return 'getArtist';
            } else {
              return 'getArtists';
            }
          }(id), function (id) {
            if (id) {
              return {
                id: id
              };
            } else {
              return;
            }
          }(id));
          _this10._xhr(url).then(function (e) {
            var res = function (id, e) {
              if (id) {
                var _res = e.target.response['subsonic-response'].artist;
                _res.album.sort(function sorting(a, b) {
                  return a.discNumber - b.discNumber || a.track - b.track;
                });
                return _res;
              } else {
                return e.target.response['subsonic-response'].artists.index;
              }
            }(id, e);
            resolve(res);
          });
        });
      }
    }, {
      key: 'streamUrl',
      value: function streamUrl(id, bitRate) {
        return this._buildUrl('stream', function (id, bitRate) {
          switch (true) {
            case Boolean(bitRate):
              return {
                id: id,
                maxBitRate: bitRate,
                estimateContentLength: true
              };
              break;
            default:
              return {
                id: id,
                maxBitRate: 320,
                estimateContentLength: true
              };
          }
        }(id, bitRate));
      }
    }, {
      key: 'downloadUrl',
      value: function downloadUrl(id) {
        if (!id) {
          throw new Error('id required');
          return;
        }
        return this._buildUrl('download', {
          id: id
        });
      }
    }, {
      key: 'getTopSongs',
      value: function getTopSongs(count, artist) {
        var _this11 = this;

        return new Promise(function (resolve, reject) {
          if (!artist) throw new Error('artist name is required');
          var url = _this11._buildUrl('getTopSongs', {
            count: count || 50,
            artist: artist
          });
          _this11._xhr(url).then(function (e) {
            var res = e.target.response['subsonic-response'].topSongs.song;
            resolve(res);
          }, reject);
        });
      }
    }, {
      key: 'getGenres',
      value: function getGenres() {
        var _this12 = this;

        return new Promise(function (resolve, reject) {
          var url = _this12._buildUrl('getGenres');
          _this12._xhr(url).then(function (e) {
            var res = e.target.response['subsonic-response'].genres.genre;
            resolve(res);
          }, reject);
        });
      }
    }, {
      key: 'getAlbum',
      value: function getAlbum(id) {
        var _this13 = this;

        return new Promise(function (resolve, reject) {
          if (!id) throw new Error('id required');
          var url = _this13._buildUrl('getAlbum', {
            id: id
          });
          _this13._xhr(url).then(function (e) {
            var res = e.target.response['subsonic-response'].album;
            resolve(res);
          }, reject);
        });
      }
    }, {
      key: 'getAlbumList2',
      value: function getAlbumList2(sort, count) {
        var _this14 = this;

        return new Promise(function (resolve, reject) {
          if (sort) {
            var url = _this14._buildUrl('getAlbumList2', {
              size: count || 60,
              type: sort
            });
            _this14._xhr(url).then(function (e) {
              var res = e.target.response['subsonic-response'].albumList2.album;
              resolve(res);
            }, reject);
          } else {
            throw new Error('sort method required');
          }
        });
      }
    }]);

    return SubsonicAPI;
  }();

  return SubsonicAPI;
}();
//# sourceMappingURL=subsonic-api.js.map