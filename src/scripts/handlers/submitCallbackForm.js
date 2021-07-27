import refs from '../refs';
import backToSite from './backToSite'

const submitCallbackForm = function (evt) {
  evt.preventDefault();
  refs.nameInput.value = '';
  refs.emailInput.value = '';

  refs.modal.classList.add('modal--show')
  refs.modalBtn.addEventListener('click', backToSite)
}

export default submitCallbackForm;