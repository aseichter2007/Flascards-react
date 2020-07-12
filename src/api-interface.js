import axios from 'axios';
function ApiGetCollection(){
    var url = "https://localhost:44393/api/collections";
    var response = axios.Get(url); 
    return response;
}
function ApiPostCard( stack, newWord, newDefinition ){
    var url = "https://localhost:44393/api/card";
    var postResponse;
    var data = {
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
    var url = "https://localhost:44393/api/card";
    var data = {
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
    var url = "https://localhost:44393/api/card/"+cardId;
    axios.delete(url).then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
    });
}
function ApiPostStack(newTitle){
    var url = "https://localhost:44393/api/stack";
    var data = {
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
    var url = "https://localhost:44393/api/stack";
    var data = {
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
    var url = "https://localhost:44393/api/stack/" + stackId;
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