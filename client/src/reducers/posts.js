const reducers = (posts = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}

export default reducers;
