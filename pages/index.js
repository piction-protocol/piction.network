import Page from "../components/page";

import Hero from "../components/hero";
import Footer from  "../components/footer";
import Unit from "../components/unit";

export default () => (
  <Page>
    <Hero />
    <section id="for-creator">
      <div>
        <div className="section__listing">
          <span>01</span>
        </div>
        <h2>창작자를 위한 자유로운 환경</h2>
        <p>
          콘텐츠는 창작자가 만듭니다. Piction에서는 작품의 연재 방식, 제작비, 판매 방식을 창작자가 직접 결정합니다. 블록체인 기반 디지털 콘텐츠 생태계 Piction은 작품에 대한 모든 권리를 창작자에게 돌려드리고자 합니다.
        </p>
      </div>
    </section>

    <section id="blockchain">
      <div>
        <div className="section__listing">
          <span>02</span>
        </div>
        <h2>블록체인 네트워크를 통한 투명한 콘텐츠 거래</h2>
        <p>
          Piction의 블록체인 네트워크를 통해 창작자와 소비자는 직접 콘텐츠를 사고팔 수 있습니다. 기존 콘텐츠 플랫폼은 1달 단위의 정산 절차가 필요했지만, Piction은 거래가 발생하면 즉시 작가에게 매출이 지급됩니다. 또한, 가상 화폐를 통한 콘텐츠 거래를 통해 결제 수수료 없는 콘텐츠 거래가 가능합니다. Piction에서 독자는 더욱 저렴한 비용으로 콘텐츠를 구매하고, 작가는 더 높은 매출을 얻을 수 있게 되었습니다.
        </p>
      </div>
      <img src="/static/blockchain.svg" />
    </section>

    <section id="community-driven">
      <div>
        <div className="section__listing">
          <span>03</span>
        </div>
        <h2>누구나 참여 가능한 콘텐츠 투자</h2>
        <p>
          Piction 생태계에서의 창작자는 안정적인 작품 활동을 위해 투자자를 직접 모집할 수 있습니다. 창작자가 직접 원하는 기준과 조건을 정할 수 있으며 투자 판단에 필요한 콘텐츠의 시놉시스나 연재 계획을 포스팅할 수 있습니다. 또한 Piction 생태계에 속한 사용자라면 누구라도 콘텐츠 투자에 참여할 수 있습니다. 소비자가 콘텐츠를 구매하는 경우 스마트 컨트랙트에 의해 투자자에게 약정된 비율의 수익이 실시간으로 투자자에게 지급됩니다.
        </p>
      </div>
      <img src="/static/fair.svg" />
    </section>

    <section id="powered-by">
      <div>
        <div className="section__listing">
          <span>04</span>
        </div>
        <h2>Powered by Battle Entertainment</h2>
        <p>
          Piction은 한국과 중국에서 웹툰 기반의 IP 비즈니스를 펼치고 있는 배틀엔터테인먼트가 만듭니다. 5년간 웹툰 및 콘텐츠 플랫폼을 운영하고 해외 콘텐츠를 국내외 유통하고 제작해온 배틀엔터테인먼트의 경험과 노하우를 바탕으로 Piction이 가장 먼저 블록체인 기반 웹툰, 웹소설 플랫폼을 시작합니다.
        </p>
      </div>
      <img src="/static/battleent.svg" />
    </section>

    <Footer />

    <style jsx>{`
      section {
        display: flex;
        justify-content: space-between;
        margin-bottom: 120px;
      }
      section h2 {
        font-size: 42px;
        margin-top: 9px;
        margin-bottom: 24px;
      }
      section p {
        font-size: 18px;
        color: #444444;
        line-height: 1.5;
        max-width: 800px;
        margin-right: 24px;
      }
      .section__listing {
        color: #0045e3;
        font-size: 32px;
        font-weight: bold;
      }

      @media (max-width: 768px) {
        section#blockchain {
          flex-direction: column;
        }
      }

      @media (max-width: 640px) {
        section {
          flex-direction: column;
        }
        section p {
          font-size: 16px;
          text-align: justify;
          margin-right: 0;
        }
        .section__listing {
          font-size: 22px;
        }
        section h2 {
          font-size: 28px;
          margin-top: 9px;
          margin-bottom: 24px;
        }
      }
    `}</style>
  </Page>
);

