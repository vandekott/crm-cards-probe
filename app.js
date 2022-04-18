document.addEventListener('alpine:init', () => {
    // DATA
    Alpine.store('columns', [
        {
            title: 'Новые лиды',
            count: 12,
            color: 'blue',
            cards: [
                {
                    city: 'Таганрог',
                    time: '23 минуты назад'
                },
                {
                    city: 'Омск',
                    time: '2 часа назад'
                },
                {
                    city: 'Новосибирск',
                    time: '2 часа 10 минут назад'
                },
            ]
        },{
            title: 'В обработке',
            count: 17,
            color: 'teal',
            cards: [
                {
                    city: 'Таганрог',
                    time: '23 минуты назад'
                },
                {
                    city: 'Омск',
                    time: '2 часа назад'
                },
                {
                    city: 'Новосибирск',
                    time: '2 часа 10 минут назад'
                },
                {
                    city: 'Москва',
                    time: '4 часа назад'
                },
            ]
        },{
            title: 'Валенки',
            count: 8,
            color: 'orange',
            cards: [
                {
                    city: 'Таганрог',
                    time: '23 минуты назад'
                },
                {
                    city: 'Омск',
                    time: '2 часа назад'
                },
                {
                    city: 'Новосибирск',
                    time: '2 часа 10 минут назад'
                },
            ]
        },
        {
            title: 'Готово',
            count: 392,
            color: 'green',
            cards: [
                {
                    city: 'Таганрог',
                    time: '23 минуты назад'
                },
                {
                    city: 'Омск',
                    time: '2 часа назад'
                },
                {
                    city: 'Новосибирск',
                    time: '2 часа 10 минут назад'
                },
                {
                    city: 'Москва',
                    time: '4 часа назад'
                },
                {
                    city: 'Орёл',
                    time: '7 часов назад'
                },
                {
                    city: 'Оренбург',
                    time: '11 часов назад'
                },
                {
                    city: 'Таганрог',
                    time: '23 минуты назад'
                },
                {
                    city: 'Омск',
                    time: '2 часа назад'
                },
            ]
        },
    ]);
    // BOARD
    Alpine.data('board', () => ({
        title: '',
        columns: [],
        options: {
            adding: false,
            removing: false
        },
        init() {
            this.title = 'Тестовая';
            this.columns = Alpine.store('columns');
        }
    }));
    // COLUMN
    Alpine.data('column', (data) => ({
        title: '',
        count: 0,
        color: '',
        cards: [],
        removing: false,
        drop(event) {
            const element = document.getElementById(event.dataTransfer.getData('text/plain'));
            
            if (event.target.closest('.card') != undefined) {
                event.target.closest('.card').after(element);
            } else {
                event.target.closest('.cards-wrapper').appendChild(element);
            }
        },
        dragOver() {
            this.removing = true;
        },
        dragLeave() {
            this.removing = false;
        },
        addCard() {
            this.cards = this.cards.concat([
                {
                    city: 'Новая карточка',
                    time: ''
                }
            ]);
            console.log( 'Новое кол-во карточек: ' + this.cards.length );
            console.log( 'Содержимое:' );
            console.log( this.cards );
        },
        init() {
            title = data.title ?? '';
            count = data.count ?? 0;
            color = data.color ?? '';
            cards = data.cards ?? [];
        },
    }));
    // CARD
    Alpine.data('card', (dataset) => ({
        city: '',
        time: '',
        dragging: false,
        dragStart(event) {
            this.dragging = true;
            event.dataTransfer.effectAllowed='move';
            event.dataTransfer.setData('text/plain', event.target.id);
            console.log(event)
        },
        dragEnd(event) {
            this.dragging = false;
        },
        init() {
            this.city = dataset.city ?? 'Город не указан';
            this.time = dataset.time ?? 'время неизвестно';
        },
    }));
});














var testing = {
    columns: [
        {
            title: 'Новые лиды',
            count: 12,
            color: 'blue',
            cards: [
                {
                    city: 'Таганрог',
                    time: '23 минуты назад'
                },
                {
                    city: 'Омск',
                    time: '2 часа назад'
                },
                {
                    city: 'Новосибирск',
                    time: '2 часа 10 минут назад'
                },
                {
                    city: 'Москва',
                    time: '4 часа назад'
                },
                {
                    city: 'Орёл',
                    time: '7 часов назад'
                },
                {
                    city: 'Оренбург',
                    time: '11 часов назад'
                },
                {
                    city: 'Таганрог',
                    time: '23 минуты назад'
                },
                {
                    city: 'Омск',
                    time: '2 часа назад'
                },
                {
                    city: 'Новосибирск',
                    time: '2 часа 10 минут назад'
                },
                {
                    city: 'Москва',
                    time: '4 часа назад'
                },
                {
                    city: 'Орёл',
                    time: '7 часов назад'
                },
                {
                    city: 'Оренбург',
                    time: '11 часов назад'
                },
                {
                    city: 'Таганрог',
                    time: '23 минуты назад'
                },
                {
                    city: 'Омск',
                    time: '2 часа назад'
                },
                {
                    city: 'Новосибирск',
                    time: '2 часа 10 минут назад'
                },
                {
                    city: 'Москва',
                    time: '4 часа назад'
                },
                {
                    city: 'Орёл',
                    time: '7 часов назад'
                },
                {
                    city: 'Оренбург',
                    time: '11 часов назад'
                },
            ]
        },{
            title: 'В обработке',
            count: 17,
            color: 'teal',
            cards: [
                {
                    city: 'Таганрог',
                    time: '23 минуты назад'
                },
                {
                    city: 'Омск',
                    time: '2 часа назад'
                },
                {
                    city: 'Новосибирск',
                    time: '2 часа 10 минут назад'
                },
                {
                    city: 'Москва',
                    time: '4 часа назад'
                },
                {
                    city: 'Орёл',
                    time: '7 часов назад'
                },
                {
                    city: 'Оренбург',
                    time: '11 часов назад'
                },
                {
                    city: 'Таганрог',
                    time: '23 минуты назад'
                },
                {
                    city: 'Омск',
                    time: '2 часа назад'
                },
                {
                    city: 'Новосибирск',
                    time: '2 часа 10 минут назад'
                },
                {
                    city: 'Москва',
                    time: '4 часа назад'
                },
                {
                    city: 'Орёл',
                    time: '7 часов назад'
                },
                {
                    city: 'Оренбург',
                    time: '11 часов назад'
                },
                {
                    city: 'Таганрог',
                    time: '23 минуты назад'
                },
                {
                    city: 'Омск',
                    time: '2 часа назад'
                },
                {
                    city: 'Новосибирск',
                    time: '2 часа 10 минут назад'
                },
                {
                    city: 'Москва',
                    time: '4 часа назад'
                },
                {
                    city: 'Орёл',
                    time: '7 часов назад'
                },
                {
                    city: 'Оренбург',
                    time: '11 часов назад'
                },
            ]
        },{
            title: 'Валенки',
            count: 8,
            color: 'orange',
            cards: [
                {
                    city: 'Таганрог',
                    time: '23 минуты назад'
                },
                {
                    city: 'Омск',
                    time: '2 часа назад'
                },
                {
                    city: 'Новосибирск',
                    time: '2 часа 10 минут назад'
                },
                {
                    city: 'Москва',
                    time: '4 часа назад'
                },
                {
                    city: 'Орёл',
                    time: '7 часов назад'
                },
                {
                    city: 'Оренбург',
                    time: '11 часов назад'
                },
                {
                    city: 'Таганрог',
                    time: '23 минуты назад'
                },
                {
                    city: 'Омск',
                    time: '2 часа назад'
                },
                {
                    city: 'Новосибирск',
                    time: '2 часа 10 минут назад'
                },
                {
                    city: 'Москва',
                    time: '4 часа назад'
                },
                {
                    city: 'Орёл',
                    time: '7 часов назад'
                },
                {
                    city: 'Оренбург',
                    time: '11 часов назад'
                },
                {
                    city: 'Таганрог',
                    time: '23 минуты назад'
                },
                {
                    city: 'Омск',
                    time: '2 часа назад'
                },
                {
                    city: 'Новосибирск',
                    time: '2 часа 10 минут назад'
                },
                {
                    city: 'Москва',
                    time: '4 часа назад'
                },
                {
                    city: 'Орёл',
                    time: '7 часов назад'
                },
                {
                    city: 'Оренбург',
                    time: '11 часов назад'
                },
            ]
        },
        {
            title: 'Готово',
            count: 392,
            color: 'green',
            cards: [
                {
                    city: 'Таганрог',
                    time: '23 минуты назад'
                },
                {
                    city: 'Омск',
                    time: '2 часа назад'
                },
                {
                    city: 'Новосибирск',
                    time: '2 часа 10 минут назад'
                },
                {
                    city: 'Москва',
                    time: '4 часа назад'
                },
                {
                    city: 'Орёл',
                    time: '7 часов назад'
                },
                {
                    city: 'Оренбург',
                    time: '11 часов назад'
                },
                {
                    city: 'Таганрог',
                    time: '23 минуты назад'
                },
                {
                    city: 'Омск',
                    time: '2 часа назад'
                },
                {
                    city: 'Новосибирск',
                    time: '2 часа 10 минут назад'
                },
                {
                    city: 'Москва',
                    time: '4 часа назад'
                },
                {
                    city: 'Орёл',
                    time: '7 часов назад'
                },
                {
                    city: 'Оренбург',
                    time: '11 часов назад'
                },
                {
                    city: 'Таганрог',
                    time: '23 минуты назад'
                },
                {
                    city: 'Омск',
                    time: '2 часа назад'
                },
                {
                    city: 'Новосибирск',
                    time: '2 часа 10 минут назад'
                },
                {
                    city: 'Москва',
                    time: '4 часа назад'
                },
                {
                    city: 'Орёл',
                    time: '7 часов назад'
                },
                {
                    city: 'Оренбург',
                    time: '11 часов назад'
                },
            ]
        },
    ]}