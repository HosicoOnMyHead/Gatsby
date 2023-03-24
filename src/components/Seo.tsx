import React from "react";

interface ISeoprops {
  title: string;
}

export default function Seo({ title }: ISeoprops) {
  return <title>{title} | DevStickers!</title>;
}
