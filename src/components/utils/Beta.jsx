import React, { useEffect } from "react";

const HubSpotForm = () => {
  useEffect(() => {
    // Dynamically load the HubSpot embed script
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.onload = () => {
      // Initialize the form after the script is loaded
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "49046172",
          formId: "3370aa73-5b2d-4b70-925b-a8db2feea38f",
          target: "#hubspotForm",
        });
      }

    };

    document.body.appendChild(script);

    // Cleanup script to avoid duplicate insertion
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="hubspotForm"></div>
    </div>
  );
};

export default HubSpotForm;