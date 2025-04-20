
const episodes = [
  { title: "Episod 1", video: "https://streamtape.com/e/abcd1234567890/", dl: "https://shrinke.me/solo-leveling-ep1" },
  { title: "Episod 2", video: "https://streamtape.com/e/efgh2345678901/", dl: "https://shrinke.me/solo-leveling-ep2" },
  { title: "Episod 3", video: "https://streamtape.com/e/ijkl3456789012/", dl: "https://shrinke.me/solo-leveling-ep3" }
];

const videoPlayer = document.getElementById("videoPlayer");
const downloadLink = document.getElementById("downloadLink");
const episodeList = document.getElementById("episodeList");

episodes.forEach((ep, index) => {
  const btn = document.createElement("button");
  btn.innerText = ep.title;
  btn.className = "episode-btn";
  btn.onclick = () => {
    videoPlayer.src = ep.video;
    downloadLink.href = ep.dl;
  };
  episodeList.appendChild(btn);
});
