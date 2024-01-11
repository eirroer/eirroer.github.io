import React from "react";
import Project from "./Project";
import "./Experience.css";
import LinkedIn from "./img/linkedin.png";

function Experience() {
  return (
    <div>
      <h2 className="experience__title">Min erfaring</h2>
      <div className="projects__container">
        <Project
          title="IN2000 - Software engineering"
          description="Gjennom kurset IN2000 Software engineering har jeg vært med å utvikle en applikasjon sammet med et team for Android telefoner som viser vær og surfeforhold på populære surfesteder i Norge. Dette kurset har lært meg mye om det å om hvordan det er å jobbe og utvikle i et team. Jeg har lært masse om godt teamarbeid inkludert viktigheten av roller, kommunikasjon, og samarbeid som bidrar mot et godt sluttprodukt."
        />
        <Project
          title="Sportstrener skiskyting"
          description="Fra Mai 2021 til April 2023 jobbet jeg som skiskytter trener for utøvere i alder 13-16 år i Bærum Skiklub. Her har jeg jobbet med å planlegge og gjennomføre treninger, samt å være med på konkurranser og samlinger. Jeg har følgt opp utøvere og følgt deres utvikling, og har jobbet med å skape et godt miljø for utøverne. Gjennom denne jobbet har jeg lært å samarbeide med utøvere for å finne ut hvordan de kan prestere på best mulig nivå og oppnå målene de har satt for seg selv. Denne jobben har lært meg mye om hvordan jeg kan kommunisere og gi feedback til andre, slik at de kan prestere på sitt beste."
        />
        <Project
          title="Hotellansatt"
          description="Elveseter hotell sommeren 2022 og 2023. Her har jeg jobbet med mye forskjellige arbeidsoppgaver. Jeg har jobbet med renhold, som servitør, malejobber, i tillegg til forskellige rydde og bærejobber."
        />
        <Project
          title="Toppidrettsutøver"
          description="Fra 2009 til 2020 satset jeg aktivt som skiskytter i Fossum IF og konkurrerte på nasjonalt nivå. Gjennom min karriere har jeg lært å jobbe dedikert og meget strukturert for å oppnå målene jeg har satt for meg selv. Det å være toppidrettsutøver har lært meg å jobbe med små detaljer for å bli bedre over tid, i tillegg til å jobbe med feedback fra trenere for å hele tiden lære hva jeg kan gjøre bedre. Dette har gitt meg gode evner til å ta feedback på en god måte og handle på råd og tilbakemeldinger."
        />
        <Project
          title="IN5320 - Development in platform ecosystems"
          description="Gjennom dette kurset har jeg vært med å utvikle en helseapplikasjon gjennom et teamarbeid. sluttbrukeren for apllikasjonen var en fiktiv helsearbeider i et fiktivt land, hvor helsesystem skal gå over fra penn og papir, til digitale systemer. Applikasjonen er utviklet gjennom platformen DHIS2, et open source prosjekt som brukes av mange land i verden for å samle inn og analysere helsedata. Dette var morsomt prosjekt hvor jeg har lært mye om brukerdesign og hvordan bør designe programmer for å være brukervennlige."
        />
      </div>
    </div>
  );
}

export default Experience;
