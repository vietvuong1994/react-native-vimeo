import froogaloopInjectScript from './froogaloop';


export function getPlayerHTML(videoId) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title></title>
    </head>
    <body>
      <iframe
        id="player1"
        src="https://player.vimeo.com/video/${videoId}?api=1&player_id=player1"
        width="100%"
        height="98%"
        frameborder="0"
        webkitallowfullscreen
        allowfullscreen>
      </iframe>
    </body>
    <script>

        ${froogaloopInjectScript}

        function webViewBridgeReady(cb) {
         //checks whether WebViewBirdge exists in global scope.
         if (window.WebViewBridge) {
           cb(window.WebViewBridge);
           return;
         }

         function handler() {
           //remove the handler from listener since we don't need it anymore
           document.removeEventListener('WebViewBridge', handler, false);
           //pass the WebViewBridge object to the callback
           cb(window.WebViewBridge);
         }

         //if WebViewBridge doesn't exist in global scope attach itself to document
         //event system. Once the code is being injected by extension, the handler will
         //be called.
         document.addEventListener('WebViewBridge', handler, false);
       }

       webViewBridgeReady(function (webViewBridge) {

         var player = $f("player1");

         player.addEvent("ready", function() {
             webviewBridge.send("playerReady");
             player.addEvent("playProgress", function() { webViewBridge.send("PLAYER START")});
         });

         webViewBridge.send("Webview bridge ready");

       });
    </script>
  </html>
  `;
}


const bridgeInjectScript = `

`;


export const injectScript = [
  bridgeInjectScript
].join('\n');
