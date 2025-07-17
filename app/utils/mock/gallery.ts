type MockData = {
  image_url: string;
  description: string;
  date: string;
};

export function getMockGallery() {
  const data: MockData[] = [
    {
      image_url: "https://picsum.photos/640/640?random=0",
      description:
        "It all began at a cozy coffee shop downtown. A shared smile, a casual conversation—and from that moment, something just clicked.",
      date: "November 15, 2018",
    },
    {
      image_url: "https://picsum.photos/640/640?random=1",
      description:
        "A movie night under the stars. Nervous laughter turned into endless conversation. The spark became a flame.",
      date: "April 2, 2018",
    },
    {
      image_url: "https://picsum.photos/640/640?random=2",
      description:
        "After a night of stargazing, the words just slipped out—and they felt more right than anything else.",
      date: "June 10, 2018",
    },
    {
      image_url: "https://picsum.photos/640/640?random=3",
      description:
        "Explored the streets of Kyoto hand in hand. Got lost, laughed too much, and made unforgettable memories.",
      date: "September 5, 2019",
    },
    {
      image_url: "https://picsum.photos/640/640?random=4",
      description:
        "Turning a house into a home—together. First couch, first shared bills, and a lot of midnight snacks.",
      date: "February 14, 2020",
    },
    {
      image_url: "https://picsum.photos/640/640?random=5",
      description:
        "In the middle of their favorite park, under autumn leaves, the question was asked—and the answer was a joyful “Yes!”",
      date: "November 26, 2022",
    },
    {
      image_url: "https://picsum.photos/640/640?random=6",
      description:
        "Surrounded by family and friends, they vowed forever. Tears, laughter, and a dance to remember.",
      date: "June 3, 2024",
    },
  ];

  return data;
}
