import throttle from "lodash.throttle";

const LOCALSTORAGE_KEY = 'formData';
const formData = {};
const formRef = document.querySelector('.feedback-form');

populateForm();

formRef.addEventListener('input', throttle(evt => {
    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
}, 500))

formRef.addEventListener('submit', onFormInput);

function onFormInput(evt) {
    evt.preventDefault();

    console.log('отправляем форму');

    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function populateForm() {
    const savedForm = localStorage.getItem(LOCALSTORAGE_KEY);

    if (savedForm) {

        console.log(JSON.parse(savedForm).email);
        console.log(formRef[0].value);
        formRef[0].value = JSON.parse(savedForm).email;
        formRef[1].value = JSON.parse(savedForm).message;
    }
}

