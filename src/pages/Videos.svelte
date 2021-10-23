<script>
    import { fly } from 'svelte/transition';

    export let videos = [
        { name: "Colours - music video" , url: "https://www.youtube.com/embed/HzLb7Dl5bag" },
        { name: "Wide Awake - lyric video" , url: "https://www.youtube.com/embed/poSwKzsiSaM" },
        { name: "Wide Awake - live" , url: "https://www.youtube.com/embed/RjfYn8ebd1A" },
    ];
</script>

<div in:fly="{{ x: 200, duration: 2000 }}">
    <p class="title">
        Videos:
    </p>
    <hr />
    <div class="container">
        {#each videos as video}
            <div class="video">
                <hr />
                <iframe 
                    src="{video.url}" 
                    title="{video.name}" 
                    frameborder="0" 
                    allow="
                        accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        {/each}
    </div>
</div>

<style>
    .title {
        text-align: center;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .video {
        min-width: fit-content;
    }

    @media (min-width: 800px) {
        .video iframe{
            min-width: 800px;
            min-height: 450px;
        }
    }
</style>