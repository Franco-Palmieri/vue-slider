const app = new Vue(
    {
        el: '#app',
        data: {
            pictures: [
                "./img/picture-1.jpg",
                "./img/picture-2.jpg",
                "./img/picture-3.jpg",
                "./img/picture-4.jpg"
            ],
            pictureIndex: 0,
        },
        created (){
            setInterval(() => {
                this.next();
            }, 4000)
        },
        methods: {
            next: function(){
                if(this.pictureIndex === (this.pictures.length - 1)){
                    this.pictureIndex = 0;
                }else{
                    this.pictureIndex++;
                }
            },
            prev: function(){
                if(this.pictureIndex === 0){
                    this.pictureIndex = this.pictures.length - 1;
                }else{
                    this.pictureIndex--;
                }   
            },
        },
    }
);
