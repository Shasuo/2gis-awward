export const metrika = (name: string) => {
  //@ts-ignore
  dataLayer.push({
    event: name,
  });
};
