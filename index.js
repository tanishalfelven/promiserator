module.exports = (iterable) => {
    let it;

    if ("next" in iterable) {
        it = iterable;
    } else {
        it = iterable[Symbol.iterator]();
    }

    const p = {
        then: (resolve) => {
            const { value, done } = it.next();

            if (done) {
                resolve(false);
            } else {
                resolve(
                    Object.assign(
                        () => promiserator(it),
                        { value },
                    )
                );
            }
        },
    };

    return p;
}
