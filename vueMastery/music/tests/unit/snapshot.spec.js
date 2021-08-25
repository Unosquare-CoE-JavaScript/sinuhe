import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import SongItem from "@/components/SongItem.vue";

describe("Snapshots sont item", () => {
  test("renders correctly", () => {
    const song = {
      docId: "abe",
      modified_name: "test",
      display_name: "test",
      comment_count: 5
    };

    const wrapper = shallowMount(SongItem, {
      propsData: { song },
      global: {
        components: {
          "router-link": RouterLinkStub
        }
      }
    });

    expect(wrapper.element).toMatchInlineSnapshot(`
      <li
        class="flex justify-between items-center p-3 pl-6 cursor-pointer transition
                duration-300 hover:bg-gray-50 example song-id-abe"
      >
        <div>
          <router-link-stub
            class="font-bold block text-gray-600"
            to="[object Object]"
          />
          <span
            class="text-gray-500 text-sm"
          >
            test
          </span>
        </div>
        <div
          class="text-gray-600 text-lg"
        >
          <router-link-stub
            custom=""
            to="[object Object]"
          />
        </div>
      </li>
    `);
  });
});
