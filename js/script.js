var root = new Vue({
    el: "#app",
    data: {
        autoSlider: " ",
        attivazione: 0,
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ]
    },
    created() {
        this.autoSlider = setInterval(this.nextimg, 1000)
    },
    methods: {
        nextimg(){
            this.attivazione ++;
            if (this.attivazione > this.slides.length-1) {
                this.attivazione = 0;
            }
        },
        
        previusimg(){
            this.attivazione --;
            if (this.attivazione < 0) {
                this.attivazione = this.slides.length-1;
            }
        },

        directimg(attivazione) {
            
            this.attivazione = attivazione;
        },

        startAutoSlides() {
            this.autoSlider = setInterval(this.nextimg, 1000)
        },

        stopAutoSlides() {
            clearInterval(this.autoSlider)
        }

    }   
});

