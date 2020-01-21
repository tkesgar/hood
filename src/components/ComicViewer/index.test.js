import { mount } from "@vue/test-utils";
import { createTestVue } from "../../utils/test-helpers";
import ComicViewer from ".";
import { getComic } from "../../utils/api";

jest.mock("../../utils/api");

getComic.mockImplementation(async () => {
  return {
    day: "21",
    month: "12",
    year: "2012",
    num: 1994,
    title: "Comic title",
    alt: "Comic alt",
    img: "https://imgs.xkcd.com/comics/comic-image.png"
  };
});

const localVue = createTestVue();

async function createWrapper(opts = {}) {
  const wrapper = mount(ComicViewer, {
    localVue,
    ...opts
  });

  await wrapper.vm.$nextTick();

  return wrapper;
}

it("should render comic", async () => {
  const wrapper = await createWrapper();

  expect(wrapper.find("[data-test='comic-title']").text()).toBe("Comic title");
  expect(wrapper.find("[data-test='comic-number']").text()).toBe("1994");
  expect(wrapper.find("[data-test='comic-alt']").text()).toBe("Comic alt");
  expect(wrapper.find("[data-test='comic-img']").attributes("src")).toBe(
    "https://imgs.xkcd.com/comics/comic-image.png"
  );
  expect(wrapper.find("[data-test='comic-date']").text()).toBe("21-12-2012");
});
