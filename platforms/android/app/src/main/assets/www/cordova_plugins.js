cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com-moduscreate-plugins-echo.ModusEcho",
      "file": "plugins/com-moduscreate-plugins-echo/www/ModusEcho.js",
      "pluginId": "com-moduscreate-plugins-echo",
      "clobbers": [
        "modusecho"
      ]
    }
  ];
  module.exports.metadata = {
    "com-moduscreate-plugins-echo": "0.0.2",
    "cordova-plugin-whitelist": "1.3.3"
  };
});