import {
  SiFigma,
  SiConfluence,
  SiReact,
  SiMui,
} from "@icons-pack/react-simple-icons";
import {
  SealQuestion,
  BoundingBox,
  FlowArrow,
  ShieldCheck,
  Play,
} from "@phosphor-icons/react";

import { Badge } from "@radix-ui/themes";

export const ProjectListData = [
  {
    key: "1",
    title: "Title 1",
    src: "Portfolio v3/Project/dan-meyers-hA-3tgkoiIQ-unsplash.jpg",
    content:
      "Nam exercitationem culpa et molestiae voluptatibus aut dolore quasi in omnis esse. Cum Quis quisquam non natus incidunt hic aliquam rerum. Et aperiam exercitationem qui itaque repellat aut fuga asperiores. Hic saepe autem nam tenetur culpa cum ipsam laborum aut corrupti ullam et quisquam labore et beatae minima quo dolores quae.",
    tags: [
      <UserResearchBadge key="user-research" />,
      <UserExperienceBadge key="ux"/>,
      <FigmaBadge key="figma" />,
    ],
    page: "FAM",
  },

];

export const Icons = [
  {
    name: "Figma",
    tagColor: "gold",
    logo: <SiFigma size={"1rem"} />,
  },
  {
    name: "Confluence",
    tagColor: "indigo",
    logo: <SiConfluence size="1rem" />,
  },
  {
    name: "React",
    tagColor: "blue",
    logo: <SiReact size="1rem" />,
  },
  {
    name: "MUI",
    tagColor: "brown",
    logo: <SiMui size="1rem" />,
  },
  {
    name: "User Research",
    tagColor: "teal",
    logo: <SealQuestion size={"1rem"} />,
  },
  {
    name: "Product Design",
    tagColor: "crimson",
    logo: <BoundingBox size={"1rem"} />,
  },
  {
    name: "User Experience",
    tagColor: "plum",
    logo: <FlowArrow size={"1rem"} />,
  },
  {
    name: "Testing",
    tagColor: "Iris",
    logo: <ShieldCheck size={"1rem"} />,
  },
  {
    name: "Advanced Prototyping",
    tagColor: "cyan",
    logo: <Play size={"1rem"} />,
  },
];

export function AdvancedPrototypingBadge() {
  return (
    <Badge size="2" color="cyan">
      <Play size={"1rem"} />
      Advanced Prototyping
    </Badge>
  );
}

export function TestingBadge() {
  return (
    <Badge size="2" color="Iris">
      <ShieldCheck size={"1rem"} />
      Testing
    </Badge>
  );
}

export function UserExperienceBadge() {
  return (
    <Badge size="2" color="plum">
      <FlowArrow size={"1rem"} />
      User Experience
    </Badge>
  );
}

export function ProductDesignBadge() {
  return (
    <Badge size="2" color="crimson">
      <BoundingBox size={"1rem"} />
      Product Design
    </Badge>
  );
}

export function UserResearchBadge() {
  return (
    <Badge size="2" color="teal">
      <SealQuestion size={"1rem"} />
      User Research
    </Badge>
  );
}

export function MuiBadge() {
  return (
    <Badge size="2" color="brown">
      <SiMui size="1rem" />
      MUI
    </Badge>
  );
}

export function ReactBadge() {
  return (
    <Badge size="2" color="blue">
      <SiReact size="1rem" />
      React
    </Badge>
  );
}

export function ConfluenceBadge() {
  return (
    <Badge size="2" color="indigo">
      <SiConfluence size="1rem" />
      Confluence
    </Badge>
  );
}

export function FigmaBadge() {
  return (
    <Badge size="2" color="gold">
      <SiFigma size={"1rem"} />
      Figma
    </Badge>
  );
}
