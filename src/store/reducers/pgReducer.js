const initState = {
    pgs:[
        {id:'1',title:'help me',content:'qwqijkasbkjsjkjdsahhhojnabhu'},
        {id:'2',title:'code',content:'qwqijkasbbkjhkjdsahhhojnabhu'},
        {id:'3',title:'bath',content:'qwqijkasbyiuyiopsahhhojnabhu'},
    ]
}

const pgReducer = (state = initState,action)=>{

    switch(action.type){
        case 'NEW_PG':
            console.log('new pg',action.pg)
            return state;
            case 'NEW_PG_ERR':
                console.log('new pg err',action.err)
                return state;
            default:
                return state;
    }
}

export default pgReducer