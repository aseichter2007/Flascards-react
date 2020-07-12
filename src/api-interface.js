import axios from 'axios';
function ApiGetCollection(){
    let url = "https://localhost:44393/api/collections";
    let response = axios.Get(url); 
    return response;
}
function ApiPostCard( stack, newWord, newDefinition ){
    let url = "https://localhost:44393/api/card";
    var postResponse;
    let data = {
        stackId: stack,
        word: newWord,
        definition: newDefinition
    }
    axios.post(url, data).then(function (response) {
        postResponse = response;
        console.log(response);
    })
        .catch(function (error) {
        console.log(error);
    });
    return postResponse;
}
function ApiPutCard(cardId, newWord, newDefinition){
    let url = "https://localhost:44393/api/card";
    let data = {
        id: cardId,
        word: newWord,
        definition: newDefinition
    }
    axios.put(url, data).then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
    });
}
function ApiDeleteCard(cardId){
    let url = "https://localhost:44393/api/card/"+cardId;
    axios.delete(url).then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
    });
}
function ApiPostStack(newTitle){
    let url = "https://localhost:44393/api/stack";
    let data = {
        title: newTitle
    }
    var postResponse;
    axios.post(url,data).then(function (response) {
        postResponse = response;
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
    });
    return postResponse;
}
function ApiPutStack(stackId, newTitle){
    let url = "https://localhost:44393/api/stack";
    let data = {
        id: stackId,
        title: newTitle   
    }
    axios.put(url,data).then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
    });
}
function ApiDeleteStack(stackId){
    let url = "https://localhost:44393/api/stack/" + stackId;
    axios.delete(url).then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
    });
}

exports.ApiGetCollection = ApiGetCollection;
exports.ApiPostCard = ApiPostCard;
exports.ApiPutCard = ApiPutCard;
exports.ApiDeleteCard = ApiDeleteCard;
exports.ApiPostStack = ApiPostStack;
exports.ApiPutStack = ApiPutStack;
exports.ApiDeleteStack = ApiDeleteStack;