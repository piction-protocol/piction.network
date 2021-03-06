import { SocialIcon } from 'react-social-icons';

export default ({locale}) => (
  <div className="hero">
    <img src="/static/logov.png" className="hero__logo" alt="Piction Network" />
    <p className="hero__message" dangerouslySetInnerHTML={locale.message} />

    <a className="hero__telegram" href="https://t.me/pictionnetwork">Telegram Channel</a>
    <a className="hero__kakao" href="https://open.kakao.com/o/gyVQbDM">Kakao Talk</a>

    <ul className="hero__social">
      <li><SocialIcon url="https://medium.com/piction" color="#707070" /></li>
      <li><SocialIcon url="https://github.com/piction-protocol" color="#707070" /></li>
    </ul>

    <style jsx>{`
      .hero {
        height: 100vh;
        background-image: url("/static/background.jpg");
        background-size: contain;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        animation: slide 60s linear infinite;
      }

      @keyframes slide {
        from {
          background-position: 0 0;
        }
        to {
          background-position: 800px 0;
        }
      }

      .hero__logo {
        margin-top: 5em;
        display: block;
        max-height: 200px;
        object-fit: contain;
      }

      .hero__message {
        text-align: center;
        font-size: 1.2em;
        margin-top: 2em;
        margin-bottom: 2em;
        margin-left: auto;
        margin-right: auto;
        max-width: 50em;
        line-height: 1.4;
        word-break: break-word;
      }

      .hero__telegram {
        background-color: var(--color-primary);
        padding: 1em 2em;
        border-radius: 2em;
        color: var(--color-white);
        box-shadow: var(--box-shadow);
        margin: 0.2em;
      }
      .hero__kakao {
        background-color: var(--color-secondary);
        padding: 1em 2em;
        border-radius: 2em;
        color: var(--color-white);
        box-shadow: var(--box-shadow);
        margin: 0.2em;
      }
      .hero__social {
        display: flex;
        list-style: none;
        padding: 0;
      }
      .hero__social li+li {
        padding-left: 1em;
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
          margin-top: 0;
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
