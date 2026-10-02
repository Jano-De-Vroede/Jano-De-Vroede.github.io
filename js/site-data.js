/* Vul hier je echte gegevens in. De pagina's lezen alleen dit bestand. */
window.SITE = {
  name: "Jano De Vroede",
  firstName: "Jano",
  tagline: "Systemen, netwerken en machines die ik zelf in elkaar steek.",
  role: "IT-student",
  location: "België",
  photo: "./img/persoonlijke_foto.jpg",
  cv: "cv.pdf",
  email: "jano.devroede@skynet.be",
  telefoon: "0471 84 18 57",
  github: "https://github.com/Jano-De-Vroede",
  githubLabel: "Jano-De-Vroede",
  linkedin:
    "https://www.linkedin.com/in/jano-de-vroede-59240b389/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BCQDoGp7LQ%2FGYnK3KpJPBwQ%3D%3D",
  highlights: [
    "Systeembeheer",
    "Netwerken",
    "Windows Server",
    "Linux · Debian",
    "Homelab",
    "PC-builds",
  ],
  about: [
    "Ik ben Jano. Ik studeer IT en besteed evenveel tijd achter een terminal als achter een schroevendraaier.",
    "Mijn focus ligt op systeembeheer, netwerken, Windows Server, Linux (Debian) en homelab-opstellingen. Ik wil begrijpen hoe iets werkt — en het daarna zelf opnieuw bouwen, strakker.",
  ],
  education: [
    {
      period: "2017 — 2023",
      title: "Economie Wiskunde",
      school: "Stella Matutina College",
      detail: "Eindresultaat 80%",
    },
    {
      period: "2024 — nu",
      title: "Bachelor Toegepaste Informatica",
      school: "Hogent Campus Aalst",
      detail: "Specialisatie Systeem- en netwerkbeheer",
    },
  ],
  experience: [
    {
      period: "20XX — nu",
      title: "Functie of rol",
      place: "Bedrijf of context",
      detail:
        "Wat deed je? Welke stack, welke verantwoordelijkheid, wat was het resultaat?",
    },
    {
      period: "20XX — 20XX",
      title: "Tweede ervaring",
      place: "Stage, job of project",
      detail:
        "Korte, concrete beschrijving. Liever één sterk zinnetje dan een opsomming.",
    },
  ],
  projects: [
    {
      number: "01",
      title: "Project één",
      tags: ["tag", "tag"],
      summary:
        "Beschrijf het probleem, wat jij bouwde, en wat iemand ervan moet onthouden.",
      href: "",
    },
    {
      number: "02",
      title: "Project twee",
      tags: ["tag", "tag"],
      summary:
        "Zelfde structuur. Link naar GitHub of een write-up als die er is.",
      href: "",
    },
    {
      number: "03",
      title: "Project drie",
      tags: ["tag", "tag"],
      summary: "Kopieer een kaart in js/site-data.js om er meer toe te voegen.",
      href: "",
    },
  ],
  homelab: {
    intro:
      "Mijn homelab is een speeltuin én een laboratorium. Hier test ik wat ik op school of in projecten tegenkom — tot het stabiel genoeg is om te laten draaien.",
    nodes: [
      {
        name: "Debian host",
        role: "Basis van de lab",
        detail:
          "SSH, firewall, updates, hardening. Vul je echte hostname en rol in.",
      },
      {
        name: "Windows Server",
        role: "AD / GPO-lab",
        detail: "Active Directory, policies, AppLocker. Wat draait er écht?",
      },
      {
        name: "Monitoring",
        role: "Zichtbaarheid",
        detail: "Welke stack? Prometheus, Grafana, Uptime Kuma, iets eigens?",
      },
      {
        name: "Netwerk",
        role: "Segmentatie",
        detail: "VLANs, DNS, reverse proxy, VPN. Kort wat je hebt opgezet.",
      },
    ],
  },
};
