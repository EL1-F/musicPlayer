class Music{
    constructor(title,singer,img,file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName(){
        return this.title+ " - "+this.singer;
    }
};

const musicList = [
    new Music("Society","Eddie Vedder","into-the-wild.jpg","Eddie Vedder - Society.mp3"),
    new Music("The Wolf","Eddie Vedder","into-the-wild.jpg","Eddie Vedder - The Wolf.mp3"),
    new Music("Are You Gonna Go My Way","Lanny Kravitz","Lenny.jpg","Lenny Kravitz - Are You Gonna Go My Way.mp3"),
    new Music("Viking Song","Unknown","viking.jpg","Viking Song.mp3")
]