# WAY! #
*Who Are You in World of Warcraft*

![Kel'Thuzad](assets/images/kelthuzad.jpeg)
---
## UX (User Experience) ##
---
### Project Goals ###
The **ultimate quiz** to decide for **once and for all** which faction, race, class and role you belong to in the popular MMORPG [World of Warcraft](https://worldofwarcraft.com/en-us/).

The **goal** for this project is to **entertain** users.

While I at first intended to use all playable classes, races and roles, I soon found out that was a bit to much, so I decided to include all playable classes, races and roles up to and including the [Original World of Warcraft Classic Game](https://worldofwarcraft.com/en-us/wowclassic).
I had a really hard time getting my data in a structure I could work with. So I decided to compress a lot of questions and not use three json files, but instead use one, just to make it more easy on myself as I was approaching a point to I almost had a burn-out.

### User Goals ###
* **Find** out which [World of Warcraft](https://worldofwarcraft.com/en-us/) faction, race, class and role you are.
* Be **entertained**.
* **Find** beautiful **images** of World of Warcraft races and classes.

### User Stories ###
* As a **user**, I want and **attractive** and **fun** website so I will be **entertained**.
* As a **user**, I want a **site** that loads fast.
* As a **user**, I want to have clearly defined **questions** and **answers**.

### Site Owner Goals ###
* As a **site owner** I want to educate my users.

### User Requirements and Expectations ###

**Requirements**

* Have a **intuitive** layout that is easy to use.
* **Fun questions** that lead to an **equally fun** (and perhaps true) **outcome**.
* **social media** buttons in the footer.

**Expectations**
* Quiz is **easy** to use and gives **no errors**.
* Content is **appealing**.

### Design Choices ###
When **designing** this site, I mainly did a **lot of thinking**. Where **coming up** with the idea wasn't all that hard, the **getting the data structured and usable**, was a whole different ball game.
I've looked at [**other quizzes**](https://www.zimbio.com/quiz/xB6XYrSQXCE/World+Warcraft+Class) that follow a path that is similar to mine and went from there.

**Fonts**

For titles i've used [Open Sans](https://fonts.google.com/specimen/Open+Sans?query=open+sans) and for the text i've used [Montserrat](https://fonts.google.com/specimen/Montserrat?query=mont) which come pretty close to the fonts Blizzard uses for their World of Warcraft site.
I also used a **custom font** that is used my Blizzard itself; [LifeCraft](https://www.dafont.com/lifecraft.font) which i've used for the title.

**Icons**

**Icons** used where provided by [Font Awesome](https://fontawesome.com/), used in **moderation** and are self explanatory.

**Colors**
Colors that are used, are based on the World of Warcraft colors.
* For body background: Black #000000
* For buttons:  Yellow #F7B10A, Blue #009AE4 and Red #EA3012
* For text: Yellow #F7B10A, Blue #009AE4 and Red #EA3012.

![Color Scheme](/wireframes/way.png)

## Wireframing ##

For **wireframing** I used [Pencil Prototyping](https://pencil.evolus.vn/).

View my wireframes [here](https://github.com/byIlsa/WAY/tree/master/wireframes).

To be more precise:

* [Desktop Wireframe](https://github.com/byIlsa/WAY/blob/master/wireframes/desktop.pdf)
* [Tablet Wireframe](https://github.com/byIlsa/WAY/blob/master/wireframes/tablet.pdf)
* [Mobile Wireframe](https://github.com/byIlsa/WAY/blob/master/wireframes/mobile.pdf)

## Features ##
---
**Features** that have been **implemented:**

* A **fun** and perhaps **informative** quiz.
* Social Media **buttons**.

**Features** that will be **implemented** in the **future:**

* **Fantasy name generator**: Let's user generate a **character name** to go with the **outcome of the quiz**.
* Option to **check** if that **name** is already **taken** (through an API).
* Option to choose between the **different expansions**. With **every new expansion**, **more classes and races** were added. For future features, I would like to **include** them as well.
* Social media **share buttons**.

## Technologies used ##
---
**Languages**

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JS](https://nl.wikipedia.org/wiki/JavaScript)
* [JQuery](https://jquery.com/)
* [Popper](https://popper.js.org/)

**Tools & Libraries**

* [Git](https://git-scm.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Font-Awesome](https://fontawesome.com/icons?d=gallery)
* [Google fonts](https://fonts.google.com/)
* [Gimp](https://www.gimp.org/)

## Testing ##
---
**Responsiveness**

* **Implementation**
* **Results**
* **Verdict**

**Design**

* **Implementation**
* **Results**
* **Verdict**

## Bugs ##
---
**During development**

:bug: **Bug:** Buttons not reacting the way I expected.

**Description:** I was looping through the answers array with a `forEach loop`, but couldn't make the answers being injected into the buttons. And the buttons where underneath each other, instead of hiding when an answer was clicked.
This has been very frustrating for me, as I felt I was throwing everything I knew at it, including and not limited to documentation, video's and asking help on Slack.
I asked tutor support in the end, who have helped me figure this out. Their hints combined with the help of Mr Bim, has led me to understand what was causing this and how to solve it. 
Part of this was having a array like collection which led to me not being able to use a `forEach loop` which started this whole thing.

**Solution:** Change the `document.querySelector` to be `document.querySelectorAll()` and use `for loops` so the answers where actually being appended to the amount of buttons that where needed.


**Bug:** Some loops in the questions weren't leading to a 'null no yes' solution but seemed infinite. 

**Solution:** Found out which question wasn't referring to the right ID number and fixed that. 

**Bug:** The restart function wasn't working. This one had my head spinning and was very easy to solve! 

**Solution:** Install a code spell checker... It took a mentor to point to a spelling mistake in the word "answers"... Won't happen again; code spell checker installed. :thumbsup: 

**From validation/testing**

**Bug:** Boyfriend test: Wrong result id showing.

**Solution:** Check flow of json and changed a few id's so the correct result id's show.

**From peer code review**

## Deployment ##
---
WAY! was **developed** on **GitPod**, using **git** and **GitHub** to host the repository.

When deploying WAY! using **GitHub Pages** the following steps were made:

* Opened up **GitHub** in the **browser**.
* Signed in using **username** and **password**.
* Selected my **repositories**.
* Navigated to **byIlsa/WAY**.
* In the top navigation clicked **settings**.
* Scrolled down to the **GitHub Pages** area.
* Selected **Master Branch** from the **Source** dropdown menu.
* Clicked to **confirm** my **selection**.
* Aloy: from Outcast tot Heroine now **live** on **GitHub Pages**.

**Running WAY! Locally**

**Cloning** WAY! from **GitHub**:

* Navigate to **byIlsa/WAY**.
* Click the green **Clone or Download** button.
* **Copy** the url in the **dropdown box**.
* Using your **favorite IDE** open up your **preferred** terminal.
* **Navigate** to your **desired** file **location**.

**Copy** the following code and **input** it into your **terminal** to **clone WAY!**.

```git clone https://github.com/byIlsa/WAY```

## Credits ##
---
**Code Credit**

* Epic thanks to [WebDevSimplified](https://github.com/WebDevSimplified) for his [JavaScript text adventure game](https://github.com/WebDevSimplified/JavaScript-Text-Adventure) which I have used as a base for my project.

**Credit for text used on this website**

* For [race](https://wowwiki.fandom.com/wiki/Race) descriptions.

* For [class](https://wowwiki.fandom.com/wiki/Class) descriptions.

* For the **questions** I used [this](https://nl.pinterest.com/pin/32299322315435071/) and [this](https://nl.pinterest.com/pin/308144799504856672/), found on pinterest.

**Images used**

* [Body background-factions](https://wallpaperplay.com/walls/full/9/1/3/41117.jpg)

* [Crests](https://wowwiki.fandom.com/wiki/Crests)

* [Kel’Thuzad](https://esports.hollywood.com/heroes-of-the-storm-kelthuzad-enters-the-nexus-c173b544737)

<details>
  <summary><strong>Images for results section:</strong></summary>

[Troll Priest](https://www.deviantart.com/daverapoza/art/Troll-priest-112064760) 

[Troll Warrior](https://www.artstation.com/artwork/L2X1bR)

[Troll Hunter](https://www.artstation.com/artwork/WLdAN)

[Troll Mage](https://www.deviantart.com/raben-aas/art/Female-Troll-Mage-733038382)

[Troll Rogue](https://worldofwarcraftthings.tumblr.com/post/105648297575/nickroblesart-zelujin-paint-sketch-digital)

[Troll Shaman](https://www.deviantart.com/vanharmontt/art/Troll-Shaman-1-833726134)

[Troll Paladin](https://i.imgur.com/wXj4JVj.jpg) 

[Tauren Druid](https://www.deviantart.com/vanharmontt/art/Tauren-Druid-832030308)

[Tauren Warrior](https://www.deviantart.com/rogierb/art/Tauren-Warrior-569059971)

[Tauren Hunter](https://i.redd.it/a7y6vjfkbvs21.jpg)

[Tauren Shaman](https://www.artstation.com/artwork/eaRolb)

[Tauren Rogue](https://wow.gamepedia.com/File:Tauren_rogue2.jpg) 

[Undead Priest](https://www.deviantart.com/phamoz/art/WoW-Undead-Priest-811200130)

[Undead Paladin](https://www.wowhead.com/outfit=6479/undead-paladin#screenshots) 

[Undead Warrior](https://www.reddit.com/r/wow/comments/9c3da4/undead_warrior_grevant_by_me/?utm_content=comments&utm_medium=user&utm_source=reddit&utm_name=frontpage)

[Undead Mage](https://www.deviantart.com/thiago-almeida/art/Undead-Mage-286342400)

[Undead Rogue](https://www.deviantart.com/anotherwanderer/art/Undead-Rogue-715219145)

[Undead Warlock](https://www.deviantart.com/kueshkaart/art/Gothess-Undead-Warlock-commission-work-846482734)

[Orc Warrior](https://www.deviantart.com/jordankerbow/art/Warcraft-Female-Orc-Warrior-625504789)

[Orc Hunter](https://www.inprnt.com/gallery/sulamoon/orc-hunter/?__cf_chl_jschl_tk__=278fb2245c5599cf884ad1ca35e7ee7c67759c28-1600778797-0-AdSoF5KVbyhum5fmb0vMfmQGKbyC59QZk8HUqjznLVRZ3bub7JnNpVgMbsBgdMzUcH3u58EK4Lkksh_5O1iKcNAO92VJFUNw8qu4A6gPuv9nIAAqaU89pwRRlKNz_ZF1YjlN1RxkzZS-LHzYwZ3iyanJ2Wo-Cu1tnbzjTiBcGc16HzWYznI7I8Aj2Ba6ZIIW9WxZyEtWbds2383Mpcb4JLulT4huNHEMDSmgZzzvugAEyv-1X9eEHpFQd35c0UzutE5Vzp0rvNngK9gBZiPsIZ3CY5ivLZSrK09U7u7ieO5sJgUg1dyrcdb_MmbvUPZ3N4ktiuESqP3yuFrLTWspSyNOLDGWsbGT2f-rrBsoefDAvhrI22QsztFliEiomZVHTw)

[Orc Rogue](https://www.deviantart.com/weremagnus/art/orc-rogue-35394744)

[Orc Shaman](https://www.deviantart.com/koz23/art/Female-Orc-Shaman-703050797)

[Orc Warlock](https://www.deviantart.com/pokketmowse/art/Orc-Warlock-165451843?q=gallery:pokketmowse/30493974&qo=10)

[Human Priest](http://media.blizzard.com/wow/media/fanart/fanart-0654-full.jpg)

[Human Paladin](https://www.deviantart.com/angevere/art/Paladin-667232071)

[Human Warrior](https://www.reddit.com/r/wow/comments/g95wrb/human_warrior_commission_work_by_me_oksana_kerro/)

[Human Mage](https://www.deviantart.com/ozornin-art/art/Mage-Kirin-Tor-567442162)

[Human Rogue](https://www.deviantart.com/glennraneart/art/World-of-Warcraft-Human-Rogue-157820160)

[Human Warlock](https://www.deviantart.com/ludvikskp/art/World-of-Warcraft-Human-Warlock-739252484)

[Dwarf Priest](https://www.artstation.com/artwork/PmZe3y)

[Dwarf Paladin](https://www.deviantart.com/vanharmontt/art/dwarf-paladin-787325284)

[Dwarf Hunter](https://wall.alphacoders.com/big.php?i=229515&lang=Russian)

[Dwarf Rogue](https://wow.gamepedia.com/File:MadreaBluntbrew.jpg)

[Dwarf Warlock](https://www.wow-accountshop.com/wp-content/uploads/2020/05/lock.jpg)

[Dwarf Warrior](https://www.deviantart.com/lavam00/art/Dwarf-Warrior-828041537) 

[Night Elf Priest](https://www.artstation.com/artwork/rd6R6)

[Night Elf Druid](https://www.artstation.com/artwork/WL2D2)

[Night Elf Warrior](https://www.artstation.com/artwork/APDEq)

[Night Elf Hunter](https://www.deviantart.com/imdrunkontea/art/Night-Elf-Archer-818463468)

[Night Elf Rogue](https://www.artstation.com/artwork/YaJvwK)

[Gnome warrior](https://www.deviantart.com/artlon/art/Commission-Jilette-Sawblaster-533852890)

[Gnome mage](https://www.artstation.com/artwork/xk9nE)

[Gnome warlock](https://www.artstation.com/artwork/1e3WX)

[Gnome Rogue](https://www.storenvy.com/products/4184291-timmo-shadestep)
</details>


**Special thanks**

* As always, my mentor [Simen Daehlin](https://github.com/Eventyret), for his support and Yoda-guidance.

* And while Simen was away, I got helped by the awesome [Reuben Ferrante](https://github.com/arex18).

* A big contributor in this project and massive support, not only code wise but also mentally; [Mr Bim Williams](https://github.com/MrBim).

* For her MoneyPot game, that has helped me kick off the JavaScript part of this project, [Neringa Bickmore](https://github.com/neringabickmore).

* For his undying love and support and always being there, my love, you know who you are ;)

* Everybody at Slack for their support, tips and humor, especially tutors Tim, Roman and Kevin.

**Personal note**

These are trying times...
During this project I had some major life events, not to mention, the whole COVID-19 pandemic which has touched us all.

I have never had so much things going on that have impacted me in ways I didnt expected. A move, some serious illness and other stuff, have forced me to make some tough decisions and really focus on what matters most. Code Institute has been invaluable in attaining this, so a MASSIVE thank you! 

**Site for educational purposes only!**


