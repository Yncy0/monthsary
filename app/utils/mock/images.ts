export function getMockImages() {
  const data: string[] = [];

  for (let i = 1; i <= 50; i++) {
    data.push(`https://picsum.photos/640/640?random=${i}`);
  }

  return data;
}
