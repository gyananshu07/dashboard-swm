const marginTop = "10px";
const marginRight = "5px";
const marginBottom = "10px";
const marginLeft = "5px";

const getPageMargins = () => {
  return `@page { margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important; }`;
};

export default getPageMargins();
