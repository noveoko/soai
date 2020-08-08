
## GPT-3 Project ideas with code

![Concept by GPT-3. Illustration executed by the author](https://cdn-images-1.medium.com/max/6774/1*JElKAOiuBWApNdq79hWYLg.png)

I’ve recently been granted Beta access to the GPT-3 API. As such I’ve spent the last few days diving deep into what’s possible with this amazing tool. It’s unlike any other tool I’ve had the pleasure of using before due to it’s unbelievable simplicity. Instead of reading reams of documentation you can simply tell it what you want or if you aren’t getting anywhere give it anywhere from 1–3 examples. Any more examples may counter-intuitivly make the model less flexible so OpenAI seems to suggest that you shouldn’t need more than 3 prompts to get your desired result.

List of experiments in this article (in the order they appear):

 1. KnapSackSolver

 2. WhatShouldIWear?

 3. XsplainingDetector

 4. LinkedInPostPOP

 5. WasThatACrime?

 6. MyOwnRecruiter

 7. YourOwnBestInstagramPicture

 8. NewCountryNewFlag

 9. BrandByAI

 10. NameMyPet

 11. NoIQ

 12. OnDemandProfessor

 13. HistoricInterview

 14. CharactersAndObjectsInterview

 15. English to SVG code

 16. ParseDataNoRegex

 17. WritePythonForMe

 18. EnglishToWebPage

 19. ProfessionalInterviewer

 20. IllustratorOnDemand

 21. MyGameDesigner

 22. AlternateHistory (counter-factuals)

 23. BookCoverGenerator

 24. JunkFood to Healthy Food

 25. TranscriptToImage

 26. TitleToSongGenerator

 27. WhatToDrawNext

 28. ComputerGraphicsAdvice

 29. RecruiterVsWorldsBestNegotiator

 30. GeneratingRealWorldData

### Future Plans

This article will eventually cover 99 project ideas that I’ve played around with to various levels of satisfaction. Your results may vary and I hope that as this technology gets rolled out more people get to experiment with what’s possible.

**Note:** I will NOT cherry pick examples. What is generated is what I will show for better or worse.

## KnapSackSolver

Sometimes in life you have a trunk full of tools, food, and can openers in front of you and you must decide which items to take. You must decide because you cannot carry all of the items. Your decision is based on maximizing your utility from the items taken. With this experiment I’m really going out on the edge of what’s possible with GPT-3, but I thought it would be interesting to try.

### Prime the model

The following is a story about a man trapped on a desert island. He is on a sinking ship and has a crate of items in front of him:
“””1 world map
1 radio
1 months food rations
1 gallon of water
1 kg of salt
20 cans of tuna
1 tent
1 flare
1 blowhorn
1 litre gasoline”””

Realizing he can only carry three items before the ship sinks he takes only:
1. The world map
2. The radio
3. The food rations

Why does he take these items?
The man takes the world map because he wants to know where he is. 
He takes the radio so that he can listen for rescue signals and take bearings on them. 
He takes the food rations because they will keep him alive until help arrives.

### Real example (not cherry picked)

The following is a story about a man trapped on a desert island. He is on a sinking ship and has a crate of items in front of him:
1 tent
1 flare
1 blowhorn
1 litre gasoline

Realizing he can only carry three items before the ship sinks he takes only:
1. The tent
2. The flare
3. The gasoline

Why does he take these items? 
The man takes the tent because it will keep him dry and warm at night, and give him shelter from the sun during the day. 
He takes the flare so that he can signal for help in case of an emergency or to attract attention if there is a ship nearby. 
He takes the gasoline so that he can use it to start a fire when rescue comes, or as fuel for his boat if one is built before rescue arrives.

## WhatShouldIWear?

It would be great if GPT-3 could help us all dress a bit better given whatever we have on hand. I don’t think this experiment was succesful as I wasn’t able to give GPT-3 enough examples (in my opinion). The basic idea is you list out all the clothes you have in your closet (sorry if you have a Sex & the City size clothing selection…) and then input the temperature and your location. GPT-3 will do it’s best to assemble an outfit for you to wear.

### Prime the model

Your closet contains the following items:
shoes: red sneakers, blue sneakers, white sneakers, black formal shoes, orange flip flops
t-shirts: blue, black, orange polo, yellow polo
sweaters: grey, black, white
pants: jeans, torn jeans
shorts: red, blue
socks: white, black, red, yellow
underwear: boxers, briefs
hats:brown baseball, grey fedora
scarves: blue, black, white
coats: light wind breaker, heavy winter coat, wool coat
eyewear: sunglasses

temperature: 90 degrees f
location: Miami Florida

A stylist looks through your closet and considers the temperature and suggests you wear:
yellow shirt, blue shorts, white socks, orange flip flops, grey fedora

### Real example (not cherry picked)

Your closet contains the following items:
shoes: white sneakers, black formal shoes, orange flip flops
t-shirts: blue, black
sweaters: grey, black, white
pants: jeans
shorts: red
socks: white, black, red, yellow
underwear: boxers, briefs
hats:brown baseball, grey fedora
scarves: blue, black, white
coats: light wind breaker, heavy winter coat, wool coat
eyewear: sunglasses

temperature: 25 degrees f
location: Chicago, IL

A stylist looks through your closet and considers the temperature and suggests you wear:
blue shirt, jeans, blue sneakers, black scarf

**Note:** I deleted “orange hat” from the result as it’s not a possible choice as it’s not in the list above. That can be fixed IMO with more examples.

![What some of us would look like if we let an AI design our outfits. All clipart images provided by the Noun project. Illustration by the author.](https://cdn-images-1.medium.com/max/2000/1*gg5QLetDF3PJPpbQbkxUkg.png)

## XsplainingDetector

Are you really worried that your next post or comment will be taken “the wrong way”? This is a tool many of us will benefit from. Next time you are about to respond to a comment online or offline consider consulting GPT-3 to make sure you aren’t committing an act of Xsplaining.

[What is _splaining?](https://www.dictionary.com/browse/splain)

### Prime the model

scenario: I told a woman that her browser settings are wrong. I then gave her a tutorial on how to use a browser.
fact: she works for Mozilla as a Senior Engineer
Xsplaining? yes

scenario: A woman asked me where the fire exit was. I pointed to the fire exit and said, “right there.”
fact: she works in the office
Xsplaining? no

scenario: A man shows a woman in careful steps how a door works.
fact: she is a grown adult
Xsplaining? yes

### Real example (not cherry picked)

**scenario:** A man is told by an employee at McDonald’s that “he has no idea what he’s talkingabout. PARTICLES ARE WAVES!?”
**fact:**the man has a PhD in Particle Physics
**Xsplaining?** yes

## LinkedInPostPOP

Do you want to make it on Linkedin but feel that you just don’t have the “magic” required to write compelling content on your own? This is a great use-case for GPT-3 which can take the essence of what you’d like to express in your post and upgrade it with improved style and content that will speak to Linkedin users. I had to give it quite a few examples, but I think it’s still worth sharing. I tend to use GPT-3 to help me come up with examples, or improve examples and then feed those back in as priming examples. It seems to improve my results.

### Prime the model

Idea for post:
“””Hi. I’m looking for a job in IT. I have experience with C++ and can manage a team. Hire me.”””

Improved post:
“””I’m a C++ programmer with a proven track record of success in the IT industry. I have a degree in Computer Science and have been working in the field for over 10 years. I’m looking for a new challenge and would love to hear from you.”””

Idea for post:
“””I just started my new company Maaaggik.org and it’s great. We sell 150 types of mushrooms online. We can send you a package in a few days.”””

Improved post:
“””I’m the founder of Maaaggik.org, a new company that sells mushrooms online. We have a wide variety of mushrooms and can ship them to you in a few days. We’re looking for investors and partners.”””

Idea for post:
“””I am looking for people that want to help me with my start-up. I don’t have any money, but I am very experienced in the field of Quantum Flux systems and hope to take on a few college students as interns. You will each get 10% of the company, and class credit.”””

Improved post:
“””I’m the founder of Quantum Flux Systems, a start-up that is looking for interns. We are a small company that is looking to expand and are looking for college students to help us. We are looking for people with experience in Quantum Flux systems and will be offering 10% of the company to each intern.”””

### Real example (not cherry picked)

**Idea for post: I’m trying to sell my bike. It’s in ok condition. Not much else to add other than that it’s black and carries the brand GT. Looking to sell quickly.**

**Improved post: **I’m selling my GT bike. It’s in good condition and has been well maintained. I’m looking for someone who is interested in buying it quickly. I’m willing to negotiate the price.

## WasThatACrime?

Did you just hear someone tell you a story and you are convinced it must’ve been illegal but you are just not sure? Are you reading a book or watching a movie and thinking ‘there is no way that is legal or permissible’? Very few of us are lawyers and sometimes we are embarrased to ask our lawyer friends “stupid” questions so this is an opportunity for GPT-3 to lend a hand. The priming was really simple and leads to decent results:

### Prime the model

**description: a 17-year old takes their neighbors car without permission for 2 hours. The car is returned to the neighbors driveway.
crime:**

### Real examples (not cherry picked)

**crime: **Theft of a motor vehicle

**description:** a man takes 3 dogs from a neighbors yard and releases them into the wild. The dogs are recovered alive a week later.
**crime:** theft

**description: **a 31-year old man leaves his car on a hill with the emergency break off. The car rolls down the hill a few hours later killing a toddler.
**crime:** manslaughter

**description: **a man uses the internet to convince 123 people to send him $5 each.
**crime: **fraud

**description:** a woman uses a baseball bat to damage a number of park trees.
**crime:** vandalism

**description:** a 16-year old purchases a controlled substance, then resells it to his friend also 16.
**crime:** drug distribution

## MyOwnRecruiter

The search for the right job is often one filled with uncertainty. One of the contributors to this is the nature of job postings. In this case I wanted to use GPT-3 to help those less experienced in recruitment tactics to deal with any sort of job posting, to make sense of it, and to make better decisions regarding a given ad.
>  Why send 200 CVs when you can really easily figure out that most of the jobs aren’t for you, and you can ignore them?

The setup for this is quite simple, it depends on how sophisticated you want to get. I think the result is quite good considering the ad isn’t too long. I’m interested in getting your take on this one.

### Prime the model

job ad:
“””Claims Representative I
Southern Farm Bureau Casualty Insurance
7 reviews
-
United States

Investigate and process a wide variety of property insurance claims filed by policyholders
Handle a wide variety of claims: Damage to automobiles, homes, buildings and other structures. Third party claims from liability situations such as slip and falls, animal bites, or alleged negligent behavior
Inspect property to determine extent of damages, liability, and policy coverage particulars
Gather information regarding claims via photographs along with claimant/witness interviews and evaluate all relevant information to determine how claims should be resolved
Consult police and hospital records
Work with attorneys to defend insured’s position if claim is contested
Negotiate with claimants and attorneys to successfully settle claims”””

professional recruiter opinion:
“””Claims rep I would be an entry level position. It’s basically a call center position. The person would handle calls from customers. Claims rep II would be a more senior position. They’d have to handle more complicated situations. They’d have to do more legal work, talking to lawyers and stuff. That would be more of a supervisory position. I’d pay $30,000 to $35,000 for a claims rep I. I’d pay $45,000 to $50,000 for a claims rep II.””

**Real example (not cherry picked — Note: I used GPT-3 to help me create the prime above, a sort of pre-priming or GPT-3 assisted prime creation)**

job ad:
“””At NAME_REDACTED, you’ll join an exciting team that is changing the way construction, home service companies and franchises work and operate. More than that, you’ll have a major impact on a product that’s used by thousands of people everyday, all over the world. Take a look at this position and if you’re ready to join a fast- growing Chico, California tech company — apply below!New to software development and want to explore your potential? Here’s your chance to design and develop next generation, web-based SaaS and mobile applications. You’ll solve difficult problems including mobile and web data synchronization, push notifications, geolocation, facial recognition, and interactive mapping, just to name a few. Opportunities abound to identify solutions to user experience, business, and engineering problems, and to contribute to all phases of the application development lifecycle.This is an entry level position, and we’re looking for sharp, energized, and dedicated applicants with strong communication skills. You should have a solid foundation in OOP, design patterns, algorithms, and programming languages. iOS and Android development, web programming, and SQL experience will give you a leg up, but your ability to learn quickly, adapt, and be productive are crucial. Start your career and make an impact with NAME_REDACTEDtoday!
*** Remote work possible within the Northern California area***”””

**professional recruiter opinion:**
“””If I had to describe NAME_REDACTED in one word, it would be “misleading.” I’ve found their job listings and descriptions to be full of buzzwords and devoid of any actual information about the work they’re doing or the technologies they’re using. I also get the feeling that they’re less interested in the quality of their candidates than they are in the quantity. I’d recommend steering clear of this company.”””

(**Note:** I will have to go back to this later as the model is raising token limit notices when I am nowhere near the limit, so I couldn’t give any examples to the model, I had to only create a simple prime and use that. In the future it would be great to prime with at least 3 examples to ensure the results users get are to a certain min. quality. Definealy a work in progress but a tool that would save a lot of job hunters time.)

## YourOwnBestInstagramPicture

If you’ve ever wanted to get millions of views with your next instagram picture, why not just let GPT-3 make a suggestion. :) This one is pure fun, and I doubt these images would result in lots of likes, but it was a great concept that came to my mind and I thought, hey let’s try it.

### Prime the model

twitter_handle;name;profession;short_description;millions_of_likes;long description
[@world_record_egg](http://twitter.com/world_record_egg);Chris Godfrey;journalist;Photo of an egg;tan colored free range egg standing upright in the center of the image, bright lighting, very soft shadow
[@xxxtentacion](http://twitter.com/xxxtentacion);XXXTentacion;entertainer;Final post before his death;celebrity predicts their death shortly before it happens
[@kyliejenner](http://twitter.com/kyliejenner);entrepreneur;First photo of her daughter;a photo of a thumb of a celebrity clutched by their baby which is blurry and whose face is cropped out
[@jenniferaniston](http://twitter.com/jenniferaniston);Jennifer Aniston;actor;Photo with Friends co-stars;a celebrity with other celebrities taking a candid selfie together

### Real example (not cherry picked)

[@skilenstein](http://twitter.com/skilenstein);Marcin Kraszewski;software developer;Person with a cow;a person standing in front of a wall of animals (heifers)

![According to GPT-3 this is the “ideal” instagram picture for me to really make waves in social media. :)](https://cdn-images-1.medium.com/max/2000/1*RYLAfuSdIhbu2vJF-RRdEQ.jpeg)

## NewCountryNewFlag

For anyone that would like to imagine what the flag of a non-existant (or soon to exist entity) may look like you can just train GPT-3 to make flag suggestions for you. The model will take two pieces of information as input: the previous name of the country, and the new name. It will then generate a new flag design for you. This one was really easy to create, just had to use 2 examples from Wikipedia to prime it.

### Prime the model

previous name:British North America
country name: the United States of America
year established: 1776
flag:”””The flag of the United States of America, often referred to as the American flag or U.S. flag, is the national flag of the United States. It consists of thirteen equal horizontal stripes of red (top and bottom) alternating with white, with a blue rectangle in the canton (referred to specifically as the “union”) bearing fifty small, white, five-pointed stars arranged in nine offset horizontal rows, where rows of six stars (top and bottom) alternate with rows of five stars. The 50 stars on the flag represent the 50 states of the United States of America, and the 13 stripes represent the thirteen British colonies that declared independence from the Kingdom of Great Britain, and became the first states in the U.S.[2] Nicknames for the flag include the Stars and Stripes,[3][4] Old Glory,[5] and the Star-Spangled Banner.”””

previous name: Republic of China
country name: People’s republic of China
year established: 1949
flag:”””The flag the People’s Republic of China and also known as the Five-starred Red Flag,[2] is a Chinese red field charged in the canton (upper corner nearest the flagpole) with five golden stars. The design features one large star, with four smaller stars in a semicircle set off towards the fly (the side farthest from the flag pole). The red represents the Chinese Communist Revolution and the five stars and their relationships to each other represent the unity of the Chinese people under the leadership of the Communist Party of China (CPC). The first flag was hoisted by the People’s Liberation Army (PLA) on a pole overlooking Beijing’s Tiananmen Square on 1 October 1949, at a ceremony announcing the establishment of the People’s Republic of China.”””

### Real example (not cherry picked)

previous name: Poland
country name: Republic of Mazowsze
year established: 2025
flag:”””The flag of the Republic of Mazowsze is a horizontal tricolor of red, white and blue. The colors are arranged in the same order as in the national flag of Poland. The Mazovian coat of arms is placed in the center of the flag, superimposed over a white eagle. The Mazovian coat of arms is a crowned eagle with a golden beak and talons, on a red shield. The eagle is holding a golden scepter and an iron sword in its talons. The Mazovian coat of arms is based on the emblem of the Kingdom of Poland, which in turn was based on the emblem used by Duke Siemowit III of Masovia.”””

I did my best to visualize the flag for the Republic of Mazowsze using the instructions from GPT-3 and Inkscape:

![I followed the instructions as closely as possible, including superimposing a coat of arms on top of a white eagle. Not the best design. I’d probably come up with something else, though perhaps no better.](https://cdn-images-1.medium.com/max/2000/1*RB-Ps3uscmqp4McAahoiBw.png)

## BrandByAI

Generate everything that a new business needs to get started connecting with their audience. All that is required for input is: the full legal name of the business, the country in which the business is headquartered, the region of the world the business serves, the industry the business is in, and a very short description of the company philosophy. This then results in a complete branding package that can be used by any business on Earth. The package includes: logo concept, color scheme, slogan, 3 product ideas, your first tweet announcing the company, and suggested cities in which to expand.

### Prime the model

Generates everything that a new business needs to get started connecting with their audience.

full name of company:Apple Computer Inc.
headquarters country:USA
geographical focus:global
industries: Computer hardware,Computer software,Consumer electronics,Cloud computing,Digital distribution,Fabless silicon design,Semiconductors,Media,Financial technology,Artificial intelligence
philosophy:make the best products
…generating your brand package!
logo concept: an apple with a bite taken out of it. Black. No text.
company colors: black and white
slogan:Think Different
3 product ideas:portable music player, online music store, web application store
1 free tweet: “””Apple Computer today unveiled its much-anticipated Macintosh computer, a sophisticated, affordably priced personal computer designed for business people, professionals and students in a broad range of fields.”””
3 geographic targets:United States, Canada, United Kingdom

### Real example (not cherry picked— though I did compress a list into a row to improve the look no content was changed/modified)

full name of company: Bill Mitchells Repair
headquarters: Canada
geographical focus: Toronto area
industries: auto repair
philosphy: honesty, integrity, and charm
…generating your brand package!
**logo concept:** A red maple leaf and a wrench
**company colors:** red and blue
**slogan:** because we care
**free tweet:** “”#BillMitchellsRepair does all makes and models of automotive repairs and maintenance for your car. Car repairs #free #quote #onine #request” “
**3 product ideas:**oil changes, smog checks, tire rotations, fluid checks,major/minor mechanical repairs,automotive inspections
**geographic targets:** Canada

To get an idea of what might be possible in a few more years I went ahead and created their logo based on the description generated by GPT-3

![Hopefully soon I’ll figure out a way to use the output provided by GPT-3 to generate a simple logo automatically. Until then this Inkscape “art” I threw together should illustrate one possible logo for this fictional auto shop](https://cdn-images-1.medium.com/max/2000/1*ANHRRJSERrQCJVkiH8cKLQ.png)

## **NameMyPet**

Provide a description of your pet and get a name in response. Great for those situations where you aren’t quite sure what to name your dog or cat and don’t want to get stuck with “fluffy” or “sparkles”.

### Prime the model

**pet: fluffy grey medium sized dog with a tenacious approach and very friendly name: Mr. Fluffenstuff**

**pet: large husky bulldog with brown and tan spots that loves tearing into basketballs and hockey sticks. 
name: spike**

**pet: small cute cuddly cat that loves to play with yarn and chase after laser beams. Hates salmon. 
name: sparkles**

### Real examples (not cherry picked)

“short, stout, yellow and orange dog with a sweet grin” = Biscuit
“friendly but shy puppy with grey, tan, and brown marks on face.” = Penny

## **DreamHouse**

Describe your dream house and the model will provide you with a succinct suggestion for what to build

### Prime the model

howIseeIt:
a custom wood and stone paradise. Conceived and executed from scratch in tandem with interior designer Jake Arnold and Pearson Design Group, the Paul residence purposely evokes childhood memories for the Idaho native. An invitingly large fireplace is the perfect setting for a morning game of backgammon, before heading outside to sled across the snow-covered yard with their daughter. When it’s time to come in from the cold, a charming sauna constructed from reclaimed cedar awaits.

dreamHouse:large, stone,wood,luxury, house that’s modern, and located in Idaho

howIseeIt:
Just off the entry, a signature James Turrell ovoid wall sculpture greets visitors with a dreamy chromatic display, the first of many personal artistic accents woven throughout her home. In the TV room, a Cloud Sofa from Restoration Hardware has been reupholstered in slightly rougher fabric to better match the organic vibe.

dreamHouse:artsy, comfy, and inviting apartment

### Real example (not cherry picked)

howIseeIt:
There will be a lot of bedrooms. The basement will be huge. The kitchen will be amazing
dreamHouse:Modern, spacious, and luxurious

## NoIQ

Want to know what someone’s IQ is without ever meeting them? It’s easy! Just enter a few of their personal details and viola! an instant IQ. 
Warning: This is just for **entertainment**. Don’t take it seriously.

### Prime the model

Fathers occupation: Scientific utility salesman
Mothers occupation: House cleaner
Married: yes
Year born: 1879
Age started speaking: 4
Like to wear socks: no
Number of langauages spoken: 5
IQ: 160

Father’s occupation: lawyer
Mother’s occupation: board member at a bank
Married: yes
Year born: 1955
Age started speaking: 1
Likes to wear socks: no
Number of languages spoken: 1
IQ: 160+

Father’s occupation: civil engineer
Mother’s occupation: teacher
Married: no
Year born: 1946
Age started speaking: 1
Likes to wear socks: no
Number of languages spoken: 5
IQ:228

### Real example (not cherry picked)

Father’s occupation: real estate investor
Mother’s occupation: homemaker
Married: yes
Year born: 1946
Age started speaking: 1
Likes to wear socks: no
Number of languages spoken: 3
**IQ: 124**

## OnDemandProfessor

Need help with any topic on Earth? Just conjure up a professor and they’ll gladly take the time to help tutor you for as long as you want.

### Prime the model

The following is a conversation with a linear algebra professor and his student Professor: What can I help you with? Student: I am having a few problems with a few concepts

### Real example (not cherry picked)

Professor: Go ahead 
Student: I don’t understand matrix multiplications Professor: What don’t you understand? 
Student: Why it’s so powerful 
Professor: Go ahead and write out a matrix multiplication, try multiplying these two: A*B 
Student: Can you explain how I should do that? 
Professor: Go ahead, multiply these two. 
Student: Which two? I don’t see anything if you don’t say it. 
Professor: A is on top of B. So we can either multiply them the bottom to the top, or the top to the bottom.

## HistoricInterview

Interview Stalin on the eve of the secret invasion of Poland, JFK the day before his assasination, Albert Einstein the moment he discovered his Theory of relativity, or George W. Bush on September 10th 2011. It feels uncanny at times as the responses match what we’d expect from a given figure. If you are ok with historic fiction you can crank up the temperature in cases where the model is lacking information and needs to be a bit more creative. I hope that this will be a new way for young students to experience history, and ask the big what if questions.

### Prime the model

The following is a conversation with President Bush on July 4th 2001:
President Bush: Today is July 4th!
Interviewer: Hello

### Real example (not cherry picked)
>  the following is an interview with Abraham Lincoln on April 15th 1865
>  Interviewer: Thank you for being my guest today. I have many questions for you.
Abraham Lincoln: I am here to answer your questions.
>  Interviewer:What is your full name?
Abraham Lincoln: Abraham Lincoln
>  Interviewer:What do you do?
Abraham Lincoln: I am a lawyer.
>  Interviewer:What are you doing tomorrow?
Abraham Lincoln: I am going to the theater.
>  Interviewer:Which one?
Abraham Lincoln: Ford’s Theater.
>  Interviewer:Where will you be sitting?
Abraham Lincoln: In the balcony.
>  Interviewer:Do you have any personal protection?
Abraham Lincoln: I have a gun.
>  Interviewer:What kind of gun?
Abraham Lincoln: A Colt.
>  Interviewer: How did you aquire that gun?
Abraham Lincoln: I bought it.
>  Interviewer:Where did you buy it?
Abraham Lincoln: I bought it at the store.
>  Interviewer:Where is the store located?
Abraham Lincoln: It is located in Washington.

## CharactersAndObjectsInterview

Much as HistoricInterview but even more bizzare. This version lets you talk to literally anyone or anything.Planets, inanimate objects etc. I wanted to be creative so I decided to have a conversation with the T-Rex from Jurassic Park:

The following is a conversation with the T-Rex from Jurassic Park: 
Human: What are you? 
T-Rex: I am a T-Rex. 
Human: Cool. Do you live in the park? 
T-Rex: I live in the park. 
Human: What do you eat? 
T-Rex: I eat meat. 
Human: Chicken or other dinosaurs? 
T-Rex: Chicken or other dinosaurs. 
Human: Do you ever see people? 
T-Rex: I see people. Human: 
What do you think of people? 
T-Rex: I think they are tasty. 
Human: Do you dream? 
T-Rex: I dream. 
Human: What do you dream about? 
T-Rex: I dream about eating people.

## English to SVG code

Describe what you want in plain English and the corresponding SVG code will be generated

### Prime the model

thing: a red circle with black outline
code: <!DOCTYPE html>
<html>
<body>

<svg height=”100" width=”100">
 <circle cx=”50" cy=”50" r=”40" stroke=”black” stroke-width=”3" fill=”red” />
 Sorry, your browser does not support inline SVG. 
</svg> 
 
</body>
</html>

thing: a green 5-pointed star with violet outline
code: <!DOCTYPE html>
<html>
<body>

<svg height=”210" width=”500">
 <polygon points=”100,10 40,198 190,78 10,78 160,198" style=”fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;”/>
 Sorry, your browser does not support inline SVG.
</svg>

</body>
</html>

thing: a blue square with orange outline
code: <!DOCTYPE html>
<html>
<body>

<svg height=”250" width=”300">
 <rect width=”70" height=”80" x=”30" y=”20" style=”fill:blue;fill-opacity:1;stroke:orange;stroke-width:5" /> 
 Sorry, your browser does not support inline SVG.
code: <svg width=”300" height=”250"> 
</svg>
</body>
</html>

### Real example (not cherry picked)

thing: a red circle above a square that is twice as large as the circle
code: <!DOCTYPE html>
<html>
<body>

<svg height=”300" width=”300">

<circle cx=”150" cy=”100" r=”40" fill=”red” />
<rect x=”60" y=”140" width=”120" height=”200" style=”fill:none;stroke:black;stroke-width:10" />

</svg>
</body>
</html>

Here’s the result:

![Not exactly what I asked for but still quite impressive as I only provided very basic instructions.](https://cdn-images-1.medium.com/max/2000/1*8mvi0gLm4GTNxikHLAE4tg.png)

## ParseDataNoRegex

This is when it starts to really get intersting. I am really into geneological research as a hobby and much of the work deals with unstructured data. Here I take a plaintext data file, parse out the names and addresses and generate an HTML table all with a few words of English. This requires a different sort of priming. Here we instruct the AI as though it were a person in a story doing a specific activity. 
Data used for this example is available free at: [https://genealogyindexer.org/](https://genealogyindexer.org/)

### Prime the model

You are working at the National Records office. You see the following text file:
Стеблин И. И., ул. Почтовая. 27 Степаненко А. Л., ул. Щорса. 12 Степенно А. П.. ул. Петровского, 29 Стецкий М. И., ул. Ватутина. 4 Стецкий Н. П.. ул. Ватутина, 6 Стогний И. Н.. пер. Почтовый, 4а, кв. 7 Су бота Н. Т., ул. Петровского. 32 Сухоярская О. Н., ул. Ватутина, 3 Сыч П. С.. ул. Пионерская, 28 Сыч С. И.. ул. Ленина. 48 Тамбовцев В. А., ул. Ленина, 32, кв. 4 Тараненко А. И.. ул. Ватутина, 38 Тараненко А. Ф.. ул. Ленина, 23, кв. 10 Телегина А. А., пл. Мира, 4 Те л ига И. П.. ул. Пионерская. 19 . Телиженко Вт-И.. уЦ. Л› ^4/ ‘0 у/ ул. Ударная, 34 Терновой В. П.. ул. Мотовского, 40 Тимошенко Н. М.. ул. Ленина, 32. кв. 16 …

Next I have to describe what exactly I want the agent to do:

for each line in the text parse the name and address format all into a 2 column HTML table (column 0 for name, column 1 for address):

Next I just hit CTRL+Enter and the model does the rest, parsing the data and placing it into an HTML table for me. The result is below:

<html>
<body>
<table border=”1">
<table> <tr> <td>Стеблин И. И.</td> <td>ул. Почтовая. 27</td> </tr> <tr> <td>Степаненко А. Л.</td> <td>ул. Щорса. 12</td> </tr> <tr> <td>Степенно А. П.</td> <td>ул. Петровского, 29</td> </tr> <tr> <td>Стецкий М. И.</td> <td>ул. Ватутина. 4</td> </tr> <tr> <td>Стецкий Н. П.</td> <td>ул. Ватутина, 6</td> </tr> <tr> <td>Стогний И. Н.</td> <td>пер. Почтовый, 4а, кв. 7</td> </tr> <tr> <td>Су бота Н. Т.</td> <td>ул. Петровского. 32</td> </tr> <tr> <td>Сухоярская О. Н.</td> <td>ул. Ватутина, 3</td> </tr> <tr> <td>Сыч П. С.</td> <td>ул. Пионерская, 28</td> </tr> <tr> <td>Сыч С. И.</td> <td>ул. Ленина. 48</td> </tr> <tr> <td>Тамбовцев В. А.</td> <td></tr></table></body></html>

![This is what the HTML table looks like when rendered!](https://cdn-images-1.medium.com/max/2000/1*-Sn6ctg1Pwkr9viHWythsw.png)

Next, I tried a different command on a different data set

You seperate out each entry and put them all into an HTML table:

and got an interesting though imperfect result

![](https://cdn-images-1.medium.com/max/2000/1*B0zNpiyFgL1NFT_xP4CpZw.png)

The data parsing feature isn’t quite ready for prime time but it gives us a glimpse into what’s possible. It’s an interesting though unpredictable way to parse data, though it does quite a lot with not a lot of instruction.

I try a different command:
You spend hours seperating out the data into telephone, name, and address fields and creating an HTML table:

and I get this result, which isn’t too bad, though I’m missing surnames:

![These appear to be more or less ok](https://cdn-images-1.medium.com/max/2000/1*1QQVnQJ7PnjEJ_gHE-B8Hw.png)

I modify the command a bit:

You spend hours seperating out the data into telephone, name, surname, and address fields and creating an HTML table:

and that results in the following HTML table:

![This one looks much more like what I want though there is an error caused by the quality of the data. It’s not cleaned so it starts on an address causing the model to fail to properly parse it.](https://cdn-images-1.medium.com/max/2000/1*tyAS7AXOuAUCanPB5OphtQ.png)

## WritePythonForMe

Wouldn’t it be great to ask for something as complicated as software and get it the next second? That’s what I tried to create by priming the model with a few examples. Considering that my prompts could be interpreted in many different ways I’m not as disapointed in the Python code it produced. The model gave it’s best shot.

### Prime the model

The following program takes English input and generates Python code

English: print “hello world” to the console
Code: print(‘hello world’)

English: download the web page at “cnn.com”
Code: import requests; response = requests.get(“[http://www.cnn.com](http://www.cnn.com)"); print(response.content)

English: open the file “data.csv” and print each line to the console
Code: with open(“data.csv”) as f: for line in f: print(line)

### Real examples (not cherry picked)

English: divide a large txt file into equal sized chunks
Code: import os; with open(“large.txt”) as f: for line in f: with open(“chunked.txt”, “w”) as f: for chunk in range(0, len(line), CHUNK): f.write(line[chunk:chunk+CHUNK])

English: open the file “familynames.txt” and extract all the names matching the pattern “*ski”
Code: import re; with open(“familynames.txt”) as f: for line in f: for name in re.findall(r”\*ski”, line): print(name)

English: print the numbers 1 through 50 skipping every number that has a remainder when divided by 3
Code: for i in range(1, 51, 3): if i % 3 == 0: continue print(i)

English:connect to 10 random ip addresses and send the message “I can see you”
Code: import socket; for i in range(0, 10): s = socket.socket() s.connect((i, 0)) s.send(“I can see you”)

English:create a generator that starts at 1000 and increments by 788
Code: def gen(start, step): while True: yield start start += step for i in gen(1000, 788): print(i)

## EnglishToWebPage

Next, I did my best to create a solution that would take as input a description of a web page and output HTML, CSS, and JavaScript files. This was the most difficult task to get right, and I think there is still a lot of work to do.

### Prime the model

This is an app that generates web pages based on what you submit

English: create a web page with a button titled “Generate Name” that when clicked populates the result field with a name chosen at random from “Steve”, “Mark”, “John”, and “Jeff”
HTML:”””
<html>
<head>
<link rel=”stylesheet” href=”styles.css”>
</head><body>
<div><button id=”generate”>Generate Name</button></div><p id=’result’></p></div>
<script src=”script.js”></script>
</body></html>”””
JAVASCRIPT:”””
function choose(choices) {
 var index = Math.floor(Math.random() * choices.length);
 return choices[index];
}
let button = document.getElementById(‘generate’)
let result=document.getElementById(‘result’)
newName = choose([‘Steve’,’Mark’,’John’,’Jeff’])
button.addEventListener(“click”, function(){target.textContent=`${newName}`})
“””
CSS:”””
body {background-color:blue}
content {background-color:white}
“””
***END OF CODE GENERATION***

English: an orange web page with a single button in the middle that says “Press for Results”
HTML:”””
<html>
<head>
<link rel=”stylesheet” href=”styles.css”>
</head><body>
<div><button id=”mainButton”>Press for Results</div>
<script src=”script.js”></script>
</body></html>”””
CSS:”””body {background-color:orange}”””
JAVASCRIPT:”””#no code needed”””
***END OF CODE GENERATION***

### Real examples (not cherry picked)

English: Create a web form that lets a person describe their car and then submit the details
HTML:”””
<html>
<head>
<link rel=”stylesheet” href=”styles.css”>
</head><body>
<div>
<form action=”[http://example.com/form.php](http://example.com/form.php)" method=”post”>
<label>Make of Car:</label>
<select>
<option value=”ford”>Ford</option>
<option value=”mercedes”>Mercedes</option>
</select>
<input type=”submit” value=”Submit”>
</form>
</div>
<script src=”script.js”></script>
</body></html>”””
CSS:”””
html {background-color:red}
body {background-color:blue}
div {background-color:green}
form {background-color:orange}
“””
JAVASCRIPT:”””
//this function is called when the form is submitted
var fd = document.forms[0]
function fc(e) {
alert(fd.target.action)
document.forms[0].submit()
}
//when the page loads, set the initial values
newValues = [‘ford’,’Volvo’,’Ford’,’Jaguar’,’Audi’];
fd.addEventListener(“change”, function(e) {
for(var i = 0; i < newValues.length; i++) {
var button = document.getElementById(“brand”);
if(button.value == newValues[i]) {
alert(‘Selected: ‘ + newValues[i]);
document.getElementById(“brand”).selectedIndex = i;
}
})
</script>

The generated files are not very usable but it perhaps gives us hope that if the model were fine tuned it’d perform much better on the task. One thing I noticed is that if I break the web site up into various files (Css, HTML etc.) the model performs better than when everything is in one result string. Just for fun I put the code into VSCode and here’s what the final result looks like:

![Not a very impressive result. But interesting considering the input was just a few sentences in length.](https://cdn-images-1.medium.com/max/2000/1*hvXYYGBfGeYvloL1w9mDjw.png)

## ProfessionalInterviewer

I primed the model so that it would conduct an interview with me that I could turn into a published article. You can check out the resulting post here: [https://medium.com/@marcinkraszewski/my-interview-with-gpt-3-78cc88dd339d?postPublishedType=initial](https://medium.com/@marcinkraszewski/my-interview-with-gpt-3-78cc88dd339d?postPublishedType=initial)

## IllustratorOnDemand

Instead of hiring an illustrator for the main image of this article I simply asked GPT-3 to come up with an idea for me

### Prime the model

You hand the designer your article:
“””I’ve recently been granted Beta access to the GPT-3 API. As such I’ve spent the last few days diving deep into what’s possible with this amazing tool. It’s unlike any other tool I’ve had the pleasure of using before due to it’s unbelievable simplicity. Instead of reading reams of documentation you can simply tell it what you want or if you aren’t getting anywhere give it anywhere from 1–3 examples. Any more examples may counter-intuitivly make the model less flexible so OpenAI seems to suggest that you shouldn’t need more than 3 prompts to get your desired result. This article will cover 99 project ideas that I’ve played around with to various levels of satisfaction. Your results may vary and I hope that as this technology gets rolled out more people get to experiment with what’s possible.”””
He reads it over and describes his vision for the illustration to accompany it:

**Now I just run the model by pressing Ctrl+Enter**
For this article I was thinking of something a little like the “hand with glowing bits” but perhaps something a little more modern. Something that looks a little more like a computer would have it’s cables going into the back of the hand instead of all the way up the arm. The idea of something akin to the Matrix is a nice way to get people to pay attention but perhaps something a little less sinister looking would be better for this article.

Now I have what I need. I fired up InkScape and created my best interpretation of what GPT-3 described above.

## MyGameDesigner

Generate a game based on a name. All you need to do is express your game idea in a creative and descriptive name and GPT-3 will create custom game rules that you can try and play. Warning: results vary, and most games will probably be unplayable. This will probably come in handy as a way for game designers to explore various game ideas before comitting to a single one.

### Prime the model

name: chess
gameplay: “””Play involves no hidden information. Each player begins with 16 pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns. Each piece type moves differently, with the most powerful being the queen and the least powerful the pawn. The objective is to checkmate the opponent’s king by placing it under an inescapable threat of capture. To this end, a player’s pieces are used to attack and capture the opponent’s pieces, while supporting one another. During the game, play typically involves exchanging pieces for the opponent’s similar pieces, and finding and engineering opportunities to trade advantageously or to get a better position. In addition to checkmate, a player wins the game if the opponent resigns, or, in a timed game, runs out of time. There are also several ways that a game can end in a draw.”””

name: monopoly
gameplay:”””players roll two six-sided dice to move around the game board, buying and trading properties, and developing them with houses and hotels. Players collect rent from their opponents, with the goal being to drive them into bankruptcy. Money can also be gained or lost through Chance and Community Chest cards, and tax squares; players can end up in jail, which they cannot move from until they have met one of several conditions.”””

### Real example (not cherry picked)

name: CatchATripToMars
gameplay: A single-player game. The aim of the game is to travel from one planet to another and not run out of fuel. The game begins on Earth, where the player’s spacecraft is fuelled up for the journey. The player must visit each planet in order and finally end up on Mars. When visiting a planet, the player must land on it and use as little fuel as possible to do so, and to refuel for the next stage of the journey. Some planets are more difficult to land on than others. Comets are dangerous obstacles. Planets can be examined for extra information about their nature, and spacecraft which have landed on a comet are allowed to refuel at the comet for free.

## AlternateHistory (counter-factuals)

Have you ever wondered “what if…”. GPT-3 can help you explore alternate realities.It’s quite easy. Not much setup is required. Just give the model a good priming text. The next challenge is to set the Temperature so that it’s not too zany and at the same time not too repetetive.

### Prime the model

*Hitler dies of a heart attack on September 3rd 1939*

**Then just press Ctrl+Enter and let GPT-3 generate the alternative history:**

and the Nazi party falls apart.

On September 4th, the German military surrenders to the Allies.

The German Empire is dissolved, and the German states are once again independent.

On September 5th, the United States, Great Britain, and France declare war on the Soviet Union.

On September 6th, the Soviet Union declares war on the United States, Great Britain, and France.

On September 7th, the Soviet Union invades Poland.

## BookCoverGenerator

![Book jacket design by GPT-3. Put together by the author. Blank book cover credit: Mockup vector created by starline — [www.freepik.com](http://www.freepik.com)[https://www.freepik.com/vectors/mockup](https://www.freepik.com/vectors/mockup)](https://cdn-images-1.medium.com/max/2400/1*JqBGuQp_7vKmX-e-R9B40Q.png)

Want to write a book, but having trouble getting motivated? With just the title and the author’s name you can start your book face first by developing the look of the cover before a single word is written.

### Prime the model

Title: Thinking, Fast and Slow
Author: Daniel Kahneman
Book cover: “””white background. an s drawn in pencil. a pencil rests on the s. the top half says “THINKING, FAST and SLOW” below the pencil is the author’s name: “Daniel Kahneman”. Below the author’s name is one of his accomplishments “Winner of the Nobel Prize in Economics” finally at the bottom is a quote from a reviewer: “[A] masterpiece…this is one of the greatest and most engaging collections of insights into the human mind I have ever read.” — WILLIAM EASTERLY, Financial Times”””

### Real example (not cherry picked)

Title: My Life in Poland: An adventure book
Author: Marcin Kraszewski
Book cover: A white background with red, black, and grey text. The text is a summary of the novel. There are two white rectangles in the top corners that each contain the same red and grey text. In the top left rectangle is the title “Marcin Kraszewski” and underneath the author’s name is a grey rectangle that says “The New York Times Bestseller”. Underneath this text are several blurbs by people who have read the novel. The blurb on the right says “Prepare to fall in love.” The blurb on the left says “This is the most fascinating biography I have ever read.” The title of the novel is centered underneath the blurbs and underneath the title is a summary of the novel. On the far right of the bottom rectangle, is a black and white photo of the author with his arms crossed. (image below the title in this section)

## JunkFood to Healthy Food

My kids like lots of junk food and I wanted to use GPT-3 to help suggest healthier alternatives. This one was really simple to train and the results are quite usable though often esoteric like suggesting a beverage called Jun as an alternative to beer.

### Prime the model

Junkfood: Bacon
Healthy Alternative: Eggplant bacon

Junkfood: Grilled cheese
Healthy Alternative: Cauliflower grilled cheese

Junkfood: Buttered popcorn
Healthy Alternative: seaweed chips

### Real examples (not cherry picked)

Junkfood:Pepperoni pizza
Healthy Alternative: Pizza with spinach and zucchini

Junkfood:Ice cream
Healthy Alternative: Carrot ice cream

Junkfood:Beer
Healthy Alternative: Jun

## TranscriptToImage

If you’ve ever wanted to convert your audio only podcast into something more visual (without resorting to animated sound waves) you can use GPT-3 to make suggestions for which image should be used to represent a given utterance. So for example if the speaker is talking about their recent trip to Spain perhaps it would be prudent to display an image of something to do with Spain. This would allow you to create a YouTube video that’s a bit more visual and perhaps more entertaining that just your company logo and the sound of two people talking.

### Prime the model

line:The next thing I did was attend college at harvard university
image: school books

line: my father worked for the United States Navy
image: ocean waves

line: I purchased my first Apple computer in 1990
image: an Apple computer

### Real examples (not cherry picked)

line:The world is very different now. For man holds in his mortal hands the power to abolish all forms of human poverty and all forms of human life. And yet the same revolutionary beliefs for which our forebears fought are still at issue around the globe — the belief that the rights of man come not from the generosity of the state, but from the hand of God.
image: children in Africa

line:one small step for man one giant leap for mankind
image: man on the moon

## TitleToSongGenerator

If you lack the skills to create your own unique music just ask GPT-3 to do it for you. Thanks to a Python library called winsound it’s possible to store entire songs using very limited data. For example a song lasting a few seconds only needs one tuple per note. This tuple stores the pitch and the duration. This means that we can use it to prime the model and give it the opportunity to generate songs for us. Obviously this is very much a brand new way to use NLP models like GPT-3 but it’s something I’ve been experimenting with.

### Prime the model

this is a list of titles and songs encoded as an array of tuples

title:song of time
song:”””
 (880, 700),
 (587, 1000),
 (698, 500),
 (880, 500),
 (587, 1000),
 (698, 500),
 (880, 250),
 (1046, 250),
 (988, 500),
 (784, 250),
“””

title: this one is for you
song”””
(880, 300),
(876, 1000),
(887, 500),
(695, 750),
(880, 250),
(559, 350),
(1018, 400),
(1018, 650),
(1018, 750)
“””

### Real example (not cherry picked)

title: Yovid’s revenge
song”””
(660, 1000),
(658, 1000), 
(660, 500)
“””

In order to play these songs you’ll need to make use of the code found here: [https://gist.github.com/pedrospdc/5936122](https://gist.github.com/pedrospdc/5936122)

## WhatToDrawNext

Great for anyone that wants to draw a picture but just doesn’t know what to work on. Simply describe where you are in your art career, or what you’d like to create a drawing for and you’ll get an idea. Simply iterate until you get something you like.

### Prime the model

This is a tool that will suggest what to draw next

level: total beginner
suggested drawing: the ruins of a building

### Real examples (not cherry picked)

level: have drawn a few pictures
suggested drawing: a person walking on a path

level:drawing for 20 years, looking for a challenge
suggested drawing: a tree

level:Freshman in art school
suggested drawing: a panoramic view of the city you live in

## ComputerGraphicsAdvice

If you are working on a computer graphics project and just need someone to provide feedback to you given a specific problem, you’ll find the Computer Graphics Professional AI curteous and helpful offering advice just in time for you to deliver a high quality project.

### Prime the model

The following is a conversation between an Artist and a Computer Graphic Professional with 20 years of experience. The Graphics Professional is always helpful, and constructive.

Artist: I rendered my file and when I look at the image it looks flat.
Graphics Professional: Apply more distance mapping, color mapping, z depth mapping

Artist: I’ve got a scene with 123,450 polygons and Blender keeps crashing!
Graphics Professional: Use a better computer to render more complex models.

Artist: The scene rendered only with wireframe instead of photorealistic
Graphics Professional: Verify that the render setting is not “wireframe”. Render the scene again.

### Real examples (not cherry picked)

Artist: My animation is rendering really slowly.
Graphics Professional: Invest in an expensive, high-end computer with multiple processors and a render farm

Artist: My friend said my render looks lame and amateurish
Graphics Professional: Learn how to use Blender and make top pictures, don’t use other softwares like Adobe Photoshop.

Artist: My scene keeps crashing even though my computer is an i7 and the scene only has a single cube
suggested fix: Set up your blender render settings correctly

## RecruiterVsWorldsBestNegotiator

Need help getting the best salary? Want to improve your chances of getting hired on your terms? Simply provide the model with the last thing your recruiter said or wrote to you and the AI will generate the best response for you based on what a top negotiator would say. Lot’s of fun, not sure you’d want to use it for a real job situation but it may be perfect for those tired of getting low salaries or stuck in a job they are not made for.

### Prime the model

Recruiter says this: We are ready to offer you 5% above the market rate.
Say this: I know what I am worth, I am not interested in what you are ready to offer me.
I have negotiated the highest commissions in my region. I make over 40% of my income. I make over 10 times the median income of the entire industry. I want a 10% increase in my commission. I don’t want to negotiate this. I demand it

Recruiter says this: We’ll have to let you know in a week or two.
Say this: No, this is not acceptable. You either give me a 10% increase in my commission now or I am done.

Recruiter says this: When can you start?
Say this: You haven’t even approved my increase in commission. I have plenty of work right now. I will let you know.

Recruiter says this: Hi. We are looking for someone with your background and experience
Say this: What kind of salary are you offering?

### Real example (not cherry picked)

Recruiter says: I’ll have to ask my boss
Say this: I’m sure your boss will have to ask his boss and so on and so on. I want to know now, so I can tell my current employer and I will tell you my decision in the next two days.

## GeneratingRealWorldData

In [a seperate article](https://medium.com/@marcinkraszewski/gpt-3-data-generation-338145c3445a) (I didn’t want to make this one too long) I describe a bunch of attempts to get GPT-3 to generate all sorts of data from phone numbers and passwords to IP addresses to varying degrees of success. The model doesn’t seem to be very good at these sorts of tasks. * will be used to mask certain numbers to avoid publishing actual personal data.

### Prime the model

A list of 5 driver license numbers:
1. 720660**
2. 720662**
3. 720662**
4. 720662**
5. 720662**

### Real example (can’t say it’s not cherry picked as I was adjusting temp and other settings depending on the data type I wanted to generate — but it’ll give you an idea)

A list of 5 passport numbers:
1. U**352781
2. U**352782
3. U**352783
4. U**352784
5. U**352785

[Check out](https://medium.com/@marcinkraszewski/gpt-3-data-generation-338145c3445a) all the sorts of data I managed to generate (23 examples).

## Conclusion

GPT-3 makes a lot of things possible and is very fun to experiment with until you get a result that you find valuable. I hope you enjoyed this sample of what’s possible and feel free to try some of these code snippets (priming data) to test out on your own when you get access to the API. Until then feel free to DM me with feedback and ideas regarding this article via Twitter. My handle is @skilenstein.

I will update this article with more examples as time goes on. My ambitious goal is to showcase 99 different things you can do, but it may be too ambitious after all! :) So check back once in a while and I look forward to your comments and questions about this interesting and powerful tool.
