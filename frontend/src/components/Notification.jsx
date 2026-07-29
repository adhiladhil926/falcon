import { useEffect, useState } from "react";
import { FiArrowRight, FiX } from "react-icons/fi";
import { FaCrown } from "react-icons/fa";
import scrutinizersPdf from "../assets/Falcon Infra - Form MGT-13- Scrutinizers Report-AGM 2026.pdf_page_1_2.pdf_with_inserted_pages.pdf";
import "../style/Notification.css";

export default function Notifications() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const notifications = [
    {
      id: 1,
      title: " Form MGT-13- Scrutinizers Report-AGM 2026",
      description: "Click the PDF to view the complete presentation.",
      date: "29 July 2026",
      pdfUrl: scrutinizersPdf,
    },
   
  ];

  function openPdf(notification) {
    setSelectedPdf(notification);
  }

  function closePdf() {
    setSelectedPdf(null);
  }


  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        closePdf();
      }
    }

    if (selectedPdf) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedPdf]);

  return (
    <section className="notifications-section">
      <div className="notifications-container">
        <div className="notifications-heading">
          <span className="notifications-heading__icon" aria-hidden="true">
            <FaCrown />
          </span>

          <div className="notifications-heading__content">
            
            <h1>Poll result of agenda item number 7 under special business on amalgamation at 26 th AGM of Falcon Infrastructures Limited held on 25 -07-2026 - Report of Scrutinizer</h1>
            <p>View the latest documents and official updates.</p>
          </div>
        </div>

        <div className="notifications-list">
          {notifications.map((notification) => (
            <button
              key={notification.id}
              type="button"
              className="notification-card"
              onClick={() => openPdf(notification)}
            >
              <div className="notification-card__pdf-icon">
                PDF
              </div>

              <div className="notification-card__content">
                <h2>{notification.title}</h2>
                <p>{notification.description}</p>
                <span>{notification.date}</span>
              </div>

              <div className="notification-card__arrow" aria-hidden="true">
                <FiArrowRight />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedPdf && (
        <div
          className="pdf-overlay"
          onMouseDown={closePdf}
          role="dialog"
          aria-modal="true"
          aria-labelledby="pdf-title"
        >
          <div
            className="pdf-window"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="pdf-window__header">
              <div>
                <h2 id="pdf-title">{selectedPdf.title}</h2>
                <p>{selectedPdf.date}</p>
              </div>

              <div className="pdf-window__actions">
                <a
                  href={selectedPdf.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in new tab
                </a>

                <a href={selectedPdf.pdfUrl} download>
                  Download
                </a>

                <button
                  type="button"
                  onClick={closePdf}
                  aria-label="Close PDF"
                >
                  <FiX aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="pdf-window__viewer">
              <iframe
                src={selectedPdf.pdfUrl}
                title={selectedPdf.title}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
