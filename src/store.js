import { connect, createStore } from 'undux';

export default connect(
    createStore({
        projects: [

            {
                featuredImage: 'bookmarks.png',
                name: 'Craftsy Feature Development',
                summary: 'This is an example of one of the many front-end features I developed at Craftsy in our React stack.',
                description: 'Feature development at Craftsy entails a product team containing at least a front-end engineer, a backend-engineer, a product manager, and a UX designer. The front-end engineer interacts with the API, writing implementation code in our React stack. We write Jest unit/integration tests and Selenium functional tests for each feature. In the feature shown, we added tagging ability to bookmarks including creating, editing, and deleting.',
                tags: [
                    'React',
                    'Redux',
                    'Node.js',
                    'Recompose',
                    'CSS Modules',
                    'Sass',
                    'Webpack',
                    'Jest',
                    'Selenium',
                ],
                images: [
                    'screen-book2.png',
                    'screen-book1.png',
                    // 'screen-book3.png',
                    'screen-book4.png',
                    'screen-book5.png',
                    'screen-book6.png',
                ],
                siteLink: 'https://www.mybluprint.com/play?p=11475&e=20886',
            },
            {
                featuredImage: 'screen-pipeline.png',
                name: 'Front-end Testing & Deployment Overhaul',
                summary: 'Implemented automated testing in Selenium for Craftsy’s new subscription product and improved our Jenkins pipeline in order to not bog down our deployment speed with the new tests.',
                description: 'Implemented automated testing in Selenium for Craftsy’s new subscription product, along with native tests in Appium. I improved our Jenkins pipeline in order to not bog down our deployment speed with the new tests. I added Enzyme into our Jest system to incorporate integration tests, and optimized Jest to work with React-Native files. I trained the front-end team to write strong functional tests and created a BDD testing culture within the team.',
                tags: [
                    'Selenium',
                    'Geb',
                    'React',
                    'Jest',
                    'Enzyme',
                    'Jenkins',
                    'Spock',
                    'Appium',
                ],
                images: [
                    'screen-spec.png',
                    'screen-pipeline.png',
                    'screen-spock.png',
                    'screen-spock2.png',
                ],
                privateMsg: 'This project is internal and is not available for public viewing.',
            },
            {
                featuredImage: 'vpl.png',
                name: 'Video Player Library',
                summary: 'In 2018, Craftsy  replaced  our underlying video player with THEOplayer. I wrote a library to connect the THEOplayer API with Craftsy’s “Video Player Experience”, writing methods to loop video, handle video consumption tracking, timeline markers, error handling, and more.',
                description: 'In 2018, Craftsy  replaced  our underlying video player with THEOplayer. I wrote a library to connect the THEOplayer API with Craftsy’s “Video Player Experience”, writing methods to loop video, handle video consumption tracking, timeline markers, error handling, and more.',
                tags: [
                    'Vanilla JavaScript',
                ],
                images: [
                    'screen-vpl.png',
                    'screen-vpl2.png',
                ],
                privateMsg: 'This project is internal and is not available for public viewing.',
            },
            {
                featuredImage: 'appstability.png',
                name: 'App Stability',
                summary: 'Stabilized and standardized React-Native apps by writing clean launch scripts, functional tests, and a native deployment pipeline.',
                description: 'Craftsy has one project that applies Front-end models to both React web and React-Native views. Often, we had problems of web code interfering with native. I led a team to fix our iOS and Android apps, while preventing web from breaking apps in the future. To do this, I cleaned up a lot of the errors we were seeing in the apps. I wrote command line scripts to clean all caches and launch the iOS and Android apps in fresh and cleaned simulators, standardizing the way the team runs apps. I worked on a Fastlane script to standardize deployments. I then built out a new pipeline in Jenkins, running Appium tests and uploading the apps to be deployed, automating work that had previously been done manually, or not at all.',
                tags: [
                    'React-Native',
                    'Swift',
                    'xcode',
                    'gradle',
                    'Java',
                    'iOS',
                    'Android',
                    'Appium',
                    'Selenium',
                    'Geb',
                ],
                images: [
                    'screen-test1.png',
                    'screen-profile.png',
                    'screen-appium.png',
                    'screen-home.png',
                    'screen-activity.png',
                    'screen-category.png',
                ],
                privateMsg: 'This project is internal and is not available for public viewing.',
            },

            {
                featuredImage: 'swapify3.png',
                name: 'Swapify',
                summary: 'Swapify is a full-stack application that "swaps" out modularized front-end components to create different design patterns.',
                description: 'Swapify is a WYSIWYG editor that enables cleverbridge clients to customize their online shopping carts without coding experience. Users select a theme which they are then able to fully customize, from changing fonts, colors, and layouts to swaping out entire shopping cart components such as payment options and order steps. Swapify makes creating and testing different design patterns a breeze, making sales demos more effective and relevant, enabling painless A/B testing for analytics teams, and generally allowing clients to find the pattern that’s best for their conversion.',
                tags: [
                    'React',
                    'Redux',
                    'Node.js',
                    'CouchDB',
                    'Radium',
                    'CSS Modules',
                    'Sass',
                    'Webpack',
                    'Mocha/Chai',
                ],
                images: [
                    'screen-swap-main.png',
                    'screen-swap-layout.png',
                    'screen-swap-header.png',
                    'screen-swap-payment.png',
                    'screen-swap-history.png',
                    'screen-swap-admin.png',
                ],
                privateMsg: 'This project contains sensitive content and is not available for public viewing.',
            },
            {
                featuredImage: 'sassy.png',
                name: 'Sassy',
                summary: 'A design architecture and set of modularized components for the cleverbridge front-end development team to use while coding client e-commerce websites.',
                description: 'A design architecture and set of modularized components for the cleverbridge front-end development team to use while coding client e-commerce websites. From one base repository, billions of design combinations can be executed instantaneously utilizing Sass variables.',
                tags: ['Sass', 'jQuery', 'Gulp'],
                images: ['screen-sassy.png'],
                privateMsg: 'This project contains sensitive content and is not available for public viewing.',
            },
            {
                featuredImage: 'partial.png',
                name: 'Partial Library',
                summary: 'A searchable reference library of the many modules available on the cleverbridge ecosystem, plus the corresponding style blocks (or partials) for each.',
                description: "A searchable reference library of the many modules available on the cleverbridge ecosystem, plus the corresponding style blocks (or partials) for each. When a teammate creates a popular new partial, he or she can submit the partial to the library in real time, enabling the team to share and re-use one another's work. Altogether, the code base and partial library effectively cut the time it takes to develop a cart in half, increasing the efficiency of the entire front-end team by 200%.",
                tags: ['AngularJS', 'Node.js', 'MongoDB', 'ExpressJS', 'Sass'],
                images: [
                    'screen-partial-lib.png',
                    'screen-partial-partial.png',
                    'screen-partial-fc.png',
                ],
                privateMsg: 'This project contains sensitive content and is not available for public viewing.',
            },
            {
                featuredImage: 'cpu.png',
                name: 'CPU to EDU',
                summary: 'CPU to EDU is an application that connects businesses who wish to donate their retired computers, tablets, and other technology with Chicago students in need.',
                description: "CPU to EDU is an application that connects businesses who wish to donate their retired computers, tablets, and other technology with Chicago students in need. Developed during cleverbridge's Hack to the Future Hackathon, our goal is to provide the resources to help students extend learning in the classroom and beyond.",
                tags: ['React', 'Redux', 'Node.js', 'Webpack', 'CSS Modules', 'Sass'],
                images: [
                    'screen-cpu.png',
                    'screen-cpu-new.png',
                    'screen-cpu-listings.png',
                ],
                siteLink: 'https://cputoedu.herokuapp.com/',
                siteGithub: 'https://github.com/stephmilovic/BusinessToSchoolCPU/',
                privateMsg: 'Please be patient, slow Heroku load time.',
            },
            {
                featuredImage: 'pp.png',
                name: 'pliskovicparty.com',
                summary: 'I got married on August 13, 2016. My visual designer wife, the beautiful Sarah Pliske, and I teamed up to design and develop our wedding website.',
                description: 'I got married on August 13, 2016. My visual designer wife, the beautiful Sarah Pliske, and I teamed up to design and develop our wedding website.',
                tags: ['Bourbon/Bourbon Neat', 'HTML5', 'CSS3', 'Sass', 'jQuery'],
                images: [
                    'screen-pp.png',
                ],
                siteLink: 'http://pliskovicparty.com/',
                siteGithub: 'https://github.com/stephmilovic/wedding/',
            },
            // {
            //     featuredImage: 'histeph.png',
            //     name: 'histeph.com',
            //     summary: 'This is my portfolio from 2014. A fun little site created with Bourbon/Bourbon Neat. I had a great time coding this and playing around with some SVG animations.',
            //     description: 'This is my portfolio from 2014. A fun little site created with Bourbon/Bourbon Neat. I had a great time coding this and playing around with some SVG animations.',
            //     tags: ['Bourbon/Bourbon Neat', 'HTML5', 'CSS3', 'Sass', 'jQuery'],
            //     images: [
            //         'screen-histeph.png',
            //     ],
            //     siteLink: 'http://histeph.com/',
            //     siteGithub: 'https://github.com/stephmilovic/WTF/',
            // },
        ],
        extras: [
            {
                title: '20 In Their 20\'s 2017',
                subtitle: 'Crain’s Chicago Business’ 20 In Their 20s',
                date: 'May 2017',
                body: 'I am a member of Crain’s Chicago Business’ 20 In Their 20s for 2017, a distinguished group of company founders, creatives and policy makers who’ve gone on to accomplish great things in Chicago and beyond.',
                link: 'http://www.chicagobusiness.com/section/20-in-their-20s-2017?recipient=D',
                linkCta: 'View Article',
            }, {
                title: 'Outstanding Technology Development Shortlist',
                subtitle: 'Illinois Technology Association CityLIGHTS Awards',
                date: 'September 2016',
                body: 'Swapify, a product that I led engineering on at cleverbridge, was nominated for the ITA\'s CityLIGHTS Award for Outstanding Technology Development.',
                link: 'https://www.illinoistech.org/news/rock-star-finalists-revealed-for-17th-annual-ita-citylights-awards',
                linkCta: 'Read More',
            }, {
                title: 'Product Manager of the Year Shortlist',
                subtitle: 'V3 Digital Technology Leaders Awards',
                date: 'June 2016',
                body: 'I was nominated for Front-end Developer of the year for my leadership and work on the modularization of the cleverbridge front-end architecture, and ended up as a finalist in the Product Manager of the Year category.',
                link: 'http://www.prweb.com/releases/2016/05/prweb13421565.htm',
                linkCta: 'View Press Release',
            }, {
                title: 'She Hacks Chi',
                subtitle: 'Lead Organizer/Creator',
                date: 'October 2015',
                body: 'She Hacks Chi is an annual cleverbridge hackathon that aims to close the gender gap in tech. We bring together beginner and intermediate coders together with experienced developers to hack in a supportive environment, developing applications to increase the number of women in tech.',
                link: 'https://shehackschi.splashthat.com/',
                linkCta: 'Visit Event Page',
            }, {
                title: 'Hack to the Future',
                subtitle: 'Co-organizer & Hack Team Lead',
                date: 'May 2016',
                body: 'Hack to the Future is another cleverbridge hackathon that brings together Chicago-area developers of all skill levels and educators to collaborate on developing applications that extend learning in the classroom.',
                link: 'https://hacktothefuture.splashthat.com/',
                linkCta: 'Visit Event Page',
            }, {
                title: 'Values Initiative Team',
                subtitle: 'Team Member',
                date: 'Summer 2016',
                body: 'Values are the most powerful motivators of personal action. They define and provide guidance as to how we are to act as we pursue our Vision. The Values Initiative Team was a diverse group of employees assembled by culture coaches for their gut level understanding of cleverbridge culture. With feedback from the company, the Values Team redefined and carried out a new set of values at cleverbridge.',
                link: 'https://www.cleverbridge.com/corporate/about-us/careers',
                linkCta: 'Read About The Values',
            }, {
                title: 'Trainings & Conferences',
                items: [{
                    title: 'Dale Carnegie Course',
                    date: 'June 2015',
                    body: 'Leadership, communication, and public speaking training.',
                    link: 'http://www.dalecarnegie.com/events/dale_carnegie_course/',
                }, {
                    title: 'JAZZCON.TECH',
                    date: 'March 2017',
                    body: '3-day conference in New Orleans with a focus on JavaScript and Web Development.',
                    link: 'http://jazzcon.tech/',
                }, {
                    title: 'The Lead Developer',
                    date: 'June 2016',
                    body: '2-day conference featuring practical advice from experts on leading and motivating your team and high-level sessions on new and disruptive technologies.',
                    link: 'http://2016.theleaddeveloper.com/',
                }, {
                    title: 'HTML5DEVCONF',
                    date: 'October 2015',
                    body: 'HTML5Devconf is the largest gathering of technical software developers, designers and decision makers in the world focused on Internet software technologies such as JavaScript, HTML5, CSS, node.js and other cross platform web, mobile and server technologies.',
                    link: 'http://html5devconf.com/',
                }],
            },
        ],
        about: 'Hi, I\'m Steph Milovic. I am a full-stack software engineer with 8 years of experience. I have a focus on JavaScript, Node.js, and Front-end Architecture. I\'ve spent the past year dabbling in DevOps, working with technologies like AWS, Jenkins, and Docker. I have a B.A. in Arts Technology from Illinois State University. I currently work at Craftsy/bluprint as a Senior Front-end Engineer.',
        contact: [
            {
                method: 'email',
                symbol: ']',
                link: 'mailto:milovics1@gmail.com?Subject=Hi%20Steph',
            }, {
                method: 'linkedin',
                symbol: 'L',
                link: 'https://www.linkedin.com/in/stephanie-milovic-8bab1a44',
            }, {
                method: 'github',
                symbol: 'g',
                link: 'https://github.com/stephmilovic',
            }, {
                method: 'twitter',
                symbol: 'T',
                link: 'https://twitter.com/stephmilovic',
            },
        ],
    }),
);
