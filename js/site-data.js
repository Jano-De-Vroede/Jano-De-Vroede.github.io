/* Vul hier je echte gegevens in. De pagina's lezen alleen dit bestand. */
window.SITE = {
  name: "Jano De Vroede",
  firstName: "Jano",
  tagline: "Alles wat je moet weten over IT'er van de toekomst.",
  role: "IT-student",
  location: "België",
  photo: "./img/persoonlijke_foto.jpg",
  cv: "docs/CV_Jano_De_Vroede.pdf",
  email: "jano.devroede@skynet.be",
  telefoon: "0471 84 18 57",
  github: "https://github.com/Jano-De-Vroede",
  githubLabel: "Jano-De-Vroede",
  linkedin:
    "https://www.linkedin.com/in/jano-de-vroede-59240b389/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BCQDoGp7LQ%2FGYnK3KpJPBwQ%3D%3D",
  highlights: [
    "Systeembeheer",
    "Netwerken",
    "Cybersecurity",
    "Windows",
    "Linux",
    "Homelab",
    "PC-building",
  ],
  about: [
    "Mijn naam is Jano De Vroede en ik ben een derdejaars student Toegepaste Informatica aan Hogent. IT is de toekomst wat maakt dat ik deel ben van die toekomst.",
    "Mijn focus ligt op systeembeheer, netwerken, Windows Server, Linux (Debian) en homelab-opstellingen. Ik wil begrijpen hoe iets werkt — en het daarna zelf opnieuw bouwen, strakker. Er is nog veel meer dat je over mij kan leren, maar die info zal binnenkort pas beschikbaar gemaakt worden.",
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
      period: "2024 — nu",
      title: "Student Toegepaste Informatica",
      place: "Hogent",
      detail:
        "Tot nu toe is dit de enigste ervaring die ik heb binnen de IT-sector. Binnen de opleiding krijgen we een breed aanbod van verschillende technologieën en concepten. Zaken zoals: Databases, Java, n Cisco networks, Linux servers en nog vele andere zaken. Aangezien het 'toegepaste' informatica is, krijgen we vooral praktijkgerichte lessen en kunnen we ook al met heel wat zaken overweg. Binnenkort komt de stage er aan en dan zal ik zeker wat meer kennis en ervaring opdoen in een realistische omgeving.",
    },
  ],
  projects: [
    {
      number: "01",
      title: "System Engineering Project",
      tags: [
        "Systemen",
        "Netwerken",
        "Linux",
        "Windows server",
        "Virtualisatie",
      ],
      summary:
        "In dit project bouwden we een zelf een bedrijfsnetwerk uit met behulp van virtualisatie en fysieke netwerkhardware. De opdracht was om een zo realistisch mogelijk bedrijfsnetwerk te ontwerpen en te deployen. Hierbij maakten we gberuik van verschillende technologieën zoals: Windows, Cisco, Linux, Virtualbox... Deze ervaring heeft me heel wat zaken bijgeleerd. ",
      href: "",
    },
    {
      number: "02",
      title: "DevOps",
      tags: ["CI/CD", "Jenkins", "Ansible", "Server-hosting"],
      summary:
        "Dit is het eindproject voor het derdejaar Toegepaste Informatica. Binnen dit project wordt er samengewerkt met een DEV-team om samen voor de klant een applicatie te ontwikkelen en uit te rollen op fysieke server apparatuur. Wij als OPS-team zullen leren om een buildserver te configureren en te gebruiken. Ook de samenwerking tussen twee verschillende disciplines staat centraal binnen dit project.",
      href: "",
    },
    {
      number: "03",
      title: "Homelab",
      tags: ["Personal project", "Linux", "Self-hosting"],
      summary:
        "Ik heb een oude desktop omgebouwd tot mijn eigen homelab. Zowel de hardware als de software heb ik zelf in elkaar geflanst. Dit is puur een hobby project en handig om wat te experimenteren. Zo heb ik hier ook mijn eigen minecraft server op draaien en maak ik gebruik van Tailscale om de server vanop afstand te kunnen bereiken.",
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
