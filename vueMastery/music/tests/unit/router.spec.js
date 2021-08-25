import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import SongIntem from '@/components/SongItem.vue';

describe('Router', function () {
    test('renders router link', () => {
        const song = {
            docId: 'abc',
        };

        const wrapper = shallowMount(SongIntem, {
            propsData: {
                song,
            },
            global: {
                components: {
                    'router-link': RouterLinkStub
                }
            },
        });

        expect(wrapper.findComponent(RouterLinkStub).props().to).toEqual({ name: 'song', params: { id: song.docId } });
    });
});