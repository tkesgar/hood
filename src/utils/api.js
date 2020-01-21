import ky from "ky";

export async function getComic(id = null) {
  if (!id) {
    return ky(`https://xkcd.com/info.0.json`).json();
  }

  return ky(`https://xkcd.com/${id}/info.0.json`).json();
}
