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
            miniPictures: [
                "./img/picture-5.jpg",
                "./img/picture-6.jpg",
                "./img/picture-7.jpg",
                "./img/picture-8.jpg",
                "./img/picture-9.jpg",
                "./img/picture-10.jpg"
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
            //funzione per cambiare foto attraverso il
            //cerchio collegando l'index della foto
            //all'index del cerchio
            changePicture: function (index){
                this.pictureIndex = index;
            },
            //funzione per collegare l'index del cerchio
            //all'index della foto
            //ritorna un'altra classe
            indexCircle: function (index){
                if(index === this.pictureIndex){
                    return "circlePositionNow";
                }else{
                    return "";
                }
            }
        },
    }
);
