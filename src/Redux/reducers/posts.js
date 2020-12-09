// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [] , action) =>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payLoad;

        case 'CREATE':
            return [...posts, action.payLoad];

        default:
            return posts;
    }
}