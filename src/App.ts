import Vue from "vue";
import { Component } from "vue-property-decorator";
import { ButtplugClient } from "buttplug";

@Component({})
export default class App extends Vue {
  private client: ButtplugClient = new ButtplugClient("Intiface Tutorial Client");

  public mounted() {
    const body = document.getElementsByTagName("body")![0];
    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    let observer: MutationObserver;

    // Create an observer instance linked to the callback function
    observer = new MutationObserver(function(mutationsList, aObs: MutationObserver) {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          if (document.getElementById("launcher") !== null) {
            document.getElementById("launcher")!.style.display = "none";
            aObs.disconnect();
          }
        }
      }
    });

    // Start observing the target node for configured mutations
    observer.observe(body, config);
  }
}
