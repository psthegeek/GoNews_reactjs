import React, { Component } from 'react'
import NewsCards from './NewsCards'
// import Slider from './slider/Slider'


export default class News extends Component {
  articles= [
    {
      "source": {
       "id": null,
       "name": "CBS Sports"
       },
       "author": "Tyler Sullivan",
       "title": "Vikings vs. Patriots score: Live updates, game stats, highlights, TV channel, NFL live stream on Thanksgiving - CBS Sports",
       "description": "It's a Thanksgiving night showdown between two playoff hopefuls as Minnesota hosts New England",
       "url": "https://www.cbssports.com/nfl/news/vikings-vs-patriots-score-live-updates-game-stats-highlights-tv-channel-nfl-live-stream/live/",
       "urlToImage": "https://sportshub.cbsistatic.com/i/r/2019/07/19/36147042-96e0-4c8e-ab42-99e0aaa63613/thumbnail/1200x675/3e0a2ede37274a63ca9489ce0b7938ac/minnesota-vikings-mascot.jpg",
       "publishedAt": "2022-11-25T02:43:00Z",
       "content": "The Patriots and Vikings have one half of football in the books as these two clubs cap off the NFL's Thanksgiving Day triple-header. At the break, the teams were knotted at 16 apiece. \r\nAfter being h… [+1074 chars]"
       },
      {
      "source": {
       "id": null,
       "name": "Creative Bloq"
       },
       "author": null,
       "title": "Black Friday Nintendo Switch live blog: Top deals on consoles, games and more - Creative Bloq",
       "description": "If there's a Black Friday Nintendo Switch deal around, you'll find it here.",
       "url": "https://www.creativebloq.com/news/live/nintendo-switch-deals-live-black-friday",
       "urlToImage": "https://cdn.mos.cms.futurecdn.net/7VQCykd23BrffLzYnugRrS-1200-80.jpg",
       "publishedAt": "2022-11-25T01:52:39Z",
       "content": "2022-11-25T02:32:49.207Z\r\n(Image credit: Future)\r\nSo, the deal below is funny, but the good news is that all of the UK Black Friday Nintendo Switch deals that we've seen over the past few days are st… [+7743 chars]"
       },
      {
      "source": {
       "id": "associated-press",
       "name": "Associated Press"
       },
       "author": "Eileen Ng",
       "title": "New Malaysian PM Anwar vows to heal divided nation, economy - The Associated Press - en Español",
       "description": "KUALA LUMPUR, Malaysia (AP) — Long-time reformist leader Anwar Ibrahim  was sworn in as Malaysia's prime minister Thursday and vowed to heal a racially divided nation, fight corruption and revive an economy struggling with the rising cost of living.",
       "url": "https://apnews.com/article/religion-malaysia-anwar-ibrahim-government-and-politics-06cf3a31c84607ace33d95a8f96a2953",
       "urlToImage": "https://storage.googleapis.com/afs-prod/media/beb4553e65704f4cb9f3380e2a917b65/3000.jpeg",
       "publishedAt": "2022-11-25T01:29:00Z",
       "content": "KUALA LUMPUR, Malaysia (AP) Long-time reformist leader Anwar Ibrahim was sworn in as Malaysias prime minister Thursday and vowed to heal a racially divided nation, fight corruption and revive an econ… [+4795 chars]"
       },
      {
      "source": {
       "id": "associated-press",
       "name": "Associated Press"
       },
       "author": "Jesse Bedayn",
       "title": "Owner of gay club: Shooting comes amid a new 'type of hate' - The Associated Press - en Español",
       "description": "COLORADO SPRINGS, Colo. (AP) — The co-owner of the Colorado Springs gay nightclub where a shooter turned a drag queen’s birthday celebration into a massacre said he thinks the shooting that killed five people  and injured 17 others is a reflection of anti-LGB…",
       "url": "https://apnews.com/article/business-crime-shootings-colorado-springs-774c94125cbad7cf05af2c99b81d42cc",
       "urlToImage": "https://storage.googleapis.com/afs-prod/media/6ef40258d55d42278c5aba8032b93e57/3000.jpeg",
       "publishedAt": "2022-11-25T01:18:45Z",
       "content": "COLORADO SPRINGS, Colo. (AP) The co-owner of the Colorado Springs gay nightclub where a shooter turned a drag queens birthday celebration into a massacre said he thinks the shooting that killed five … [+5264 chars]"
       },
      {
      "source": {
       "id": null,
       "name": "The Guardian"
       },
       "author": "Jonathan Liew",
       "title": "Brazil’s Tite calms fears after emotional Neymar limps off with ankle injury - The Guardian",
       "description": "Brazil manager Tite said he was confident Neymar would play again in this World Cup after the forward was substituted with a suspected sprained ankle in the 2-0 win over Serbia",
       "url": "https://www.theguardian.com/football/2022/nov/24/brazils-tite-calms-fears-after-emotional-neymar-limps-off-with-ankle-injury",
       "urlToImage": "https://i.guim.co.uk/img/media/00ef37bdbfcdcad67e8faa8779c3559b5d2a08b9/0_81_4668_2801/master/4668.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=60772fffed2ec59e7e1c7141918839ab",
       "publishedAt": "2022-11-25T00:55:00Z",
       "content": "The Brazil coach, Tite, has insisted that Neymar will play again in this World Cup despite suffering a suspected sprained ankle in their 2-0 Group G win over Serbia. The forward came off with 11 minu… [+2471 chars]"
       },
      {
      "source": {
       "id": "cnn",
       "name": "CNN"
       },
       "author": "Aya Elamroussi",
       "title": "Survivors and investigators are spending Thanksgiving questioning the motive behind a mass shooting in a Virginia Walmart that left 6 workers dead - CNN",
       "description": "After an ordinary workday turned deadly at a Walmart in Chesapeake, Virginia, survivors and investigators are spending the Thanksgiving holiday questioning the motive of an employee who opened fire on coworkers, killing six before fatally turning the gun on h…",
       "url": "https://www.cnn.com/2022/11/24/us/chesapeake-virginia-walmart-shooting-thursday/index.html",
       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221124115334-15-virginia-walmart-shooting-1123.jpg?c=16x9&q=w_800,c_fill",
       "publishedAt": "2022-11-25T00:43:00Z",
       "content": "After an ordinary workday turned deadly at a Walmart in Chesapeake, Virginia, survivors and investigators are spending the Thanksgiving holiday questioning the motive of an employee who opened fire o… [+7434 chars]"
       },
      {
      "source": {
       "id": "usa-today",
       "name": "USA Today"
       },
       "author": "Kasey Caminiti, Daniel Donabedian, Elsie Boskamp, Jon Winkler, Nusrat Sultana",
       "title": "Early Black Friday: 135+ Thanksgiving deals at Amazon, Target and more - USA TODAY",
       "description": "Whether you want to save on tech, furniture, appliances or fashion, Black Friday 2022 is here with the best deals of the year.",
       "url": "https://www.usatoday.com/story/money/reviewed/2022/11/24/black-friday-2022-deals/10765203002/",
       "urlToImage": "https://www.gannett-cdn.com/presto/2022/11/23/USAT/bef9a80b-1ac1-40ba-b2b5-4387fda06639-Black_Friday_USAT_MainHero3.png?crop=2987,1681,x6,y0&width=2987&height=1681&format=pjpg&auto=webp",
       "publishedAt": "2022-11-25T00:41:09Z",
       "content": "Recommendations are independently chosen by Revieweds editors. Purchases you make through our links may earn us and our publishing partners a commission.\r\nUpdated 7:52 PM EST: We're tracking all the … [+11308 chars]"
       },
      {
      "source": {
       "id": null,
       "name": "Yahoo Entertainment"
       },
       "author": "Yahoo Sports Staff",
       "title": "NFL Thanksgiving Day 2022 live tracker: Cowboys host Giants in huge NFC East showdown - Yahoo Sports",
       "description": "Follow all the action right here with Yahoo Sports.",
       "url": "https://sports.yahoo.com/nfl-thanksgiving-day-2022-live-inactives-scores-news-highlights-dallas-cowboys-new-york-giants-200006549.html",
       "urlToImage": "https://s.yimg.com/ny/api/res/1.2/o.Aafuxn9MfFxzvGpK9Z4Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-11/d7750a10-6c3d-11ed-94fb-aa48b2d99b89",
       "publishedAt": "2022-11-25T00:31:00Z",
       "content": "Yahoo Fantasy Football Forecast\r\nAndy Behrens, Dalton Del Don, Matt Harmon, Liz Loza, Scott Pianowski"
       },
      {
      "source": {
       "id": null,
       "name": "The Guardian"
       },
       "author": "Guardian staff reporter",
       "title": "Russia-Ukraine war at a glance: what we know on day 275 of the invasion - The Guardian",
       "description": "More than 15,000 missing since start of war; EU remains split over Russian oil price cap; Russia risked ‘nuclear catastrophe’",
       "url": "https://www.theguardian.com/world/2022/nov/25/russia-ukraine-war-at-a-glance-what-we-know-on-day-275-of-the-invasion",
       "urlToImage": "https://i.guim.co.uk/img/media/63884be315785650d82f4616c6feba18aba55622/0_0_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f0b05c771172a8a4c78d073517690253",
       "publishedAt": "2022-11-25T00:28:00Z",
       "content": "<li>Russia risked causing a nuclear and radioactive catastrophe by launching attacks in which all Ukraines nuclear power plants were disconnected from the power grid for the first time in 40 years, U… [+3949 chars]"
       },
      {
      "source": {
       "id": "associated-press",
       "name": "Associated Press"
       },
       "author": null,
       "title": "Musk says granting 'amnesty' to suspended Twitter accounts - The Associated Press",
       "description": "SAN FRANCISCO (AP) — New Twitter owner Elon Musk said Thursday that he is granting \"amnesty” for suspended accounts, which online safety experts predict will spur a rise in harassment, hate speech and misinformation.",
       "url": "https://apnews.com/article/elon-musk-technology-donald-trump-business-misinformation-c60bc41229339eaec5008188fa6d057c",
       "urlToImage": "https://storage.googleapis.com/afs-prod/media/41d556e78d7c442392778e64d46476ff/3000.jpeg",
       "publishedAt": "2022-11-25T00:06:15Z",
       "content": "SAN FRANCISCO (AP) New Twitter owner Elon Musk said Thursday that he is granting amnesty for suspended accounts, which online safety experts predict will spur a rise in harassment, hate speech and mi… [+2969 chars]"
       },
      {
      "source": {
       "id": null,
       "name": "BBC News"
       },
       "author": "https://www.facebook.com/bbcnews",
       "title": "Ukraine war: Ukraine struggles to restore power after Russian strikes - BBC",
       "description": "Ukraine says 50% of the country's electricity needs are not being met, and water supplies are affected.",
       "url": "https://www.bbc.com/news/world-europe-63746614",
       "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4BD9/production/_127771491_f6352565-3f1d-4717-89a7-ce1c7a8af965.jpg",
       "publishedAt": "2022-11-24T23:37:16Z",
       "content": "Ukraine has said that as much as 50% of the country's electricity needs are currently not being met, after massive Russian missile strikes this week.\r\nThe Ukrenergo power operator said the priority w… [+3146 chars]"
       },
      {
      "source": {
       "id": null,
       "name": "PEOPLE"
       },
       "author": "https://www.facebook.com/peoplemag",
       "title": "Alec and Hilaria Baldwin Celebrate Thanksgiving with 'Epic Fail Family Photo' Featuring All 7 Kids - Yahoo Entertainment",
       "description": "Hilaria Baldwin shared an \"epic fail family photo\" of her husband, Alec Baldwin, and all seven kids as they marked baby Ilaria's first Thanksgiving",
       "url": "https://people.com/parents/alec-and-hilaria-baldwin-celebrate-thanksgiving-with-all-7-kids/",
       "urlToImage": "https://people.com/thmb/2o75jfSHelfXbH1b_JX0FVtEQgg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1019x452:1021x454)/Hilaria-Thomas-Baldwin-112422jpg-77745b636a684263b910aeea868fb25f.jpg",
       "publishedAt": "2022-11-24T23:22:53Z",
       "content": "Alec and Hilaria Baldwin are celebrating yet another first and unfiltered Thanksgiving with the newest member of their family!\r\nOn Thursday, Hilaria, 38, shared a photo from her family's holiday fest… [+2746 chars]"
       },
      {
      "source": {
       "id": "fox-news",
       "name": "Fox News"
       },
       "author": "Ryan Morik",
       "title": "Buffalo Bills' Von Miller carted into locker room after leg injury - Fox News",
       "description": "Buffalo Bills edge rusher Von Miller left Thursday's game against the Detroit Lions with a knee injury, and was carted into the locker room.",
       "url": "https://www.foxnews.com/sports/buffalo-bills-von-miller-carted-locker-room-leg-injury",
       "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/11/von-miller.jpg",
       "publishedAt": "2022-11-24T23:16:55Z",
       "content": "It wasnt a great Thanksgiving afternoon for one of the best pass rushers in the game.\r\nThe Buffalo Bills Von Miller was carted into the locker room on Thursday and soon ruled out for the game with a … [+2221 chars]"
       },
      {
      "source": {
       "id": null,
       "name": "Eonline.com"
       },
       "author": "Gabrielle Chung",
       "title": "NeNe Leakes' Son Brentt Leaves Hospital After Suffering Stroke Just in Time for Thanksgiving - E! NEWS",
       "description": "NeNe Leakes' 23-year-old son Brentt Leakes was discharged from the hospital two months after suffering a stroke. Find out how he's doing now.",
       "url": "https://www.eonline.com/news/1355909/nene-leakes-son-brentt-leaves-hospital-after-suffering-stroke-just-in-time-for-thanksgiving",
       "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/20221024/rs_1200x1200-221124132138-1200-2brennt-leakes-nene-thanksgiving.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
       "publishedAt": "2022-11-24T22:03:00Z",
       "content": "NeNe Leakes is thankful to have her family under one roof again.\r\nThe Real Housewives of Atlanta alum shared that her 23-year-old son, Brentt Leakes, has been released from the hospital two months af… [+794 chars]"
       },
      {
      "source": {
       "id": null,
       "name": "The Times of Israel"
       },
       "author": null,
       "title": "Diplomatic push and IDF threats said behind return of body seized by Palestinians - The Times of Israel",
       "description": "Reports say UN and US officials interceded with Islamic Jihad and PA, while Israeli military had prepared a wide-scale operation to bring home remains of teen Tiran Fero",
       "url": "https://www.timesofisrael.com/diplomatic-push-and-idf-threats-said-behind-return-of-body-snatched-by-palestinians/",
       "urlToImage": "https://static.timesofisrael.com/www/uploads/2022/11/F221124ST37-1024x640.jpg",
       "publishedAt": "2022-11-24T21:33:00Z",
       "content": "A large-scale international diplomatic effort took place to secure the release of the body of Tiran Fero, a Druze teenager whose remains were snatched by terrorists from a hospital in the West Bank t… [+3506 chars]"
       },
      {
      "source": {
       "id": null,
       "name": "YouTube"
       },
       "author": null,
       "title": "Weather Now: Dry Rest of Thanksgiving; Tracking Some Showers For Black Friday - WPRI",
       "description": "Weather Now: Dry Rest of Thanksgiving; Tracking Some Showers For Black FridayWPRI 12's Pinpoint Doppler Weather service for Rhode Island and Southeastern Mass.",
       "url": "https://www.youtube.com/watch?v=0DfqdA8uK3M",
       "urlToImage": "https://i.ytimg.com/vi/0DfqdA8uK3M/hqdefault.jpg",
       "publishedAt": "2022-11-24T21:08:25Z",
       "content": null
       },
      {
      "source": {
       "id": "fox-news",
       "name": "Fox News"
       },
       "author": "Michael Ruiz",
       "title": "Idaho murders: Investigators work through Thanksgiving Day as college town shuts down - Fox News",
       "description": "Eleven days after the grisly stabbing deaths of four University of Idaho students, Moscow had become a ghost town, but investigators remained on the case.",
       "url": "https://www.foxnews.com/us/idaho-murders-investigators-work-through-thanksgiving-day-college-town-shuts-down",
       "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/11/UofI.jpg",
       "publishedAt": "2022-11-24T20:56:04Z",
       "content": "MOSCOW, Idaho - Eleven days after the grisly stabbing deaths of four University of Idaho students, Moscow had become a ghost town.\r\nIt was a somber Thanksgiving Day, with nearly every business on Mai… [+6119 chars]"
       },
      {
      "source": {
       "id": "reuters",
       "name": "Reuters"
       },
       "author": null,
       "title": "Oil muted as price cap proposal eases supply concerns - Reuters.com",
       "description": "Benchmark Brent oil edged lower on Thursday while West Texas Intermediate (WTI) crude held steady, hovering in sight of two-month lows as the level of a proposed G7 cap on the price of Russian oil raised doubts about how much it would limit supply.",
       "url": "https://www.reuters.com/markets/commodities/oil-falls-supply-disruption-fears-ease-amid-russian-price-cap-talks-2022-11-24/",
       "urlToImage": "https://www.reuters.com/resizer/Yd2FozICPoQphPdsolUMQlLa14w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/32UBU5ZSUNP6PAZH3JZPGAXLJQ.jpg",
       "publishedAt": "2022-11-24T20:50:00Z",
       "content": "Nov 24 (Reuters) - Benchmark Brent oil edged lower on Thursday while West Texas Intermediate (WTI) crude held steady, hovering in sight of two-month lows as the level of a proposed G7 cap on the pric… [+2528 chars]"
       },
      {
      "source": {
       "id": null,
       "name": "New York Post"
       },
       "author": "Emily Crane",
       "title": "Twitter must come clean on censoring Post's Hunter Biden laptop story: Musk - New York Post ",
       "description": "Elon Musk has insisted that full disclosure on Twitter’s decision to censor The Post’s exclusive story about Hunter Biden’s infamous laptop is “necessary” in order to restore publ…",
       "url": "https://nypost.com/2022/11/24/elon-musk-says-full-disclosure-is-needed-on-twitters-censorship-of-the-posts-hunter-biden-laptop-story/",
       "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/11/elon-musk-nypost-comp.jpg?quality=75&strip=all&w=1024",
       "publishedAt": "2022-11-24T19:09:00Z",
       "content": "Elon Musk has insisted that full disclosure on Twitter’s decision to censor The Posts exclusive story about Hunter Bidens infamous laptop is “necessary” in order to restore public trust in the social… [+2492 chars]"
       },
      {
      "source": {
       "id": null,
       "name": "NDTV News"
       },
       "author": null,
       "title": "NASA's Artemis I Mission Captures Closest Images Of Surface Of The Moon - NDTV",
       "description": "The photo was taken using Orion's optical navigational system.",
       "url": "https://www.ndtv.com/world-news/nasas-artemis-i-mission-captures-closest-images-of-surface-of-the-moon-3551305",
       "urlToImage": "https://c.ndtvimg.com/2022-11/iijcuvr_nasa-shared-four-images-of-different-areas-of-the-moon_625x300_24_November_22.jpg",
       "publishedAt": "2022-11-24T18:20:17Z",
       "content": "NASA shared four images of different areas of the moon.\r\nNASA's Orion Capsule has sent back spectacular images of the moon. The spacecraft swept 130km (80 miles) above the lunar surface during the Ar… [+1307 chars]"
       },
       {
        "source": {
         "id": "bbc-news",
         "name": "BBC News"
         },
         "author": "BBC News",
         "title": "Elon Musk says Twitter will offer 'amnesty' to suspended accounts",
         "description": "Several accounts - including Donald Trump's - have already been reinstated by the multi-billionaire.",
         "url": "http://www.bbc.co.uk/news/business-63752208",
         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11C85/production/_127773827_gettyimages-1438052918.jpg",
         "publishedAt": "2022-11-25T04:22:23.601126Z",
         "content": "Elon Musk says Twitter will provide a \"general amnesty\" to some suspended accounts from next week.\r\nThis came after he started a poll on Wednesday asking Twitter users whether accounts that had \"not … [+2162 chars]"
         },
        {
        "source": {
         "id": "bbc-news",
         "name": "BBC News"
         },
         "author": "BBC News",
         "title": "Charles Darwin: Autographed document could fetch record price",
         "description": "At auction is a rare, signed document the scientist produced for a 19th Century celebrity magazine.",
         "url": "http://www.bbc.co.uk/news/science-environment-63741207",
         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DC6B/production/_127772465_darwin_index.jpg",
         "publishedAt": "2022-11-25T01:07:21.695537Z",
         "content": "A piece of paper signed by Charles Darwin, defending his theory of evolution, goes on sale on Friday with Sotheby's in New York. \r\nThe item is likely to fetch over a million pounds - a world-record p… [+4063 chars]"
         },
        {
        "source": {
         "id": "bbc-news",
         "name": "BBC News"
         },
         "author": "BBC News",
         "title": "Islamic State: Kurdish forces threaten to stop guarding camps",
         "description": "The SDF's head tells the BBC Turkish-led air strikes are harming the fight against the terror group.",
         "url": "http://www.bbc.co.uk/news/world-middle-east-63745833",
         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/57FF/production/_127772522_capture.jpg",
         "publishedAt": "2022-11-25T00:52:22.0396727Z",
         "content": "Local forces in north-east Syria have told the BBC that they may be forced to abandon camps holding Islamic State (IS) group detainees. \r\nThe Syrian Democratic Forces (SDF) said they no longer have t… [+3605 chars]"
         },
        {
        "source": {
         "id": "bbc-news",
         "name": "BBC News"
         },
         "author": "BBC News",
         "title": "Jeffrey Epstein victims sue several major banks",
         "description": "Two women have claimed JP Morgan and Deutsche Bank \"facilitated\" the late sex offender's crimes.",
         "url": "http://www.bbc.co.uk/news/business-63750504",
         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/218C/production/_108288580__108269765_hi055775058-1.jpg",
         "publishedAt": "2022-11-25T00:52:20.2412871Z",
         "content": "Two women who accused Jeffrey Epstein of sexual abuse have filed lawsuits against JP Morgan Chase and Deutsche Bank.\r\nThey accuse the banks of ignoring \"red flags\" about their client and benefiting f… [+2410 chars]"
         },
        {
        "source": {
         "id": "bbc-news",
         "name": "BBC News"
         },
         "author": "BBC News",
         "title": "Ukraine war: Ukraine struggles to restore power after Russian strikes",
         "description": "Ukraine says 50% of the country's electricity needs are not being met, and water supplies are affected.",
         "url": "http://www.bbc.co.uk/news/world-europe-63746614",
         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4BD9/production/_127771491_f6352565-3f1d-4717-89a7-ce1c7a8af965.jpg",
         "publishedAt": "2022-11-24T23:52:22.8044103Z",
         "content": "Ukraine has said that as much as 50% of the country's electricity needs are currently not being met, after massive Russian missile strikes this week.\r\nThe Ukrenergo power operator said the priority w… [+3146 chars]"
         },
        {
        "source": {
         "id": "bbc-news",
         "name": "BBC News"
         },
         "author": "BBC News",
         "title": "Kanye West: Adidas investigates after claims of 'toxic' behaviour",
         "description": "Rolling Stone has reported that staff have complained about West's \"problematic behaviour\".",
         "url": "http://www.bbc.co.uk/news/entertainment-arts-63747492",
         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/119B/production/_127770540_gettyimages-543531002.jpg",
         "publishedAt": "2022-11-24T19:37:20.5235343Z",
         "content": "Adidas has launched an investigation into reports that rapper Kanye West created a \"toxic environment\" when he was working with the brand.\r\nRolling Stone reported claims from some workers on the Yeez… [+1753 chars]"
         },
        {
        "source": {
         "id": "bbc-news",
         "name": "BBC News"
         },
         "author": "BBC News",
         "title": "Russia passes 'Answer to Blinken' gay propaganda law",
         "description": "Extending its controversial law, any mention of LGBT people in books, films and online will be banned.",
         "url": "http://www.bbc.co.uk/news/world-europe-63747732",
         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/56B4/production/_127769122_gettyimages-1187557339-1.jpg",
         "publishedAt": "2022-11-24T18:07:24.742293Z",
         "content": "Russia's lower house of parliament has unanimously voted to extend its ban on so-called \"gay propaganda\".\r\nUnder the latest version of the law, any promotion of homosexuality - including in books, fi… [+3071 chars]"
         },
        {
        "source": {
         "id": "bbc-news",
         "name": "BBC News"
         },
         "author": "BBC News",
         "title": "New York Adult Survivors Act allows lawsuits for decades-old abuse claims",
         "description": "A flood of lawsuits is expected as the state opens the window to sue in decades-old sex abuse claims.",
         "url": "http://www.bbc.co.uk/news/world-us-canada-63736485",
         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B9EB/production/_127759574_gettyimages-1416945261.jpg",
         "publishedAt": "2022-11-24T16:37:25.3975488Z",
         "content": "Victims of sexual abuse in the US state of New York can now sue over decades-old allegations. \r\nThe Adult Survivors Act, which came into effect on Thursday, allows a one-year period for victims to fi… [+2201 chars]"
         },
        {
        "source": {
         "id": "bbc-news",
         "name": "BBC News"
         },
         "author": "BBC News",
         "title": "The Crown: Queen's friend says Netflix show 'makes me so angry'",
         "description": "Lady Glenconner, who was a maid of honour at the Queen's coronation, is herself portrayed on screen.",
         "url": "http://www.bbc.co.uk/news/entertainment-arts-63744908",
         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/083C/production/_127580120_thecrown_s05_image_tudum1.jpg",
         "publishedAt": "2022-11-24T15:37:26.2574344Z",
         "content": "A lifelong friend of the Queen has described Netflix's royal drama The Crown as \"complete fantasy\" and \"so unfair on members of the Royal Family\".\r\nLady Glenconner, who was a maid of honour at the Qu… [+3161 chars]"
         },
             {
             "source": {
             "id": null,
             "name": "CNA"
             },
             "author": null,
             "title": "More than 20,000 new hires have left Apple supplier Foxconn's Zhengzhou plant in China -Foxconn source",
             "description": "TAIPEI : More than 20,000 employees, most of them were new hires not yet working on the production line, have left Apple supplier Foxconn's Zhengzhou plant in China, a Foxconn source familiar with the matter told Reuters on Friday.The person said the departur…",
             "url": "https://www.channelnewsasia.com/business/more-20000-new-hires-have-left-apple-supplier-foxconns-zhengzhou-plant-china-foxconn-source-3100086",
             "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--13Pez8BG--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2022-11-25t024944z_1_lynxmpeiao01i_rtroptp_3_foxconn-china.jpg?itok=hWkf1sTT",
             "publishedAt": "2022-11-25T02:49:44Z",
             "content": "TAIPEI : More than 20,000 employees, most of them were new hires not yet working on the production line, have left Apple supplier Foxconn's Zhengzhou plant in China, a Foxconn source familiar with th… [+277 chars]"
             },
             {
             "source": {
             "id": null,
             "name": "Ingame.de"
             },
             "author": null,
             "title": "Black Friday 2022 bei Amazon, OTTO und MediaMarkt – Die besten Deals am 25.11. - ingame.de",
             "description": "<ol><li>Black Friday 2022 bei Amazon, OTTO und MediaMarkt – Die besten Deals am 25.11.  ingame.de\r\n</li><li>Black Friday startet jetzt: Die besten Angebote in der Übersicht  t-online\r\n</li><li>Black Friday 2022 – Technik-Schnäppchen im Überblick [Anzeige]  Co…",
             "url": "https://www.ingame.de/news/black-friday-2022-amazon-otto-mediamarkt-deals-25-11-week-angebote-rabatt-kaeufer-hamburg-91937649.html",
             "urlToImage": "https://www.ingame.de/bilder/2022/11/24/91937649/30364068-logos-von-otto-und-amazon-auf-schwarzm-samt-dazu-der-schriftzug-heute-neu-2ofe.jpg",
             "publishedAt": "2022-11-25T01:34:37Z",
             "content": "<ol><li>ingame</li><li>Gaming News</li></ol>Erstellt: 25.11.2022, 02:34 Uhr\r\nVon: Noah Struthoff\r\nDer Black Friday 2022 ist gestartet. Nachdem erste Händler zum Wochenstart losgelegt haben, überschla… [+5290 chars]"
             },
             {
             "source": {
             "id": null,
             "name": "Rockinon.com"
             },
             "author": "rockinon.com(ロッキング・オン ドットコム)",
             "title": "ニュース - 『Mステ』本日11/25放送回に桑田佳祐、宮本浩次、 スカパラ、Mrs. GREEN APPLEら出演",
             "description": "本日11月25日（金）夜9時から放送される『ミュージックステーション』に、桑田佳祐、宮本浩次、東京スカ…",
             "url": "https://rockinon.com/news/detail/204722",
             "urlToImage": "https://rockinon.com/images/entry/width:600/204722/1",
             "publishedAt": "2022-11-25T02:00:00Z",
             "content": "11259Mrs. GREEN APPLE35M35VTR\r\nSaucy Dog feat. (Saucy Dog)Mrs. GREEN APPLESoranji\r\n1125\r\nMrs. GREEN APPLESoranjifeat. (Saucy Dog)Kis-My-Ft2\r\nROCKIN'ON JAPAN12\r\nSEKAI NO OWARI\r\nMrs. GREEN APPLEYOASOBI… [+59 chars]"
             },
             {
             "source": {
             "id": null,
             "name": "Adevarul.ro"
             },
             "author": "Gabriel Niţulescu",
             "title": "Cum a alungat Washingtonul, Huawei din Europa",
             "description": "Gigantul tehnologic chinez se retrage de la Bruxelles, Paris și Londra și se îndreaptă spre piața sa internă.",
             "url": "https://adevarul.ro/stil-de-viata/tehnologie/cum-a-alungat-washingtonul-huawei-din-europa-2222840.html",
             "urlToImage": "https://cdn.adh.reperio.news/image-4/44aa613b-2f01-46e6-998d-7d95fd9bb819/index.jpeg?p=f%3Dpng%26w%3D1200%26h%3D630%26r%3Dcover",
             "publishedAt": "2022-11-25T02:57:40Z",
             "content": "Gigantul tehnologic chinez se retrage\r\nde la Bruxelles, Paris i Londra i se îndreapt spre piaa sa\r\nintern.\r\nGigantul chinez al telecomunicaiilor\r\nrenun la lobbyitii occidentali cu pedigree, îi retrag… [+22225 chars]"
             },
             {
             "source": {
             "id": null,
             "name": "Elconfidencial.com"
             },
             "author": "M. MC.",
             "title": "Me paso el año probando 'gadgets' y estos son los ocho que tienes que cazar en el Black Friday",
             "description": "Móviles, barras de sonido, relojes o freidoras de aire. El Black Friday puede ser una muy buena fecha para adelantarse con los regalos tecnológicos de Navidad",
             "url": "https://www.elconfidencial.com/tecnologia/2022-11-25/gadgets-black-friday-mejores-ofertas_3524566/",
             "urlToImage": "https://images.ecestaticos.com/P8cHaTdd0S0v-aRk3CNijQSFnf0=/0x0:1920x1080/600x315/filters:fill(white):format(jpg):quality(99):watermark(f.elconfidencial.com/file/bae/eea/fde/baeeeafde1b3229287b0c008f7602058.png,0,275,1)/f.elconfidencial.com/original/d08/b84/4ea/d08b844ea93a94d772043481e963acec.jpg",
             "publishedAt": "2022-11-25T04:00:00Z",
             "content": "He de reconocer que soy muy poco fan de las americanadas importadas del otro lado del Atlántico. Con Halloween hago ya la vista gorda después de tantos años, pero no puedo evitar mirar con cierto rec… [+18349 chars]"
             },
             {
             "source": {
             "id": null,
             "name": "AZCentral"
             },
             "author": "Arizona Republic, Angela Cordoba Perez, Arizona Republic",
             "title": "Hundreds enjoy Thanksgiving meals served by Salvation Army in downtown Phoenix",
             "description": "About 1,500 meals were prepared to be served at the Phoenix Convention Center and about 3,000 were prepared to be delivered by the Salvation Army.",
             "url": "https://www.azcentral.com/story/news/local/phoenix/2022/11/25/salvation-army-serves-hundreds-of-thanksgiving-meals-in-phoenix/69675937007/",
             "urlToImage": "https://www.gannett-cdn.com/presto/2022/11/24/PPHX/f56d3219-42c8-487e-b029-1d25961afee4-20221124123704_-_SArmyA.jpg?auto=webp&crop=2999,1687,x0,y0&format=pjpg&width=1200",
             "publishedAt": "2022-11-25T01:12:25Z",
             "content": "The Salvation Army hosted its annual Thanksgiving Day dinner on Thursday, bringing hundreds of individuals from around the Valley to share coffee, food and conversations in downtown Phoenix.\r\nJose an… [+4798 chars]"
             }
       ]
  constructor(){
    super();
    console.log("Hello I am a Construtor from News component");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    }
  }
  
   
  render() {
    return (
      <>
        <div className="container my-3">
          <h1>GoNEWS - Top Headlines</h1>
            <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsCards title={element.title?element.title.slice(0,35):""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
                })}
            </div>
        </div>
    </>
    )
  }
}
