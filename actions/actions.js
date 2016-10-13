import fetch from 'isomorphic-fetch'
export const left_toggle_active = 'left_toggle_active'
export const request_post = 'request_post'
export const receive_post = 'receive_post'
export const fetch_post = 'fetch_post'

export  function leftToggleChange(index) {
    return {
        type: left_toggle_active,
        index
    };
}
export function requestPost(status){
    return {
        type: request_post,
        status: 1
    }
}
export function receivePost(data){
    return {
        type: receive_post,
        status: 2,
        data
    }
}

export function fetchPost(url){
    return function(dispatch){
        dispatch(requestPost());
        return fetch(url)
        //.then( response => response.json())
        //.then( json => { dispatch(receivePost(json)) } )
        .then( response => response.blob())
        .then( myblob => { console.log(myblob)})

    }
}