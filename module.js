function mediaNotif(){
  document.body.insertAdjacentHTML("afterbegin", `
<div class="notif">
  Press 'Change server' button <br>if media is unavailable.
</div>`);

    setTimeout(() => {
      $(".notif").remove();
    }, 7000);
}

export default mediaNotif;
