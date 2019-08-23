It looks like you're running {{ OSName }} using the {{ BrowserName }} browser.

You have the following choices for using Intiface:

* Via Intiface Desktop, a downloadable app for Windows, Mac, and Linux.
  * <span v-if="!OSName.includes('Android') && !OSName.includes('iOS')"><router-link to="download-intiface">Continue to Intiface Desktop download instructions</router-link></span> <span v-if="OSName.includes('Android') || OSName.includes('iOS')">You need to be on a desktop OS for this option.</span>
* Within the web browser, using a browser that supports WebBluetooth (Chrome or variants on any non-iOS operating system, or <a href='https://apps.apple.com/us/app/webble/id1193531073' target="_blank">WebBLE on iOS</a>)
  * <span v-if="HasWebBluetooth"><router-link to="create-browser-connection">Continue to In-Browser connection instructions</router-link></span> <span v-if="!HasWebBluetooth">It does not look like you are using a browser with WebBluetooth, so this option is not available at this time.</span>
* Via Intiface Mobile, an app for Android and iOS.
  * <span v-if="!OSName.includes('Android') && !OSName.includes('iOS')">You are not using a mobile operating system, so this option is not available at this time.</span> <span v-if="OSName.includes('Android') || OSName.includes('iOS')">Intiface Mobile is not yet available. Please check <a href="http://intiface.com/" target="_blank">the Intiface Website</a> or <a href="http://twitter.com/buttplugio" target="_blank">follow the @buttplugio account on twitter</a> for updates.</span>
