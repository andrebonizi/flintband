<script>
    import {fly} from 'svelte/transition';
</script>

<div in:fly="{{ x: 200, duration: 2000 }}" class="container">
    <div>
        <div class="title">Email:</div>
        <p>
            <a href="mailto:flintbrisbane@gmai.com">flintbrisbane@gmail.com</a>

        </p>
        <div class="title">Telephones:</div>
        <p>
            +61 0410 391 913<br>
            +61 0490 116 835<br>

        </p>
        <div class="title">Smoke signals:</div><br>
        <img src="image/smokesignals.png" alt="smoke signals" />
    </div>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        padding: 20px 20px;
    }
    p{
        font-size: 1.5rem;
        line-height: 1.5rem;
        font-weight: normal;
    }
    img{
        width: 100%;
    }
</style>