import ky from "ky";

const client = ky.create({
  prefixUrl: "http://localhost:8081/"
});

export async function getComic(id = 0) {
  return client(`comic/${id}`).json();
}
