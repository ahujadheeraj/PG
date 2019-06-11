export const newPg = (pg) =>{
    return(dispatch,getState, {getFirestore })=>{
        const firestore = getFirestore();
        firestore.collection('pgs').add({
            ...pg,
            owner:'Dheeraj',
            contact:32323232

        }).then(()=>{
            dispatch({type:'NEW_PG',pg})
        }).catch((err)=>{
            dispatch({type:'NEW_PG_ERR',err})
        })
    }
}