import SongItem from '@/components/SongItem.vue';
import { shallowMount, RouterLinkStub } from '@vue/test-utils';

describe('SongItem.vue', () => {
    test('renders song.docId in id attribute', () => {
        const song = {
            docId: 'abc',
        };
        const wrapper = shallowMount(SongItem, {
            propsData: {
                song,
            },
            global: {
                components: {
                    'router-link': RouterLinkStub,
                },
            },
        });

        const compositionAuthor = wrapper.find('.text-gray-500');

        // expect(wrapper.attributes().id).toBe(`song-id-${song.docId}`);
        expect(wrapper.classes()).toContain(`song-id-${song.docId}`);
    });
});