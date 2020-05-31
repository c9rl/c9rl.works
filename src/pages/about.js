import React from "react"

import HeaderNav from "../components/header-nav"
import SEO from "../components/seo"

import("../styles/pages/about.scss");

export default class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SEO title="about" />
        <HeaderNav />

        <div className="content about-body">
          <div className="about-body__title">
            <h1>new "about me" page, who dis?</h1>
            <img className="about-body__title-img" src="https://hel1x.s3-us-west-1.amazonaws.com/assets/carl.png" alt="carl-caricature" />
          </div>
          <h3>
            <span role="img" aria-label="cheese">🧀</span> I went to school. <span className="about-body--years">2009</span>
          </h3>
          <p>
            I attended <a href="https://www.wisc.edu/" target="_blank" rel="noopener noreferrer">some school in the Midwest</a> with the intent of majoring in International
            Business and Japanese. I spent my freshman year taking a variety of courses from calculus/analytical geometry and
            Asian-American history to economics and poetry. At the end of the year, I was accepted to the
            Business School, but instead decided to pursue a degree in Economics thanks to <a href="https://en.wikipedia.org/wiki/Paul_Krugman" target="_blank" rel="noopener noreferrer">this NYTimes Columnist's</a> Textbook.
            If you didn't find me studying in the basement of Steenbock Library or at a table at <a
            href="https://goo.gl/maps/YgQPT2XCK8N2" target="_blank" rel="noopener noreferrer">my favorite coffee shop in Madison</a>,
            you could find me speaking Japanese at 会話の会 in Memorial Union or tutoring other students on how
            to draw supply/demand curves in the business school atrium.
          </p>
          <h3>
            <span role="img" aria-label="high-speed-train">🚅</span> Did some cool internships. <span className="about-body--years">2009-2011</span>
          </h3>
          <p>
            In 2010, I interned at <a href="https://global.jr-central.co.jp/en/" target="_blank" rel="noopener noreferrer">a cool train company in Tokyo</a>. I lived in a little apartment
            near Shinagawa Station in Tokyo for 3 months during the summer and conducted field work analyzing their
            marketing strategies, ridership, and throughput. The following summer I participated in <a href="https://campus.capitalone.com/summits/" target="_blank" rel="noopener noreferrer">Capital
            One's Summit for Developing Leaders</a> where my team placed 2nd and took home some sweet <i>vintage</i> iPod Shuffles as our prize.
          </p>
          <h3>
            <span role="img" aria-label="flag-jpn">🇯🇵</span> Lived in 日本. <span className="about-body--years">2011-2012</span>
          </h3>
          <p>
            In 2011, I left to study abroad at <a href="https://www.keio.ac.jp/en/" target="_blank" rel="noopener noreferrer">Keio
            University</a> in Tokyo (go Unicorns - <i>seriously</i>, their mascot is a Unicorn) as a Monbukagakusho
            Scholar. During that year, I built my proficiency in Level 9 of Keio's Japanese Language Program, passed N2
            of the JLPT, and played on one of Keio's intramural basketball teams. I also spent lots of early mornings at Gusto making use of
            their unlimited drink bar (non-alcoholic of course).
          </p>
          <h3>
            <span role="img" aria-label="male-graduate">👨‍🎓</span> Graduated. And flew to the East Coast. <span className="about-body--years">2013 - 2015</span>
          </h3>
          <p>
            In May 2013, I walked across the stage in the Kohl Center to receive my diploma holder (the real diploma
            came in the mail a few weeks later) for a B.S. in Economics, Japanese, and East Asian Studies
            after <a href="https://www.youtube.com/watch?v=egmgt5Y-7bQ" target="_blank" rel="noopener noreferrer">this workaholic</a> gave
            his commencement speech.
          </p>
          <p>
            After graduating, I moved to the East Coast and worked as an Associate Consultant
            at <a href="https://www.thefrontierproject.com/" target="_blank" rel="noopener noreferrer">a
            boutique consulting firm</a> located in Richmond, VA. During my time there, I designed training programs that
            made use of Behavioral Economics to incentivize human behavior and made data-driven recommendations for
            client projects. I began building tools to support my data analysis and taking on web-based projects. My
            role shifted from business facing activities to creating web applications for our clients using JavaScript/jQuery,
            PHP, and Ruby. It was here that I really started to cultivate my desire to work and build a product through
            coding.
          </p>
          <h3>
            <span role="img" aria-label="male-technologist">👨🏻‍💻</span> And then to the West Coast. <span className="about-body--years">2015-2019</span>
          </h3>
          <p>
            In the Fall of 2015, I moved across the country from Richmond, VA to Los Angeles, CA.
          </p>
          <p>
            While working remote for my company on some smaller web projects, I continued to grow my coding
            skillset and worked with <a href="https://www.linkedin.com/in/shin-adachi-1b6bb1113/" target="_blank" rel="noopener noreferrer">this
            awesome person</a>, <a href="https://www.linkedin.com/in/daisytsao/" target="_blank" rel="noopener noreferrer">this awesome person</a>,
            and <a href="https://www.linkedin.com/in/justanman/" target="_blank" rel="noopener noreferrer">this awesome person</a> on a handful of
            apps, <a href="https://engineeringblog.yelp.com/2016/05/yelp-online-hackathon-winners.html" target="_blank" rel="noopener noreferrer">one
            of which was even recognized by Yelp</a>. After 2 years of working as a consultant, I left for the
            opportunity to be Software Engineer #10 and work on building out <a href="https://my.socialnative.com/" target="_blank" rel="noopener noreferrer">the web
            application</a> of a data-first ad startup,
            where we received <a href="https://techcrunch.com/2017/05/18/social-native-raises-8-million-to-build-a-new-social-media-ad-platform/" target="_blank" rel="noopener noreferrer">an $8M seed round</a> during
            my time there.
          </p>
          <p>
            I worked across the stack, building services for our internal API and integrating with third-party platforms such as Typeform and
            Filestack for data collection and file uploads to building out internal, brand, and creator-facing features
            on our platform. We used a mix of MySQL, Elasticsearch, and Redis for our data storage, Node.js/Koa.js for
            our API, PHP/Laravel for routing/controller actions, and React/Redux for our view layer. We did unit,
            integration, and functional testing using Mocha/Chai, Enzyme and Selenium/Nightwatch.js, and had >80% test
            coverage across our projects.
          </p>
          <p>
            After that, I decided to follow my curiosity and started pursuing a M.S. in Computer
            Science at <a href="http://www.omscs.gatech.edu/" target="_blank" rel="noopener noreferrer">Georgia Tech (OMSCS)</a>. I also took some time to travel to Seattle, WA and Austin, TX. Oh, and I ran
            my first half-marathon (2:37:49) in San Diego.
          </p>
          <p>
            While continuing my studies at Georgia Tech, I worked remotely for a company based in San Francisco that enables
            better career outcomes for hourly workers by providing a transparent and efficient labor marketplace. <a href="https://www.workstep.com/" target="_blank" rel="noopener noreferrer">There</a>, 
            we used MySQL/Memcached for our data storage, Python/WebApp2 for our APIs, and React/Redux/Redux Saga for our view layer.
            I worked across all parts of the application and helped re-architect our employer interview scheduling feature,
            and was a major contributor to the new employer self-service flow, which doubled our customer success teams
            productivity (measured in time spent onboarding new employer customers).
          </p>
          <h3>
            <span role="img" aria-label="male-facepalm">🤦🏻</span> Here's the cool stuff I'm doing now. <span className="about-body--years">2020-current</span>
          </h3>
          <p>
            I'm currently consulting for a mobile tech and data science company oriented around financial services in emerging markets.
          </p>
          <p>
            I am <b>NOT</b> actively looking for new opportunities, but am open to more consulting work or remote full-time positions with
            companies that have secured a Series A (still reach out if you think my skillset matches what you're looking for - I don't bite). I'm
            a HUGE fan of JavaScript (particularly the React Ecosystem and Vue.js) and get overly excited about <a href="https://deno.land/"  target="_blank" rel="noopener noreferrer">Deno</a>. I would
            LOVE to work with Python again or even dabble with some Golang. And I respect the tried and true Java.
          </p>
          <p>
            Here are things I'm currently reading (<span role="img" aria-label="books">📚</span>), 
            watching (<span role="img" aria-label="eyes-headphones">👀</span>), and 
            playing (<span role="img" aria-label="games">🎮</span>), and planning to go to (<span role="img" aria-label="plane-departure">🛫</span>):
          </p>
          <ul>
            <li>
              <span role="img" aria-label="books">📚 </span>
              Digital Minimalism, The Institute, and The Name of the Wind
            </li>
            <li>
              <span role="img" aria-label="eyes-headphones">👀 </span>
              The Americans, Better Call Saul, and Westworld
            </li>
            <li>
              <span role="img" aria-label="games">🎮 </span>
              Valorant, Spirit Island, Animal Crossing: New Horizons
            </li>
            <li>
              <span role="img" aria-label="plane-departure">🛫 </span>
              Stockholm, Kiruna, Copenhagen, Palm Springs, and a Cabin in the Woods
            </li>
          </ul>
          <hr/>
          <h3>
            <span role="img" aria-label="male-hand-raised">🙋‍♂</span>️ 10 Fun (and definitely not cheesy) Icebreaker Questions
          </h3>
          <p>
            <b>1. Favorite quote?</b>
          </p>
          <p>
            <i>
              "If I'm an advocate of anything, it's to move. As far as you can, as much as you can. Across the ocean, or simply across the river.
              The extent to which you can walk in someone else's shoes or at least eat their food, it's a plus for everybody. Open your mind,
              get up off the couch, move."
            </i>
          </p>
          <p>
            <i>- Anthony Bourdain</i>
          </p>
          <p>
            <b>2. Least favorite quote?</b>
          </p>
          <p>
            <i>
              "If you're offered a seat on a rocket ship, you don't ask what seat. You just get on."
            </i>
          </p>
          <p>
            <i>- Sheryl Sandberg</i>
          </p>
          <p>
            Shut up. You don't blindly get on a rocket ship when you don't know who built it, who's flying it, who else is on it, where it's going, and how much fuel is in the tank.
          </p>
          <p>
            <b>3. Book smart or street smart?</b>
          </p>
          <p>
            Book smart.
          </p>
          <p>
            <b>4. Morning or afternoon meetings?</b>
          </p>
          <p>
            Afternoon. Mornings are best spent with a cup of black coffee (or if it's Philz, a Silken Splendor - Philz Way) and NO distractions.
          </p>
          <p>
            <b>5. How would you sell hot chocolate in Florida?</b>
          </p>
          <p>
            This is a sales question, and I'm NOT a sales person. It's not my job to convince (or trick) customers into believing they
            need a product when they clearly don't. That said, this question assumes that people in Florida don't want
            hot chocolate, which simply isn't true. Soooooo... we'd sell normally, collect data, analyze that data, and then
            focus on our customers at the edges (those who hate our product and those who love our product). It's then my job as an engineer
            to reiterate on our product (do we change the recipe? do we change the cup we sell it in? etc). We then start the process
            over again.
          </p>
          <p>
            I wholeheartedly believe there are products for which there is no market for regardless of how great the team is who built it. I don't work with
            founders who are too blind to see that. If this offends you, we probably shouldn't work together.
          </p>
          <p>
            <b>6. Where is your happy place?</b>
          </p>
          <p>
            Palm Springs, CA. Ace Hotel. Poolside. Good book in one hand; pina colada in the other.
          </p>
          <p>
            <b>7. What is your go to comfort food?</b>
          </p>
          <p>
            Give me a bowl of piping-hot steamed white rice and Egg Foo Young with the gravy from any hole-in-the-wall
            place or a hot dog and fries from Gene & Jude's in Chicago, IL any day of the week.
          </p>
          <p>
            <b>8. What are you still searching for?</b>
          </p>
          <p>
            A good taco in LA. Yeah, I said it.
          </p>
          <p>
            <b>9. What 2000s song will always be a banger?</b>
          </p>
          <p>
            "Ocean Avenue" by Yellowcard
          </p>
          <p>
            <b>10. Best meme?</b>
          </p>
          <img
            className="swaggy-p"
            src="https://hel1x.s3-us-west-1.amazonaws.com/assets/nick-young-confused.jpg"
            alt="swaggy-p"
          />
          <p>
            <b>Thanks, no more questions please.</b>
          </p>
          <p>
            No, that's what <i>I say</i>.
          </p>
        </div>
      </React.Fragment>
    )
  }
}