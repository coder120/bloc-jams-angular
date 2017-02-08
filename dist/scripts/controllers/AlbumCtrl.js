

(function() {
    function AlbumCtrl(Fixtures) {
      this.albumData = Fixtures.getAlbum();
      this.songs = [];
      for (var i; i < albumData.songs.length; i++) {
          this.songs.push(albumData.songs);
      }
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl',['Fixtures', AlbumCtrl);
})();