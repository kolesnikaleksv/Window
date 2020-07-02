

const modals = () => {
    function bindModal(trigger, modal, close) {
        trigger.addEventListener('click', (e) => {
            if(e.target) {
                e.preventDefault();
            }

            modal.style.display = "block";
            trigger.classlist.add('');
        });
    }
};

export default modals;