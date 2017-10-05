/*!
 * TOOL FOR SELECTING EDUCATIONAL TECHNOLOGY 
 * http://eskolar.com
 * Version: 1.0.0
 *
 * Copyright 2015 b. kiss balint
 * Released under the MIT license
 *  
 */
var txt_0 = "The founding possibility of a school determines <br>"
		+ "1: what technology we can use.<br>"
		+ "2: the number of students in a group as our best situation will be 1:1<br>"
		+ "<br>"
		+ "We want to give chance to implement for schools without founding possibilities.<br>"
		+ "1: This has priority as the school supports the introduction of educational technology.<br>"
		+ "2: with 100$-500$ founding the school can buy and introduce 1-2 full devices or 5-10 Base configuration<br>"
		+ "3: 500$-1000$ founding the school can introduce the full set + MyDAQ / MyRIO + LabVIEW - this is an advanced situation<br>"
		+ "4: more than 1000$. In this case if a school can have such founding this means that it can provide"
		+ "educational support for a district (Study Groups). <br>"
		+ "We have to suppose that this institute has a good infrastructure and contact background."
		+ "This is an extremely good situation.<br>";

var txt_1 = "<p>It is not possible to install new hi-tech softwares like LabVIEW on PC-s older than 3 years as their <br />simulation possibilities need a lot of memory and processor resources.<br />But these devices are able to run simle IDEs like Arduino or Energia so we can implement the apaBoard <br />basic solution.</p>"
		+ "<p>1: <strong>Critical need</strong> as If we don't have PC-s we can apply <a title=\"BYOD\" href=\"https://en.wikipedia.org/wiki/Bring_your_own_device\" target=\"_blank\"><strong>BYOD Bring your own device</strong>.</a><br />2: With <strong>5 computers</strong> we <strong>can start learing process</strong> with a small group and <a title=\"http://eskolar.com/\" href=\"http://eskolar.com/\" target=\"_blank\">apaBoard for beginners</a>.</p>";

var txt_2 = "<p>If You have<strong> PC-s supplied in the last 3 years</strong> it is most likely that<strong> you can install and use simulation</strong><br />and multimedia softwares and applications.</p> <p><br />1: If You have<strong> only one good PC</strong> You can run on that device the simulations and <strong>students may use older</strong><br />PC-s for base setups.<br />2: <strong>With more good PC-s you can implement 1:1</strong> One to one computing learning technology<br />3: With more good PC-s you can implement 1:1 One to one computing learning technology</p>"

var txt_3 = "<p>The<strong> wi-fi coverage</strong> determines the possibilities of apaBoard educational technology usage.</p><p>1:<strong> Where and in what circumstances can anybody make an experiment?</strong> <br />If we have only a classroom with&nbsp;wifi we<strong> can't supply a large group</strong>.<br />2: More classes mean <strong>more possibilities for more students</strong></p>";

var txt_4 = "<p><strong>Network broadband</strong> determines <strong>how many student can use the network</strong> and what kind of content can be reached by them.</p><p>1: If <strong>only</strong> the <strong>teacher</strong> has network connection the <strong>efficacy is very low</strong><br />2: More students can form a group <br />3: Every student can learn with own device. This helps 1:1 blended learning&nbsp; </p>";

var txt_5 = "<p><strong>The usage methot may reflect the attitude of Your institute.</strong> <br />This is very important as <strong>imlementing in curriculum</strong> means that the <strong>teacher is devoted</strong> to introduct this device and method.<br />Also implementing in optional workgroups means that<strong> You agree with the importance of teaching</strong> and learning <strong>electronic tachnologies</strong> with apaBoard and its resources.</p>";

var txt_6 = "<p>This means the<strong> kind of specialisation</strong> of educational field. If You are teaching <a href=\"https://en.wikipedia.org/wiki/Computer_science\">EECS (Electrical Engineering &amp; Computer Sciences)</a>&nbsp;you can use all the possibilites of apaBoard's resources. <br />While teaching only physics or informatics&nbsp;you would use only some parts of our materials.<br />- <strong>Informatics</strong> giving a practical background of programming, seeing how <strong>bytes</strong>, <strong>binary math,</strong> calcs work in a<br />real system<br />- <strong>Physics</strong> means You can use in classes to give practical background of physical phenomena like <strong>resistance,</strong><br /><strong>capacitance,</strong> <strong>inductance</strong>.<br />- <strong>EECS</strong> is the most valuable <strong>science field with both practical and theoretical background</strong></p>";

var txt_7 = "<p>This means that your educational institute or school which is interested in implementing this educational&nbsp;system "
		+ "how  <strong>many hours can pay for an educator on a week&nbsp;</strong>"
		+ " . <br />These hours can"
		+ " be <strong>used</strong> for<strong> online trainings</strong>,&nbsp;<strong>reshaping materials</strong>, "
		+ "<strong>building experiments</strong>.&nbsp;<br />As<strong> teacher is not paid for his eforts "
		+ "this can cause a possible failure of this project.</strong><br />(hours <strong>paid for teacher / week</strong>).</p>";

var txt_8 = "<p>This means that your educational institute or school which is interested in implementing this educational&nbsp;system "
		+ "how  <strong>many hours can pay for an educator on a week&nbsp;</strong>"
		+ "These hours can be <strong>used</strong> for<strong> class hours</strong>.&nbsp;<br /> "
		+ "As<strong> teacher is not paid for his eforts this can cause a possible failure of this project.</strong>"
		+ "<br />(hours <strong>paid for teacher / week</strong>).</p>";

var txt_9 = "<p><strong>Educator activity type</strong></p>"
		+ "<p>Mentors, <strong>teachers activity in supporting to develop resources determines the quality of this&nbsp;system</strong>,"
		+ "the efficiency of the choosen device and tools.</p>"
		+ "<p>1. In this case the teacher<strong> only follows the ready-made courses</strong> and resources. It is better for teachers "
		+ "to use <br />methods of the constructionism and reuse, reshape resources for any new situation.<br />2.<strong> Teachers are like "
		+ "helpers, facilitators</strong>. The students start the learning process by building different devices and<br />the educator help "
		+ "them to succeed in each development.<br />3. Teacher<strong> can develop new materials</strong> which can be&nbsp;implemented in "
		+ "the resources. By <strong>teacher's work the system</strong><br /><strong>wil be more valuable</strong>.<br />4. By teacher's "
		+ "valuable work he can participate as mentor in <strong>facilitating other teachers work</strong>.</p>";

var txt_10 = "<p>It is an important factor<strong> when do teachers receive their devices</strong> to have time "
		+ "to prepare to implement, to take<br />online or offline trainment.<br />This time amount is very "
		+ "<strong>important</strong> for a teacher<strong> to become a facilitator in blended learning.</strong></p>";

var txt_11 = "<p>Advice from system</p>"
		+ "<p>The method of the apaBoard <strong>is based on the creativity of the students</strong>. The online "
		+ "system (based on Moodle) is able to analyse the progress of the students. <br />More progress from a group means "
		+ "that the teacher was efficient in that particular group.<br />The system <strong>can recommend other "
		+ "possibilities</strong> for example to <strong>participate at competitions</strong>, <strong>expos</strong> "
		+ "and so an.<br />The <strong>recomendations are optional</strong> but <strong>may influences the quality</strong> "
		+ "of learning.</p>";

var txt_12 = "<p><strong>Teachers training</strong></p>"
		+ "<p>- Using <strong>online resources can supply&nbsp;the foundation of the knowledge</strong> needed"
		+ "to make a successful&nbsp;educational project.<br />- Beside online resources <strong>offline conferences,"
		+ "training groups can improve</strong> the quality of the knowledge. <br />Also is&nbsp;possible to ask for"
		+ "presentation in your school.<br />- You may ask <strong>developers and teachers intersted in ed. tech. to help"
		+ "in laboratory equipment</strong>.</p>";

var txt_13 = "<p><strong>Cooperation</strong></p>"
		+ "<p>Cooperation <strong>among teachers and educational institutes, schools is a very valuable</strong> "
		+ "part of this educational concept.<br />Finding <strong>budget for devices and payement for teachers</strong> "
		+ "is the most <strong>hardest</strong> question. <br />In case that <strong>more&nbsp;schools or more groups</strong> "
		+ "from a disctrict <strong>can evolve in cooperation</strong> they would be able <strong>to get financial "
		+ "resources</strong>.<br />1. 1-3 schools can form a group in a district<br />2. 3-5 schools can form "
		+ "a group in a district<br />3. A <strong>science center</strong> like institution<strong> can manage"
		+ "the cooperation</strong> among schools for one or more districts.</p>"

var txt_0_hu = "Az <b>iskola fejlesztési kerete eszközök</b> beszerzésére, meghatározza az alkalmazható tecnnológiát, a csoport milyenségét és a projekt méretét, célunk az, hogy a kisebb kerettel, vagy kerettel egyáltalán nem rendelkező iskoláknak is bekapcsolódási lehetőséget adjunk. Kiemten fontos szempont!"
		+ "- Értékelendő, hogyha nincs keret, de az iskola támogatja az eszköz kipróbálását."
		+ "- 100$-500$ kerettel már lehetőség van 1-2 ill. 5-10 alapkészlet megvásárlását.	- 500$-1000$ közti kerettel teljes készletetet + MyDAQ / MyRIO + LabVIEW eszközöket lehet vásárolni"
		+ "- Amenyiben az iskola képes 1000$ feletti összeget mozgósítani, képes az egész közet számára szakkört / csoportot / foglalkozást szervezni ! Feltételezhetjük a szükséges kapcsolati háttért is.";

var txt_1_hu = "3 évnél régebben gyártott gépek már elavultak, nincs kellő számítási teljesítményük nagy memóriaigényű sofwarek (LabVIEW), szimulációk és kezelőfelületek futtatására. <br>"
		+ "Viszont alkalmasak még egyszerűbb IDE-k futtatására – Arduino IDE, Energia IDE, így használható az apaBoard alap készlet.<br>"
		+ "-  az eszközök programozásához asztali gépekre vagy notebook eszközökre van szükség. Kritikus szempont! hiányukat pótolni kell<br>"
		+ "- 5 barab régi számítógéppel, és az apaBoard eszközökkel, már be lehet indítani egy kisebb csoportot<br>"
		+ "A 2-3 éven belül gyártott gépeknek elég kapacitásuk van a LabVIEW és a multimédiás anyagok futtatására.<br>"
		+ "- ha az intézménynek vannak régi gépei, elég egy új gép és egy MyDAQ amit hozzákapcsolhatunk a géphez, és futhatnak a LabVIEW szimulációk.<br>"
		+ "- Ha az iskolának sok új gépe van megvalósítható akár az 1:1 blended learning<br>";

var txt_2_hu = "A wi-fi lefedetség meghatároza, hogy a diákok melyik teremben, milyen eszkökkel dolgozhatnak, használhatják e mobiljaikat tabletjeiket.<br>"
		+ "A sávszélesség meghatározza, hogy egyszrre hágy diák milyen tartalmat tud megnyitni. Nem anyira jelntős tényező, mert könyen orvosolhatók a hiányosságok.<br>"
		+ "- csak a tanár tud kapcsoódni → gyenge hatásfok<br>"
		+ "- ha több diák is, lehet csoportokban tanulni<br>"
		+ "- ha minden diák kapcssolódhat, és nézheti az anyaghoz kapcsolódó videókat, akkor a lehtatékonyabb a módszer, megvalósul az 1:1 blended learning<br>";

var txt_3_hu = "Az alkalmazási mód  és szempont meghatározza az eszközhasználatra fordított időt, illetve feltételezi az iskolai képzés jellegét. Fontos szempont!<br>"
		+ "- tantervbe ágyazás szakképzé esetén a legkedvezőbb<br>"
		+ "- szaköri alkalmazása kisebb csoportok számára kedvező, kevesebb idő ráfordítást igényel<br>"
		+ "- elektronika → a cél lehet új képzés idítása, vagy szakképzés fejlesztése (feltételezhetünk akár szakképzést, előző kérdés megagja a választ)<br>"
		+ "- informatika → meglévő képzés gyakorlatiassá tétele, valószínűleg programozási megközelítésből<br>"
		+ "- fizika → tananyag színesítése, élmenyszerűvé tétele<br>"
		+ "- többféle órán való alkalmazása segít maximálisan kihasználni a készleteket, modern megközelítésű (konstukcionista) oktatást feltételez<br>";

var txt_4_hu = "Kérdés hogy az intézmenyi mennyivel honorálja egy tanár munkáját, mind az online képzésen való részvetelének, mind a kísérletek összálításával töltött ideje tekintetében. (az érték fizettet órák száma / hét egységben értelmezendő)<br>";

var txt_5_hu = "A mentorok-tanárok-segítők munkája alapvetően meghatározza az tanulási folyamatokat, a megválasztott módszereket és a hatékonyságot.<br>"
		+ "Aktivitás:<br>"
		+ "- csak felhasználja az előre elkészített rendszert, a tradicionális oktatásban is alkalmazható, de nem szabad elfejteni, hogy az apaBoard eszköz és rendszer alapvetően konstrucionista módszerek használatára épül<br>"
		+ "- a forrásokhoz hozzáférfe a tanár sajátos megközelítéssel taníthat, a különböző csoportokat figyelve, igényiknek megfeleően segítheti azokat.<br>"
		+ "- ha a segítő-tanár-mentor fejleszti a rendszert, saját anyagot állít elő, munkája bekerül az alapértelmezett forások közé.<br>"
		+ "- ha adott haladó kurzusokat is teljesít és munkája eredményes, mentorként részt vehet a többi tanár képzésében<br>"
		+ "Eszköz beszerzés a tanár számra:<br>"
		+ "Fontos szempont, hogy a tanár számára az iskola a diákokkal való alkalmazás megkezdése előtt, minél előbb biztosítson ilyen eszközt, hogy az megismerhesse, kurzusakat végezhesen. Minél több rálátása van a tanárnak a rendszer nyújtotta lehetőségekre, annál könnyabb segítővé (facilitator) válnia a blended learning-ben.<br><br>"

		+ "Rendszer értékelés:<br>"
		+ "Az apaBoard és a hozzá kapcsolódó rendszerek kiindulási pontokat és kellő forrást adnak, de alapvetően a kreativitásra épít.<br>"
		+ "Az online rendszer értékeli mind a diákok, mind atanárok munkáját, és ennek alapján javaslatokat  tesz, akár a hatékonyság javítása érdekében, akár egy csoport munkájának kiállításí versenyeztetési lehetőségei kapcsán. A tanácsok megfogadása nem kötelező, de nagyban hozzájárulhta a tanítás hatékonyságához.<br><br>"

		+ "Mentor képzés:<br>"
		+ "- Csak onlin eszközök használatával is kellően meg lehet alapozni a tudást, hogy egy sikeres oktatási projetet hozzunk létre.<br>"
		+ "- Az online képzés mellett lehetőség van konfericákon való részvételre, valamint felkérni a fejlesztő csoportot helyszíni előadás tartására.<br>"
		+ "- Az online képzés, konfericák és helyszíni előadásokon kívül, lehetőség van felkérni a fejlesztőket a teljes labor felszerelésére.<br>";