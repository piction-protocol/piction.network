export default ({locale}) => (
  <div className="hero">
    <img src="/static/logov.png" className="hero__logo" />
    <p className="hero__message" dangerouslySetInnerHTML={locale.message} />
    <style jsx>{`
      .hero {
        padding-top: 180px;
        margin-bottom: 4em;
      }
      .hero__logo {
        display: block;
        margin: 0 auto;
        max-height: 200px;
        object-fit: contain;
      }
      .hero__message {
        text-align: center;
        font-size: 1.2em;
        margin-top: 96px;
        margin-bottom: 96px;
        margin-left: auto;
        margin-right: auto;
        max-width: 800px;
        line-height: 1.4;
        word-break: break-word;
      }
      .hero__whitepapers {
        list-style: none;
        padding: 0;
        text-align: center;
      }
      .hero__whitepapers li {
        display: inline;
      }
      .hero__whitepapers li + li {
        margin-left: 1em;
      }
      .btn {
        text-decoration: none;
        color: white;
        background-color: #4a4a4a;
        padding: 1em 2em;
        box-shadow: var(--box-shadow);
        display: inline-block;
      }

      @media (max-width: 768px) {
        .hero {
          padding-top: 36px;
        }
        .hero__message {
          margin-top: 64px;
        }
      }
      @media (max-width: 640px) {
        .hero {
          padding-top: 80px;
        }
        .hero__logo {
          width: 50%;
        }
        .hero__message {
          margin-top: 55px;
          font-size: 1em;
        }
        .hero__whitepapers {
          text-align: center;
        }
        .hero__whitepapers li {
          display: block;
        }
        .hero__whitepapers li + li {
          margin-left: 0;
          margin-top: 1em;
        }
      }
    `}</style>
  </div>
)
