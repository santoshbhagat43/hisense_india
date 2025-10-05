"use client";
import { useState } from "react";
import APIService from "@/services/APIService";

const EmailSubscription = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(true);
      setErrorMessage("Please enter a valid email address");
      setSuccess(false);
      return;
    }

    setLoading(true);
    setError(false);
    setSuccess(false);
    setErrorMessage("");

    try {
      const response = await APIService.subscribe({ email });
      
      if (response.message == "Subscribed successfully.") {
        setSuccess(true);
        setError(false);
        setEmail(""); // Clear the form on success
      } else {
        setError(true);
        setErrorMessage(response.message || "Subscription failed. Please try again.");
        setSuccess(false);
      }
    } catch (err: unknown) {
      setError(true);
      setErrorMessage(err instanceof Error ? err.message : "There was an error subscribing. Please try again.");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {/* <!-- email-subscription-container-india start --> */}
      <div className="email-subscription-container-india">
        <div className="content">
          <form
            id="mc-embedded-homepage-subscribe-form"
            onSubmit={handleSubmit}
          >
            <h3>Stay up to date with</h3>
            <img
              className="logo lazy"
              src="/assets/images/Banners/hisense-logo-white.svg"
              alt="Hisense"
            />
            <div className="input-container">
              <input
                placeholder="Your email address"
                type="email"
                value={email}
                name="EMAIL"
                required
                disabled={loading}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="btn-subscribe"
                type="submit"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe Now"}
              </button>
            </div>
            {success && (
              <p className="form-message success">
                Thank you for subscribing!
              </p>
            )}
            {error && (
              <p className="form-message error">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
      {/* <!-- email-subscription-container-india end --> */}
    </>
  );
};

export default EmailSubscription;
