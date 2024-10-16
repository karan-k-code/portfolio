 const showMoreBtn = document.getElementById("show_more_btn")

 const moreInfo = document.getElementById('more-info');

function showMore() {
    

    // moreInfo.style.display= moreInfo.style.display === 'none'? 'block': 'none';
    if (showMoreBtn.innerText=== 'Show More') {
        showMoreBtn.innerText="Show Less";
        moreInfo.classList.add('tran')
    } else {
        showMoreBtn.innerText="Show More";
        moreInfo.classList.remove('tran')
    }
    
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });