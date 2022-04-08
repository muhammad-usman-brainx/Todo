let inputField = document.getElementById('inputTask');
let taskContainer = document.getElementById('task-container');

inputField.addEventListener("keyup",(event)=>{
    if(event.key === 'Enter' ){
        if(inputField.value != ''){
            event.preventDefault();

            const edit = document.createElement('button');
            edit.innerText = 'Edit';
            edit.classList.add('edit-btn');
            const dlt = document.createElement('button');
            dlt.innerText = 'Delete';
            dlt.classList.add('dlt-btn');

            const divv = document.createElement('div');
            divv.classList.add('task-item');
            divv.classList.add('mt-2');
            divv.classList.add('pb-2');
            const check = document.createElement('input');
            check.type = 'checkbox';
            check.id = 'check';

            const task = document.createElement('input');
            task.classList.add('task-desc');
            task.classList.add('mx-3');
            task.setAttribute('readonly','readonly');
            task.style.minWidth = '300px'
            task.value = inputField.value;
            task.type = 'text';
            divv.appendChild(check);
            divv.appendChild(task);
            divv.appendChild(edit);
            divv.appendChild(dlt);

            taskContainer.appendChild(divv);
            inputField.value = '';
        

            check.addEventListener('click',()=>{
                if(task.id != 'linee'){
                    task.id = 'linee';
                }
                else{
                    task.id = '';
                }
            })

            edit.addEventListener('click',()=>{
                check.style.display = 'none';
                task.removeAttribute('readonly','readonly');
                task.focus();
            })

            task.addEventListener("keyup",(e)=>{
                if(e.key == 'Enter'){
                    if(task.value != ''){
                        check.style.display = 'inline-block';
                        task.setAttribute('readonly','readonly');
                    }
                    else{
                        alert('Task Description can\'t be empty');
                    }
                }
            })

            dlt.addEventListener('click',()=>{
                taskContainer.removeChild(divv);
            })

    }

    }

})




function addTask(){
    const divv = document.createElement('div');
    divv.classList.add('task-item');
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.id = 'check';

    const task = document.createElement('input');
    task.classList.add('task-desc');
    task.classList.add('mx-1');
    task.setAttribute('readonly','readonly');
    task.value = inputField.value;
    task.type = 'text';

    
    // const edit = document.createElement('button');
    // edit.innerText = 'Edit';
    // edit.classList.add('edit-btn');

    // const dlt = document.createElement('button');
    // dlt.innerText = 'Delete';
    // dlt.classList.add('dlt-btn');

    edit.id = inputField.value;
    dlt.id = inputField.value;

    divv.appendChild(check);
    divv.appendChild(task);
    divv.appendChild(edit);
    divv.appendChild(dlt);



    taskContainer.appendChild(divv);
    inputField.value = '';
}

