document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');
    const headerLinks = document.querySelectorAll('.header__link');
  
    const modalData = {
      'about': {
        title: 'О нас',
        body: '<p>Университетская клиника НИУ «БелГУ» — это современный многопрофильный медицинский центр, объединяющий передовую науку и практическое здравоохранение. Мы предоставляем высокотехнологичную медицинскую помощь, используя инновационные методы диагностики и лечения.</p>'
      },
      'structure': {
        title: 'Структура',
        body: '<p>В состав университетского медицинского комплекса входят ключевые подразделения:</p><ul><li>Университетская клиника</li><li>Поликлиника НИУ «БелГУ»</li><li>Медицинский центр стоматологических инноваций (МЦСИ)</li></ul>'
      },
      'management': {
        title: 'Руководство',
        body: '<p><strong>Директор Университетской клиники:</strong><br>Мосный Егор Андреевич</p><p><strong>Главный врач Поликлиники НИУ «БелГУ»:</strong><br>Камышникова Людмила Александровна</p><p><strong>Главный врач МЦСИ:</strong><br>Одарченко Константин Сергеевич</p>'
      }
    };
  
    const openModal = (id) => {
      const data = modalData[id];
      if (data) {
        modalTitle.textContent = data.title;
        modalBody.innerHTML = data.body;
        modal.classList.add('modal--open');
        document.body.style.overflow = 'hidden'; 
      }
    };
  
    const closeModal = () => {
      modal.classList.remove('modal--open');
      document.body.style.overflow = ''; 
    };
  
    headerLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const text = link.textContent.trim().toLowerCase();
        if (text === 'о нас') openModal('about');
        if (text === 'структура') openModal('structure');
        if (text === 'руководство') openModal('management');
      });
    });
  
    modalClose.addEventListener('click', closeModal);
  
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('modal--open')) {
        closeModal();
      }
    });
  });