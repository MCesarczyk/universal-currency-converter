export const clearCacheData = () => {
    caches.keys().then((names) => {
        names.forEach((name) => {
            caches.delete(name);
        });
    });

    console.log('Complete Cache Cleared')
};