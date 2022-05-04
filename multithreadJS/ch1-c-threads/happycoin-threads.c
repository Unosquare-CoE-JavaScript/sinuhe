#include <pthread.h>

struct happy_result {
    size_t count;
    uint64_t * nums;
};

void * get_happycoins(void * arg) {
    int attempts = * (int * ) arg;
    int limit = attempts / 10000;
    uint32_t seed = time(NULL);
    uint64_t * nums = malloc(limit * sizeof(uint64_t));
    struct happy_result * result = malloc(sizeof(struct happy_result));
    result - > nums = nums;
    result - > count = 0;
    for (int i = 1; i < attempts; i++) {
        if (result - > count == limit) {
            break;
        }
        uint64_t random_num = random64( & seed);
        if (is_happycoin(random_num)) {
            result - > nums[result - > count++] = random_num;
        }
    }
    return (void * ) result;
}

int main() {
    pthread_t thread[THREAD_COUNT];
    int attempts = 10000000 / THREAD_COUNT;
    int count = 0;
    for (int i = 0; i < THREAD_COUNT; i++) {
        pthread_create( & thread[i], NULL, get_happycoins, & attempts);
    }
    for (int j = 0; j < THREAD_COUNT; j++) {
        struct happy_result * result;
        pthread_join(thread[j], (void ** ) & result);
        count += result - > count;
        for (int k = 0; k < result - > count; k++) {
            printf("%"
                PRIu64 " ", result - > nums[k]);
        }
    }
    printf("\ncount %d\n", count);
    return 0;
}