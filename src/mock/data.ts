import { WaterFallData } from "~/lib/index";

const baseData = [
  {
    width: 1280,
    height: 853,
    url: "https://cdn.pixabay.com/photo/2023/07/04/10/30/dragon-fly-8105990_1280.jpg",
  },
  {
    width: 485,
    height: 640,
    url: "https://cdn.pixabay.com/photo/2023/11/02/15/58/flower-8360946_640.jpg",
  },
  {
    width: 478,
    height: 640,
    url: "https://cdn.pixabay.com/photo/2023/12/22/09/46/cotton-top-tamarin-8463471_640.jpg",
  },
  {
    width: 640,
    height: 427,
    url: "https://cdn.pixabay.com/photo/2023/12/24/15/03/bougainvillea-8467373_640.jpg",
  },
  {
    width: 640,
    height: 427,
    url: "https://cdn.pixabay.com/photo/2023/12/25/10/27/dog-8468288_640.jpg",
  },
  {
    width: 640,
    height: 427,
    url: "https://cdn.pixabay.com/photo/2023/12/12/13/28/waterfall-8445292_640.jpg",
  },
  {
    width: 530,
    height: 640,
    url: "https://cdn.pixabay.com/photo/2023/08/08/10/35/ghosts-8177036_640.jpg",
  },
  {
    width: 640,
    height: 427,
    url: "https://pixabay.com/zh/photos/image-8342827/",
  },
  {
    width: 640,
    height: 640,
    url: "https://cdn.pixabay.com/photo/2024/01/04/09/34/plant-8486960_640.png",
  },
  {
    width: 640,
    height: 427,
    url: "https://cdn.pixabay.com/photo/2023/11/17/14/40/street-art-8394476_640.jpg",
  },
  {
    width: 640,
    height: 427,
    url: "https://pixabay.com/zh/photos/image-8348462/",
  },
  {
    width: 640,
    height: 640,
    url: "https://cdn.pixabay.com/photo/2023/12/28/14/09/cat-8474233_640.png",
  },
];

const data: WaterFallData[] = Array.from({ length: 1000 }, (_, i) => {
  const index = Math.floor(Math.random() * baseData.length);
  return {
    ...baseData[index],
    id: i,
  };
});

export default data;
