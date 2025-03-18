import { useEffect } from "react";
import sdk from "@farcaster/frame-sdk";

export default function ExternalFrame() {
  useEffect(() => {
    // You can call ready() immediately or when the iframe has finished loading.
    sdk.actions.ready();
  }, []);

  return (
    <iframe
      src="https://app.imf.bz"
      title="app.imf.bz"
      style={{ width: "100%", height: "100vh", border: "none" }}
      onLoad={() => sdk.actions.ready()} // Optionally signal ready on load
    />
  );
}
