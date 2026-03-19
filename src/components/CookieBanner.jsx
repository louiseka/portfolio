import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    } else if (consent === "accepted") {
      loadAnalytics();
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    loadAnalytics();
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  const loadAnalytics = () => {
    // Only load GA4 once
    if (window.gtag) return;

    // Load GA4 script
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-8ZCPPWLV5P";
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", "G-8ZCPPWLV5P", { anonymize_ip: true });
  };

  if (!visible) return null;

  return (
    <div style={styles.banner}>
      <p style={styles.text}>
        I use cookies for analytics. You can accept or reject non-essential
        cookies.
      </p>
      <div>
        <button onClick={acceptCookies} style={styles.button}>
          Accept
        </button>
        <button onClick={rejectCookies} style={styles.button}>
          Reject
        </button>
      </div>
    </div>
  );
}

const styles = {
  banner: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    background: "#ebb1dc",
    color: "#18191D",
    padding: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
  },
  text: {
    fontSize: "14px",
    marginRight: "12px",
  },
  button: {
    marginLeft: "8px",
    padding: "8px 12px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#b1ebc0",
    borderRadius: "6px",
  },
};
