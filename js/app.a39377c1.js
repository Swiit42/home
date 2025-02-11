(function(){"use strict";var e={6881:function(e,s,t){var a=t(3751),o=t(641);function r(e,s,t,a,r,l){const i=(0,o.g2)("Navbar"),n=(0,o.g2)("router-view"),d=(0,o.g2)("FooterComp"),c=(0,o.g2)("PopupCookies");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(i),(0,o.bF)(n),(0,o.bF)(d),(0,o.bF)(c)])}const l={class:"bg-gray-800 text-white p-12"},i={class:"container mx-auto flex justify-between items-center"},n={class:"space-x-4 pr-8"};function d(e,s,t,a,r,d){const c=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("nav",l,[(0,o.Lk)("div",i,[(0,o.bF)(c,{to:"/"},{default:(0,o.k6)((()=>s[0]||(s[0]=[(0,o.Lk)("div",{class:"text-xl pl-8"},[(0,o.Lk)("p",{class:"text-2xl font-bold pb-4"}," Data Analyst "),(0,o.Lk)("p",null," Oleksandr Tymoshenko ")],-1)]))),_:1}),(0,o.Lk)("div",n,[(0,o.bF)(c,{to:"/",class:"hover:underline"},{default:(0,o.k6)((()=>s[1]||(s[1]=[(0,o.eW)("Accueil")]))),_:1}),(0,o.bF)(c,{to:"/about",class:"hover:underline"},{default:(0,o.k6)((()=>s[2]||(s[2]=[(0,o.eW)("À Propos")]))),_:1}),(0,o.bF)(c,{to:"/contact",class:"hover:underline"},{default:(0,o.k6)((()=>s[3]||(s[3]=[(0,o.eW)("Contact")]))),_:1})])])])}var c={name:"Navbar"},u=t(6262);const m=(0,u.A)(c,[["render",d]]);var p=m,g=t(33);const b={class:"min-h-screen bg-gray-100"},f={class:"container mx-auto py-16 max-w-5xl"},v={class:"text-center mb-10"},h=["onClick"],x={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"},w={class:"bg-white shadow-md rounded-lg overflow-hidden"},k=["src","alt"],y={class:"p-4"},C={class:"text-lg font-semibold"},L={class:"text-gray-600 text-sm"};function j(e,s,t,a,r,l){const i=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",b,[(0,o.Lk)("div",f,[s[0]||(s[0]=(0,o.Lk)("h1",{class:"text-4xl font-bold text-center mb-8"},"PORTFOLIO",-1)),(0,o.Lk)("div",v,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.categories,(e=>((0,o.uX)(),(0,o.CE)("button",{key:e,class:(0,g.C4)(["px-4 py-2 m-2 rounded-full border text-white",r.activeCategory===e?"active-category":"bg-gray-400"]),onClick:s=>l.filterProjects(e)},(0,g.v_)(e),11,h)))),128))]),(0,o.Lk)("div",x,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.filteredProjects,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"bg-white shadow-md rounded-lg overflow-hidden"},[(0,o.bF)(i,{to:"/project/"+l.slugify(e.title),class:"block"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",w,[(0,o.Lk)("img",{src:e.image,alt:e.title,class:"w-full h-48 object-cover"},null,8,k),(0,o.Lk)("div",y,[(0,o.Lk)("h2",C,(0,g.v_)(e.title),1),(0,o.Lk)("p",L,(0,g.v_)(e.category),1)])])])),_:2},1032,["to"])])))),128))])])])}t(8111),t(2489);var P={props:["id"],data(){return{categories:["Show all","Power Bi","Excell","Python"],activeCategory:"Show all",projects:[{id:1,title:"Bike Customer Sales",category:"Power Bi",image:t(9236)},{id:2,title:"Olympic Games",category:"Power Bi",image:t(9655)},{id:3,title:"Coffee Sales Dashboard",category:"Excell",image:t(7963)}]}},computed:{filteredProjects(){return"Show all"===this.activeCategory?this.projects:this.projects.filter((e=>e.category===this.activeCategory))}},methods:{filterProjects(e){this.activeCategory=e},slugify(e){return e.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"")}}};const A=(0,u.A)(P,[["render",j],["__scopeId","data-v-8bbec67c"]]);var _=A;const O={class:"bg-gray-800 text-white py-8"},F={class:"container mx-auto flex flex-col md:flex-row justify-around items-center"},E={class:"mb-6 md:mb-0 text-center md:text-left"},S={class:"flex items-center"},q={class:"flex items-center"},I={class:"text-center md:text-left"},D={class:"flex items-center"},B={class:"text-center md:text-left"};function N(e,s,t,a,r,l){const i=(0,o.g2)("Mail"),n=(0,o.g2)("Phone"),d=(0,o.g2)("Linkedin"),c=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("footer",O,[(0,o.Lk)("div",F,[(0,o.Lk)("div",E,[s[2]||(s[2]=(0,o.Lk)("h2",{class:"text-lg font-bold mb-2"},"Contactez-moi",-1)),(0,o.Lk)("p",S,[(0,o.bF)(i,{class:"w-5 h-5"}),s[0]||(s[0]=(0,o.Lk)("a",{href:"mailto:sacha.tymoshenko@gmail.com",class:"underline hover:text-gray-300 ml-2"}," sacha.tymoshenko@gmail.com ",-1))]),(0,o.Lk)("p",q,[(0,o.bF)(n,{class:"w-5 h-5"}),s[1]||(s[1]=(0,o.Lk)("a",{href:"tel:+33782500778",class:"underline hover:text-gray-300 ml-2"}," 07 82 50 07 78 ",-1))])]),(0,o.Lk)("div",I,[s[4]||(s[4]=(0,o.Lk)("h2",{class:"text-lg font-bold mb-2"},"Réseaux",-1)),(0,o.Lk)("p",D,[(0,o.bF)(d,{class:"w-5 h-5"}),s[3]||(s[3]=(0,o.Lk)("a",{href:"https://www.linkedin.com/in/oleksandr-tymoshenko-356407188/",target:"_blank",class:"underline hover:text-gray-300 ml-2"}," Oleksandr Tymoshenko ",-1))])]),(0,o.Lk)("div",B,[(0,o.bF)(c,{to:"/legalNotice",class:"text-lg mb-2"},{default:(0,o.k6)((()=>s[5]||(s[5]=[(0,o.eW)("Mentions légales")]))),_:1})])])])}var T=t(1799),X=t(6982),M=t(9566),J={name:"Footer",components:{Mail:T.A,Linkedin:X.A,Phone:M.A}};const V=(0,u.A)(J,[["render",N]]);var K=V;const W={key:0,class:"fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 z-50 shadow-lg"},R={class:"container mx-auto flex flex-col md:flex-row justify-between items-center"},G={class:"space-x-4"};function z(e,s,t,a,r,l){return r.showPopup?((0,o.uX)(),(0,o.CE)("div",W,[(0,o.Lk)("div",R,[s[2]||(s[2]=(0,o.Lk)("p",{class:"text-sm mb-4 md:mb-0"},[(0,o.eW)(" Ce site utilise des cookies pour améliorer votre expérience. En poursuivant votre navigation, vous acceptez ou refusez leur utilisation. "),(0,o.Lk)("a",{href:"/legalNorice",class:"text-blue-400 underline hover:text-blue-300 ml-1"},"En savoir plus"),(0,o.eW)(". ")],-1)),(0,o.Lk)("div",G,[(0,o.Lk)("button",{onClick:s[0]||(s[0]=(...e)=>l.acceptCookies&&l.acceptCookies(...e)),class:"bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 transition-colors"}," Accepter "),(0,o.Lk)("button",{onClick:s[1]||(s[1]=(...e)=>l.refuseCookies&&l.refuseCookies(...e)),class:"bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition-colors"}," Refuser ")])])])):(0,o.Q3)("",!0)}var Q={name:"PopupCookies",data(){return{showPopup:!1}},mounted(){const e=localStorage.getItem("cookiesAccepted");e||(this.showPopup=!0)},methods:{acceptCookies(){localStorage.setItem("cookiesAccepted","true"),this.showPopup=!1},refuseCookies(){localStorage.setItem("cookiesAccepted","false"),this.showPopup=!1}}};const U=(0,u.A)(Q,[["render",z],["__scopeId","data-v-4a592726"]]);var H=U,Y={components:{Navbar:p,HomeView:_,FooterComp:K,PopupCookies:H}};const Z=(0,u.A)(Y,[["render",r]]);var $=Z,ee=t(6166),se=t.p+"img/about.487b3b08.jpg";const te={class:"min-h-screen bg-gray-100 flex items-center justify-center"};function ae(e,s,t,a,r,l){return(0,o.uX)(),(0,o.CE)("div",te,s[0]||(s[0]=[(0,o.Fv)('<div class="container mx-auto px-6 lg:px-20"><div class="bg-white rounded-lg shadow-lg flex flex-col lg:flex-row overflow-hidden"><div class="lg:w-1/3 h-64 lg:h-auto"><img src="'+se+'" alt="Photo" class="w-full h-full object-cover"></div><div class="lg:w-2/3 p-8"><h2 class="text-3xl font-bold mb-4">Qui suis-je ?</h2><p class="text-gray-700 mb-6"><p>Je m&#39;appelle Oleksandr Tymoshenko, et je suis arrivé en France à l&#39;âge de 9 ans. Dès mon plus jeune âge, j&#39;ai toujours été attiré par les chiffres, les mathématiques et la logique. Mon parcours a commencé par une licence en Langues Étrangères Appliquées (anglais-russe). Mais, je me suis rapidement rendu compte que ce domaine ne me correspondait. Après un temps de travail en réstauration, j&#39;ai décidé de rejoindre Epitech, une école d&#39;informatique.</p><br> Dans un parcours Master Of Science, spécialité Big Data / IA. J&#39;ai également eu la chance de travailler pendant trois ans en alternance en tant que développeur full stack à l&#39;Imprimerie Nationale et à ADEO. <br> C&#39;est au cours de ma troisième année, lorsque j&#39;ai intégré une équipe fortement orientée vers la data, que j&#39;ai eu l&#39;envie d&#39;en découvrir davantage et de me plonger plus profondément dans cet univers passionnant. Travailler aux côtés de data analysts et data engineers m&#39;a donné l&#39;envie d&#39;en apprendre davantage sur ce métier. <br><br> Durant ma formation, j&#39;ai pu réaliser plusieurs projets liés à la data et à l&#39;intelligence artificielle, ce qui m&#39;a permis d&#39;approfondir mes compétences en analyse, visualisation de données et en optimisation continue. J&#39;aime analyser les données, améliorer les processus, et aider les entreprises à prendre des décisions éclairées à partir de KPIs pertinents. Aujourd&#39;hui, mon objectif est de contribuer à des projets data-driven, où je peux mettre à profit ma rigueur, ma curiosité et mon envie constante de comprendre et d&#39;optimiser. </p><a href="/CV_TYMOSHENKO_OLEKSANDR.pdf" download class="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors mt-5"> Télécharger Mon CV </a></div></div></div>',1)]))}var oe={name:"AboutPage"};const re=(0,u.A)(oe,[["render",ae]]);var le=re,ie=t.p+"img/contact.f8c18cab.webp";const ne={class:"min-h-screen bg-gray-100 flex items-center justify-center"},de={class:"container mx-auto px-6 lg:px-20"},ce={class:"bg-white rounded-lg shadow-lg flex flex-col lg:flex-row overflow-hidden"},ue={class:"lg:w-1/2 p-8"},me={class:"mb-4"},pe={class:"mb-4"},ge={class:"mb-4"},be={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"},fe={class:"bg-white rounded-lg p-6 shadow-lg max-w-sm"};function ve(e,s,t,r,l,i){return(0,o.uX)(),(0,o.CE)("div",ne,[(0,o.Lk)("div",de,[(0,o.Lk)("div",ce,[s[10]||(s[10]=(0,o.Lk)("div",{class:"lg:w-1/2 h-64 lg:h-auto"},[(0,o.Lk)("img",{src:ie,alt:"Contact Photo",class:"w-full h-full object-cover"})],-1)),(0,o.Lk)("div",ue,[s[9]||(s[9]=(0,o.Lk)("h2",{class:"text-2xl font-bold mb-6"},"Contactez-moi",-1)),(0,o.Lk)("form",{onSubmit:s[3]||(s[3]=(0,a.D$)(((...e)=>i.handleSubmit&&i.handleSubmit(...e)),["prevent"]))},[(0,o.Lk)("div",me,[s[5]||(s[5]=(0,o.Lk)("label",{for:"name",class:"block text-gray-700 font-semibold"},"Nom",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":s[0]||(s[0]=e=>l.form.name=e),class:"w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400",placeholder:"Votre nom"},null,512),[[a.Jo,l.form.name]])]),(0,o.Lk)("div",pe,[s[6]||(s[6]=(0,o.Lk)("label",{for:"email",class:"block text-gray-700 font-semibold"},"Email",-1)),(0,o.bo)((0,o.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":s[1]||(s[1]=e=>l.form.email=e),class:"w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400",placeholder:"Votre email"},null,512),[[a.Jo,l.form.email]])]),(0,o.Lk)("div",ge,[s[7]||(s[7]=(0,o.Lk)("label",{for:"message",class:"block text-gray-700 font-semibold"},"Message",-1)),(0,o.bo)((0,o.Lk)("textarea",{id:"message","onUpdate:modelValue":s[2]||(s[2]=e=>l.form.message=e),rows:"5",class:"w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400",placeholder:"Votre message"},null,512),[[a.Jo,l.form.message]])]),s[8]||(s[8]=(0,o.Lk)("button",{type:"submit",class:"w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"}," Envoyer ",-1))],32)])])]),l.isModalVisible?((0,o.uX)(),(0,o.CE)("div",be,[(0,o.Lk)("div",fe,[s[11]||(s[11]=(0,o.Lk)("h3",{class:"text-xl font-bold mb-4"},"Message envoyé !",-1)),s[12]||(s[12]=(0,o.Lk)("p",null,"Votre message a été envoyé avec succès.",-1)),(0,o.Lk)("button",{onClick:s[4]||(s[4]=e=>l.isModalVisible=!1),class:"mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"}," OK ")])])):(0,o.Q3)("",!0)])}var he=t(1815),xe={data(){return{form:{name:"",email:"",message:""},isModalVisible:!1}},methods:{handleSubmit(){he.Ay.send("service_tkit5nr","template_ytdjm2l",{from_name:this.form.name,from_email:this.form.email,message:this.form.message},"mY_BrVHo7kMxoiqEI").then((e=>{this.isModalVisible=!0,this.form={name:"",email:"",message:""}})).catch((e=>{console.error("Erreur :",e)}))}}};const we=(0,u.A)(xe,[["render",ve],["__scopeId","data-v-aa182046"]]);var ke=we,ye=t.p+"img/velo.888d66e4.jpg",Ce=t.p+"img/BIK_business.b10335fb.png",Le=t.p+"img/BIK_SQL.f905dd4a.png",je=t.p+"img/BIK_relations.7e9b0ae3.png",Pe=t(9236),Ae=t.p+"img/BIK_customers.473a4fae.png";const _e={class:"min-h-screen bg-gray-100 flex items-center justify-center"},Oe={class:"bg-white p-8 rounded-lg shadow-lg m-8 max-w-5xl"};function Fe(e,s,t,a,r,l){const i=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",_e,[(0,o.Lk)("div",Oe,[s[1]||(s[1]=(0,o.Fv)('<h1 class="text-3xl font-bold mb-4"> Sales and Clients Dashboard Power BI - Adventure Works 2019</h1><img src="'+ye+'" alt="Bike Sales" class="w-full h-80 object-cover rounded mb-4"><div class="flex flex-col lg:flex-row items-center lg:items-start mt-5 mb-12"><div class="lg:w-3/5 mb-6 lg:mb-0"><p class="text-gray-700 ml-3"> Dans ce projet, j&#39;ai travaillé sur les données du dataset Adventure Works 2019, représentant les ventes d&#39;un revendeur de vélos. L&#39;objectif était de répondre à une demande client en fournissant un dashboard interactif et pertinent, permettant d&#39;avoir une vision globale des ventes et des performances commerciales. <br><br><b>Étapes clés du projet :</b><br> Analyse des besoins et rédaction des user stories J&#39;ai commencé par identifier les besoins du client et les principaux indicateurs à suivre. Cette étape m&#39;a permis de structurer le projet et de définir les KPIs clés. </p></div><div class="lg:w-2/5 mr-2"><img src="'+Ce+'" alt="Products" class="w-full h-auto rounded-lg shadow-md mb-3"></div></div><div class="flex flex-wrap lg:flex-wrap items-center lg:items-start mb-12"><div class="lg:w-2/6 mr-6 mb-6"><img src="'+Le+'" alt="Customers" class="w-full h- rounded-lg shadow-md mb-3"></div><div class="lg:w-3/5 mb-10 lg:mb-5"><p class="text-gray-700 mb-4"><b>Sélection et préparation des données</b><br> J&#39;ai sélectionné 4 tables : Customer, DateTable, Product, et Sales, contenant toutes les informations essentielles. <br><br> Après la selection des données nécessaires et leur nettoyage, j&#39;ai extrait les informations avec plusieurs requêtes SQL et les ai transformé en sheet Excell pour qu&#39;elles puissent être intégrées dans Power BI. <br><br></p></div><div class="lg:w-2/5 mb-6 lg:mb-0 pr-2"><b>Création du modèle de données dans Power BI</b><br> J&#39;ai établi les relations entre les différentes tables pour structurer efficacement le modèle de données. J&#39;ai ensuite mis en place une timeline et des segments interactifs permettant de filtrer les données en fonction des besoins spécifiques de l&#39;utilisateur. <br></div><div class="lg:w-3/5 mb-6 lg:mb-0"><img src="'+je+'" alt="Products" class="w-full h-auto rounded-lg shadow-md"></div><p class="text-gray-700 lg:w-2/6 mt-6 pr-1"><b>Construction du dashboard - Partie ventes</b><br> Création de filtres par villes, mois et année permettant d&#39;avoir une visualisation plus précise. <br><b>Métriques clés affichées :</b> <br> Ajout de <b> KPI&#39;s</b> clés : budget, total des ventes.<br> Analyse des performances des ventes au fil du temps.<br> Top 10 des produits et des villes en fonction du volume des ventes.<br> Visualisations dynamiques pour offrir une lecture claire et intuitive des données. </p><div class="lg:w-4/6 mt-6"><img src="'+Pe+'" alt="Products" class="w-full h-auto rounded-lg shadow-md mb-3"></div><p class="text-gray-700 mt-6 mb-6">Le dashboard final permet de filtrer les informations en temps réel et d&#39;obtenir une analyse complète des ventes, des performances par région, et des produits les plus populaires. Il constitue un outil d&#39;aide à la décision puissant pour le client, facilitant la compréhension des tendances et l&#39;optimisation des stratégies commerciales.</p><p class="text-gray-700 lg:w-2/6 mt-6 pr-1"><b>Construction du dashboard – Partie Client</b><br><br> Ajout de filtres par ville, tranche d&#39;âge, sexe et période (mois/année). <br><br><b>Métriques clés affichées :</b> <br> Nombre total de clients <br> Plus grosse offre réalisée <br> Répartition des clients par pays. <br> Analyse des ventes par tranche d&#39;âge, permettant d&#39;identifier les groupes les plus performants. <br> Classement des Top 10 clients en fonction du montant total des ventes. <br> Visualisation dynamique des ventes par client et par mois, facilitant la détection des tendances. <br></p><div class="lg:w-4/6 mt-6"><img src="'+Ae+'" alt="Customers" class="w-full h-auto rounded-lg shadow-md mb-3"></div></div>',4)),(0,o.bF)(i,{to:"/",class:"mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"},{default:(0,o.k6)((()=>s[0]||(s[0]=[(0,o.eW)(" Retour au Portfolio ")]))),_:1})])])}var Ee={name:"BikeSales"};const Se=(0,u.A)(Ee,[["render",Fe]]);var qe=Se,Ie=t.p+"img/COF_coffeeshop.3ebb37c7.jpg",De=t.p+"img/COF_products.0a19821d.png",Be=t.p+"img/COF_customers.4ff192d7.png",Ne=t.p+"img/COF_orders.bb9175a7.png",Te=t.p+"img/COF_xlookup_customer.5ca05d16.png",Xe=t.p+"img/COF_xlookup_products.641d1a90.png";const Me={class:"w-full min-h-screen bg-gray-100 flex items-center justify-center"},Je={class:"w-full bg-white p-8 rounded-lg shadow-lg m-8 max-w-6xl"};function Ve(e,s,t,a,r,l){const i=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",Me,[(0,o.Lk)("div",Je,[s[1]||(s[1]=(0,o.Fv)('<h1 class="text-3xl font-bold mb-4">Coffee Sales Dashboard</h1><img src="'+Ie+'" alt="Coffee Dashboard" class="w-full h-72 object-cover rounded mb-8"><div class="flex flex-col lg:flex-row items-center lg:items-start mb-12"><div class="lg:w-2/5 mb-6 lg:mb-0"><p class="text-gray-700"> Dans ce projet réalisé sur Excel, j&#39;ai commencé par récupérer un dataset contenant les feuilles products, clients, et orders. Ces feuilles regroupaient toutes les informations nécessaires à l&#39;analyse : les caractéristiques des produits, les informations sur les clients, et les détails des commandes associées. <br> <br> À partir de ce dataset, mon objectif était de réaliser une analyse en mettant en avant les points clés pour un magasin de café. Cette étape m&#39;a permis de déterminer les indicateurs les plus pertinents à afficher dans un dashboard interactif. J&#39;ai donc décidé d&#39;afficher les ventes en fonction des différents types de café et de leur évolution dans le temps, le top 5 des clients et les ventes par pays. </p></div><div class="lg:w-1/3 mr-2"><img src="'+De+'" alt="Products" class="w-full h-auto rounded-lg shadow-md mb-3"><img src="'+Be+'" alt="Customers" class="w-full h-auto rounded-lg shadow-md"></div><div class="lg:w-1/4"><img src="'+Ne+'" alt="Orders" class="w-full h-auto rounded-lg shadow-md"></div></div><div class="flex flex-col lg:flex-row items-center lg:items-start mb-12"><div class="lg:w-2/3 mr-2"><img src="'+Te+'" alt="Customers" class="w-full h-auto rounded-lg shadow-md mb-3"><img src="'+Xe+'" alt="Products" class="w-full h-auto rounded-lg shadow-md"></div><div class="lg:w-2/5 mb-6 ml-4 lg:mb-0"><p class="text-gray-700"> J&#39;ai croisé les données issues de la feuille Orders afin de les consolider sur une seule et même sheet. Pour cela, j&#39;ai utilisé les fonctions XLOOKUP et INDEX, ce qui m&#39;a permis de regrouper toutes les informations sur une seule page avant de tout transformer en tableau pour pouvoir faire des tableaux croisés dynamiques. </p></div></div><p class="text-gray-700"> Une fois les tableaux croisés dynamiques créés pour les trois principaux éléments d&#39;affichage, j&#39;ai ajouté des graphiques pour visualiser les résultats. J&#39;ai d&#39;abord inséré un graphique linéaire qui montre les ventes dans le temps pour chaque type de café. Ensuite, j&#39;ai ajouté un graphique en barres pour représenter les ventes par pays et un autre pour afficher le top 5 des clients. <br> Après avoir mis en place ces éléments visuels, j&#39;ai intégré des filtres interactifs pour faciliter l&#39;analyse des données. J&#39;ai utilisé un filtre de timeline permettant à l&#39;utilisateur de sélectionner des mois ou une période, ainsi que des slicers pour affiner les résultats en fonction de plusieurs critères : le type de café (roast), le poids du café acheté et si le client possède une carte de fidélité. Grâce à ces filtres, le dashboard devient plus flexible et l&#39;utilisateur peut explorer les données selon ses besoins. </p>',5)),s[2]||(s[2]=(0,o.Lk)("iframe",{class:"mt-5",src:"https://1drv.ms/x/c/f7bf9aecc7d4e60a/EfjPd6y4PFNDgL56e2UWbZ0Brkog0PBbGQrh29ynYBoj5w?e=soUXP0&action=embedview&activeCell=Dashboard!A1&wdbipreview=true",width:"100%",height:"600",frameborder:"0"},null,-1)),(0,o.bF)(i,{to:"/",class:"mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"},{default:(0,o.k6)((()=>s[0]||(s[0]=[(0,o.eW)(" Retour au Portfolio ")]))),_:1})])])}var Ke={name:"CoffeeDashboard"};const We=(0,u.A)(Ke,[["render",Ve]]);var Re=We,Ge=t.p+"img/JO.be26a43a.jpg",ze=t.p+"img/OLY_TABLE.42ac7807.png",Qe=t.p+"img/OLY_SQL.ded1c240.png",Ue=t(9655);const He={class:"min-h-screen bg-gray-100 flex items-center justify-center"},Ye={class:"bg-white p-8 rounded-lg shadow-lg m-8 max-w-5xl"};function Ze(e,s,t,a,r,l){const i=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",He,[(0,o.Lk)("div",Ye,[s[1]||(s[1]=(0,o.Fv)('<h1 class="text-3xl font-bold mb-4"> Sales and Clients Dashboard Power BI - Adventure Works 2019</h1><img src="'+Ge+'" alt="Bike Sales" class="w-full h-80 object-cover rounded mb-4"><div class="flex flex-wrap lg:flex-wrap items-center lg:items-start mt-5 mb-12"><p class="lg:w-2/5 text-gray-700"> Pour ce projet, j’ai récupéré le dataset des Jeux Olympiques contenant les informations sur les athlètes, les sports, les médailles et les compétitions. Après avoir effectué une requête SQL pour nettoyer et structurer les données, j’ai construit un dashboard interactif permettant une analyse détaillée. </p><div class="lg:w-3/5 mb-6 lg:mb-0"><img src="'+ze+'" alt="Products" class="w-full h-auto rounded-lg shadow-md"></div><div class="lg:w-2/5 mt-6 lg:mb-0"><img src="'+Qe+'" alt="Products" class="w-full h-auto rounded-lg shadow-md"></div><div class="lg:w-2/5 ml-6 mt-6 lg:mb-0"><p class="text-gray-700"><b>Étapes clés du projet :</b><br> Nettoyage des données : Suppression des doublons, correction des valeurs manquantes et harmonisation des colonnes. <br> Ajout des catégories d&#39;âge et sélection de la saison Été </p></div><p class="lg:w-4/5 mt-6 text-gray-700"><b> Ajout de filtres interactifs :</b><br> Année, Nationalité, Nom de compétiteur et les différents Sports pour une visualisation plus ciblée. <br> Affichage de KPI&#39;s principaux : <br> Nombre total de compétiteurs<br> Nombre total de médailles<br> Répartition des compétiteurs par genre et analyse des médailles par catégorie (or, argent, bronze).<br> Classement des sports et Top 10 des compétiteurs ayant gagné le plus de médailles.<br> Évolution du nombre de médailles au fil du temps avec une visualisation temporelle détaillée.<br></p><div class="lg:w-5/5 mt-6 lg:mb-0"><img src="'+Ue+'" alt="Products" class="w-full h-auto rounded-lg shadow-md"></div></div>',3)),(0,o.bF)(i,{to:"/",class:"mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"},{default:(0,o.k6)((()=>s[0]||(s[0]=[(0,o.eW)(" Retour au Portfolio ")]))),_:1})])])}var $e={name:"OlympicGames"};const es=(0,u.A)($e,[["render",Ze]]);var ss=es;const ts={class:"min-h-screen bg-gray-100 text-gray-800 p-8"};function as(e,s,t,a,r,l){return(0,o.uX)(),(0,o.CE)("div",ts,s[0]||(s[0]=[(0,o.Fv)('<div class="container mx-auto bg-white rounded-lg shadow-lg p-10" data-v-d8234a6a><h1 class="text-3xl font-bold mb-6" data-v-d8234a6a>Mentions légales</h1><section class="mb-6" data-v-d8234a6a><h2 class="text-2xl font-semibold mb-2" data-v-d8234a6a>1. Éditeur du site</h2><p data-v-d8234a6a> Nom : <strong data-v-d8234a6a>Oleksandr Tymoshenko</strong><br data-v-d8234a6a> Adresse : <strong data-v-d8234a6a>7 rue de l&#39;abbé Cousin, Lille, 59800, France</strong><br data-v-d8234a6a> E-mail : <strong data-v-d8234a6a>sacha.tymoshenko@gmail.com</strong><br data-v-d8234a6a> Téléphone : <strong data-v-d8234a6a>07 82 50 07 78</strong></p></section><section class="mb-6" data-v-d8234a6a><h2 class="text-2xl font-semibold mb-2" data-v-d8234a6a>2. Hébergeur du site</h2><p data-v-d8234a6a> Le site est hébergé gratuitement sur <strong data-v-d8234a6a>GitHub Pages</strong> :<br data-v-d8234a6a> Nom de l’hébergeur : <strong data-v-d8234a6a>GitHub, Inc.</strong><br data-v-d8234a6a> Adresse : <strong data-v-d8234a6a>88 Colin P. Kelly Jr St, San Francisco, CA 94107, USA</strong><br data-v-d8234a6a> Site web : <a href="https://pages.github.com" target="_blank" class="text-blue-500 hover:underline" data-v-d8234a6a>https://pages.github.com</a></p></section><section class="mb-6" data-v-d8234a6a><h2 class="text-2xl font-semibold mb-2" data-v-d8234a6a>3. Propriété intellectuelle</h2><p data-v-d8234a6a> L’ensemble des contenus présents sur ce site (textes, images, graphiques, logos, icônes, etc.) est la propriété exclusive d’Oleksandr Tymoshenko, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, est strictement interdite sans accord écrit préalable. </p></section><section class="mb-6" data-v-d8234a6a><h2 class="text-2xl font-semibold mb-2" data-v-d8234a6a>4. Protection des données personnelles</h2><p data-v-d8234a6a> Conformément au <strong data-v-d8234a6a>Règlement Général sur la Protection des Données (RGPD)</strong>, les informations recueillies via le formulaire de contact sont nécessaires pour répondre aux demandes des utilisateurs. </p><ul class="list-disc pl-6" data-v-d8234a6a><li data-v-d8234a6a><strong data-v-d8234a6a>Finalité :</strong> Répondre aux demandes de contact.</li><li data-v-d8234a6a><strong data-v-d8234a6a>Durée de conservation :</strong> 12 mois maximum.</li><li data-v-d8234a6a><strong data-v-d8234a6a>Droits des utilisateurs :</strong> accès, rectification, suppression des données.</li></ul><p class="mt-4" data-v-d8234a6a> Pour exercer vos droits, envoyez un e-mail à : <strong data-v-d8234a6a>sacha.tymoshenko@gmail.com</strong></p></section><section class="mb-6" data-v-d8234a6a><h2 class="text-2xl font-semibold mb-2" data-v-d8234a6a>5. Limitation de responsabilité</h2><p data-v-d8234a6a> Oleksandr Tymoshenko s’efforce de fournir des informations aussi précises que possible sur ce site. Toutefois, il ne peut être tenu responsable des omissions, inexactitudes ou lacunes dans les mises à jour. </p></section><section data-v-d8234a6a><h2 class="text-2xl font-semibold mb-2" data-v-d8234a6a>6. Cookies</h2><p data-v-d8234a6a> Le site n’utilise pas de cookies à des fins de suivi ou d’analyse des utilisateurs. Si des cookies venaient à être utilisés, vous en seriez informé et vous pourriez les accepter ou les refuser. </p></section></div>',1)]))}var os={name:"LegalNotice"};const rs=(0,u.A)(os,[["render",as],["__scopeId","data-v-d8234a6a"]]);var ls=rs;const is=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:le},{path:"/contact",name:"Contact",component:ke},{path:"/legalNotice",name:"LegalNotice",component:ls},{path:"/project/bike-customer-sales",name:"BikeSales",component:qe},{path:"/project/coffee-sales-dashboard",name:"CoffeeSales",component:Re},{path:"/project/olympic-games",name:"OlympicGames",component:ss}],ns=(0,ee.aE)({history:(0,ee.LA)(),routes:is});var ds=ns;(0,a.Ef)($).use(ds).mount("#app")},9236:function(e,s,t){e.exports=t.p+"img/BIK_BikeSales.cb875904.png"},7963:function(e,s,t){e.exports=t.p+"img/COF_coffeeDashboard.77f7888f.png"},9655:function(e,s,t){e.exports=t.p+"img/OLY_olympicGames.0c2077d2.png"}},s={};function t(a){var o=s[a];if(void 0!==o)return o.exports;var r=s[a]={exports:{}};return e[a].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(s,a,o,r){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],r=e[c][2];for(var i=!0,n=0;n<a.length;n++)(!1&r||l>=r)&&Object.keys(t.O).every((function(e){return t.O[e](a[n])}))?a.splice(n--,1):(i=!1,r<l&&(l=r));if(i){e.splice(c--,1);var d=o();void 0!==d&&(s=d)}}return s}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,o,r]}}(),function(){t.d=function(e,s){for(var a in s)t.o(s,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:s[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){t.p="/portfolio/"}(),function(){var e={524:0};t.O.j=function(s){return 0===e[s]};var s=function(s,a){var o,r,l=a[0],i=a[1],n=a[2],d=0;if(l.some((function(s){return 0!==e[s]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(n)var c=n(t)}for(s&&s(a);d<l.length;d++)r=l[d],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(c)},a=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(6881)}));a=t.O(a)})();
//# sourceMappingURL=app.a39377c1.js.map