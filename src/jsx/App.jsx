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
      {
        // Banner container
      }
      <div className="background" style={{ paddingBottom: 0 }}>
        <div className="content_container wide">
          <h2 className="title">A Trade Hope</h2>
          <h3 className="subtitle highlight">The Role Of The Black Sea Grain Initiative</h3>
          <h3 className="subtitle">In Bringing Ukrainian Grain To The World</h3>
          <h4 className="date">20 October 2022</h4>
        </div>
        <div className="unctad_logo_container">
          <img src="https://unctad.org/sites/default/files/2022-11/unctad_logo_white.svg" alt="UNCTAD logo" />
        </div>
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0" />
          <path className="a2" d="M0 20 L30 52 L60 20" />
          <path className="a3" d="M0 40 L30 72 L60 40" />
        </svg>
        <div className="ship_container" />
      </div>
      <p className="button_container"><a href="https://unctad.org/webflyer/trade-hope-role-black-sea-grain-initiative-bringing-ukrainian-grain-world" className="button">Download the report in PDF</a></p>
      {
      // Quote container
      }
      <div className="content_container">
        <div className="quote_container">
          <div className="photo_container">
            <div><img src="https://storage.unctad.org/2022-a_trade_hope/assets/img/2022-a_trade_hope_antonio_guterres.png" alt="António Guterres" /></div>
            <div className="caption">Photo/Mark Garten/ONU</div>
          </div>
          <div className="text_container">
            <p>Today, there is a beacon on the Black Sea. A beacon of hope – a beacon of possibility – a beacon of relief -- in a world that needs it more than ever.</p>
            <p>I want to recognize and thank all those who helped make it happen.</p>
            <p>
              To our hosts, President Erdogan and the government of Türkiye:
              <br />
              Your facilitation and persistence have been essential through every step of this process. (…) Thank you very much.
            </p>
            <p>
              To the representatives of the Russian Federation and Ukraine:
              <br />
              You have overcome obstacles and put aside differences to pave the way for an initiative that will serve the common interests of all.
            </p>
            <p className="author">António Guterres</p>
            <p>United Nations Secretary-General, on the signing of the Black Sea Grain Initiative, Istanbul, July 2022</p>
          </div>
        </div>
      </div>
      {
      // Acknowledgements container
      }
      <div className="content_container">
        <h4 className="title">Acknowledgements</h4>
        <p>This report would not have been possible without the essential contributions of the Joint Coordination Center for the Black Sea Grain Initiative, comprised of senior representative from Ukraine, the Russian Federation, Türkiye and the United Nations, which ensures the safe maritime transportation of grain and other foodstuffs from three key Ukrainian ports in the Black Sea to the rest of the world.</p>
        <p>The Global Crisis Response Group convened by the UN Secretary General played an important role, focusing the world’s attention on the food insecurity crisis, providing analysis and calling on the international community to avert the worst cost of living crisis in a generation and its devastating impact on billions of people.</p>
      </div>
      {
      // Introduction container
      }
      <div className="background">
        <div className="content_container">
          <h4 className="title">Introduction</h4>
          <p>As two of the world’s largest suppliers of grain, Ukraine and the Russian Federation are important sources of food for many developing countries. However, the war brought grain exports from Ukraine to an almost grinding halt and slowed down exports of grain and fertilizers from the Russian Federation. </p>
          <p>Faced with the threat of food insecurity for millions of people around the world, on 22 July, 2022, the United Nations brokered two initiatives. One is the memorandum of understanding between the UN and the Russian Federation to facilitate unimpeded access for their food and fertilizers exports to global markets. The second, and the focus of this analysis, is the Black Sea Grain Initiative (BSGI) signed by the UN, the Russian Federation, Türkiye and Ukraine to resume Ukrainian grain exports via the Black Sea amid the war.</p>
          <p>In a short space of time, the BSGI has gathered momentum. Port activity in Ukraine is picking up and large shipments of grain are reaching world markets. The Initiative has helped to stabilize and subsequently lower global food prices, and move precious grain from one of the world’s breadbaskets to the tables of those in need.</p>
          <p className="highlight">However, with the BSGI ending in just over a month and its renewal uncertain, the price of some commodities, such as wheat and maize, is rising again. Without The Initiative, there is little hope for providing food security, especially for developing and least developed countries.</p>
        </div>
      </div>
      {
      // Section 1 container
      }
      <div className="section_banner_container section_banner_container_1">
        <div className="section_banner"><div className="number">1</div></div>
        <div className="heading_wrapper"><h3>Increasing port activity</h3></div>
      </div>
      <div className="content_container">
        <p>As the war erupted in Ukraine, the world watched as valuable grain corridors were closed off. Weekly ship departures from Ukrainian ports plummeted. There was a marginal recovery in subsequent weeks but port departures remained considerably below their 2021 levels. After the signing of the Initiative, there was a gradual rise in ship departures. While shipments are still about 40–50 per cent below the pre-war period, the trend is in the right direction.</p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/2x3Y4/" title="More and larger ships have departed from Ukrainian ports" />
      </div>
      <div className="content_container">
        <p>
          The war has caused significant changes in port call patterns in Ukraine and the Black Sea region. While Ukrainian port calls fell, they increased in
          {' '}
          <a href="https://www.datawrapper.de/_/fkH3n/" target="_blank" rel="noreferrer">Romania</a>
          {' '}
          and
          {' '}
          <a href="https://www.datawrapper.de/_/81U7y/" target="_blank" rel="noreferrer">Bulgaria</a>
          {' '}
          as Ukrainian traders were seeking alternative viable routes.
        </p>
        <p>In addition, the halt of operations at Black Sea ports resulted in an important shift: rivers became the main artery of Ukrainian trade. Before the war, more than 90 per cent of ships departed from seaports. Following the invasion, this share dropped to 20 per cent. After the signing of The Initiative (August–September), this share increased to 36 per cent.</p>
        <p>However, this increased reliance on river ports came with constraints. Unlike seaports, these river routes were unable to handle large dry bulk vessels and instead catered to small cargo and multipurpose vessels from Ukraine. This resulted in noticeably low volumes traded.</p>
        <p>Under the Initiative, these seaports were reopened – Odesa, Chornomorsk, Pivdennyi/Yuzhny. As a result, the number of port calls increased, and more importantly, the volumes carried increased significantly. Even though Danube River ports still account for the majority of vessel departures, seaports account for the majority of the volume shipped, as they are important hubs for much larger vessels.</p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/f0A2Y/" title="And as seaport activity increased so did their exports" />
      </div>
      <div className="content_container">
        <p>As departures of dry bulk carriers from these major ports increased so did the amount of grain traded. Weekly tonnage shipped under the Black Sea Grain Initiative reached 1.2 million tonnes by September. This is still below 2021 levels, but the gap is closing.</p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/uAhX8/" title="The gap in weekly grain cargo is closing. But there is still work to do" />
      </div>
      {
      // Section 2 container
      }
      <div className="section_banner_container section_banner_container_2">
        <div className="section_banner"><div className="number">2</div></div>
        <div className="heading_wrapper"><h3>Reopening the grain gates of Ukraine to developing countries</h3></div>
      </div>
      <div className="content_container">
        <p>
          The BSGI reopened the grain gates of Ukraine to the world. As at 17 October 2022, nearly 8 million tonnes of grain and foodstuff have let Ukrainian ports under the Initiative.
          {' '}
          <a href="https://www.un.org/en/black-sea-grain-initiative/vessel-movements" target="_blank" rel="noreferrer">And this figure keeps rising every day</a>
          . So far, from the total cargo shipped, maize and wheat account for more than 70 per cent of total exports.
        </p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/TwRr9/" title="Food is reaching global markets" />
      </div>
      <div className="content_container">
        <p>More than 3 million tonnes of maize have left Ukraine since the signing of the Initiative, most of which has gone to developed countries. However, it is important to note that this may refer only to the initial destination, as this grain may be processed or re-exported to other countries. In addition, developed countries rank amongst the world’s largest exporters and importers of animal feed of which maize is an important component. It is thus likely that part of this cargo includes maize for feedstock.</p>
        <p>In contrast, wheat, a fundamental pillar of food security for the Global South, is mostly going to developing countries. In fact, nearly 20 per cent of wheat exported has gone to least developed countries (LDCs) with vulnerable populations, as those served by the World Food Programme.</p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/95VKF/" title="Most maize goes to developed countries, and likely a significant input for animal feed" />
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/jpQLJ/" title="Wheat is a pillar of food security, and it is going where it is most needed" />
      </div>

      <div className="content_container">
        <p>In the short space of time that the Initiative has been in operation, grain exports to developing and least developed countries have started to recover. But more needs to be done to match previous levels of exports.</p>
        <p>For instance, close to 1 million tonnes of maize and wheat were sent from Ukraine to developing countries. However, exports between January and September 2022 are still below the export levels in the same period in 2021. The export gap, the difference between these two periods, is considerable, at 2.4 million tonnes for maize and 8.1 million tonnes for wheat.</p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/ukzwU/" title="Vital grain is flowing, but there is still a large export gap to fill" />
      </div>
      <div className="content_container">
        <p>The Initiative doubled the amount of wheat shipped to least developed countries between August and September - about half a million tonnes. Nevertheless, wheat exports to LDCs between January and September 2022 have totalled less than one million tonnes. This implies an export gap of 1.2 million tonnes with respect to 2021. The size of the gap may vary from country to country.</p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/fl5FK/" title="Ukrainian wheat exports to Least Developed Countries" />
      </div>
      <div className="content_container">
        <p>Important export gaps remain to be filled. As 2022 comes to a close, demand from developing and least developed countries may not be met without the BSGI. The importance of the BSGI for the most vulnerable nations cannot be underestimated.</p>
      </div>
      {
      // Section 3 container
      }
      <div className="section_banner_container section_banner_container_3">
        <div className="section_banner"><div className="number">3</div></div>
        <div className="heading_wrapper"><h3>Pushing down food prices</h3></div>
      </div>
      <div className="content_container">
        <p>In the last two years food prices have gradually increased due in part to COVID-19 induced disruptions. The war in Ukraine further exacerbated this trend. The BSGI has helped to make grain more available, and it has also helped to ease the pressure on food prices. This in turn has helped to improve global access to food, particularly for the poorest and most vulnerable.</p>
        <p>The prospect of the Black Sea Grain Initiative and the reopening of the Black Sea ports helped to push down historically high market prices. Since April 2022, the FAO Food Price index has been on a downward trend.</p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/eZZVE/" title="The Initiative has helped to push down food prices in the last six months" />
      </div>
      <div className="content_container">
        <p>However, prices have begun to rise again amid mounting concerns about whether the BSGI will be renewed, and the threat of further disruptions to trade in the Black Sea and the closure of grain corridors.</p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/YT9P5/" title="However, uncertainty about the renewal of the Initiative is sending prices of grain up again" />
      </div>
      <div className="content_container">
        <p>Wheat and maize prices are still at historically high levels, which continues to weigh on the affordability of basic foods and poses a risk to food security the world over.</p>
        <p>This is one more reason why the renewal of the Initiative on 20 November is important for developing countries.</p>
      </div>
      <div className="background last_slide">
        <div className="content_container">
          <h3 className="highlight">The Initiative remains vital for global food security</h3>
          <p>The urgent threat of rising world hunger and the cost to human life requires an urgent response. Amid these difficult and complex challenges, the Black Sea Grain Initiative provided a measure of stability to our global food supply and especially for developing countries. The Initiative has gathered momentum and everyday ensures that more and more grain reaches the world. It has managed to lessen the blow on the most vulnerable but there is still more to be done to maintain access and restore exports to those in need.</p>
          <p className="highlight">For the time being, the Black Sea Grain Initiative may be our best hope.</p>
          <br />
          <p className="button_container"><a href="https://unctad.org/webflyer/trade-hope-role-black-sea-grain-initiative-bringing-ukrainian-grain-world" className="button">Download the report in PDF</a></p>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
