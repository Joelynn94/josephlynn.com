import { useState } from "react";

export default function useAlert() {
  const [alert, setAlert] = useState(null);
  // how many seconds to display
  let secondsLeft = 7;

  // interval function set to messageTime and clear interval
  function alertMessage(alert) {
    const message = setInterval(() => {
      if (secondsLeft > 0) {
        setAlert(alert);
        secondsLeft--;
      } else {
        setAlert("");
        clearInterval(message);
      }
    }, 1000);
  }

  return { alert, alertMessage };
}
