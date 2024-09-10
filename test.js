const mygitbox    = document.getElementById('mygitbox');
const mygithubbox = document.getElementById('mygithubbox');
const myH2        = document.getElementById('myH2');
const mybtn       = document.getElementById('mybtn');

mybtn.addEventListener('click', event => {
    event.preventDefault()
    if(mygitbox.checked && mygithubbox.checked){
        myH2.textContent = 'All Skills Completed';
        myH2.style.display = 'block';
    }
    else if(!mygitbox.checked && !mygithubbox.checked) {
        myH2.textContent = 'there is No Skill Completed !';
        myH2.style.display = 'block';
    }
    else{
        myH2.style.display = 'block';
        myH2.textContent = 'Complete Skill !';
    }
} )
