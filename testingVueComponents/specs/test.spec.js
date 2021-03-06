import TestComponent from '@/test';
import List from '@/list';
import {mount, shallowMount} from '@vue/test-utils';

test('mount a vue component', () => {
    const wrapper = mount(TestComponent);
    expect(wrapper).toMatchSnapshot();
});

test('List components', () => {
    const wrapper = mount(List);
    const movies = wrapper.vm.marvelMovies;
    wrapper.setData({ marvelMovies: [...movies, 'Endgame']});
    expect(wrapper).toMatchSnapshot();
});