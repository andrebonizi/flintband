<script>
    import {fly} from 'svelte/transition';
</script>

<div in:fly="{{ x: 200, duration: 2000 }}" class="container">
    <div>
        <p>
            <b>Email:</b><br>
            <a href="mailto:flintbrisbane@gmai.com">flintbrisbane@gmail.com</a>
        </p>
        <p>
            <b>Telephones:</b><br>
            +61 0410 391 913<br>
            +61 0490 116 835<br>
        </p>
        <p>
            <b>Smoke signals:</b><br>
            <img src="image/smokesignals.png" alt="smoke signals" />
        </p>
    </div>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
    }
    p{
        font-size: 1.5rem;
        line-height: 1.5rem;
        font-weight: normal;
    }
    b{
        text-decoration: underline;
        line-height: 3rem;
    }
    img{
        width: 100%;
    }
</style>