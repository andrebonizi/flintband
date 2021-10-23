<script>
    import { fly } from 'svelte/transition'; 

</script>

<div in:fly="{{ x: 200, duration: 2000 }}">
    <div class="content">
        <img src="media/home.jpg" alt="whole flint band together"/><br>
        <div class="flint">Flint.</div> is a Brisbane-based band taking rock for a ride on a roller coaster. 
        <br>
        Our sounds speaks for itself.

    </div>
</div>

<style>
    @font-face {
        font-family: 'Mistral';
        font-style: normal;
        font-weight: normal;
        src: local('Mistral'), url('/fonts/MISTRAL.woff') format('woff');
    }

    .content{
        text-align: center;
        font-size: 2rem;
        line-height: 50px;
        padding: 20px 30px;

    }
    img{
        width: 80%;
    }

    .flint{
        display: inline;
        font-family: 'Mistral';
        padding: 0;
        margin: 0;
        font-size: 3rem;
    }
</style>