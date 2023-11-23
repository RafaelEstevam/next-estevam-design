export const datalayerOnClickMenu = () => {
  window.dataLayer?.push({
    event: "OnClickMenu"
  });
}

export const datalayerOnClickMenuItem = (rest) => {
  window.dataLayer?.push({
    event: "OnClickItemMenu",
    ...rest
  })
}