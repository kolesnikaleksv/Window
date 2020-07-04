const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.querySelector('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignContent = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if(target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            console.log(path);
        }
        
        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    });
};

export default images;