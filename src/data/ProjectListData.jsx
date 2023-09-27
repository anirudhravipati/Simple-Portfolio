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
  Laptop,
  DeviceMobile,
} from "@phosphor-icons/react";
import { Component1Icon } from "@radix-ui/react-icons";

import { Badge } from "@radix-ui/themes";

export const ProjectListData = [
  {
    key: "1",
    title: "Log Management by CloudAEye",
    src: "/LogManagement/Cover Photos/Logs Insights/Sarari - DarkInsights.png",
    content:
      "Log Management is a SaaS service that takes in all logs of a user’s cloud applications,\
       uses AI to analyze the logs and identify any anomalies, provide alerts when such anomalies occur,\
        and provide possible solutions to the occurring anomalies",
    tags: [
      <ProductDesignBadge key={"product"} />,
      <UserExperienceBadge key="ux" />,
      <FigmaBadge key="figma" />,
      <LaptopBadge key="mobile" />,
    ],
    page: "LogManagement",
  },
  {
    key: "2",
    title: "FAM",
    src: "/FAM/cover.png",
    content:
      "FAM is a self-improvement app that remixes an events app with\
      Cognitive Behavioural Therapy techniques - a way for those that\
      are feeling lonely get out of their situation through action, led\
      by the app’s gentle instruction and checks!",
    tags: [
      <UserResearchBadge key="user-research" />,
      <UserExperienceBadge key="ux" />,
      <FigmaBadge key="figma" />,
      <MobileBadge key="mobile" />,
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

export function LaptopBadge() {
  return (
    <Badge size="2" color="grass">
      <Laptop size={"1rem"} />
      Web
    </Badge>
  );
}

export function MobileBadge() {
  return (
    <Badge size="2" color="ruby">
      <DeviceMobile size={"1rem"} />
      Mobile
    </Badge>
  );
}

export function ProductDesignBadge() {
  return (
    <Badge size="2" color="purple">
      <Component1Icon size={"1rem"} />
      Product Design
    </Badge>
  );
}
