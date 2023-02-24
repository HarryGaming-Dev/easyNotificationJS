document.head.innerHTML +=`<style>
@keyframes liveNotification {
    0% {scale: 1; opacity: 1;}
    85% {scale: 5; opacity: 0;}
    100% {scale: 1; opacity: 0;}
}

.liveNotificationDot{
    animation: liveNotification;
    animation-duration: 1.5s;
    transition: .5s cubic-bezier(.74,-0.5,.31,1.45);
    animation-delay: 0.5s;
    animation-iteration-count: infinite;
    scale: 1;
    opacity: 1;
}

.easyNotificationJSSmall_notification {
    color: white;
    position: fixed;
    border-radius: 100px;
    max-height: 70px;
    text-align: left;
    transition: 0.35s cubic-bezier(.58,.31,.41,.99);
    font-family: sans-serif;
    -webkit-box-shadow: 0px 0px 20px 2px rgb(0 0 0 / 50%);
    box-shadow: 0px 0px 20px 2px rgb(0 0 0 / 50%);
    z-index: 2;
    margin-left: auto;
    margin-right: auto;
    left: 10%;
}

.easyNotificationJSSmall_notification *{
    transition: 0.35s cubic-bezier(.58,.31,.41,.99);
}

#easyNotificationJSStagedNotifications{
    position: fixed;
    z-index: 5;
    left: 2%;
    background: #0072ff;
    width: 60px;
    height: 60px;
    color: white;
    text-align: center;
    border-radius: 100px;
    transition: 0.75s cubic-bezier(0.57, -0.84, 0.55, 1.62);
    font-family: sans-serif;
    -webkit-box-shadow: 0px 0px 20px 2px rgb(0 0 0 / 50%);
    box-shadow: 0px 0px 20px 2px rgb(0 0 0 / 50%);
    z-index: 2;
}

@keyframes bounce {
    0% { rotate: 0deg; }
    25% { rotate: -25deg; }
    50% { rotate: 25deg; }
    100% { rotate: 0deg; }
}

#easyNotificationJSStagedNotifications *{
    margin: auto;
    margin-top: 15%;
    animation: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    transition: 0.35s cubic-bezier(0.57, -0.84, 0.55, 1.62);
}</style>`;

var easyNotificationJSStagedNotifications = [];
var easyNotificationJSShowingNotification = false;

setInterval(() => {
    for (let x = 0; x < easyNotificationJSStagedNotifications.length; x++){
        let notification = easyNotificationJSStagedNotifications[x];
        if (easyNotificationJSShowingNotification == false){
            easyNotificationsJS.showSmallNotification(notification.icon, notification.message, notification.duration, notification.type);
            easyNotificationJSStagedNotifications.splice(x, 1);
        }
    }
    if (easyNotificationJSStagedNotifications.length > 0){
        document.getElementById("easyNotificationJSStagedNotifications").style.bottom = "3%";
    } if (easyNotificationJSStagedNotifications == 0){
        document.getElementById("easyNotificationJSStagedNotifications").style.bottom = "-9%";
    }
}, 100);

class easyNotificationsJS{
    static showSmallNotification(icon, message, duration, type){
        if (!easyNotificationJSShowingNotification){
            easyNotificationJSShowingNotification = true;
            let notification_div = document.getElementById("easyNotificationJSSmall_notification");
            let notification_icon = document.getElementById("easyNotificationJSSmall_notification_icon");
            let notification_message = document.getElementById("easyNotificationJSSmall_notification_text");
            notification_icon.innerHTML = `<h2>${icon}</h2>`;
            notification_message.innerHTML = `<h2>${message}</h2>`;
            notification_div.style.top = "80%";
            notification_icon.style.transition = "";
            notification_icon.style.marginLeft = "24px";
            notification_icon.style.position = "fixed";
            switch (type){
                case "error":
                    setTimeout(()=>{
                        notification_div.style.background = "rgb(255, 26, 26)";
                        notification_div.style.width = "80%";
                        notification_icon.style.textAlign = "left";
                        notification_icon.style.marginLeft = "24px";
                        setTimeout(()=>{
                            notification_div.style.display = "inline-flex";
                            notification_message.style.opacity = "1";
                            setTimeout(()=>{
                                notification_message.style.opacity = "0";
                                setTimeout(()=>{
                                    notification_div.style.width = "72px";
                                    notification_div.style.background = "rgb(30, 30, 30)";
                                    notification_div.style.display = "block";
                                    notification_icon.style.marginLeft = "24px";
                                    setTimeout(()=>{
                                        notification_div.style.top = "120%";
                                        setTimeout(() => {
                                            notification_icon.style.marginLeft = "24px";
                                            easyNotificationJSShowingNotification = false;
                                        }, 500);
                                    },500);
                                },350);
                            }, duration * 1000);
                        },1000);
                    },500);
                    break;
                case "success":
                    setTimeout(()=>{
                        notification_div.style.background = "rgb(0, 102, 0)";
                        notification_div.style.width = "80%";
                        notification_icon.style.textAlign = "left";
                        notification_icon.style.marginLeft = "24px";
                        setTimeout(()=>{
                            notification_div.style.display = "inline-flex";
                            notification_message.style.opacity = "1";
                            setTimeout(()=>{
                                notification_message.style.opacity = "0";
                                setTimeout(()=>{
                                    notification_div.style.width = "72px";
                                    notification_div.style.background = "rgb(30, 30, 30)";
                                    notification_div.style.display = "block";
                                    notification_icon.style.marginLeft = "24px";
                                    setTimeout(()=>{
                                        notification_div.style.top = "120%";
                                        setTimeout(() => {
                                            notification_icon.style.marginLeft = "24px";
                                            easyNotificationJSShowingNotification = false;
                                        }, 500);
                                    },500);
                                },350);
                            }, duration * 1000);
                        },1000);
                    },500);
                    break;
                case "info":
                    setTimeout(()=>{
                        notification_div.style.background = "rgb(0, 82, 204)";
                        notification_div.style.width = "80%";
                        notification_icon.style.textAlign = "left";
                        notification_icon.style.marginLeft = "24px";
                        setTimeout(()=>{
                            notification_div.style.display = "inline-flex";
                            notification_message.style.opacity = "1";
                            setTimeout(()=>{
                                notification_message.style.opacity = "0";
                                setTimeout(()=>{
                                    notification_div.style.width = "72px";
                                    notification_div.style.background = "rgb(30, 30, 30)";
                                    notification_div.style.display = "block";
                                    notification_icon.style.marginLeft = "24px";
                                    setTimeout(()=>{
                                        notification_div.style.top = "120%";
                                        setTimeout(() => {
                                            notification_icon.style.marginLeft = "24px";
                                            easyNotificationJSShowingNotification = false;
                                        }, 500);
                                    },500);
                                },350);
                            }, duration * 1000);
                        },1000);
                    },500);
                    break;
                case "warn":
                    setTimeout(()=>{
                        notification_div.style.background = "rgb(237, 194, 29)";
                        notification_div.style.width = "80%";
                        notification_icon.style.textAlign = "left";
                        notification_icon.style.marginLeft = "24px";
                        setTimeout(()=>{
                            notification_div.style.display = "inline-flex";
                            notification_message.style.opacity = "1";
                            setTimeout(()=>{
                                notification_message.style.opacity = "0";
                                setTimeout(()=>{
                                    notification_div.style.width = "72px";
                                    notification_div.style.background = "rgb(30, 30, 30)";
                                    notification_div.style.display = "block";
                                    notification_icon.style.marginLeft = "24px";
                                    setTimeout(()=>{
                                        notification_div.style.top = "120%";
                                        setTimeout(() => {
                                            notification_icon.style.marginLeft = "24px";
                                            easyNotificationJSShowingNotification = false;
                                        }, 500);
                                    },500);
                                },350);
                            }, duration * 1000);
                        },1000);
                    },500);
                    break;
                case "stream":
                    notification_icon.innerHTML = `<h2><i class="fa-solid fa-circle liveNotificationDot" style="color: red;"></i></h2>`;
                    setTimeout(()=>{
                        notification_div.style.background = "rgb(48, 48, 48)";
                        notification_div.style.width = "80%";
                        notification_icon.style.textAlign = "left";
                        notification_icon.style.marginLeft = "24px";
                        setTimeout(()=>{
                            notification_div.style.display = "inline-flex";
                            notification_message.style.opacity = "1";
                            setTimeout(()=>{
                                notification_message.style.opacity = "0";
                                setTimeout(()=>{
                                    notification_div.style.width = "72px";
                                    notification_div.style.background = "rgb(30, 30, 30)";
                                    notification_div.style.display = "block";
                                    notification_icon.style.marginLeft = "24px";
                                    setTimeout(()=>{
                                        notification_div.style.top = "120%";
                                        setTimeout(() => {
                                            notification_icon.style.marginLeft = "24px";
                                            easyNotificationJSShowingNotification = false;
                                        }, 500);
                                    },500);
                                },350);
                            }, duration * 1000);
                        },1000);
                    },500);
                    break;
            }
        } else {
            easyNotificationJSStagedNotifications.push({id:Math.random()*100000000000000000,icon:icon,message:message,duration:duration,type:type});
        }
    }
}