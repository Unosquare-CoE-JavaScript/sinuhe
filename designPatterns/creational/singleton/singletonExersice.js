class SingletonTester {
    static isSingleton(factory) {
        return factory() === factory();
    }
}

console.log(SingletonTester.isSingleton(() => {}))