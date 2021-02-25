<script>
    export let videos = [];
</script>

<div>
    <p>
        Videos:
    </p>
    <hr />
    <div>
        {#each videos as video}
            <div>
                {video.name}
                <hr />
                {video.src}
            </div>

        {/each}
    </div>
</div>