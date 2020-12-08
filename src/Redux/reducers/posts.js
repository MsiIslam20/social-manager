const posts = (posts = [] , action) =>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payLoad;

        case 'CREATE':
            return posts;

        default:
            return posts;
    }
}

export default posts;