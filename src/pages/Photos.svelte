<script>
    import { fly } from 'svelte/transition';

    export let mobile;

    let path = "image/photos/";
    let photos = [ 
        
        "0.jpg", "10.jpg", "11.jpg", "12.jpg",
        "3.jpg", "4.jpg", "1.jpg", "2.jpg", 
        "5.jpg", "6.jpg", "7.jpg", "8.jpg", 
        "9.jpg", "13.jpg", "14.jpg", "15.jpg"
        
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
            left = -imgWidth*(photos.length-1);
        }
        if(left < -imgWidth*(photos.length-1)){
            left = 0;
        }
    }
</script>

<div in:fly="{{ x: 200, duration: 2000 }}" fade class="{mobile? "container-mobile" : "container-desk"}">
    <p class="title">Photos</p><hr />
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
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 70px;
    }
    .container-mobile{
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
        align-items: flex-start;
        left: var(--left);
        transition: 500ms;
    }
    .arrow{
        position: absolute;
        top: 50%;
        cursor: pointer;
        z-index: 2;
        
    }
    .left{
        left: 12px;
        width: 50px;
        height: 50px;
        border-left: 5px solid white;
        border-bottom: 5px solid white;
        transform: rotateZ(45deg);
        box-shadow: -5px 5px 5px black;
    }
    .right{
        right: 12px;
        width: 50px;
        height: 50px;
        border-right: 5px solid white;
        border-bottom: 5px solid white;
        transform: rotateZ(-45deg);
        box-shadow: 5px 5px 5px black;
    }
    img{
        object-fit: contain;
    }
</style>