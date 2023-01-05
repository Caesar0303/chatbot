let chat = document.getElementsByClassName('chat');
        let chatWindow = document.getElementById('chat_window');

        var client = ["Привет","Как дела?",'Пока'];
        var bot = ["Здравствуйте!","Отлично, у вас как?",'До свидание!']

        function showAdminPanel () {
            let admin_pannel = document.getElementsByClassName('admin_panel')
            let btn = document.getElementById('1')
            if (admin_pannel[0].classList.contains('hidden')) {
                admin_pannel[0].classList.remove('hidden')
                btn.textContent = 'Закрыть админ панель';
                console.log(btn)
            }
            else {
                admin_pannel[0].classList.add('hidden')
                btn.textContent = 'Открыть админ панель';
            }
        }

        function addText () {
            let addBot = document.getElementsByClassName('add_bot')
            let addClient = document.getElementsByClassName('add_client')
            let aBot = addBot[0].value
            let bBot = addClient[0].value
            client.push(bBot)
            bot.push(aBot)
            alert('Фразы успешно сохранены')
        }

        function chatBot () {
            for (var i = 0; i < client.length; i++) {
                // Создаем условие, если текст с инпута равна тексту с массива:
                if (chat[0].value.toUpperCase() == client[i].toUpperCase()) {
                    let message_wrapper = document.createElement('message_wrapper');
                    let client_message_wrapper = document.createElement('client_message_wrapper');
                    let client_message = document.createElement('client_message')
                    let message = document.createElement('message');
                    // Вставляем в переменные

                    chatWindow.appendChild(client_message_wrapper);
                    chatWindow.appendChild(message_wrapper);
                    client_message_wrapper.appendChild(client_message);
                    message_wrapper.appendChild(message);
                    // В блок chatwindow цепляем нужные блоки
                    client_message_wrapper.classList.add('client_message_wrapper')
                    client_message.classList.add('client_message')
                    message.classList.add('message')
                    // Добавляем стили для созданных блоков

                    client_message.innerHTML=chat[0].value;
                    message.innerHTML=bot[i];
                    // Добаляем текст в блоки
                    // Завершаем цикл
                    return false;
                }
            }
                let message_wrapper = document.createElement('message_wrapper');
                let client_message_wrapper = document.createElement('client_message_wrapper');
                let client_message = document.createElement('client_message')
                let message = document.createElement('message');

                chatWindow.appendChild(client_message_wrapper);
                chatWindow.appendChild(message_wrapper);
                client_message_wrapper.appendChild(client_message);
                message_wrapper.appendChild(message);
                client_message_wrapper.classList.add('client_message_wrapper')
                client_message.classList.add('client_message')
                message.classList.add('message')

                client_message.innerHTML=chat[0].value;
                message.innerHTML="Извините, но я вас не понял";
        }