const navigation = document.querySelector(".navigation");

const yListener = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        navigation.classList.add('navigation__hide');
      } else {
        navigation.classList.remove('navigation__hide');
      }
  };

window.addEventListener('scroll', yListener);