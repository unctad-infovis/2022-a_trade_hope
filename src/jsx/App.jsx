import React, { /* useState, */useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
import ChartContainer from './components/ChartContainer.jsx';
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

const appID = '#app-root-2022-a_trade_hope';

function App() {
  // Data states.
  // const [data, setData] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions,func-names
    !(function () {
      // eslint-disable-next-line no-restricted-syntax,no-void,guard-for-in
      window.addEventListener('message', ((e) => { if (void 0 !== e.data['datawrapper-height']) { const t = document.querySelectorAll(`${appID} iframe`); for (const a in e.data['datawrapper-height']) for (let r = 0; r < t.length; r++) { if (t[r].contentWindow === e.source)t[r].style.height = `${e.data['datawrapper-height'][a]}px`; } } }));
    }());
  }, []);

  return (
    <div className="app">
      <div className="background">
        <div className="content_container">
          <h2 className="title">A Trade Hope</h2>
          <h3 className="subtitle highlight">The Role Of The Black Sea Grain Initiative</h3>
          <h3 className="subtitle">In Bringing Ukrainian Grain To The World</h3>
          <h4 className="date">14 October 2022</h4>
          <h3><img src="./assets/img/unctad_logo_white.png" alt="UNCTAD Logo" className="unctad_logo" /></h3>
          <p>As two of the world’s largest suppliers of grain, Ukraine and the Russian Federation are important sources of food for many developing countries. However, the war brought grain from Ukraine to an almost grinding halt and slowed down exports of grain and fertilizers from the Russian Federation. Faced with the threat of food insecurity for millions of people around the world, the United Nations brokered two initiatives.</p>
          <p>One is the memorandum of understanding between the United Nations and the Russian Federation to facilitate the unimpeded access of exports of their food and fertilizers to global markets.</p>
          <p>The second, which we will explore, is the Black Sea Grain Initiative signed by the United Nations, the Russian Federation, Türkiye and Ukraine to reopen the Ukrainian gates of grain to the world.</p>
          <p className="highlight">In a short period of time, the Black Sea Grain Initiative has gathered momentum, and...</p>
        </div>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/2x3Y4/2/" title="More and larger ships have departed from Ukrainian ports" />
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/f0A2Y/1/" title="And as seaport activity increased so did their exports" />
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/uAhX8/1/" title="The gap in weekly grain cargo is closing.But there is still work to do" />
      </div>

      <div className="background">
        <div className="content_container">
          <h3>The Initiative has become</h3>
          <h3 className="highlight">a trade hope for the world</h3>
          <h3> and particularly for developing countries.</h3>
          <h2 className="highlight">7,000,000</h2>
          <h3>tonnes of grain and food have left Ukraine</h3>
          <h2 className="highlight">300</h2>
          <h3>boats</h3>
          <h4 className="date">As of 14 October 2022</h4>
        </div>
      </div>

      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/jpQLJ/1/" title="Wheat is a pillar of food security, and it is going where it is most needed" />
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/ukzwU/1/" title="Vital grain is flowing, but there is still a large export gap to fill" />
        <br />
        <ChartContainer src="https://datawrapper.dwcdn.net/fl5FK/1/" title="Ukrainian wheat exports to Least Developed Countries" />
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/eZZVE/1/" title="The Initiative has helped to push down food prices in the last six months" />
      </div>
      <div className="content_container">
        <p>The prospect of the Black Sea Grain Initiative and the reopening of the Black Sea ports helped to push down historically high market prices. Since April 2022, the FAO Food Price index has been on a downward trend.</p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/YT9P5/2/" title="Maize and wheat prices are again rising" />
      </div>
      <div className="background">
        <div className="content_container">
          <h3>The Black Sea Grain Initiative</h3>
          <h3 className="highlight">remains our best trade hope</h3>
          <h3><img src="./assets/img/unctad_logo_white.png" alt="UNCTAD Logo" className="unctad_logo" /></h3>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
