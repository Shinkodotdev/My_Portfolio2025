import React, { useState, useCallback } from "react";
import Swal from "sweetalert2";

const ContactModal = ({ showModal, setShowModal }) => {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  const onSubmit = useCallback(async (event) => {
    event.preventDefault();
    setIsSending(true);
    setResult("Sending...");

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Message Sent!",
          text: "Thank you for contacting us.",
          icon: "success",
          confirmButtonText: "OK",
        });
        event.target.reset();
        setResult("");
        setShowModal(false);
      } else {
        console.error("Error", data);
        setResult(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error", error);
      setResult("An unexpected error occurred.");
    } finally {
      setIsSending(false);
    }
  }, [setShowModal]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full text-black relative">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4">Let's Collaborate</h2>
        <p className="mb-4">
          Thank you for reaching out! Please message me through the form below.
        </p>

        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-3 p-4 bg-zinc-900 rounded-lg shadow-md w-full max-w-md"
        >
          <input
            type="hidden"
            name="access_key"
            value="9156acaa-1e26-44d1-8241-92ffc38022b1"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white resize-none"
            required
          ></textarea>

          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
          />

          <button
            type="submit"
            className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors ${
              isSending ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {result && <p className="text-white mt-2">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
