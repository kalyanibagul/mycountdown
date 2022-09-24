
const countdown= () => {
    const countDate =new Date('sep 26,2022 00:00:00').getTime();
const now =new Date().getTime();
const gap =countDate- now;

const second=1000;
const minute= second*60;
const hour =minute*60;
const day= hour* 24;

const textDay= Math.floor(gap/day);
const textHour =Math.floor(gap%(day)/(hour));
const textMinute =Math.floor(gap%(hour)/(minute));
const textSecond =Math.floor(gap%(minute)/(second));


//const textDay= Math.floor(gap/(1000*60*60*24));
//const textHour =Math.floor(gap%(1000*60*60*24)/(1000*60*60));
//const textMinute = Math.floor(gap%(1000*60*60)/(1000*60));
//const textSecond = Math.floor(gap%(1000*60)/(1000));

document.querySelector(".day").innerText= textDay;
document.querySelector(".hour").innerText= textHour;
document.querySelector(".minute").innerText= textMinute;
document.querySelector(".second").innerText= textSecond;


 if(gap<10000)
{
     
    launchTheBullShit();

}
}

setInterval(countdown,1000);

countdown();

