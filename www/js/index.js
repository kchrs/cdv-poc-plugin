
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    // onDeviceReady: function() {
    //     this.receivedEvent('deviceready');
    // },

    // // Update DOM on a Received Event
    // receivedEvent: function(id) {
    //     var parentElement = document.getElementById(id);
    //     var listeningElement = parentElement.querySelector('.listening');
    //     var receivedElement = parentElement.querySelector('.received');

    //     listeningElement.setAttribute('style', 'display:none;');
    //     receivedElement.setAttribute('style', 'display:block;');

    //     console.log('Received Event: ' + id);
    // }


    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        modusecho.echo(
          'Plugin Ready!', 
          function(msg) { 
            document
              .getElementById('deviceready')
              .querySelector('.received')
              .innerHTML = msg;   
          },
          function(err) {
            document
              .getElementById('deviceready')
              .innerHTML = '<p class="event received">' + err + '</p>'; 
          }
        );
      
        modusecho.echojs(
          'Hello Plugin',
          function(msg) {
            document.getElementsByTagName('h1')[0].innerHTML = msg;
          },
          function(err) {
            document.getElementsByTagName('h1')[0].innerHTML = err;
          }
        );
      },

      receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

};

app.initialize();