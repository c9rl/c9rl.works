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
          <h3><span role="img" aria-label="cheese">🧀</span> I went to school. <span className="about-body--years">2009</span></h3>
          <p>
            I attended the University of Wisconsin-Madison in the Fall of 2009 with the intent to be an International
            Business and Japanese double major. I took a variety of courses from calculus/analytical geometry and
            Asian-American history to economics and poetry during my Freshman year, and despite being accepted into the
            business school, I instead decided to pursue a B.S. in Economics (thank you Paul Krugman for writing what
            one Amazon user called a 'very comprehensive and straight-to-the-point' textbook). If you didn't find me
            studying in the basement of Steenbock Library, a Memorial Library Cage, or a table at <a
            href="https://goo.gl/maps/YgQPT2XCK8N2" target="_blank" rel="noopener noreferrer">my favorite coffee shop</a>, you could find me
            speaking Japanese at 会話の会 in Memorial Union or tutoring other students on how to draw supply/demand curves
            in the business school atrium.
          </p>
          <h3><span role="img" aria-label="high-speed-train">🚅</span> Did some cool internships. <span className="about-body--years">2009-2011</span></h3>
          <p>
            In 2010, I interned at Central Japan Railways (JR Central), Japan's highest throughput high-speed-rail
            operator. I lived in a little apartment near Shinagawa Station in Tokyo for 3 months during the summer and
            conducted field work analyzing JR Central's marketing strategies, ridership/throughput, and presented my
            research to their various divisions in Japanese. The following summer, I participated in Capital One's
            Summit for Developing Leaders, a one-week intensive case study competition, where my team placed 2nd (we
            took home some sweet <i>vintage</i> iPod Shuffles as our prize).
          </p>
          <h3><span role="img" aria-label="flag-jpn">🇯🇵</span> Lived in 日本. <span className="about-body--years">2011-2012</span></h3>
          <p>
            In 2011, I left to study abroad at <a href="https://www.keio.ac.jp/en/" target="_blank" rel="noopener noreferrer">Keio
            University</a> in Tokyo (go Unicorns - <i>seriously</i>, their mascot is a Unicorn) as a Monbukagakusho
            Scholar. During that year, I built my proficiency in Level 9 of Keio's Japanese Language Program, passed N2
            of the JLPT, and played on one of Keio's intramural basketball teams. I also spent a lot of time traveling
            around Japan, especially obscure areas like Yakushima, Mt. Aso, and Takayama.
          </p>
          <h3><span role="img" aria-label="male-graduate">👨‍🎓</span> Graduated. And flew to the East Coast. <span className="about-body--years">2013 - 2015</span></h3>
          <p>
            In May 2013, I walked across the stage in the Kohl Center to receive my diploma holder for a B.S. in
            Economics, Japanese, and East Asian Studies with highest distinction and Phi Beta Kappa (the real diploma
            came in the mail a few weeks later) after <a href="https://www.youtube.com/watch?v=egmgt5Y-7bQ" target="_blank" rel="noopener noreferrer">this workaholic</a> gave his commencement
            speech.
          </p>
          <p>
            After graduating, I worked as an Associate Consultant at <a href="https://www.thefrontierproject.com/" target="_blank" rel="noopener noreferrer">The Frontier Project</a>, a
            boutique consulting firm located in Richmond, VA. During my time there, I designed training programs that
            made use of Behavioral Economics to incentivize human behavior and made data-driven recommendations for
            client projects. I began building tools to support my data analysis and taking on web-based projects. My
            role shifted from business facing activities to creating web applications for our clients using JavaScript,
            PHP, and Ruby. It was here that I really started to cultivate my desire to work and build a product through
            coding.
          </p>
          <h3><span role="img" aria-label="male-technologist">👨🏻‍💻</span> And then to the West Coast. <span className="about-body--years">2015-2017</span></h3>
          <p>
            In the Fall of 2015, I moved across the country from Richmond, VA to Los Angeles, CA.
          </p>
          <p>
            While working remote for The Frontier Project on some smaller projects (building an earlier iteration of <a
            href="https://frontieracademy.com/" target="_blank" rel="noopener noreferrer">this</a> and <a
            href="http://www.frontierprojectspaces.com/" target="_blank" rel="noopener noreferrer">this</a>), <a
            href="https://en.wikipedia.org/wiki/MakerSquare" target="_blank" rel="noopener noreferrer">I continued to grow my coding
            skillset</a> and worked with <a href="https://www.linkedin.com/in/shin-adachi-1b6bb1113/" target="_blank" rel="noopener noreferrer">this
            awesome person</a>, <a href="https://www.linkedin.com/in/daisytsao/" target="_blank" rel="noopener noreferrer">this awesome person</a>,
            and <a href="https://www.linkedin.com/in/justanman/" target="_blank" rel="noopener noreferrer">this awesome person</a> on a handful of
            apps, <a href="https://engineeringblog.yelp.com/2016/05/yelp-online-hackathon-winners.html" target="_blank" rel="noopener noreferrer">one
            of which was even recognized by Yelp</a>. After 2 years of working at The Frontier Project, I left for the
            opportunity to be Software Engineer #10 and work on building out <a href="https://my.socialnative.com/" target="_blank" rel="noopener noreferrer">the web
            application</a> of a data-first ad startup, which <a href="https://techcrunch.com/2017/05/18/social-native-raises-8-million-to-build-a-new-social-media-ad-platform/" target="_blank" rel="noopener noreferrer">raised an $8M seed round</a> during my time there.
          </p>
          <p>
            <a href="http://socialnative.com/" target="_blank" rel="noopener noreferrer">Social Native</a> helped brands connect with consumers by
            creating 1:1 personalized content on demand. As a Software Engineer there, I worked across the stack,
            building services for our internal API and integrating with third-party platforms such as Typeform and
            Filestack for data collection and file uploads to building out internal, brand, and creator-facing features
            on our platform. We used a mix of MySQL, Elasticsearch, and Redis for our data storage, Node.js/Koa.js for
            our API, PHP/Laravel for routing/controller actions, and React/Redux for our view layer. We did unit,
            integration, and functional testing using Mocha/Chai, Enzyme and Selenium/Nightwatch.js, and had >80% test
            coverage across our projects.
          </p>
          <h3><span role="img" aria-label="bee">🐝</span> I decided to pursue a MS in Computer Science. <span className="about-body--years">2018</span></h3>
          <p>
            I left Social Native to follow my curiosity. While the work I've done has focused on implementing new
            features and managing our data layer, I continually come back to the question of how companies can make
            better use of their data and draw insights from that. To better equip myself to answer that and become an
            even more effective engineer, I started pursuing a Master of Science in Computer Science at Georgia Tech
            (OMSCS) with a specialization in Machine Learning. I also took some time to travel to Seattle, WA and
            Austin, TX. Oh, and I ran my first half-marathon (2:37:49) in San Diego.
          </p>
          <h3><span role="img" aria-label="male-facepalm">🤦🏻</span> Here's the cool stuff I'm doing now. <span className="about-body--years">2019-current</span></h3>
          <p>
            I'm currently working remotely in sunny Los Angeles at <a href="https://www.workstep.com/" target="_blank" rel="noopener noreferrer">WorkStep</a> where we're enabling
            better career outcomes for hourly workers by providing a transparent and efficient labor marketplace. So
            yes, I'm both working and pursuing my MS remotely.
          </p>
          <p>
            On the weekends, when I'm not studying for my <a href="http://www.omscs.gatech.edu/cs-6750-human-computer-interaction" target="_blank" rel="noopener noreferrer">Human Computer
            Interaction</a> course this summer, I like spending time with my wife and two cats: Arya (<i>yeah, we named
            her that before she downed the NK - so kinda ahead of the curve here</i>) and Neue. You'll find us walking
            to breakfast at Republique, taking a Lyft to the Arts District in DTLA for some beer and sausages at
            Wurstkuche, <a href="https://thisisatrip.tumblr.com" target="_blank" rel="noopener noreferrer">flying to our next adventure</a>, or <a
            href="https://github.com/nativeandproper" target="_blank" rel="noopener noreferrer">coding something together at home</a>. I think
            mornings are best spent with a cup of black coffee (or of it's Philz, a Silken Splendor, Philz Way) and no
            distractions.
          </p>
          <h3><span role="img" aria-label="male-hand-raised">🙋‍♂</span>️ FAQs</h3>
          <p>
            <b><i>What are you reading?</i></b>
          </p>
          <p>
            I'm currently reading <i>Kitchen Confidential</i> by Anthony Bourdain. I started <i>Infinite Jest</i> by
            David Foster Wallace but tabled it after 150 pages.
          </p>
          <p>
            <b><i>What are you listening to?</i></b>
          </p>
          <p>
            <i>Father of the Bride</i> by Vampire Weekend, <i>Stranger in the Alps</i> by Phoebe Bridgers, and some
            Kanye.
          </p>
          <p>
            <b><i>You like traveling. Where are you headed next?</i></b>
          </p>
          <p>
            Chicago, Palm Springs, Minneapolis, Madison, and somewhere across the pond (fingers crossed).
          </p>
          <p>
            <b><i>Don't you like keyboards?</i></b>
          </p>
          <p>
            Wow, how'd you know that about me? Yes, I <i>love keyboards</i>. I'm currently putting together my ideal
            keyboard. I'm currently working with
            an HHKB with MX sliders and XDA Canvas caps, but waiting on the <a href="https://rama.works/koyu" target="_blank" rel="noopener noreferrer">KOYU</a> which I'll
            outfit with Zealios switches and XDA Oblique caps.
          </p>
          <p>
            <b><i>What's a non-coding goal you have for yourself this year?</i></b>
          </p>
          <p>
            This guy (<i>thumbs pointed at self</i>) is going to dunk. I'm also going to write more.
          </p>
          <p>
            <b><i>Ok, well what's a coding goal you have for yourself this year?</i></b>
          </p>
          <p>
            New project; More technical writing. Look for some more options in the nav above later this year.
          </p>
          <p>
            <b><i>Thanks, no more questions please.</i></b>
          </p>
          <p>
            No, that's what <i>I say</i>.
          </p>
          <hr/>
          <p>
            If you'd like a boring and rigid retelling of the above, <a href="https://s3-us-west-1.amazonaws.com/hel1x/resume/Carl_Bernardo_Resume.pdf" target="_blank" rel="noopener noreferrer">click
            here</a> to view my resume.
          </p>
        </div>
      </React.Fragment>
    )
  }
}