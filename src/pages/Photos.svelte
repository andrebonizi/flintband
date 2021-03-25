<script>
    import { fly, fade } from 'svelte/transition';

    export let mobile;

    let path = "image/photos/";
    let photos = [
        "1.jpg", "2.jpg", "3.jpg",
        "4.jpg", "5.jpg", "6.jpg",
        "7.jpg", "8.jpg", "9.jpg",
    ];
    $: left = 0;

    let imgWidth = mobile ? 300 : 600;

    function moveRight(){
        left += imgWidth;
        loop();
    }
    function moveLeft(){
        left -= imgWidth;
        loop();
    }

    function loop(){
        if(left > 0){
            left = -imgWidth*8;
        }
        if(left < -imgWidth*8){
            left = 0;
        }
    }
</script>

<div in:fly="{{ x: 200, duration: 2000 }}" class="{mobile? "container-mobile" : "container-desk"}">
    <p>PHOTOS</p>
    <hr />
    <div class="arrow left"  on:click={moveRight}></div>
    <div class="carousel" style="--imgWidth: {imgWidth}px">
        <div class="items" style="transform: translateX({left}px);">
            {#each photos as photo}
                <img width={imgWidth} src="{path}{photo}" alt="flint band picture {photo}" />
            {/each}
        </div>
    </div>
    <div class="arrow right" on:click={moveLeft}></div>
</div>

<style>
    .container-desk{
        position: relative;
    }
    .container-mobile{
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .carousel{
        width: var(--imgWidth);
        overflow: hidden;
        display: flex;
        border-radius: 20px;
    }
    .items{
        display: flex;
        flex-direction: row;
        left: var(--left);
        transition: 500ms;
    }
    .arrow{
        position: absolute;
        top: 45%;
        cursor: pointer;
        z-index: 2;
    }
    .left{
        left: 0;
        width: 50px;
        height: 50px;
        border-left: 5px solid white;
        border-bottom: 5px solid white;
        transform: rotateZ(45deg);
    }
    .right{
        right: 0;
        width: 50px;
        height: 50px;
        border-right: 5px solid white;
        border-bottom: 5px solid white;
        transform: rotateZ(-45deg);
    }
    
    p{
        font-size: 1.5rem;
    }
</style>