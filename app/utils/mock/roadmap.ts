type MockData = {
  img: string;
  header: string;
  body: string;
};

export function getMockRoadmap() {
  const data: MockData[] = [
    {
      img: "https://picsum.photos/640/640?random=0",
      header: "When We First Met",
      body: "A random introduction at a mutual friend’s BBQ. Just a quick hello—but something lingered in the air.",
    },
    {
      img: "https://picsum.photos/640/640?random=1",
      header: "First Real Hangout",
      body: "Grabbed pizza after a long walk in the city. No fancy plans—just conversation, comfort, and a hint of something more.",
    },
    {
      img: "https://picsum.photos/640/640?random=2",
      header: "The Night We Talked for Hours",
      body: "What started as a quick chat turned into a 6-hour call. Everything just flowed—like we’d known each other forever.",
    },
    {
      img: "https://picsum.photos/640/640?random=3",
      header: "Our First Adventure",
      body: "Tried an amusement park together—screams on the roller coaster, laughter in the rain, and matching souvenir shirts.",
    },
    {
      img: "https://picsum.photos/640/640?random=4",
      header: "The Move-In Moonlight",
      body: "Moved in with just a mattress and a coffee machine. Late-night decorating, pizza on the floor, and endless smiles.",
    },
    {
      img: "https://picsum.photos/640/640?random=5",
      header: "When We Wrote Our Vows",
      body: "Sitting side by side, writing down promises that came from the heart. Every word was a memory in the making.",
    },
  ];
  return data;
}
