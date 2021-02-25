<div>
    <img src="image/background.jpg"/>
    <div class="overlay"></div>
</div>

<style>
    img{
        position: fixed;
        top: 0;
        left: 0;
        width:  100vw;
        height: 100vh;
        object-fit: cover;
        z-index: -2;
    }
    .overlay{
        position: fixed;
        top: 0;
        left: 0;
        width:  100vw;
        height: 100vh;
        background-color: rgb(100, 150, 163);
        opacity: .5;
        z-index: -1;
    }
</style>