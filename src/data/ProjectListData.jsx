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
  Play
} from "@phosphor-icons/react";

export const ProjectListData = [
  {
    key: "1",
    title: "Title 1",
    src: "Portfolio v3/Project/dan-meyers-hA-3tgkoiIQ-unsplash.jpg",
    content:
      "Nam exercitationem culpa et molestiae voluptatibus aut dolore quasi in omnis esse. Cum Quis quisquam non natus incidunt hic aliquam rerum. Et aperiam exercitationem qui itaque repellat aut fuga asperiores. Hic saepe autem nam tenetur culpa cum ipsam laborum aut corrupti ullam et quisquam labore et beatae minima quo dolores quae.",
    tags: [ "Figma","User Research", "Product Design","User Experience","Testing","Advanced Prototyping"],
    page: "FAM"
  },
  {
    key: "2",
    title: "Title 2",
    src: "Portfolio v3/Project/zhuojun-yu-xhC-pVI_Gno-unsplash (1).jpg",
    content:
      "Ex possimus quas eum atque quia est beatae eligendi est animi amet. Ut deleniti eligendi ea nihil necessitatibus est recusandae corrupti qui earum nostrum eos autem sequi.",
    tags: ["Confluence", "Confluence", "Confluence"],
    page: "FAM"
  },
  {
    key: "3",
    title: "Title 3",
    src: "Portfolio v3/Project/red-zeppelin-sdfiCCK99G0-unsplash.jpg",
    content:
      "Aut neque distinctio ut tempora earum vel corporis corporis et ipsam praesentium. Et minima adipisci ex amet reprehenderit est illum internos ut distinctio neque hic atque architecto eum officiis exercitationem.",
    tags: ["React", "React", "React"],
    page: "FAM"
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
  }
];
