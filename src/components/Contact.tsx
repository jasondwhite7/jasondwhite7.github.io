import React from 'react'

export function Contact() {
  return (
    <section id="contact">
      <div className="contact-wrapper">
        <p className="section-label reveal" style={{ justifyContent: 'center' }}>
          Contact
        </p>
        <h2 className="reveal">Let's Connect</h2>
        <p
          className="section-subtitle reveal"
          style={{ margin: '0 auto 0', textAlign: 'center' }}
        >
          Currently studying at Purdue and building for space. Always open to
          interesting conversations.
        </p>

        <div className="contact-links reveal">
          <a href="mailto:whit1199@purdue.edu" className="contact-link">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            whit1199@purdue.edu
          </a>
          <a
            href="https://linkedin.com/in/jason-dwhite/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/jasondwhite7"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
