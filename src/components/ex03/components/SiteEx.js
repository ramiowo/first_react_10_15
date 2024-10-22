import { Menus } from "../../ex01/Menus";

const sites = [
  {
    id: 0,
    title: "네이버 바로가기",
    siteImg:
      "https://velog.velcdn.com/images/meflow/post/07f619eb-7e4c-44d2-9fa7-3ef04333ef87/image.jpg",
    siteUrl: "https://www.naver.com ",
  },
  {
    id: 1,
    title: "유튜브 바로가기",
    siteImg:
      "https://www.askedtech.com/api/kords/admin/product/image.jpg?type=org&id=20731",
    siteUrl: "https://www.youtube.com",
  },
  {
    id: 2,
    title: "카카오 바로가기",
    siteImg:
      "https://i.namu.wiki/i/GmQozcg0lMGkI_NXkm04l-14hJIGnxYdhfe98DUlKGHVunjQtRkn0ZaGgXI1DEdGzHCzUsJsLbEZlMveOEnoRQ.svg",
    siteUrl: "https://www.kakaocorp.com",
  },
];

const SiteEx = () => {
  return (
    <>
      {sites.map((site) => (
        <div key={site.id}>
          <a href={site.siteUrl}>
            <img src={site.siteImg} alt={site.title}></img>
            <p></p>
          </a>
        </div>
      ))}
    </>
  );
};

export default SiteEx;
