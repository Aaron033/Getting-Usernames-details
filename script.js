document.getElementById('getText').addEventListener('click',getText);
document.getElementById('getUsers').addEventListener('click',getUsers);
function getText(){
    // fetch('sample.txt')
    // .then(function(res){
    //     return res.text();
    // })
    // .then(function(data){
    //     console.log(data);
    // })
    //Make it more concience
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerHTML = data;
    })
    .catch((err) => console.log(err))
}

function getUsers(){
    fetch('user.json')
    .get((res) => res.json())
    .then((data) =>{
        let output = '<h2>Users</2>';
        console.log(data);
    })
}
